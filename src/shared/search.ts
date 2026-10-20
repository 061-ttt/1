import { DIALECTS, REGIONS, type Dialect } from './dialects';

/** カタカナ→ひらがな、全角英数→半角、小文字化、空白除去 */
export function normalize(input: string): string {
  return input
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60))
    .replace(/\s+/g, '');
}

const ROMA: Record<string, string> = {
  kya: 'きゃ', kyu: 'きゅ', kyo: 'きょ', sha: 'しゃ', shu: 'しゅ', sho: 'しょ', sya: 'しゃ', syu: 'しゅ', syo: 'しょ',
  cha: 'ちゃ', chu: 'ちゅ', cho: 'ちょ', tya: 'ちゃ', tyu: 'ちゅ', tyo: 'ちょ', nya: 'にゃ', nyu: 'にゅ', nyo: 'にょ',
  hya: 'ひゃ', hyu: 'ひゅ', hyo: 'ひょ', mya: 'みゃ', myu: 'みゅ', myo: 'みょ', rya: 'りゃ', ryu: 'りゅ', ryo: 'りょ',
  gya: 'ぎゃ', gyu: 'ぎゅ', gyo: 'ぎょ', ja: 'じゃ', ju: 'じゅ', jo: 'じょ', jya: 'じゃ', jyu: 'じゅ', jyo: 'じょ',
  bya: 'びゃ', byu: 'びゅ', byo: 'びょ', pya: 'ぴゃ', pyu: 'ぴゅ', pyo: 'ぴょ',
  shi: 'し', chi: 'ち', tsu: 'つ', ji: 'じ', fu: 'ふ',
  ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ', sa: 'さ', si: 'し', su: 'す', se: 'せ', so: 'そ',
  ta: 'た', ti: 'ち', tu: 'つ', te: 'て', to: 'と', na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の',
  ha: 'は', hi: 'ひ', hu: 'ふ', he: 'へ', ho: 'ほ', ma: 'ま', mi: 'み', mu: 'む', me: 'め', mo: 'も',
  ya: 'や', yu: 'ゆ', yo: 'よ', ra: 'ら', ri: 'り', ru: 'る', re: 'れ', ro: 'ろ', wa: 'わ', wo: 'を',
  ga: 'が', gi: 'ぎ', gu: 'ぐ', ge: 'げ', go: 'ご', za: 'ざ', zi: 'じ', zu: 'ず', ze: 'ぜ', zo: 'ぞ',
  da: 'だ', di: 'ぢ', du: 'づ', de: 'で', do: 'ど', ba: 'ば', bi: 'び', bu: 'ぶ', be: 'べ', bo: 'ぼ',
  pa: 'ぱ', pi: 'ぴ', pu: 'ぷ', pe: 'ぺ', po: 'ぽ', a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お',
};

/** ローマ字→ひらがな（変換できない文字はそのまま） */
export function romajiToKana(input: string): string {
  let out = '';
  let i = 0;
  const s = input.toLowerCase();
  while (i < s.length) {
    const c = s[i];
    const next = s[i + 1];
    if (c === 'n' && (next === undefined || !/[aiueoy]/.test(next))) {
      out += 'ん';
      i += next === 'n' ? 2 : 1;
      continue;
    }
    if (next && c === next && /[bcdfghjklmpqrstvwxyz]/.test(c)) {
      out += 'っ';
      i += 1;
      continue;
    }
    let matched = false;
    for (const len of [3, 2, 1]) {
      const chunk = s.slice(i, i + len);
      if (ROMA[chunk]) {
        out += ROMA[chunk];
        i += len;
        matched = true;
        break;
      }
    }
    if (!matched) {
      out += c;
      i += 1;
    }
  }
  return out;
}

const SUFFIX = /(弁|べん|ben|語|ご|言葉|ことば|方言|ほうげん)$/;

interface Indexed {
  dialect: Dialect;
  keys: string[];
  regionKeys: string[];
}

const INDEX: Indexed[] = DIALECTS.map((dialect) => {
  const region = REGIONS.find((r) => r.name === dialect.region)!;
  const base = [dialect.name, dialect.kana, ...dialect.romaji.split(' '), ...dialect.area].map(normalize);
  const keys = Array.from(new Set(base.flatMap((k) => [k, k.replace(SUFFIX, '')]).filter(Boolean)));
  const regionKeys = [region.name, ...region.romaji.split(' '), ...region.alias].map(normalize);
  return { dialect, keys, regionKeys };
});

export interface DialectHit {
  dialect: Dialect;
  score: number;
}

function scoreKey(key: string, q: string): number {
  if (key === q) return 100;
  if (key.startsWith(q)) return 80 - Math.min(20, key.length - q.length);
  if (key.includes(q)) return 50;
  return 0;
}

export function searchDialects(query: string): DialectHit[] {
  const raw = normalize(query);
  if (!raw) return DIALECTS.map((dialect) => ({ dialect, score: 1 }));
  const variants = new Set([raw, raw.replace(SUFFIX, '') || raw]);
  if (/^[a-z]+$/.test(raw)) variants.add(romajiToKana(raw));
  const hits: DialectHit[] = [];
  for (const item of INDEX) {
    let best = 0;
    for (const q of variants) {
      for (const k of item.keys) best = Math.max(best, scoreKey(k, q));
      for (const k of item.regionKeys) {
        const s = scoreKey(k, q);
        if (s >= 50) best = Math.max(best, s - 10);
      }
    }
    if (best > 0) hits.push({ dialect: item.dialect, score: best });
  }
  return hits.sort((a, b) => b.score - a.score || DIALECTS.indexOf(a.dialect) - DIALECTS.indexOf(b.dialect));
}
