import { SignJWT } from 'jose';
import { expect, test } from '@playwright/test';

const ORIGIN = 'http://127.0.0.1:8787';
const json = (data: unknown) => ({ data, headers: { Origin: ORIGIN } });

test.describe('API の安全性', () => {
  test('未認証のフレーズ操作は 401', async ({ request }) => {
    expect((await request.get('/api/phrases')).status()).toBe(401);
    expect((await request.post('/api/phrases', json({ source: 'a', result: 'b', dialect: 'osaka' }))).status()).toBe(401);
    expect((await request.patch('/api/phrases/x', json({ status: 1 }))).status()).toBe(401);
    expect((await request.delete('/api/phrases/x', { headers: { Origin: ORIGIN } })).status()).toBe(401);
  });

  test('別オリジンからの書き込みは 403', async ({ request }) => {
    const res = await request.post('/api/convert', {
      data: { text: 'こんにちは', dialect: 'osaka' },
      headers: { Origin: 'https://evil.example' },
    });
    expect(res.status()).toBe(403);
    const res2 = await request.post('/api/auth/logout', { headers: { 'Sec-Fetch-Site': 'cross-site' } });
    expect(res2.status()).toBe(403);
  });

  test('入力検証：500文字超・未知の方言・空文字は 400', async ({ request }) => {
    expect((await request.post('/api/convert', json({ text: 'あ'.repeat(501), dialect: 'osaka' }))).status()).toBe(400);
    expect((await request.post('/api/convert', json({ text: 'こんにちは', dialect: 'mars' }))).status()).toBe(400);
    expect((await request.post('/api/convert', json({ text: '   ', dialect: 'osaka' }))).status()).toBe(400);
    const ok = await request.post('/api/convert', json({ text: 'こんにちは', dialect: 'osaka' }));
    expect(ok.status()).toBe(200);
    expect(ok.headers()['content-type']).toContain('text/event-stream');
    const body = await ok.text();
    expect(body).toContain('data: ');
    expect(body.trim().endsWith('event: done\ndata: {}')).toBe(true);
  });

  test('偽造・改ざんした ID トークンは 401', async ({ request }) => {
    const forged = await new SignJWT({ sub: 'attacker', email: 'a@example.com', email_verified: true })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuer('https://namari.test/fake-google')
      .setAudience('test-client-id.apps.googleusercontent.com')
      .setExpirationTime('5m')
      .sign(new TextEncoder().encode('wrong-secret-wrong-secret-wrong-secret!!'));
    expect((await request.post('/api/auth/google', json({ credential: forged }))).status()).toBe(401);
    expect((await request.post('/api/auth/google', json({ credential: 'not.a.jwt' }))).status()).toBe(401);
    expect((await request.post('/api/auth/google', json({}))).status()).toBe(400);

    // 正規のテストトークンでも audience が違えば拒否
    const { credential } = await (await request.post('/api/test/credential', json({ sub: 'aud-check' }))).json();
    const [h, p, s] = credential.split('.');
    const payload = JSON.parse(Buffer.from(p, 'base64url').toString());
    payload.aud = 'other-client';
    const tampered = [h, Buffer.from(JSON.stringify(payload)).toString('base64url'), s].join('.');
    expect((await request.post('/api/auth/google', json({ credential: tampered }))).status()).toBe(401);
  });

  test('セッション Cookie は HttpOnly・SameSite=Lax、他人のフレーズは操作できない', async ({ playwright }) => {
    const make = async (sub: string) => {
      const ctx = await playwright.request.newContext({ baseURL: ORIGIN });
      const { credential } = await (await ctx.post('/api/test/credential', json({ sub }))).json();
      const login = await ctx.post('/api/auth/google', json({ credential }));
      expect(login.status()).toBe(200);
      const cookie = login.headers()['set-cookie'];
      expect(cookie).toMatch(/HttpOnly/i);
      expect(cookie).toMatch(/SameSite=Lax/i);
      return ctx;
    };
    const alice = await make(`alice-${Date.now()}`);
    const bob = await make(`bob-${Date.now()}`);
    const created = await alice.post('/api/phrases', json({ source: '元', result: '変換', dialect: 'osaka' }));
    expect(created.status()).toBe(201);
    const { phrase } = await created.json();
    expect((await bob.patch(`/api/phrases/${phrase.id}`, json({ status: 2 }))).status()).toBe(404);
    expect((await bob.delete(`/api/phrases/${phrase.id}`, { headers: { Origin: ORIGIN } })).status()).toBe(404);
    expect((await (await bob.get('/api/phrases')).json()).phrases).toHaveLength(0);
    expect((await alice.patch(`/api/phrases/${phrase.id}`, json({ status: 5 }))).status()).toBe(400);
    expect((await alice.patch(`/api/phrases/${phrase.id}`, json({ status: 2 }))).status()).toBe(200);
    await alice.dispose();
    await bob.dispose();
  });
});
