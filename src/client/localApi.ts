import { DIALECT_MAP } from '../shared/dialects';
import { dialectConvert, isRuleSupported } from '../shared/engine';
import { ApiError, type Phrase } from './api';
import { getTokenizer } from './tokenizer';

/** 静的版：フレーズ帳を端末内（localStorage）に保存し、変換はルールで行う */
const KEY = 'nm:localPhrases';
const TRASH = 'nm:localTrash';

const read = (k: string): Phrase[] => {
  try {
    return JSON.parse(localStorage.getItem(k) || '[]') as Phrase[];
  } catch {
    return [];
  }
};
const write = (k: string, v: Phrase[]) => {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch {
    /* 保存できなくても画面上は動かす */
  }
};
const uid = () =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const localApi = {
  async phrases() {
    return { phrases: read(KEY).sort((a, b) => b.updated_at - a.updated_at) };
  },
  async addPhrase(p: { source: string; result: string; dialect: string }) {
    const now = Date.now();
    const phrase: Phrase = { id: uid(), ...p, status: 0, created_at: now, updated_at: now };
    write(KEY, [phrase, ...read(KEY)].slice(0, 500));
    return { phrase };
  },
  async setStatus(id: string, status: number) {
    write(KEY, read(KEY).map((p) => (p.id === id ? { ...p, status: status as 0 | 1 | 2, updated_at: Date.now() } : p)));
    return { ok: true as const };
  },
  async remove(id: string) {
    const list = read(KEY);
    const target = list.find((p) => p.id === id);
    write(KEY, list.filter((p) => p.id !== id));
    if (target) write(TRASH, [target, ...read(TRASH)].slice(0, 20));
    return { ok: true as const };
  },
  async restore(id: string) {
    const trash = read(TRASH);
    const target = trash.find((p) => p.id === id);
    if (target) {
      write(KEY, [target, ...read(KEY)]);
      write(TRASH, trash.filter((p) => p.id !== id));
    }
    return { ok: true as const };
  },
  /** 変換結果を 2 文字ずつ流してストリーミング表示を再現する */
  async convert(text: string, dialect: string, onChunk: (s: string) => void, signal?: AbortSignal) {
    if (!DIALECT_MAP[dialect] || !isRuleSupported(dialect)) throw new ApiError(400, 'unsupported');
    let tokenize;
    try {
      tokenize = await getTokenizer();
    } catch {
      throw new ApiError(503, 'dict');
    }
    if (signal?.aborted) throw new DOMException('aborted', 'AbortError');
    const chars = Array.from(dialectConvert(tokenize, dialect, text));
    for (let i = 0; i < chars.length; i += 2) {
      if (signal?.aborted) throw new DOMException('aborted', 'AbortError');
      onChunk(chars.slice(i, i + 2).join(''));
      await wait(22);
    }
  },
};
