/**
 * ルールベースの簡易方言変換（AI を使わない静的版で使用）。
 * 文末表現・接続助詞・否定・進行形・強調語・定番語彙を置き換える。
 */

export interface DialectRule {
  /** とても・すごく */
  very?: string;
  /** 名詞＋だ（文末） */
  copula?: string;
  /** 名詞＋です（文末）。未指定なら copula */
  desu?: string;
  /** 形容詞＋です（文末、助詞なし） */
  adjDesu?: string;
  /** 〜ます（文末） */
  masu?: string;
  /** 〜ません */
  negPolite?: string;
  /** 動詞未然形＋ない */
  neg?: string;
  /** しない */
  negSuru?: string;
  /** いない */
  negIru?: string;
  /** じゃない・ではない */
  copulaNeg?: string;
  /** 「〜ない」をすべて置き換える（関東・東北のねぇ等） */
  negAll?: boolean;
  /** だから・ですから（文末・読点前） */
  becauseFull?: string;
  /** 動詞＋から（文末・読点前） */
  becauseP?: string;
  /** ている */
  prog?: string;
  /** でいる */
  progD?: string;
  /** ていない */
  progNeg?: string;
  /** 形容詞＋です＋助詞でも adjDesu を残す（お嬢様言葉など） */
  adjDesuKeep?: boolean;
  /** 文末の「ね」 */
  ne?: string;
  /** 文末の「よ」 */
  yo?: string;
  /** 文末の「よね」 */
  yone?: string;
  /** でしょう・だろう */
  guess?: string;
  /** 疑問の「の？」 */
  q?: string;
  /** 平叙文の文末に添える語 */
  tail?: string;
  /** 語彙の置き換え（先に適用） */
  words?: [string, string][];
  /** 後処理 */
  post?: (s: string) => string;
}

const KANSAI: DialectRule = {
  very: 'めっちゃ', copula: 'や', adjDesu: 'わ', neg: 'へん', negSuru: 'せえへん', negIru: 'おらへん', copulaNeg: 'ちゃう',
  negPolite: 'まへん', becauseFull: 'やから', becauseP: 'から', prog: 'てる', progD: 'でる', progNeg: 'てへん',
  ne: 'なぁ', yo: 'で', yone: 'やんな', guess: 'やろ', q: 'ん', tail: 'で',
  words: [['本当に', 'ほんまに'], ['本当', 'ほんま'], ['だめだ', 'あかん'], ['だめ', 'あかん'], ['ダメ', 'あかん'], ['違う', 'ちゃう'], ['しまった', 'しもた']],
  post: (s) => s.replace(/(?<!わ)いい(?=[よねでなわやん]|$)/g, 'ええ'),
};

const CHUGOKU: DialectRule = {
  very: 'ぶち', copula: 'じゃ', adjDesu: 'のう', neg: 'ん', negSuru: 'せん', negIru: 'おらん', copulaNeg: 'じゃない',
  becauseFull: 'じゃけぇ', becauseP: 'けぇ', prog: 'とる', progD: 'どる', progNeg: 'とらん', ne: 'のう', yo: 'けぇ', yone: 'じゃろ', guess: 'じゃろ', q: 'ん', tail: 'けぇ',
};

const KYUSHU: DialectRule = {
  copula: 'や', adjDesu: 'ばい', neg: 'ん', negSuru: 'せん', negIru: 'おらん', copulaNeg: 'やない',
  becauseFull: 'やけん', becauseP: 'けん', prog: 'とる', progD: 'どる', progNeg: 'とらん', ne: 'ね', yo: 'ばい', yone: 'やろ', guess: 'やろ', q: 'と', tail: 'ばい',
};

const TOHOKU: DialectRule = {
  copula: 'だ', neg: 'ね', negSuru: 'しね', negIru: 'いね', progNeg: 'てね', guess: 'だべ', yo: 'べ', yone: 'だべ', ne: 'な', tail: 'べ',
  becauseFull: 'だがら', becauseP: 'がら',
};

const KANTO: DialectRule = { neg: 'ねぇ', negAll: true, guess: 'だべ', yone: 'だべ', tail: 'べ' };

