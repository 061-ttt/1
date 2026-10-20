export interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  AI?: Ai;
  AI_LIMITER?: RateLimit;
  AI_MODEL: string;
  AI_FALLBACK_MODEL: string;
  GOOGLE_CLIENT_ID: string;
  SESSION_SECRET?: string;
  /** "1" のときだけテスト用 ID トークンを受け付ける（localhost 限定） */
  TEST_MODE?: string;
}

export interface SessionUser {
  id: string;
  email: string;
  name: string;
  picture: string | null;
}

export type AppEnv = { Bindings: Env; Variables: { user: SessionUser | null } };
