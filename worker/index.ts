import { Hono } from 'hono';
import { getCookie, setCookie, deleteCookie } from 'hono/cookie';
import { DIALECT_MAP } from '../src/shared/dialects';
import { convertStream, MAX_INPUT } from './ai';
import {
  createSession,
  isTestMode,
  readSession,
  SESSION_COOKIE,
  sessionCookieOptions,
  signTestCredential,
  verifyGoogleCredential,
} from './auth';
import type { AppEnv } from './env';

const MAX_PHRASES = 500;
const app = new Hono<AppEnv>().basePath('/api');

// --- 共通: セキュリティヘッダ・CSRF・セッション ---
app.use('*', async (c, next) => {
  const url = new URL(c.req.url);
  if (!['GET', 'HEAD', 'OPTIONS'].includes(c.req.method)) {
    const origin = c.req.header('Origin');
    const site = c.req.header('Sec-Fetch-Site');
    if (origin ? origin !== url.origin : site !== undefined && site !== 'same-origin') {
      return c.json({ error: 'forbidden_origin' }, 403);
    }
  }
  c.set('user', await readSession(c.env, getCookie(c, SESSION_COOKIE)));
  await next();
  c.header('Cache-Control', 'no-store');
  c.header('X-Content-Type-Options', 'nosniff');
});

const requireUser = (c: any) => {
  const user = c.get('user');
  if (!user) return null;
  return user as NonNullable<AppEnv['Variables']['user']>;
};

// --- 設定・認証 ---
app.get('/config', (c) =>
  c.json({ googleClientId: c.env.GOOGLE_CLIENT_ID || null, testMode: isTestMode(c.env, new URL(c.req.url)) }),
);

app.get('/me', (c) => c.json({ user: c.get('user') }));

app.post('/auth/google', async (c) => {
  const body = await c.req.json<{ credential?: string }>().catch(() => ({}) as { credential?: string });
  if (!body.credential || typeof body.credential !== 'string' || body.credential.length > 4096) {
    return c.json({ error: 'invalid_request' }, 400);
  }
  const url = new URL(c.req.url);
  let user;
  try {
    user = await verifyGoogleCredential(c.env, url, body.credential);
  } catch {
    return c.json({ error: 'invalid_credential' }, 401);
  }
  const now = Date.now();
  await c.env.DB.prepare(
    `INSERT INTO users (id, email, name, picture, created_at, last_login_at) VALUES (?1, ?2, ?3, ?4, ?5, ?5)
     ON CONFLICT(id) DO UPDATE SET email=?2, name=?3, picture=?4, last_login_at=?5`,
  )
    .bind(user.id, user.email, user.name, user.picture, now)
    .run();
  setCookie(c, SESSION_COOKIE, await createSession(c.env, user), sessionCookieOptions(url.protocol === 'https:'));
  return c.json({ user });
});

app.post('/auth/logout', (c) => {
  deleteCookie(c, SESSION_COOKIE, { path: '/' });
  return c.json({ ok: true });
});

// テスト専用: 偽 Google ID トークン（TEST_MODE かつ localhost 以外では 404）
app.post('/test/credential', async (c) => {
  if (!isTestMode(c.env, new URL(c.req.url))) return c.notFound();
  const body = await c.req.json<{ sub?: string; email?: string; name?: string }>().catch(() => ({}) as any);
  const credential = await signTestCredential(c.env, {
    sub: body.sub || 'test-user-1',
    email: body.email || 'tester@example.com',
    name: body.name || 'テスト太郎',
  });
  return c.json({ credential });
});

