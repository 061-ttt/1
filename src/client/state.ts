import { signal, computed, batch } from '@preact/signals';
import { DIALECT_MAP, DIALECTS } from '../shared/dialects';
import { api, ApiError, type Phrase, type User } from './api';
import { IS_STATIC } from './mode';
import { isRuleSupported } from '../shared/engine';

/** この版で選べる方言か（静的版は規則変換に対応した方言だけ） */
export const isAvailable = (id: string) => !!DIALECT_MAP[id] && (!IS_STATIC || isRuleSupported(id));

export const STATUS = [
  { label: '未着手', key: 'todo' },
  { label: '練習中', key: 'doing' },
  { label: 'マスター', key: 'done' },
] as const;

const store = {
  get<T>(k: string, fallback: T): T {
    try {
      const v = localStorage.getItem(k);
      return v ? (JSON.parse(v) as T) : fallback;
    } catch {
      return fallback;
    }
  },
  set(k: string, v: unknown) {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch {
      /* 保存できなくても動作は続ける */
    }
  },
};

export interface HistoryItem {
  dialect: string;
  source: string;
  result: string;
  at: number;
}

// --- 状態 ---
export const ready = signal(false);
export const config = signal<{ googleClientId: string | null; testMode: boolean }>({ googleClientId: null, testMode: false });
export const user = signal<User | null>(null);
/** フレーズ帳が使えるか（静的版はログインなしで端末内に保存） */
export const bookAvailable = computed(() => IS_STATIC || !!user.value);
export const tab = signal<'convert' | 'book'>('convert');
export const query = signal('');
export const searchOpen = signal(false);

const savedDialect = store.get<string>('nm:dialect', 'osaka');
export const dialectId = signal(isAvailable(savedDialect) ? savedDialect : 'osaka');
export const dialect = computed(() => DIALECT_MAP[dialectId.value] ?? DIALECTS[0]);
export const recentDialects = signal<string[]>(
  store.get<string[]>('nm:recentDialects', ['osaka', 'hakata', 'tsugaru', 'kyoto']).filter(isAvailable),
);

export const input = signal(store.get('nm:input', ''));
export const output = signal('');
export const outputDialect = signal<string | null>(null);
export const outputSource = signal('');
export const converting = signal(false);
export const convertError = signal<string | null>(null);
export const savedOutput = signal(false);

export const history = signal<HistoryItem[]>(store.get('nm:history', []));

export const phrases = signal<Phrase[]>([]);
export const phrasesLoaded = signal(false);
export const bookStatus = signal<0 | 1 | 2>(0);
export const counts = computed(() => {
  const c = [0, 0, 0];
  for (const p of phrases.value) c[p.status]++;
  return c as [number, number, number];
});

export const sheet = signal<null | 'account'>(null);
export const sheetReason = signal<string | null>(null);
export function openAccount(reason: string | null = null) {
  sheetReason.value = reason;
  sheet.value = 'account';
}

export interface Toast {
  id: number;
  text: string;
  action?: { label: string; run: () => void };
}
export const toast = signal<Toast | null>(null);
let toastTimer: ReturnType<typeof setTimeout> | undefined;
export function showToast(text: string, action?: Toast['action'], ms = 4000) {
  clearTimeout(toastTimer);
  toast.value = { id: Date.now(), text, action };
  toastTimer = setTimeout(() => (toast.value = null), ms);
}

export function haptic(ms = 8) {
  try {
    navigator.vibrate?.(ms);
  } catch {
    /* noop */
  }
}

/** View Transitions があれば使う */
export function transition(fn: () => void) {
  const d = document as Document & { startViewTransition?: (cb: () => void) => unknown };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (d.startViewTransition && !reduce) d.startViewTransition(() => batch(fn));
  else batch(fn);
}

// --- アクション ---
export function setInput(v: string) {
  input.value = v;
  store.set('nm:input', v);
}

export function chooseDialect(id: string) {
  if (!isAvailable(id)) return;
  dialectId.value = id;
  store.set('nm:dialect', id);
  const r = [id, ...recentDialects.value.filter((x) => x !== id)].slice(0, 8);
  recentDialects.value = r;
  store.set('nm:recentDialects', r);
}

let controller: AbortController | null = null;

