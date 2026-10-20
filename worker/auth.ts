import { createRemoteJWKSet, jwtVerify, SignJWT, type JWTPayload } from 'jose';
import type { Env, SessionUser } from './env';

const GOOGLE_JWKS = createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs'));
const GOOGLE_ISSUERS = ['https://accounts.google.com', 'accounts.google.com'];
export const TEST_ISSUER = 'https://namari.test/fake-google';
export const SESSION_COOKIE = 'nm_session';
const SESSION_TTL = 60 * 60 * 24 * 30;

const enc = new TextEncoder();

export function isTestMode(env: Env, url: URL): boolean {
  // TEST_MODE は本番設定に存在しない。さらに localhost 以外では絶対に有効にしない
  return env.TEST_MODE === '1' && (url.hostname === '127.0.0.1' || url.hostname === 'localhost');
}

function sessionKey(env: Env): Uint8Array {
  const secret = env.SESSION_SECRET;
  if (!secret || secret.length < 32) throw new Error('SESSION_SECRET is not configured');
  return enc.encode(secret);
}

/** Google の ID トークンを検証してユーザー情報を返す */
export async function verifyGoogleCredential(env: Env, url: URL, credential: string): Promise<SessionUser> {
  if (!env.GOOGLE_CLIENT_ID) throw new Error('GOOGLE_CLIENT_ID is not configured');
  let payload: JWTPayload;
  if (isTestMode(env, url)) {
    ({ payload } = await jwtVerify(credential, sessionKey(env), {
      issuer: TEST_ISSUER,
      audience: env.GOOGLE_CLIENT_ID,
    }));
  } else {
    ({ payload } = await jwtVerify(credential, GOOGLE_JWKS, {
      issuer: GOOGLE_ISSUERS,
      audience: env.GOOGLE_CLIENT_ID,
    }));
  }
  const p = payload as JWTPayload & { email?: string; email_verified?: boolean; name?: string; picture?: string };
  if (!p.sub || !p.email || p.email_verified === false) throw new Error('email not verified');
  return {
    id: p.sub,
    email: p.email,
    name: (p.name || p.email.split('@')[0]).slice(0, 80),
    picture: p.picture && p.picture.startsWith('https://') ? p.picture : null,
  };
}

/** テスト専用：偽 Google ID トークンを発行（TEST_MODE かつ localhost のみ） */
export async function signTestCredential(env: Env, claims: { sub: string; email: string; name: string }) {
  return new SignJWT({ ...claims, email_verified: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuer(TEST_ISSUER)
    .setAudience(env.GOOGLE_CLIENT_ID)
    .setIssuedAt()
    .setExpirationTime('5m')
    .sign(sessionKey(env));
}

export async function createSession(env: Env, user: SessionUser): Promise<string> {
  return new SignJWT({ email: user.email, name: user.name, picture: user.picture })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(user.id)
    .setIssuer('namari')
    .setIssuedAt()
    .setExpirationTime(`${SESSION_TTL}s`)
    .sign(sessionKey(env));
}

export async function readSession(env: Env, token: string | undefined): Promise<SessionUser | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, sessionKey(env), { issuer: 'namari' });
    return {
      id: payload.sub!,
      email: String(payload.email),
      name: String(payload.name),
      picture: (payload.picture as string | null) ?? null,
    };
  } catch {
    return null;
  }
}

export const sessionCookieOptions = (secure: boolean) => ({
  httpOnly: true,
  secure,
  sameSite: 'Lax' as const,
  path: '/',
  maxAge: SESSION_TTL,
});
