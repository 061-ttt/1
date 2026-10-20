import { shiftRow } from './kana';

/** 方言の動詞を、共通語側の活用形に合わせて活用させる */

export interface VerbSpec {
  base: string;
  ichidan: boolean;
}

export function parseVerb(spec: string): VerbSpec {
  const [base, kind] = spec.split('|');
  return { base, ichidan: kind === '1' };
}

/** 連用タ接続（音便形）の後の「て/た」が濁るか */
export function voicedTe(v: VerbSpec): boolean {
  if (v.ichidan) return false;
  return 'ぐぬぶむ'.includes(v.base.slice(-1));
}

/** kuromoji の活用形名 → 方言動詞の語形 */
export function conjugate(v: VerbSpec, cform: string, beforeTeTa: boolean): string | undefined {
  const { base } = v;
  const stem = base.slice(0, -1);
  const last = base.slice(-1);
  if (v.ichidan) {
    if (cform === '基本形' || cform === '体言接続') return base;
    if (cform === '未然形' || cform === '連用形' || cform === '連用タ接続') return stem;
    if (cform === '未然ウ接続') return `${stem}よ`;
    if (cform === '仮定形') return `${stem}れ`;
    if (cform.startsWith('命令')) return `${stem}ろ`;
    return undefined;
  }
  const row = (to: 'a' | 'i' | 'u' | 'e' | 'o') => stem + (last === 'う' && to === 'a' ? 'わ' : shiftRow(last, to));
  if (cform === '基本形' || cform === '体言接続') return base;
  if (cform === '未然形') return row('a');
  if (cform === '未然ウ接続') return row('o');
  if (cform === '仮定形' || cform.startsWith('命令')) return row('e');
  if (cform === '連用形' && !beforeTeTa) return row('i');
  if (cform === '連用形' || cform === '連用タ接続') {
    if (base === '行く') return `${stem}っ`;
    if (last === 'く' || last === 'ぐ') return `${stem}い`;
    if (last === 'す') return `${stem}し`;
    if ('つるう'.includes(last)) return `${stem}っ`;
    if ('ぬぶむ'.includes(last)) return `${stem}ん`;
  }
  return undefined;
}

/** 動詞の活用型（否定形の作り分けに使う） */
export const ctypeOf = (v: VerbSpec) => (v.ichidan ? '一段' : '五段');
