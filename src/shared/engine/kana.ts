export const toHira = (s: string) => s.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));

const ROWS: Record<string, string> = {
  a: 'あかさたなはまやらわがざだばぱぁゃ',
  i: 'いきしちにひみりぎじぢびぴぃ',
  u: 'うくすつぬふむゆるぐずづぶぷぅゅっ',
  e: 'えけせてねへめれげぜでべぺぇ',
  o: 'おこそとのほもよろをごぞどぼぽぉょ',
};

/** かな 1 文字の母音（ん等は ''） */
export function vowelOf(ch: string): string {
  const h = toHira(ch);
  for (const [v, chars] of Object.entries(ROWS)) if (chars.includes(h)) return v;
  return '';
}

const GOJUON = [
  'あいうえお', 'かきくけこ', 'さしすせそ', 'たちつてと', 'なにぬねの', 'はひふへほ', 'まみむめも', 'やいゆえよ', 'らりるれろ', 'わいうえを',
  'がぎぐげご', 'ざじずぜぞ', 'だぢづでど', 'ばびぶべぼ', 'ぱぴぷぺぽ',
];

/** かな 1 文字を同じ行の別の段へ（例: か→こ） */
export function shiftRow(ch: string, to: 'a' | 'i' | 'u' | 'e' | 'o'): string {
  const h = toHira(ch);
  const idx = { a: 0, i: 1, u: 2, e: 3, o: 4 }[to];
  for (const row of GOJUON) {
    const p = row.indexOf(h);
    if (p !== -1) return row[idx];
  }
  return h;
}

/** モーラ数（小書き文字は前の文字と合わせて 1） */
export function moraCount(kana: string): number {
  return Array.from(toHira(kana)).filter((c) => !'ゃゅょぁぃぅぇぉ'.includes(c)).length;
}
