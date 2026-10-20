import { signal } from '@preact/signals';
import { fromKuromoji, type Tokenize } from '../shared/engine';

/** 形態素解析辞書の読み込み状態 */
export const dictState = signal<'idle' | 'loading' | 'ready' | 'error'>('idle');

let pending: Promise<Tokenize> | null = null;

/** kuromoji を遅延読み込みする（約 18MB の辞書。初回のみ） */
export function getTokenizer(): Promise<Tokenize> {
  if (pending) return pending;
  dictState.value = 'loading';
  pending = import('kuromoji/build/kuromoji.js')
    .then((mod) => {
      const kuromoji = ((mod as { default?: unknown }).default ?? mod) as typeof import('kuromoji');
      return new Promise<Tokenize>((resolve, reject) => {
        // kuromoji は内部で path.join を使うため、ページからの相対パスで渡す
        kuromoji.builder({ dicPath: 'dict/' }).build((err, t) => {
          if (err || !t) reject(err ?? new Error('dict'));
          else resolve((s: string) => t.tokenize(s).map(fromKuromoji));
        });
      });
    })
    .then(
      (tk) => {
        dictState.value = 'ready';
        return tk;
      },
      (e) => {
        dictState.value = 'error';
        pending = null;
        throw e;
      },
    );
  return pending;
}
