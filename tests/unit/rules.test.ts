import { describe, expect, it } from 'vitest';
import { DIALECTS } from '../../src/shared/dialects';
import { ruleConvert, RULES } from '../../src/shared/rules';

describe('ルール変換（静的版）', () => {
  it('全方言にルールがある', () => {
    for (const d of DIALECTS) expect(RULES[d.id], d.id).toBeDefined();
  });
  it.each([
    ['osaka', '今日はとても暑いですね。', '今日はめっちゃ暑いなぁ。'],
    ['osaka', 'まだ食べていない。', 'まだ食べてへん。'],
    ['osaka', 'それはだめだよ。', 'それはあかんで。'],
    ['osaka', 'これは本当にいいですよ。', 'これはほんまにええで。'],
    ['kyoto', 'ありがとうございます。', 'おおきに。'],
    ['hiroshima', '雨が降っているから、行かない。', '雨が降っとるけぇ、行かん。'],
    ['hakata', 'どこに行くの？', 'どこに行くと？'],
    ['tosa', '本当にありがとう。', 'まっことありがとうぜよ。'],
    ['tsugaru', 'どこへ行くの？', 'どさ行くの？'],
    ['bushi', '私は行かない。', '拙者は行かぬでござる。'],
    ['ojousama', '今日はとても暑いですね。', '今日はとっても暑いですわね。'],
  ])('%s: %s → %s', (id, input, expected) => {
    expect(ruleConvert(id, input)).toBe(expected);
  });
  it('改行・空行・記号を保つ', () => {
    const out = ruleConvert('osaka', 'すごい！\n\nそうだね。');
    expect(out.split('\n')).toHaveLength(3);
    expect(out).toContain('！');
    expect(out.split('\n')[1]).toBe('');
  });
  it('全方言で例外を出さず、元の文を壊さない', () => {
    const inputs = ['', '。', 'こんにちは', 'a < b だ。', '明日は晴れるでしょう。', '何をしているの？\n行こう！'];
    for (const d of DIALECTS) for (const t of inputs) expect(typeof ruleConvert(d.id, t)).toBe('string');
  });
});