export async function convert() {
  const text = input.value.trim();
  if (!text || converting.value) return;
  controller?.abort();
  controller = new AbortController();
  const id = dialectId.value;
  batch(() => {
    converting.value = true;
    convertError.value = null;
    output.value = '';
    outputDialect.value = id;
    outputSource.value = text;
    savedOutput.value = false;
  });
  try {
    await api.convert(text, id, (s) => (output.value += s), controller.signal);
    if (!output.value.trim()) throw new ApiError(502, 'empty');
    const h = [{ dialect: id, source: text, result: output.value, at: Date.now() }, ...history.value]
      .filter((x, i, arr) => arr.findIndex((y) => y.dialect === x.dialect && y.source === x.source) === i)
      .slice(0, 20);
    history.value = h;
    store.set('nm:history', h);
  } catch (e) {
    if ((e as Error).name === 'AbortError') return;
    const code = e instanceof ApiError ? e.code : 'network';
    convertError.value =
      code === 'rate_limited'
        ? '混み合っています。少し待ってから再試行してください'
        : code === 'too_long'
          ? '500文字以内で入力してください'
          : code === 'dict'
            ? '辞書を読み込めませんでした。通信状態を確認して再試行してください'
            : '変換できませんでした。再試行してください';
  } finally {
    converting.value = false;
  }
}

export async function loadPhrases() {
  if (!bookAvailable.value) return;
  try {
    const { phrases: list } = await api.phrases();
    phrases.value = list;
  } finally {
    phrasesLoaded.value = true;
  }
}

export async function saveOutput() {
  if (!bookAvailable.value) {
    openAccount('保存するにはログインしてください');
    return;
  }
  const d = outputDialect.value;
  if (!d || !output.value || savedOutput.value) return;
  try {
    const { phrase } = await api.addPhrase({ source: outputSource.value, result: output.value, dialect: d });
    phrases.value = [phrase, ...phrases.value];
    savedOutput.value = true;
    haptic(12);
    showToast('フレーズ帳に保存しました', {
      label: '開く',
      run: () =>
        transition(() => {
          bookStatus.value = 0;
          tab.value = 'book';
        }),
    });
  } catch (e) {
    showToast(e instanceof ApiError && e.code === 'limit_reached' ? '保存できる上限に達しました' : '保存できませんでした');
  }
}

export async function setPhraseStatus(id: string, status: 0 | 1 | 2) {
  const prev = phrases.value;
  const target = prev.find((p) => p.id === id);
  if (!target || target.status === status) return;
  phrases.value = prev.map((p) => (p.id === id ? { ...p, status, updated_at: Date.now() } : p));
  haptic(10);
  try {
    await api.setStatus(id, status);
    showToast(`「${STATUS[status].label}」に移動しました`, {
      label: '元に戻す',
      run: () => setPhraseStatus(id, target.status),
    });
  } catch {
    phrases.value = prev;
    showToast('更新できませんでした');
  }
}

export async function deletePhrase(id: string) {
  const prev = phrases.value;
  const target = prev.find((p) => p.id === id);
  if (!target) return;
  phrases.value = prev.filter((p) => p.id !== id);
  haptic(16);
  try {
    await api.remove(id);
    showToast('削除しました', {
      label: '元に戻す',
      run: async () => {
        try {
          await api.restore(id);
          phrases.value = [target, ...phrases.value.filter((p) => p.id !== id)].sort((a, b) => b.updated_at - a.updated_at);
        } catch {
          showToast('元に戻せませんでした');
        }
      },
    });
  } catch {
    phrases.value = prev;
    showToast('削除できませんでした');
  }
}

export async function loginWithCredential(credential: string) {
  const { user: u } = await api.login(credential);
  batch(() => {
    user.value = u;
    sheet.value = null;
  });
  phrasesLoaded.value = false;
  await loadPhrases();
  showToast(`${u.name} さんでログインしました`);
}

export async function logout() {
  await api.logout().catch(() => undefined);
  batch(() => {
    user.value = null;
    phrases.value = [];
    phrasesLoaded.value = false;
    sheet.value = null;
  });
  showToast('ログアウトしました');
}

export async function boot() {
  const [cfg, me] = await Promise.all([
    api.config().catch(() => ({ googleClientId: null, testMode: false })),
    api.me().catch(() => ({ user: null })),
  ]);
  batch(() => {
    config.value = cfg;
    user.value = me.user;
  });
  if (me.user || IS_STATIC) await loadPhrases().catch(() => undefined);
  ready.value = true;
}