// --- 変換（ストリーミング） ---
app.post('/convert', async (c) => {
  const body = await c.req.json<{ text?: string; dialect?: string }>().catch(() => ({}) as any);
  const text = typeof body.text === 'string' ? body.text.trim() : '';
  const dialect = DIALECT_MAP[body.dialect ?? ''];
  if (!text || !dialect) return c.json({ error: 'invalid_request' }, 400);
  if (Array.from(text).length > MAX_INPUT) return c.json({ error: 'too_long', max: MAX_INPUT }, 400);

  if (c.env.AI_LIMITER) {
    const key = c.get('user')?.id ?? c.req.header('CF-Connecting-IP') ?? 'anon';
    const { success } = await c.env.AI_LIMITER.limit({ key });
    if (!success) return c.json({ error: 'rate_limited' }, 429);
  }
  try {
    const stream = await convertStream(c.env, dialect, text);
    // text/plain だと圧縮でバッファされ逐次表示できないため、SSE で返す
    const enc = new TextEncoder();
    const dec = new TextDecoder();
    const sse = stream.pipeThrough(
      new TransformStream<Uint8Array, Uint8Array>({
        transform(chunk, controller) {
          const t = dec.decode(chunk, { stream: true });
          if (t) controller.enqueue(enc.encode(`data: ${JSON.stringify(t)}\n\n`));
        },
        flush(controller) {
          const t = dec.decode();
          if (t) controller.enqueue(enc.encode(`data: ${JSON.stringify(t)}\n\n`));
          controller.enqueue(enc.encode('event: done\ndata: {}\n\n'));
        },
      }),
    );
    return new Response(sse, {
      headers: {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-store',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (e) {
    console.error('convert failed', e);
    return c.json({ error: 'ai_unavailable' }, 503);
  }
});

// --- フレーズ帳 ---
type PhraseRow = {
  id: string;
  dialect: string;
  source: string;
  result: string;
  status: number;
  created_at: number;
  updated_at: number;
};

app.get('/phrases', async (c) => {
  const user = requireUser(c);
  if (!user) return c.json({ error: 'unauthorized' }, 401);
  const { results } = await c.env.DB.prepare(
    'SELECT id, dialect, source, result, status, created_at, updated_at FROM phrases WHERE user_id = ? AND deleted_at IS NULL ORDER BY updated_at DESC LIMIT ?',
  )
    .bind(user.id, MAX_PHRASES)
    .all<PhraseRow>();
  return c.json({ phrases: results });
});

app.post('/phrases', async (c) => {
  const user = requireUser(c);
  if (!user) return c.json({ error: 'unauthorized' }, 401);
  const body = await c.req.json<{ source?: string; result?: string; dialect?: string }>().catch(() => ({}) as any);
  const source = typeof body.source === 'string' ? body.source.trim() : '';
  const result = typeof body.result === 'string' ? body.result.trim() : '';
  if (!source || !result || !DIALECT_MAP[body.dialect ?? '']) return c.json({ error: 'invalid_request' }, 400);
  if (Array.from(source).length > MAX_INPUT || Array.from(result).length > MAX_INPUT * 3) {
    return c.json({ error: 'too_long' }, 400);
  }
  const count = await c.env.DB.prepare('SELECT COUNT(*) AS n FROM phrases WHERE user_id = ? AND deleted_at IS NULL')
    .bind(user.id)
    .first<{ n: number }>();
  if ((count?.n ?? 0) >= MAX_PHRASES) return c.json({ error: 'limit_reached' }, 409);
  const now = Date.now();
  const row: PhraseRow = {
    id: crypto.randomUUID(),
    dialect: body.dialect!,
    source,
    result,
    status: 0,
    created_at: now,
    updated_at: now,
  };
  await c.env.DB.prepare(
    'INSERT INTO phrases (id, user_id, dialect, source, result, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, 0, ?, ?)',
  )
    .bind(row.id, user.id, row.dialect, row.source, row.result, now, now)
    .run();
  return c.json({ phrase: row }, 201);
});

app.patch('/phrases/:id', async (c) => {
  const user = requireUser(c);
  if (!user) return c.json({ error: 'unauthorized' }, 401);
  const body = await c.req.json<{ status?: number }>().catch(() => ({}) as any);
  if (![0, 1, 2].includes(body.status as number)) return c.json({ error: 'invalid_request' }, 400);
  const res = await c.env.DB.prepare(
    'UPDATE phrases SET status = ?, updated_at = ? WHERE id = ? AND user_id = ? AND deleted_at IS NULL',
  )
    .bind(body.status, Date.now(), c.req.param('id'), user.id)
    .run();
  if (!res.meta.changes) return c.json({ error: 'not_found' }, 404);
  return c.json({ ok: true });
});

app.delete('/phrases/:id', async (c) => {
  const user = requireUser(c);
  if (!user) return c.json({ error: 'unauthorized' }, 401);
  const res = await c.env.DB.prepare('UPDATE phrases SET deleted_at = ? WHERE id = ? AND user_id = ? AND deleted_at IS NULL')
    .bind(Date.now(), c.req.param('id'), user.id)
    .run();
  if (!res.meta.changes) return c.json({ error: 'not_found' }, 404);
  return c.json({ ok: true });
});

app.post('/phrases/:id/restore', async (c) => {
  const user = requireUser(c);
  if (!user) return c.json({ error: 'unauthorized' }, 401);
  const res = await c.env.DB.prepare('UPDATE phrases SET deleted_at = NULL WHERE id = ? AND user_id = ? AND deleted_at IS NOT NULL')
    .bind(c.req.param('id'), user.id)
    .run();
  if (!res.meta.changes) return c.json({ error: 'not_found' }, 404);
  return c.json({ ok: true });
});

app.onError((err, c) => {
  console.error(err);
  return c.json({ error: 'internal_error' }, 500);
});

app.notFound((c) => c.json({ error: 'not_found' }, 404));

export default app;
