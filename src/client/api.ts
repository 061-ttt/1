import { IS_STATIC } from './mode';
import { localApi } from './localApi';

export interface User {
  id: string;
  email: string;
  name: string;
  picture: string | null;
}

export interface Phrase {
  id: string;
  dialect: string;
  source: string;
  result: string;
  status: 0 | 1 | 2;
  created_at: number;
  updated_at: number;
}

export class ApiError extends Error {
  constructor(public status: number, public code: string) {
    super(code);
  }
}

async function req<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`/api${path}`, {
    ...init,
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json', ...(init.headers ?? {}) },
  });
  if (!res.ok) {
    const body = (await res.json().catch(() => ({ error: 'network' }))) as { error?: string };
    throw new ApiError(res.status, body.error ?? 'error');
  }
  return res.json() as Promise<T>;
}

const serverApi = {
  config: () => req<{ googleClientId: string | null; testMode: boolean }>('/config'),
  me: () => req<{ user: User | null }>('/me'),
  login: (credential: string) => req<{ user: User }>('/auth/google', { method: 'POST', body: JSON.stringify({ credential }) }),
  testCredential: () => {
    let sub: string | null = null;
    try {
      sub = localStorage.getItem('nm:testSub');
    } catch {
      /* noop */
    }
    return req<{ credential: string }>('/test/credential', { method: 'POST', body: JSON.stringify(sub ? { sub } : {}) });
  },
  logout: () => req<{ ok: true }>('/auth/logout', { method: 'POST', body: '{}' }),
  phrases: () => req<{ phrases: Phrase[] }>('/phrases'),
  addPhrase: (p: { source: string; result: string; dialect: string }) =>
    req<{ phrase: Phrase }>('/phrases', { method: 'POST', body: JSON.stringify(p) }),
  setStatus: (id: string, status: number) =>
    req<{ ok: true }>(`/phrases/${id}`, { method: 'PATCH', body: JSON.stringify({ status }) }),
  remove: (id: string) => req<{ ok: true }>(`/phrases/${id}`, { method: 'DELETE' }),
  restore: (id: string) => req<{ ok: true }>(`/phrases/${id}/restore`, { method: 'POST', body: '{}' }),

  /** 変換結果をストリームで受け取る */
  async convert(text: string, dialect: string, onChunk: (s: string) => void, signal?: AbortSignal) {
    const res = await fetch('/api/convert', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, dialect }),
      signal,
    });
    if (!res.ok || !res.body) {
      const body = (await res.json().catch(() => ({ error: 'network' }))) as { error?: string };
      throw new ApiError(res.status, body.error ?? 'error');
    }
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let finished = false;
    const handle = (block: string) => {
      let event = 'message';
      let data = '';
      for (const line of block.split('\n')) {
        if (line.startsWith('event:')) event = line.slice(6).trim();
        else if (line.startsWith('data:')) data += line.slice(5).trim();
      }
      if (event === 'done') finished = true;
      else if (data) onChunk(JSON.parse(data) as string);
    };
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      let idx: number;
      while ((idx = buffer.indexOf('\n\n')) !== -1) {
        handle(buffer.slice(0, idx));
        buffer = buffer.slice(idx + 2);
      }
    }
    if (buffer.trim()) handle(buffer);
    if (!finished) throw new ApiError(502, 'interrupted');
  },
};

export const api: typeof serverApi = IS_STATIC
  ? {
      ...serverApi,
      config: async () => ({ googleClientId: null, testMode: false }),
      me: async () => ({ user: null }),
      ...localApi,
    }
  : serverApi;
