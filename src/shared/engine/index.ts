import { convertText, convertTokens } from './engine';
import { PROFILES } from './profiles';
import type { Tok, Tokenize } from './types';

export type { Tok, Tokenize } from './types';
export { isRuleSupported, PROFILES } from './profiles';

/** kuromoji の IpadicFeatures を Tok に変換 */
export function fromKuromoji(x: {
  surface_form: string; pos: string; pos_detail_1: string; conjugated_type: string; conjugated_form: string; basic_form: string; reading?: string;
}): Tok {
  return {
    s: x.surface_form, pos: x.pos, p1: x.pos_detail_1, ctype: x.conjugated_type, cform: x.conjugated_form,
    base: x.basic_form === '*' ? x.surface_form : x.basic_form, read: x.reading ?? x.surface_form,
  };
}

/** 共通語を方言に変換（非対応の方言・未知の ID はそのまま返す） */
export function dialectConvert(tokenize: Tokenize, dialectId: string, text: string): string {
  const P = PROFILES[dialectId];
  if (!P || P.unsupported) return text;
  return convertText(tokenize, P, text);
}

/**
 * 同じ文を複数の方言へ一度に変換する（形態素解析は 1 回だけ）。
 * 結果は方言ごとに dialectConvert と同じになる。
 */
export function dialectConvertMany(tokenize: Tokenize, ids: string[], text: string): Record<string, string> {
  const lines = text.split('\n').map((line) => {
    if (!line.trim()) return { line, toks: null as Tok[] | null, lead: '', trail: '' };
    return {
      line,
      toks: tokenize(line.trim()),
      lead: line.match(/^\s*/)?.[0] ?? '',
      trail: line.match(/\s*$/)?.[0] ?? '',
    };
  });
  const out: Record<string, string> = {};
  for (const id of ids) {
    const P = PROFILES[id];
    out[id] = !P || P.unsupported
      ? text
      : lines.map((l) => (l.toks ? l.lead + convertTokens(l.toks, P) + l.trail : l.line)).join('\n');
  }
  return out;
}