const x = (...rules: DialectRule[]): DialectRule => {
  const out: DialectRule = {};
  for (const r of rules) {
    Object.assign(out, r, { words: [...(r.words ?? []), ...(out.words ?? [])] });
  }
  return out;
};

export const RULES: Record<string, DialectRule> = {
  // 北海道・東北
  hokkaido: { very: 'なまら', guess: 'っしょ', yone: 'っしょ', yo: 'さ', tail: 'さ', words: [['捨てる', '投げる'], ['捨てて', '投げて'], ['じゃあね', 'したっけね'], ['疲れた', 'こわい'], ['とても寒い', 'しばれる']] },
  tsugaru: x(TOHOKU, { copula: 'だ', becauseFull: 'だはんで', becauseP: 'はんで', yo: 'じゃ', ne: 'の', tail: 'じゃ', words: [['私', 'わ'], ['あなた', 'な'], ['どこへ', 'どさ'], ['どこに', 'どさ'], ['おいしい', 'め'], ['美味しい', 'め']] }),
  nanbu: x(TOHOKU, { becauseFull: 'だすけ', becauseP: 'すけ', masu: 'ます', desu: 'です', words: [['私', 'おら']] }),
  morioka: x(TOHOKU, { desu: 'がんす', yo: 'なはん', ne: 'なはん', tail: 'なはん', words: [['えっ', 'じゃじゃじゃ']] }),
  akita: x(TOHOKU, { ne: 'な', words: [['そうだ', 'んだ'], ['そうです', 'んだす'], ['いいえ', 'なんも']] }),
  yamagata: x(TOHOKU, { copula: 'だず', yo: 'ず', tail: 'ず', words: [['そうそう', 'んだんだ'], ['かわいそう', 'めじょけね']] }),
  sendai: x(TOHOKU, { very: 'いきなり', copula: 'だっちゃ', yo: 'っちゃ', tail: 'っちゃ', becauseFull: 'だから', becauseP: 'から', words: [['しっくりこない', 'いずい']] }),
  fukushima: x(TOHOKU, { neg: 'ねぇ', negAll: true, copulaNeg: 'でねぇ', yo: 'ばい', tail: 'ばい', words: [['疲れた', 'こわい']] }),
  // 関東
  ibaraki: x(KANTO, { guess: 'だっぺ', yone: 'だっぺ', tail: 'ぺ', words: [['いい加減', 'ごじゃっぺ']] }),
  tochigi: x(KANTO, { q: 'け', words: [['いらいらする', 'いじやける']] }),
  gunma: x(KANTO, { guess: 'だんべ', yone: 'だんべ', tail: 'さ', words: [['だいたい', 'なから']] }),
  edo: x(KANTO, { tail: '', copula: 'でぇ', words: [['大変', 'てぇへん'], ['すごい', 'すげぇ'], ['うるさい', 'うるせぇ'], ['ひどい', 'しどい'], ['何を言っている', 'てやんでぇ'], ['ください', 'くんな']] }),
  // 甲信越・北陸
  niigata: { becauseFull: 'だすけ', becauseP: 'すけ', guess: 'だろ', yo: 'て', ne: 'ねっか', tail: 'て', neg: 'ん', words: [['恥ずかしい', 'しょうしい']] },
  nagano: { copula: 'だに', guess: 'ずら', yone: 'ずら', yo: 'だに', becauseFull: 'だで', becauseP: 'で', tail: 'に', words: [['やる気', 'ずく']] },
  koshu: { guess: 'ずら', yone: 'ずら', yo: 'じゃん', q: 'け', becauseFull: 'だから', tail: 'じゃん', words: [['えっ', 'てっ']] },
  toyama: { copula: 'や', yo: 'ちゃ', ne: 'ね', becauseFull: 'やさけ', becauseP: 'さけ', neg: 'ん', negSuru: 'せん', guess: 'やろ', tail: 'ちゃ', words: [['新鮮', 'きときと'], ['ばか', 'だら']] },
  kanazawa: { very: 'まんで', copula: 'や', yo: 'がいね', ne: 'ね', becauseFull: 'やさかい', becauseP: 'さかい', neg: 'ん', guess: 'やろ', tail: 'げん', words: [['しなさい', 'しまっし'], ['食べなさい', '食べまっし'], ['ばか', 'だら']] },
  fukui: { copula: 'や', yo: 'ざ', ne: 'の', becauseFull: 'やで', becauseP: 'で', neg: 'ん', guess: 'やろ', tail: 'ざ' },
  // 東海
  shizuoka: { very: 'ばか', guess: 'だら', yone: 'だら', yo: 'だに', becauseFull: 'だで', becauseP: 'で', tail: 'だに', neg: 'ん' },
  enshu: { very: 'ばか', guess: 'だら', yone: 'だら', yo: 'だに', becauseFull: 'だで', becauseP: 'で', tail: 'だに', neg: 'ん', words: [['やろう', 'やらまいか'], ['しよう', 'しまい']] },
  mikawa: { very: 'でら', guess: 'だら', yone: 'だら', yo: 'じゃん', becauseFull: 'だで', becauseP: 'で', tail: 'じゃん', neg: 'ん' },
  nagoya: { very: 'でら', guess: 'だら', yo: 'がね', ne: 'なも', becauseFull: 'だで', becauseP: 'で', neg: 'ん', negSuru: 'せん', tail: 'がや', words: [['疲れた', 'えらい'], ['大変', 'てゃーへん']] },
  gifu: { very: 'どえらい', copula: 'や', yo: 'に', becauseFull: 'やで', becauseP: 'で', neg: 'ん', guess: 'やろ', tail: 'やお', words: [['疲れた', 'えらい']] },
  mie: { copula: 'や', yo: 'に', ne: 'なぁ', becauseFull: 'やで', becauseP: 'で', neg: 'へん', guess: 'やろ', tail: 'やん', words: [['疲れた', 'えらい']] },
  // 近畿
  osaka: KANSAI,
  kyoto: x(KANSAI, { desu: 'どす', yo: 'え', tail: 'え', becauseFull: 'やさかい', becauseP: 'さかい', words: [['ありがとうございます', 'おおきに'], ['ありがとう', 'おおきに'], ['いらっしゃいませ', 'おいでやす'], ['いらっしゃい', 'おこしやす']] }),
  kobe: x(KANSAI, { prog: 'とう', progD: 'どう', yone: 'やんな', tail: 'で' }),
  banshu: x(KANSAI, { prog: 'とう', progD: 'どう', q: 'け', ne: 'のう', tail: 'やんけ', words: [['ばか', 'だぼ']] }),
  nara: x(KANSAI, { tail: 'やん', words: [['構わない', 'だんない']] }),
  wakayama: x(KANSAI, { yo: 'よー', tail: 'よー', words: [['ぞうきん', 'どうきん']] }),
  omi: x(KANSAI, { q: 'け', tail: 'ほん' }),
  // 中国
  hiroshima: CHUGOKU,
  okayama: x(CHUGOKU, { very: 'でーれー', ne: 'なぁ', yo: 'で', tail: 'で', words: [['だめだ', 'おえん'], ['だめ', 'おえん'], ['ダメ', 'おえん']] }),
  yamaguchi: x(CHUGOKU, { prog: 'ちょる', progD: 'じょる', progNeg: 'ちょらん', becauseFull: 'じゃけ', becauseP: 'け', yo: 'っちゃ', ne: 'ね', tail: 'ほ', words: [['しつこい', 'しわい']] }),
  tottori: x(CHUGOKU, { very: 'がいに', copula: 'だ', becauseFull: 'だけぇ', becauseP: 'けぇ', guess: 'だら', ne: 'なぁ', yo: 'が', tail: 'だわいや', words: [['ばか', 'だらず']] }),
  izumo: x(CHUGOKU, { copula: 'だ', becauseFull: 'だけん', becauseP: 'けん', prog: 'ちょる', progD: 'じょる', progNeg: 'ちょらん', guess: 'だら', yo: 'がん', tail: 'だわ', words: [['ありがとうございます', 'だんだん'], ['ありがとう', 'だんだん']] }),
  // 四国
  sanuki: x(KYUSHU, { very: 'がいに', copula: 'や', yo: 'で', ne: 'な', tail: 'で', adjDesu: 'わ', q: 'ん', words: [['しつこい', 'むつごい']] }),
  awa: x(KYUSHU, { very: 'がいに', copula: 'じゃ', becauseFull: 'じゃけん', yo: 'じょ', ne: 'なぁ', tail: 'じょ', adjDesu: 'じょ', q: 'ん' }),
  iyo: x(KYUSHU, { very: 'がいに', copula: 'じゃ', yo: 'ぞな', ne: 'なもし', tail: 'ぞな', adjDesu: 'のう', q: 'ん', words: [['そうですね', 'ほうじゃね']] }),
  tosa: x(KYUSHU, { very: 'こじゃんと', copula: 'じゃ', becauseFull: 'やき', becauseP: 'き', prog: 'ちゅう', progD: 'じゅう', progNeg: 'ちょらん', yo: 'ぜよ', ne: 'ねや', tail: 'ぜよ', adjDesu: 'ぜよ', q: 'が', words: [['本当に', 'まっこと'], ['本当', 'まっこと']] }),
  // 九州
  hakata: x(KYUSHU, { very: 'ばり', yo: 'ばい', words: [['何をしているの', 'なんしようと']] }),
  kitakyushu: x(KYUSHU, { very: 'ちかっぱ', becauseFull: 'やけ', becauseP: 'け', prog: 'ちょる', progD: 'じょる', progNeg: 'ちょらん', yo: 'っちゃ', tail: 'っちゃ', adjDesu: 'っちゃ', q: 'ん' }),
  saga: x(KYUSHU, { very: 'がばい', yo: 'ばい', words: [['しなさい', 'しんさい']] }),
  nagasaki: x(KYUSHU, { very: 'ばさろ', words: [['でも、', 'ばってん、'], ['しかし', 'ばってん'], ['歩き回る', 'さるく']] }),
  kumamoto: x(KYUSHU, { very: 'たいぎゃ', yo: 'たい', tail: 'たい', adjDesu: 'たい', words: [['かっこいい', 'むしゃんよか'], ['しなさい', 'しなっせ']] }),
  oita: x(KYUSHU, { very: 'しんけん', copula: 'じゃ', becauseFull: 'じゃけん', prog: 'ちょん', progD: 'じょん', progNeg: 'ちょらん', yo: 'っちゃ', tail: 'っちゃ', adjDesu: 'っちゃ', q: 'ん', words: [['面倒', 'よだきい'], ['めんどくさい', 'よだきい']] }),
  miyazaki: x(KYUSHU, { very: 'てげ', copula: 'じゃ', becauseFull: 'じゃかい', becauseP: 'かい', prog: 'ちょる', progD: 'じょる', progNeg: 'ちょらん', yo: 'ちゃ', tail: 'ちゃ', adjDesu: 'ちゃ', words: [['面倒', 'よだきい'], ['めんどくさい', 'よだきい']] }),
  satsuma: x(KYUSHU, { very: 'わっぜ', copula: 'じゃ', desu: 'ごわす', masu: 'もす', negPolite: 'もはん', becauseFull: 'じゃっで', becauseP: 'で', prog: 'ちょる', progD: 'じょる', progNeg: 'ちょらん', yo: 'ど', ne: 'な', tail: 'ど', adjDesu: 'ど', q: 'け', guess: 'じゃろ', words: [['私', 'おい'], ['ありがとうございます', 'あいがとさげもした'], ['ありがとう', 'あいがと']] }),
  // 沖縄・離島
  uchinaa: { very: 'でーじ', copula: 'さー', yo: 'さー', ne: 'ねー', tail: 'さー', adjDesu: 'さー', words: [['大丈夫', 'なんくるないさ'], ['いらっしゃい', 'めんそーれ']] },
  okinawa: { very: 'でーじ', copula: 'やん', desu: 'やいびーん', yo: 'どー', ne: 'やー', tail: 'どー', words: [['こんにちは', 'はいさい'], ['ありがとうございます', 'にふぇーでーびる'], ['ありがとう', 'にふぇーでーびる'], ['いらっしゃい', 'めんそーれ'], ['私', 'わん'], ['あなた', 'やー'], ['おいしい', 'まーさん'], ['美味しい', 'まーさん']] },
  miyako: { very: 'あぱらぎ', yo: 'さい', tail: 'さい', words: [['ありがとうございます', 'たんでぃがーたんでぃ'], ['ありがとう', 'たんでぃがーたんでぃ'], ['いらっしゃい', 'んみゃーち']] },
  yaeyama: { yo: 'さ', tail: 'さ', words: [['ありがとうございます', 'みーふぁいゆー'], ['ありがとう', 'みーふぁいゆー'], ['いらっしゃい', 'おーりとーり']] },
  hachijo: { guess: 'だら', yone: 'だら', tail: 'ら', words: [['いらっしゃい', 'おじゃれ'], ['高い', 'たかきゃ']] },
  // キャラ
  ojousama: { very: 'とっても', copula: 'ですわ', desu: 'ですわ', adjDesu: 'ですわ', adjDesuKeep: true, masu: 'ますわ', negPolite: 'ませんわ', yo: 'よ', ne: 'ね', guess: 'でしょうね', tail: 'わ', words: [['私', 'わたくし'], ['こんにちは', 'ごきげんよう'], ['ありがとうございます', 'ありがとう存じますわ'], ['ありがとう', 'ありがとう存じますわ'], ['あなた', 'あなた様']] },
  bushi: { copula: 'でござる', desu: 'でござる', adjDesu: 'でござる', masu: 'まする', negPolite: 'ませぬ', neg: 'ぬ', yo: 'ぞ', ne: 'な', guess: 'であろう', tail: 'でござる', words: [['私', '拙者'], ['ありがとうございます', 'かたじけない'], ['ありがとう', 'かたじけない'], ['あなた', 'そなた'], ['本当に', 'まことに'], ['とても', 'いと']] },
  oiran: { copula: 'でありんす', desu: 'でありんす', adjDesu: 'ありんす', masu: 'ありんす', negPolite: 'ありんせん', yo: 'わいな', ne: 'なんし', tail: 'ざんす', words: [['ありがとうございます', 'ありがとうござりんす'], ['私', 'わっち'], ['あなた', 'ぬし']] },
  gyaru: { very: 'マジ', adjDesu: 'すぎ', yo: 'じゃん', ne: 'ね〜', guess: 'じゃね', post: (s) => s.replace(/だじゃん$/, 'じゃん'), words: [['本当に', 'ガチで'], ['本当', 'ガチ'], ['すごい', 'ヤバい'], ['かわいい', 'かわちい'], ['そうだね', 'それな']] },
  neko: {
    tail: 'にゃ',
    yo: 'にゃ',
    ne: 'にゃ',
    post: (s) => s.replace(/な/g, 'にゃ').replace(/ナ/g, 'ニャ'),
  },
};

