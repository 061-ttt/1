import { readFileSync } from 'node:fs';
import { beforeAll, describe, expect, it } from 'vitest';
import { DIALECTS } from '../../src/shared/dialects';
import { dialectConvert, isRuleSupported, isRyukyu, PROFILES, ryukyuMissing, type Tokenize } from '../../src/shared/engine';
import { nodeTokenizer } from '../support/tokenizer';
import { CORPUS } from './corpus';

let tk: Tokenize;
beforeAll(async () => {
  tk = await nodeTokenizer();
}, 60_000);
const cv = (id: string, s: string) => dialectConvert(tk, id, s);

const SUPPORTED = DIALECTS.filter((d) => isRuleSupported(d.id));
/** 日本語の方言（琉球諸語は別の検査） */
const MAINLAND = SUPPORTED.filter((d) => !isRyukyu(d.id));

describe('方言プロファイル', () => {
  it('全方言にプロファイルがある', () => {
    for (const d of DIALECTS) expect(PROFILES[d.id], d.id).toBeDefined();
  });
  it('八丈方言は規則変換の対象外（静的版では選べない）', () => {
    expect(isRuleSupported('hachijo')).toBe(false);
    expect(cv('hachijo', '今日はとても暑いですね。')).toBe('今日はとても暑いですね。');
  });
  it('琉球諸語（沖縄語・宮古語・八重山語）は文全体を訳す方式で対応する', () => {
    for (const id of ['okinawa', 'miyako', 'yaeyama']) {
      expect(isRuleSupported(id)).toBe(true);
      expect(isRyukyu(id)).toBe(true);
    }
    expect(isRyukyu('uchinaa')).toBe(false);
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
    ['hiroshima', 'そうだよ、だめだよ。', 'ほうじゃ、いけんよ。'],
    ['hiroshima', '大丈夫だよ。', '大丈夫じゃけえ。'],
    ['tosa', 'そうだよ、だめだよ。', 'そうや、いかんぜ。'],
    ['tsugaru', 'そうだよ、だめだよ。', 'んだよ、まいねよ。'],
    ['mie', '見ない。', '見やへん。'],
    ['mie', '先生が来ないから、帰ろう。', '先生が来ないから、帰ろう。'],
    ['fukushima', '大丈夫だよ。', '大丈夫だよ。'],
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
    ['sendai', 'そうだよ、だめだよ。', 'んだよ、だめだよ。'],
    ['sendai', 'いいよね。', 'いいっちゃ。'],
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
    // 語彙の拡充（まじ→ほんまに 等、活用つき）
    ['osaka', 'まじで暑い。', 'ほんまに暑い。'],
    ['osaka', 'たくさん買った。', 'ぎょうさんこうた。'],
    ['osaka', 'どうしたの？', 'どないしたん？'],
    ['osaka', 'ゴミを捨てた。', 'ゴミをほかした。'],
    ['osaka', '宿題をしなければならない。', '宿題をせなあかん。'],
    ['osaka', '雨じゃないよ。', '雨ちゃうで。'],
    ['osaka', 'それで、どうなったの？', 'ほんで、どないなったん？'],
    ['kyoto', '言っていた。', 'ゆうてた。'],
    ['hiroshima', 'たくさん買った。', 'えっとこうた。'],
    ['hiroshima', '宿題をしなければならない。', '宿題をせにゃいけん。'],
    ['okayama', '宿題をしなければならない。', '宿題をせにゃおえん。'],
    ['hakata', 'どうしたの？', 'どげんしたと？'],
    ['hakata', '大きい犬がいる。', 'ふとか犬がおる。'],
    ['hakata', '驚いた。', 'たまがった。'],
    ['kumamoto', 'どうしたの？', 'どぎゃんしたと？'],
    ['saga', '宿題をしなければならない。', '宿題をせんばらん。'],
    ['oita', 'しょうがないね。', 'しょんないね。'],
    ['nagoya', '久しぶりだね。', 'やっとかめだね。'],
    ['nagoya', '宿題をしなければならない。', '宿題をせなかん。'],
    ['mikawa', '早く行こう。', '早く行かまい。'],
    ['koshu', '早く行こう。', '早く行かざあ。'],
        ['aizu', '大丈夫？', 'さすけね？'],
    ['aizu', '暑いですね。', '暑いなし。'],
    ['sendai', 'かわいい猫だね。', 'めんこい猫だね。'],
    ['ibaraki', '宿題をしなければならない。', '宿題をしなきゃなんねえ。'],
    ['kawachi', '行くか？', '行くけ？'],
    // 独立監査の指摘（再発防止）
    ['osaka', '知らないの？', '知らへんの？'],
    ['hiroshima', '知らないの？', '知らんの？'],
    ['osaka', 'それでいいんだよ。', 'それでええんやで。'],
    ['kanazawa', 'ありがとうございます。', 'あんやと。'],
    ['hakata', 'かっこいいね。', 'かっこよかね。'],
    ['hakata', 'いい加減にしなさい。', 'いい加減にしんしゃい。'],
    ['aizu', '大丈夫だよ。', 'さすけねよ。'],
    ['gunma', '雨だから行かない。', '雨だけい行かねえ。'],
    ['tsugaru', '宿題をしなければならない。', '宿題をさねばまいね。'],
    ['tosa', 'それでいいんだよ。', 'それでえいがやき。'],
    ['oita', 'どうしたの？', 'どげえしたん？'],
    ['ojousama', '雨じゃないよ。', '雨ではありませんわよ。'],
    ['bushi', '彼は学生ではない。', '彼は学生ではござらぬ。'],
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
    for (const d of MAINLAND) expect(cv(d.id, 'この本を読んだ。'), d.id).toContain('読んだ');
  });
  it('依頼の「〜ないで」は否定形に変えない', () => {
    for (const d of MAINLAND) {
      if (d.region === 'キャラ') continue;
      expect(cv(d.id, '行かないで。'), d.id).toBe('行かないで。');
    }
  });
  it('「いる」を「いん」などの誤形にしない', () => {
    for (const d of MAINLAND) expect(cv(d.id, 'あの人はいないよ。'), d.id).not.toMatch(/いん[にでよ。]/);
  });
  it('同じ語尾を重ねない', () => {
    for (const d of MAINLAND)
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

describe('正解コーパス（全方言 × 76 文、目視レビュー済み）', () => {
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

describe('琉球諸語（文全体を訳せたときだけ訳す）', () => {
  const EXTRA = [
    '今日はとても暑いね', '私は先生です', 'これは何ですか', '沖縄に行きたい', '明日は雨だろう', '疲れたから、もう帰るね',
    'お茶を飲みますか？', 'どこに行くの？', '子どもが遊んでいる', '手紙を書いた', 'お酒は飲みません', 'ありがとう', 'ようこそ',
  ];
  // 出典（JLect・Wikipedia・沖縄語辞典など）で確かめ、独立した監査を通した期待値
  it.each([
    ['今日はとても暑いね', 'ちゅーや いっぺー あちさやー'],
    ['私は先生です', 'わんねー しんしー やいびーん'],
    ['これは何ですか', 'くれー ぬー やいびーが'],
    ['沖縄に行きたい', 'うちなーんかい いちぶさん'],
    ['本当にありがとうございます', 'じゅんに にふぇーでーびる'],
    ['どこに行くの？', 'まーんかい いちゅが？'],
    ['お茶を飲みますか？', 'ちゃ ぬまびーみ？'],
    ['雨が降っている', 'あみぬ ふとーん'],
    ['学校で勉強した', 'がっこーうてぃ びんちょー さん'],
    ['早く来てください', 'ふぇーく めんそーれ'],
    ['水を飲んでください', 'みじ ぬでぃくぃみそーれ'],
    ['行かなかった', 'いかんたん'],
    ['行かないの？', 'いかに？'],
    ['飲まなかった？', 'ぬまんてぃー？'],
    ['来た？', 'っちー？'],
    ['暑くない', 'あちこーねーん'],
    ['暑かったです', 'あちさいびたん'],
    ['先生じゃない', 'しんしーや あらん'],
    ['先生でした', 'しんしー やいびーたん'],
    ['行きましょう', 'いちゃびら'],
    ['待ちます', 'またびーん'],
    ['起きたい', 'うきーぶさん'],
    ['私が行く', 'わーが いちゅん'],
    ['私も行く', 'わんにん いちゅん'],
    ['それは私の本です', 'うれー わんぬ しむち やいびーん'],
    ['これの本', 'くりが しむち'],
    ['あの人は先生だった', 'あぬ っちょー しんしー やたん'],
    ['本を読んでいる人がいる。', 'しむち ゆどーる っちゅぬ をぅん。'],
    ['この花はきれいだ', 'くぬ はなー ちゅらさん'],
    ['これは小さい', 'くれー ぐまさん'],
    ['お酒は飲みません', 'さけー ぬまびらん'],
    ['はい、分かりました。', 'うー、わかやびたん。'],
    ['昨日、東京から帰りました', 'ちぬー、とーちょーから けーやびたん'],
    ['元気ですか？', 'ちゃーがんじゅーやいびーみ？'],
    ['ありがとうございました', 'にふぇーでーびたん'],
    ['こんにちは', 'ちゅーうがなびら'],
    ['いらっしゃいませ！', 'めんそーれ！'],
  ])('沖縄語: %s → %s', (src, want) => {
    expect(cv('okinawa', src)).toBe(want);
  });
  it('共通語と混ざった文を作らない（訳せたら漢字・共通語の語が残らない）', () => {
    for (const id of ['okinawa', 'miyako', 'yaeyama'])
      for (const s of [...CORPUS, ...EXTRA]) {
        const out = cv(id, s);
        if (out === s) continue;
        expect(out, `${id}: ${s}`).not.toMatch(/\p{Script=Han}/u);
        expect(ryukyuMissing(tk, id, s), `${id}: ${s}`).toBeNull();
      }
  });
  it('訳せないときは訳せなかった語を返す', () => {
    expect(ryukyuMissing(tk, 'okinawa', '疲れたから、もう帰るね')).toEqual(['疲れる']);
    expect(ryukyuMissing(tk, 'okinawa', '今日はとても暑いね')).toBeNull();
    expect(ryukyuMissing(tk, 'miyako', '今日はとても暑いね')).toEqual(['今日はとても暑いね']);
    expect(ryukyuMissing(tk, 'osaka', '今日はとても暑いね')).toBeNull();
  });
  it('宮古語・八重山語は確かめられた決まった挨拶だけを訳す', () => {
    expect(cv('miyako', 'ありがとう。')).toBe('たんでぃがーたんでぃ。');
    expect(cv('miyako', 'ようこそ！')).toBe('んみゃーち！');
    expect(cv('yaeyama', 'ありがとうございます')).toBe('みーふぁいゆー');
    expect(cv('yaeyama', 'いらっしゃいませ')).toBe('おーりとーり');
    expect(cv('yaeyama', '本当にありがとう')).toBe('本当にありがとう');
  });
});
