import { readFileSync } from 'node:fs';
import { beforeAll, describe, expect, it } from 'vitest';
import { DIALECTS } from '../../src/shared/dialects';
import { dialectConvert, isRuleSupported, PROFILES, type Tokenize } from '../../src/shared/engine';
import { nodeTokenizer } from '../support/tokenizer';
import { CORPUS } from './corpus';

let tk: Tokenize;
beforeAll(async () => {
  tk = await nodeTokenizer();
}, 60_000);
const cv = (id: string, s: string) => dialectConvert(tk, id, s);

const SUPPORTED = DIALECTS.filter((d) => isRuleSupported(d.id));

describe('方言プロファイル', () => {
  it('全方言にプロファイルがある', () => {
    for (const d of DIALECTS) expect(PROFILES[d.id], d.id).toBeDefined();
  });
  it('琉球諸語・八丈方言は規則変換の対象外（静的版では選べない）', () => {
    for (const id of ['okinawa', 'miyako', 'yaeyama', 'hachijo']) {
      expect(isRuleSupported(id)).toBe(false);
      expect(cv(id, '今日はとても暑いですね。')).toBe('今日はとても暑いですね。');
    }
  });
});

// 人の目で確認した期待値（文法的に正しいことを確認済み）
describe('期待どおりに変換される（厳密一致）', () => {
  it.each([
    // 大阪
    ['osaka', '今日はとても暑いですね。', '今日はめっちゃ暑いですなあ。'],
    ['osaka', '雨が降っているから、今日は行かない。', '雨が降ってるから、今日は行かへん。'],
    ['osaka', 'それは本当にいいね。', 'それはほんまにええなあ。'],
    ['osaka', 'まだ何も食べていない。', 'まだ何も食べてへん。'],
    ['osaka', 'そうだよ、だめだよ。', 'せやで、あかんで。'],
    ['osaka', 'どこに行くの？', 'どこに行くん？'],
    ['osaka', 'ありがとうございます。', 'おおきに。'],
    ['osaka', '明日は晴れるだろう。', '明日は晴れるやろ。'],
    ['osaka', '早く行こう。', 'はよ行こ。'],
    ['osaka', '昨日は勉強しなかった。', '昨日は勉強せえへんかった。'],
    ['osaka', '宿題を忘れてしまった。', '宿題を忘れてもうた。'],
    ['osaka', 'いいじゃない。', 'ええやん。'],
    ['osaka', '違うよ。', 'ちゃうで。'],
    ['osaka', '見ない。', '見いひん。'],
    ['osaka', '今日は来ない。', '今日はけえへん。'],
    // 京都
    ['kyoto', '今日はとても暑いですね。', '今日はえらい暑おすなあ。'],
    ['kyoto', '私は先生です。', '私は先生どす。'],
    ['kyoto', 'これを食べなさい。', 'これを食べよし。'],
    ['kyoto', '静かにしてください。', '静かにしておくれやす。'],
    ['kyoto', '雨だから、家にいる。', '雨やさかい、家にいる。'],
    // 広島
    ['hiroshima', '雨が降っているから、今日は行かない。', '雨が降っとるけえ、今日は行かん。'],
    ['hiroshima', 'そうだよ、だめだよ。', 'ほうじゃけえ、いけんよ。'],
    ['hiroshima', '明日は晴れるだろう。', '明日は晴れるじゃろう。'],
    ['hiroshima', 'これを食べなさい。', 'これを食べんさい。'],
    ['hiroshima', 'あの人はいないよ。', 'あの人はおらんよ。'],
    ['hiroshima', '静かにしてください。', '静かにしてつかあさい。'],
    // 博多
    ['hakata', 'どこに行くの？', 'どこに行くと？'],
    ['hakata', 'それは本当にいいね。', 'それは本当によかね。'],
    ['hakata', '雨だから、家にいる。', '雨やけん、家におる。'],
    ['hakata', 'それでいいんだよ。', 'それでよかとよ。'],
    ['hakata', 'お金がない。', 'お金がなか。'],
    ['hakata', 'これを食べなさい。', 'これを食べんしゃい。'],
    // 土佐
    ['tosa', 'どこに行くの？', 'どこに行くが？'],
    ['tosa', '雨だから、家にいる。', '雨やき、家におる。'],
    ['tosa', 'いいじゃない。', 'えいやいか。'],
    // 名古屋
    ['nagoya', '早く行こう。', 'はよ行こまい。'],
    ['nagoya', '雨だから、家にいる。', '雨だで、家におる。'],
    ['nagoya', 'これを食べなさい。', 'これを食べやあ。'],
    // 東北・北海道
    ['tsugaru', '昨日は勉強しなかった。', '昨日は勉強しねがった。'],
    ['tsugaru', '雨だから、家にいる。', '雨だはんで、家にいる。'],
    ['hokkaido', '早く行こう。', '早く行くべ。'],
    ['hokkaido', '疲れたよ。', 'こわいよ。'],
    ['sendai', 'そうだよ、だめだよ。', 'そうだっちゃ、だめだっちゃ。'],
    // 関東
    ['edo', '宿題を忘れてしまった。', '宿題を忘れちまった。'],
    ['edo', 'お金がない。', 'お金がねえ。'],
    ['ibaraki', '明日は晴れるだろう。', '明日は晴れるっぺ。'],
    // 東海・北陸
    ['mikawa', 'これを食べなさい。', 'これを食べりん。'],
    ['shizuoka', '雨だから、家にいる。', '雨だもんで、家にいる。'],
    ['kanazawa', 'これを食べなさい。', 'これを食べまっし。'],
    ['fukui', 'そうだよ、だめだよ。', 'ほやざ、あかんざ。'],
    // 九州南部
    ['satsuma', 'ありがとうございます。', 'あいがとさげもした。'],
    ['satsuma', 'そうだよ、だめだよ。', 'そうじゃっど、だめじゃっど。'],
    ['kumamoto', 'これを食べなさい。', 'これを食べなっせ。'],
    // キャラ口調
    ['ojousama', '私は先生です。', 'わたくしは先生ですわ。'],
    ['bushi', '私は先生です。', '拙者は先生でござる。'],
    ['bushi', 'まだ何も食べていない。', 'まだ何も食べておらぬ。'],
  ])('%s: %s → %s', (id, input, expected) => {
    expect(cv(id, input)).toBe(expected);
  });
});