const END = /(よね|よ|ね)?$/;
const HIRA_A = '[あかさたなはまやらわがざだばぱ]';

function convertSentence(body: string, r: DialectRule, isQuestion: boolean): string {
  if (!body.trim()) return body;
  // 文末助詞は最初に切り離す（置換で生じた「ね」等と混同しないため）
  const particle = isQuestion ? '' : body.match(END)?.[1] ?? '';
  let s = particle ? body.slice(0, -particle.length) : body;
  let fromWords = false;
  const words = r.words ?? [];
  if (words.length) {
    // 1 回の走査で置き換える（置換結果を再置換しない）
    const map = new Map(words);
    const re = new RegExp(words.map(([f]) => f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
    s = s.replace(re, (m, offset: number, whole: string) => {
      if (offset + m.length === whole.length) fromWords = true;
      return map.get(m) ?? m;
    });
  }
  if (r.very) s = s.replace(/とても|すごく|非常に|めちゃくちゃ/g, r.very);
  if (r.becauseFull) s = s.replace(/(?:だ|です)から(?=、|$)/g, r.becauseFull);
  if (r.becauseP) s = s.replace(/から(?=、|$)/g, r.becauseP);
  if (r.progNeg) s = s.replace(/ていない(?=(?:の|か|から|けど)?$)/, r.progNeg);
  if (r.prog) s = s.replace(/ている/g, r.prog).replace(/(?<=[ぁ-ゖ])てる/g, r.prog);
  if (r.progD) s = s.replace(/でいる/g, r.progD).replace(/(?<=[んぁ-ゖ])でる(?![ぁ-ゖ])/g, r.progD);

  // 否定
  if (r.copulaNeg) s = s.replace(/(?:じゃ|では)(?:ない|ありません)(?=(?:の|か)?$)/, r.copulaNeg);
  if (r.negPolite) s = s.replace(/ません(?=(?:か|でした)?$)/, r.negPolite);
  if (r.negSuru) s = s.replace(/(?<![ぁ-ゖ])しない(?=(?:の|か|から|けど)?$)/, r.negSuru);
  if (r.negIru) s = s.replace(/(?<![ぁ-ゖ])いない(?=(?:の|か|から|けど)?$)/, r.negIru);
  if (r.neg) {
    const re = r.negAll ? /ない(?=(?:の|か|から|けど)?$)/ : new RegExp(`(?<=${HIRA_A})ない(?=(?:の|か|から|けど)?$)`);
    s = s.replace(re, r.neg);
  }

  const before = s;
  let guessed = false;
  if (r.guess && /(?:でしょう|だろう|でしょ|だろ)(?:か)?$/.test(s)) {
    s = s.replace(/(?:でしょう|だろう|でしょ|だろ)(?=(?:か)?$)/, r.guess);
    guessed = true;
  }
  // 文末の です / だ / ます
  let core = s;
  if (/いです$/.test(core)) core = core.slice(0, -2) + (particle && !r.adjDesuKeep ? '' : r.adjDesu ?? 'です');
  else if (/です$/.test(core) && (r.desu || r.copula)) core = core.slice(0, -2) + (r.desu ?? r.copula);
  else if (/(?<![んい])だ$/.test(core) && r.copula) core = core.slice(0, -1) + r.copula;
  else if (/ます$/.test(core) && r.masu) core = core.slice(0, -2) + r.masu;
  let end = particle;
  if (particle === 'よね') end = r.yone ?? r.ne ?? particle;
  else if (particle === 'よ') end = r.yo ?? particle;
  else if (particle === 'ね') end = r.ne ?? particle;
  // 「だ＋だに」「や＋やろ」のような重複を避ける
  for (const c of ['だ', 'や', 'じゃ']) {
    if (end.startsWith(c) && core.endsWith(c)) core = core.slice(0, -c.length);
  }
  if (end && core.endsWith(end)) end = '';
  s = core + end;

  if (isQuestion && r.q && /の$/.test(s)) s = s.slice(0, -1) + r.q;

  // 文末に何も付かなかった平叙文には特徴語を添える
  if (
    !isQuestion && !guessed && !fromWords && r.tail && s === before && !particle && s.length >= 3 && !s.endsWith(r.tail) &&
    /[うくつぬむるぐぶいただ]$/.test(s) && !/(?:でしょう|だろう|ましょう)$/.test(s)
  ) {
    s += r.tail;
  }
  if (r.post) s = r.post(s);
  return s;
}

/** 共通語の文章をルールで方言に変換する */
export function ruleConvert(dialectId: string, text: string): string {
  const r = RULES[dialectId] ?? {};
  return text
    .split('\n')
    .map((line) => {
      const parts = line.split(/([。！？!?]+)/);
      let out = '';
      for (let i = 0; i < parts.length; i += 2) {
        const body = parts[i] ?? '';
        const term = parts[i + 1] ?? '';
        out += convertSentence(body, r, /[？?]/.test(term)) + term;
      }
      return out;
    })
    .join('\n');
}