describe('意味を変えない（安全側に倒す）', () => {
  it('過去の「だ」（読んだ）は変えない', () => {
    for (const d of SUPPORTED) expect(cv(d.id, 'この本を読んだ。'), d.id).toContain('読んだ');
  });
  it('依頼の「〜ないで」は否定形に変えない', () => {
    for (const d of SUPPORTED) {
      if (d.region === 'キャラ') continue;
      expect(cv(d.id, '行かないで。'), d.id).toBe('行かないで。');
    }
  });
  it('「いる」を「いん」などの誤形にしない', () => {
    for (const d of SUPPORTED) expect(cv(d.id, 'あの人はいないよ。'), d.id).not.toMatch(/いん[にでよ。]/);
  });
  it('同じ語尾を重ねない', () => {
    for (const d of SUPPORTED)
      for (const s of CORPUS) {
        const out = cv(d.id, s);
        expect(out, `${d.id}: ${s}`).not.toMatch(/(っちゃ|ばい|けえ|けん|やで|じゃ|ぜ|ざ|に|で|よ|ね|わ)\1[。！？]/);
        expect(out, `${d.id}: ${s}`).not.toMatch(/ござるでござる|ござるった|ありんすった|んん[。！？]/);
      }
  });
  it('句読点・疑問符・改行・数字・英字・URL を保つ', () => {
    const src = '2026年に東京へ行った。\n\nhttps://example.com を見て！\nABCはいいね？';
    for (const d of SUPPORTED) {
      if (d.id === 'neko') continue;
      const out = cv(d.id, src);
      expect(out.split('\n'), d.id).toHaveLength(4);
      expect(out, d.id).toContain('2026年');
      expect(out, d.id).toContain('https://example.com');
      expect(out, d.id).toContain('ABC');
      expect((out.match(/[。！？]/g) ?? []).length, d.id).toBe(3);
    }
  });
});

describe('正解コーパス（全方言 × 45 文、目視レビュー済み）', () => {
  const gold = JSON.parse(readFileSync('tests/unit/gold.json', 'utf8')) as Record<string, Record<string, string>>;
  it('コーパスと正解ファイルが一致している', () => {
    for (const d of SUPPORTED) {
      expect(Object.keys(gold[d.id] ?? {}), d.id).toEqual(CORPUS);
    }
  });
  for (const d of SUPPORTED) {
    it(`${d.name}`, () => {
      for (const s of CORPUS) expect(cv(d.id, s), s).toBe(gold[d.id][s]);
    });
  }
});
