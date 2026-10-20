import type { Phrase, Profile } from './types';

/*
 * 方言プロファイル。
 * 各項目は「その地域で広く使われ、意味が変わらない」と確認できたものだけを入れている
 * （Wikipedia 各方言記事などの資料で確認。資料で確認できなかった語は入れない）。
 * 判断できない項目は空のまま（＝共通語のまま残す）。
 *
 * phrases: 表層の語句（トークン境界で一致）／verbs: 動詞（活用は自動、一段は「|1」）／
 * adjs: 形容詞（語幹を差し替え。九州の「か」終わりはカ語尾の位置だけ）
 */

/** プロファイルの合成（語彙はマージ、後勝ち） */
function mix(...ps: Profile[]): Profile {
  const out: Profile = {};
  for (const p of ps) {
    const { phrases, verbs, adjs, ...rest } = p;
    Object.assign(out, rest);
    if (phrases) out.phrases = [...phrases, ...(out.phrases ?? [])];
    if (verbs) out.verbs = { ...(out.verbs ?? {}), ...verbs };
    if (adjs) out.adjs = { ...(out.adjs ?? {}), ...adjs };
  }
  return out;
}

const vowelAppend = (stem: string, vowel: string, eRow: string, iRow: string) =>
  vowel === 'i' ? stem + iRow : stem + eRow;

const CONJ = { pos: '接続詞' } as const;
const CONJ_COMMA = { pos: '接続詞', beforeComma: true } as const;
const ADJ = { adj: true } as const;
const ADV = { pos: '副詞' } as const;
const NEG = { needNeg: true } as const;

// ==================== 近畿 ====================
const KANSAI: Profile = {
  cop: 'や', copYo: 'やで', copNe: 'やな', copYone: 'やんな', copKara: 'やから', dakara: 'せやから', sou: 'せ', copNeg: 'ちゃう',
  neg: 'hen', negSuru: 'せえへん', negKuru: 'けえへん', masen: 'まへん',
  prog: ['てる', 'でる'], progNeg: ['てへん', 'でへん'], progPast: ['てた', 'でた'],
  iruNeg: 'おらへん',
  shimauPast: ['てもうた', 'でもうた'], shimauPres: ['てまう', 'でまう'],
  yo: 'で', ne: 'なあ', yone: 'よな', qNo: 'ん', tag: 'やん',
  desuYo: 'でっせ', masuYo: 'まっせ', pNe: 'なあ',
  guess: 'やろ', guessCop: 'やろ', guessPolite: 'でっしゃろ', vol: 'drop', must: 'なあかん', uOnbin: 'kansai',
  ii: 'ええ', very: 'めっちゃ', hayaku: 'はよ', dame: 'あかん', damePolite: 'あきまへん', tired: 'しんどい', bother: 'じゃまくさい',
  noisy: 'やかましい', chigau: true, hontou: 'ほんま', hontouni: 'ほんまに', suteru: 'hokasu',
  nasai: (stem) => `${stem}なはれ`,
  phrases: [
    ['ありがとうございます', 'おおきに'],
    ['ありがとう', 'おおきに'],
    ['そうですね', 'そうですなあ'],
    ['すみません', 'すんまへん'],
    ['お疲れ様', 'おつかれさん'],
    ['まじで', 'ほんまに'],
    ['まじ', 'ほんま'],
    ['たくさん', 'ぎょうさん'],
    ['どうして', 'なんで'],
    ['なぜ', 'なんで'],
    ['どう', 'どない', ADV],
    ['こんなに', 'こないに'],
    ['そんなに', 'そないに'],
    ['あんなに', 'あないに'],
    ['こんな', 'こないな'],
    ['そんな', 'そないな'],
    ['あんな', 'あないな'],
    ['どんな', 'どないな'],
    ['仕方がない', 'しゃあない'],
    ['仕方ない', 'しゃあない'],
    ['しょうがない', 'しゃあない'],
    ['かまわない', 'かまへん'],
    ['ばか', 'あほ'],
    ['じゃあ', 'ほな', CONJ],
    ['それで', 'ほんで', CONJ_COMMA],
  ],
  verbs: { 片付ける: 'なおす', 殴る: 'どつく', 転ぶ: 'こける|1' },
  adjs: { 面白い: 'おもろい', ずるい: 'こすい', くすぐったい: 'こそばい', 温かい: 'ぬくい', 暖かい: 'ぬくい' },
};

const KYOTO: Profile = mix(KANSAI, {
  copKara: 'やさかい', kara: 'さかい', dakara: 'そやさかい', sou: 'そ',
  negSuru: 'しいひん', negKuru: 'きいひん', iruNeg: 'いいひん',
  shimauPast: ['てしもた', 'でしもた'], shimauPres: undefined,
  desu: 'どす', desuYo: undefined, masuYo: undefined, pYo: 'え', pNe: 'なあ', adjDesuKyoto: true,
  guessPolite: 'どすやろ', very: 'えらい',
  nasai: (stem) => `${stem}よし`, kudasai: 'おくれやす',
  phrases: [
    ['いらっしゃいませ', 'おいでやす'],
    ['いらっしゃい', 'おいでやす'],
    ['ごめんください', 'ごめんやす'],
    ['ごめんね', 'かんにんえ'],
    ['ごめん', 'かんにん'],
    ['そうですね', 'そうどすなあ'],
  ],
});

const KOBE: Profile = mix(KANSAI, { prog: ['とう', 'どう'], progPast: ['とった', 'どった'] });
const BANSHU: Profile = mix(KANSAI, {
  prog: ['とう', 'どう'], progPast: ['とった', 'どった'], very: 'ごっつ', qKa: 'け', phrases: [['ばか', 'だぼ']],
});
// 河内弁: 「のう」「け」、二人称「われ」、「えらい」（しんどい）
const KAWACHI: Profile = mix(KANSAI, {
  ne: 'のう', copNe: 'やのう', qKa: 'け', very: 'ごっつ', tired: 'えらい', phrases: [['お前', 'われ']],
});
// 泉州弁: 疑問の「け」、「ほて」（それで）、「さっぷい」（寒い）、「つれ」（友達）
const SENSHU: Profile = mix(KANSAI, {
  qKa: 'け',
  phrases: [['それで', 'ほて', CONJ_COMMA], ['友達', 'つれ']],
  adjs: { 寒い: 'さっぷい' },
});

const MIE: Profile = {
  cop: 'や', copYo: 'やに', copNe: 'やな', copKara: 'やで', kara: 'で', dakara: 'せやで', sou: 'せ',
  neg: 'hen', negSuru: 'せえへん', hen1: 'やへん',
  prog: ['とる', 'どる'], progNeg: ['とらへん', 'どらへん'], progPast: ['とった', 'どった'],
  yo: 'に', ne: 'なあ', qNo: 'ん', guess: 'やろ', guessCop: 'やろ', tag: 'やん', must: 'なあかん', uOnbin: true,
  ii: 'ええ', very: 'めっちゃ', hayaku: 'はよ', dame: 'あかん', tired: 'しんどい', hontou: 'ほんま', chigau: true,
  phrases: [
    ['ありがとうございます', 'おおきに'],
    ['ありがとう', 'おおきに'],
    ['大丈夫', 'だんない', ADJ],
    ['かまわない', 'かまへん'],
    ['できない', 'できやん'],
    ['自転車', 'けった'],
    ['たくさん', 'ようけ'],
    ['まじで', 'ほんまに'],
    ['まじ', 'ほんま'],
  ],
  verbs: { 頑張る: 'きばる', 転ぶ: 'こける|1', 捨てる: 'ほかす', 舐める: 'ねぶる', 触る: 'いらう' },
  adjs: { 面白い: 'おもろい', 羨ましい: 'けなりい', 冷たい: 'ひやこい', 温かい: 'ぬくい', かわいらしい: 'かいらしい' },
};

// ==================== 中国 ====================
const HIROSHIMA: Profile = {
  cop: 'じゃ', copYo: 'じゃけえ', copNe: 'じゃのう', copYone: 'じゃろ', copKara: 'じゃけえ', kara: 'けえ', dakara: 'じゃけえ', sou: 'ほう',
  neg: 'n', prog: ['とる', 'どる'], progNeg: ['とらん', 'どらん'], progPast: ['とった', 'どった'],
  iru: 'おる', iruNeg: 'おらん', iruPast: 'おった',
  shimauPast: ['てしもうた', 'でしもうた'],
  ne: 'のう', yone: 'じゃろ', qNo: 'ん', guess: 'じゃろ', guessCop: 'じゃろ', guessU: true, tag: 'じゃん', must: 'にゃいけん', uOnbin: true,
  ii: 'ええ', very: 'ぶち', hayaku: 'はよ', dame: 'いけん', tired: 'えらい', bother: 'たいぎい', hontou: 'ほんま', hontouni: 'ほんまに',
  nasai: (stem) => `${stem}んさい`, kudasai: 'つかあさい',
  phrases: [
    ['まじで', 'ほんまに'],
    ['まじ', 'ほんま'],
    ['たくさん', 'えっと'],
    ['どうしたの', 'どしたん'],
    ['こんな', 'こがいな'],
    ['そんな', 'そがいな'],
    ['あんな', 'あがいな'],
    ['どんな', 'どがいな'],
    ['いいえ', 'いんや'],
  ],
  verbs: { 片付ける: 'なおす', 触る: 'いらう', すねる: 'はぶてる|1', 叫ぶ: 'おらぶ' },
  adjs: { 小さい: 'こまい', ずるい: 'こすい', 温かい: 'ぬくい', 暖かい: 'ぬくい', 眠い: 'ねぶたい' },
};

const OKAYAMA: Profile = mix(HIROSHIMA, {
  copNe: 'じゃなあ', ne: 'なあ', very: 'でーれー', dame: 'おえん', tag: 'が', must: 'にゃおえん', nasai: undefined, kudasai: 'つかあせえ',
  phrases: [
    ['たくさん', 'ようけ'],
    ['こんな', 'こねえな'],
    ['そんな', 'そねえな'],
    ['あんな', 'あねえな'],
    ['どんな', 'どねえな'],
    ['腹が立つ', 'ごうがわく'],
    ['腹が立った', 'ごうがわいた'],
    ['腹が立って', 'ごうがわいて'],
  ],
  verbs: { ふざける: 'ちばける|1', 壊れる: 'めげる|1', 壊す: 'めぐ' },
});

const YAMAGUCHI: Profile = mix(HIROSHIMA, {
  copYo: 'っちゃ', copNe: 'じゃね', copKara: 'じゃけ', kara: 'け', dakara: 'じゃけ', sou: undefined,
  prog: ['ちょる', 'じょる'], progNeg: ['ちょらん', 'じょらん'], progPast: ['ちょった', 'じょった'],
  shimauPast: undefined, yo: 'っちゃ', ne: undefined, kudasai: undefined, must: undefined, negPastTail: 'じゃった',
});

const TOTTORI: Profile = {
  copKara: 'だけぇ', kara: 'けぇ', dakara: 'だけぇ',
  neg: 'n', prog: ['とる', 'どる'], progNeg: ['とらん', 'どらん'], progPast: ['とった', 'どった'],
  iru: 'おる', iruNeg: 'おらん', iruPast: 'おった',
  guess: 'だら', guessCop: 'だら', ii: 'ええ', very: 'がいに', hayaku: 'はよ', dame: 'いけん',
};

const IZUMO: Profile = mix(TOTTORI, {
  copKara: 'だけん', kara: 'けん', dakara: 'だけん',
  prog: ['ちょる', 'じょる'], progNeg: ['ちょらん', 'じょらん'], progPast: ['ちょった', 'じょった'],
  phrases: [
    ['ありがとうございます', 'だんだん'],
    ['ありがとう', 'だんだん'],
  ],
});

// ==================== 四国 ====================
const SHIKOKU: Profile = {
  neg: 'n', prog: ['とる', 'どる'], progNeg: ['とらん', 'どらん'], progPast: ['とった', 'どった'],
  iru: 'おる', iruNeg: 'おらん', iruPast: 'おった',
  kara: 'けん', qNo: 'ん', ii: 'ええ', hayaku: 'はよ', hontou: 'ほんま', uOnbin: true, must: 'ないかん',
  phrases: [
    ['まじで', 'ほんまに'],
    ['まじ', 'ほんま'],
    ['たくさん', 'ようけ'],
  ],
  verbs: { 片付ける: 'なおす', 叫ぶ: 'おらぶ', 舐める: 'ねぶる' },
};

const SANUKI: Profile = mix(SHIKOKU, {
  cop: 'や', copYo: 'やで', copNe: 'やな', copKara: 'やけん', dakara: 'やけん', copNeg: 'ちゃう',
  yo: 'で', ne: 'なあ', guess: 'やろ', guessCop: 'やろ', very: 'がいに', dame: 'いかん', tag: 'やん', tired: 'えらい',
  nasai: (stem) => `${stem}まい`,
  phrases: [
    ['全部', 'まんでがん'],
    ['何してるの', 'なんしよん'],
    ['何しているの', 'なんしよん'],
  ],
  adjs: { 面白い: 'おもっしょい' },
});

const AWA: Profile = mix(SHIKOKU, {
  cop: 'じゃ', copYo: 'じょ', copNe: 'じゃな', copKara: 'じゃけん', dakara: 'じゃけん', kedo: 'けんど',
  yo: 'じょ', ne: 'なあ', guess: 'じゃろ', guessCop: 'じゃろ', dame: 'あかん', tag: 'やん', tired: 'しんどい', kudasai: 'つかい',
  phrases: [
    ['大丈夫', 'べっちょない'],
    ['少し', 'ちっと'],
    ['どうしたの', 'どしたん'],
  ],
  verbs: { 捨てる: 'ほかす' },
  adjs: { 小さい: 'こまい' },
});

const IYO: Profile = mix(SHIKOKU, {
  cop: 'や', copNe: 'やね', copKara: 'やけん', dakara: 'ほやけん', sou: 'ほ',
  guess: 'やろ', guessCop: 'やろ', very: 'がいに', dame: 'いかん', kudasai: 'つかあさい',
  phrases: [
    ['ありがとうございます', 'だんだん'],
    ['ありがとう', 'だんだん'],
    ['そうなの', 'ほうなん'],
    ['何してるの', 'なんしよん'],
    ['何しているの', 'なんしよん'],
  ],
});

const TOSA: Profile = mix(SHIKOKU, {
  cop: 'や', copYo: 'やき', copNe: 'やね', copKara: 'やき', kara: 'き', dakara: 'やき', kedo: 'けんど',
  prog: ['ちゅう', 'じゅう'], progNeg: undefined, progPast: ['ちょった', 'じょった'],
  yo: 'ぜ', qNo: 'が', guess: 'ろう', guessCop: 'やろう', tag: 'やいか', noda: 'が', nodaEnd: 'やき',
  ii: 'えい', dame: 'いかん', hontou: undefined, hontouni: 'まっこと',
  phrases: [
    ['まじで', 'まっこと'],
    ['お前', 'おまん'],
  ],
});

// ==================== 九州 ====================
const KYUSHU_BASE_WORDS: Phrase[] = [
  ['こんなに', 'こげん'],
  ['そんなに', 'そげん'],
  ['あんなに', 'あげん'],
  ['こんな', 'こげな'],
  ['そんな', 'そげな'],
  ['あんな', 'あげな'],
  ['どんな', 'どげな'],
  ['どう', 'どげん', ADV],
  ['全然', 'いっちょん', NEG],
];
// カ語尾の方言（博多・佐賀・長崎・熊本・薩摩など）
const KYUSHU_WORDS: Phrase[] = [
  ...KYUSHU_BASE_WORDS,
  ['仕方がない', 'しょんなか'],
  ['仕方ない', 'しょんなか'],
  ['しょうがない', 'しょんなか'],
];
// カ語尾を使わない豊日方言（北九州・大分・宮崎）。こげん系（肥筑方言）は使わない
const HOUNICHI_WORDS: Phrase[] = [
  ['全然', 'いっちょん', NEG],
  ['仕方がない', 'しょんない'],
  ['仕方ない', 'しょんない'],
  ['しょうがない', 'しょんない'],
];
const KYUSHU_VERBS = { 片付ける: 'なおす', 驚く: 'たまがる', 叫ぶ: 'おらぶ', 舐める: 'ねぶる', 掃く: 'はわく' };

const HAKATA: Profile = {
  cop: 'や', copYo: 'ばい', copNe: 'やね', copYone: 'やろ', copKara: 'やけん', kara: 'けん', dakara: 'やけん', noda: 'と',
  kedo: 'ばってん',
  neg: 'n', prog: ['とる', 'どる'], progNeg: ['とらん', 'どらん'], progPast: ['とった', 'どった'],
  iru: 'おる', iruNeg: 'おらん', iruPast: 'おった',
  yo: 'ばい', yone: 'やろ', qNo: 'と', guess: 'やろ', guessCop: 'やろ', tag: 'やん', must: 'ないかん', uOnbin: true,
  shimauPast: ['てしもうた', 'でしもうた'],
  adjKa: true, ii: 'よか', very: 'ばり', hayaku: 'はよ', dame: 'いかん', tired: 'きつか', noisy: 'せからしい',
  nasai: (stem) => `${stem}んしゃい`,
  phrases: [
    ...KYUSHU_WORDS,
    ['とにかく', 'なんかなし'],
    ['腹が立つ', '腹かく'],
    ['腹が立った', '腹かいた'],
    ['腹が立って', '腹かいて'],
  ],
  verbs: { ...KYUSHU_VERBS, 急ぐ: 'あせがる', 殴る: 'くらす' },
  adjs: { 大きい: 'ふとい', 小さい: 'こまい', 怖い: 'えずい', 柔らかい: 'やわい' },
};

const KITAKYUSHU: Profile = {
  cop: 'や', copYo: 'っちゃ', copNe: 'やね', copYone: 'やろ', copKara: 'やけ', kara: 'け', dakara: 'やけ',
  neg: 'n', prog: ['ちょる', 'じょる'], progNeg: ['ちょらん', 'じょらん'], progPast: ['ちょった', 'じょった'],
  iru: 'おる', iruNeg: 'おらん', iruPast: 'おった',
  yo: 'っちゃ', yone: 'やろ', qNo: 'ん', guess: 'やろ', guessCop: 'やろ', tag: 'やん', uOnbin: true,
  very: 'ばり', hayaku: 'はよ', dame: 'いけん', noisy: 'せからしい',
  phrases: HOUNICHI_WORDS,
  verbs: KYUSHU_VERBS,
};

const SAGA: Profile = mix(HAKATA, {
  tag: undefined, very: 'がばい', nasai: (stem) => `${stem}んしゃい`, negPastTail: 'じゃった', must: 'んばらん',
  phrases: [['ばか', 'ふうけもん']],
  adjs: { 怖い: 'えすか', 暑い: 'ぬっか', 大きい: 'ふとか' },
});

const NAGASAKI: Profile = mix(HAKATA, {
  tag: undefined, very: 'ばさろ', nasai: undefined, negPastTail: 'じゃった', must: undefined,
});

// 筑後弁: 「ほんなこつ」「だけん」「でけん」（だめ）「がば」（とても）
const CHIKUGO: Profile = mix(HAKATA, {
  copYo: 'たい', dakara: 'だけん', dame: 'でけん', very: 'がば', tag: undefined, must: undefined,
  phrases: [
    ['本当に', 'ほんなこつ'],
    ['まじで', 'ほんなこつ'],
  ],
});

const KUMAMOTO: Profile = mix(HAKATA, {
  cop: undefined, copYo: 'たい', copNe: undefined, copYone: 'だろ', copKara: 'だけん', dakara: 'だけん', noda: 'と', nodaEnd: 'たい',
  guess: undefined, guessCop: undefined, yone: undefined, tag: undefined, must: 'にゃん',
  very: 'たいぎゃ', nasai: (stem) => `${stem}なっせ`,
  phrases: [
    ['本当に', 'ほんなこつ'],
    ['まじで', 'ほんなこつ'],
    ['とにかく', 'なんさま'],
    ['こんなに', 'こぎゃん'],
    ['そんなに', 'そぎゃん'],
    ['あんなに', 'あぎゃん'],
    ['こんな', 'こぎゃん'],
    ['そんな', 'そぎゃん'],
    ['あんな', 'あぎゃん'],
    ['どんな', 'どぎゃん'],
    ['どう', 'どぎゃん', ADV],
    ['かっこいい', 'むしゃんよか'],
  ],
  verbs: { 頑張る: 'がまだす' },
  adjs: { 寂しい: 'とぜんなか' },
});

const OITA: Profile = {
  cop: 'じゃ', copYo: 'じゃ', copKara: 'じゃけん', kara: 'けん', dakara: 'じゃけん',
  neg: 'n', prog: ['ちょる', 'じょる'], progNeg: ['ちょらん', 'じょらん'], progPast: ['ちょった', 'じょった'],
  iru: 'おる', iruNeg: 'おらん', iruPast: 'おった',
  yo: 'っちゃ', qNo: 'ん', guess: 'じゃろ', guessCop: 'じゃろ', uOnbin: true,
  very: 'しんけん', hayaku: 'はよ', dame: 'いけん', bother: 'よだきい', tired: 'きちい', noisy: 'せからしい',
  phrases: [
    ...HOUNICHI_WORDS,
    ['腹が減った', 'ひだりい'],
    ['こんなに', 'こげえ'],
    ['そんなに', 'そげえ'],
    ['あんなに', 'あげえ'],
    ['どう', 'どげえ', ADV],
  ],
  verbs: { ...KYUSHU_VERBS, 捨てる: 'ほかる', 急ぐ: 'せく' },
  adjs: { 怖い: 'おじい', 汚い: 'いびしい' },
};

const MIYAZAKI: Profile = mix(OITA, {
  copYo: 'じゃっちゃ', copKara: 'じゃかい', kara: 'かい', dakara: 'じゃかい', qNo: 'と', very: 'てげ', dame: undefined, tired: undefined,
  phrases: [
    ['本当に', 'ほんじゃまこち'],
    ['こんなに', 'こんげ'],
    ['そんなに', 'そんげ'],
    ['あんなに', 'あんげ'],
    ['こんな', 'こんげ'],
    ['そんな', 'そんげ'],
    ['あんな', 'あんげ'],
    ['どんな', 'どんげ'],
    ['どう', 'どんげ', ADV],
  ],
  adjs: { 悔しい: 'はげらしい' },
});

const SATSUMA: Profile = {
  cop: 'じゃ', copYo: 'じゃっど', copKara: 'じゃっで', kara: 'で', dakara: 'じゃっで', kedo: 'どん', nodaKeep: true,
  neg: 'n', prog: ['ちょる', 'じょる'], progNeg: ['ちょらん', 'じょらん'], progPast: ['ちょった', 'じょった'],
  iru: 'おる', iruNeg: 'おらん', iruPast: 'おった',
  yo: 'ど', guess: 'じゃろ', guessCop: 'じゃろ',
  adjKa: true, ii: 'よか', very: 'わっぜ', hayaku: 'はよ', tired: 'だれた',
  phrases: [
    ['ありがとうございます', 'あいがとさげもした'],
    ['ありがとう', 'あいがと'],
    ...KYUSHU_WORDS,
  ],
  verbs: KYUSHU_VERBS,
  adjs: { かわいい: 'むぞか' },
};

// ==================== 東海 ====================
const NAGOYA: Profile = {
  copYo: 'だがね', copKara: 'だで', kara: 'で', dakara: 'だで',
  neg: 'n', prog: ['とる', 'どる'], progNeg: ['とらん', 'どらん'], progPast: ['とった', 'どった'],
  iru: 'おる', iruNeg: 'おらん', iruPast: 'おった',
  yo: 'がね', vol: 'mai', must: 'なかん', ii: 'ええ', very: 'でら', hayaku: 'はよ', dame: 'いかん', tired: 'えらい',
  nasai: (stem, v) => vowelAppend(stem, v, 'やあ', 'ゃあ'),
  phrases: [
    ['自転車', 'けった'],
    ['たくさん', 'ようけ'],
    ['久しぶり', 'やっとかめ'],
    ['ばか', 'たわけ'],
  ],
  verbs: { 捨てる: 'ほかる', 動く: 'いごく', ゆでる: 'うでる|1' },
  adjs: { 怖い: 'おそがい', 恐ろしい: 'おそがい', ずるい: 'こすい' },
};

const MIKAWA: Profile = {
  copYo: 'だに', copKara: 'だで', kara: 'で', dakara: 'だもんで',
  neg: 'n', prog: ['とる', 'どる'], progNeg: ['とらん', 'どらん'], progPast: ['とった', 'どった'],
  yo: 'に', yone: 'だら', guess: 'だら', guessCop: 'だら', tag: 'じゃん', vol: 'maiA',
  dame: 'いかん', tired: 'えらい',
  // 軽い命令: 一段・サ変は「りん」（食べりん・しりん）、五段は連用形＋「ん」（行きん）
  nasai: (stem, _v, ctype) => (ctype.startsWith('五段') ? `${stem}ん` : `${stem}りん`),
  phrases: [['たくさん', 'ようけ']],
  verbs: { 捨てる: 'ほかる' },
  adjs: { 怖い: 'おそがい', 恐ろしい: 'おそがい', 寒い: 'さぶい' },
};

const SHIZUOKA_WORDS: Phrase[] = [
  ['仕方がない', 'しょんない'],
  ['仕方ない', 'しょんない'],
  ['しょうがない', 'しょんない'],
  ['自転車', 'けった'],
];

const ENSHU: Profile = {
  copKara: 'だで', kara: 'で', dakara: 'だで',
  neg: 'n', prog: ['とる', 'どる'], progNeg: ['とらん', 'どらん'], progPast: ['とった', 'どった'],
  yone: 'だら', guess: 'だら', guessCop: 'だら', tag: 'じゃん', vol: 'maiA', very: 'ばか', tired: 'えらい',
  phrases: SHIZUOKA_WORDS,
  verbs: { 捨てる: 'うっちゃる' },
  adjs: { 怖い: 'おそがい', ずるい: 'ずっこい' },
};

const SHIZUOKA: Profile = {
  copKara: 'だもんで', kara: 'もんで', dakara: 'だもんで',
  yone: 'だら', guess: 'だら', guessCop: 'だら', tag: 'じゃん', vol: 'zaa', very: 'ばか', tired: 'えらい',
  phrases: [...SHIZUOKA_WORDS, ['もっと', 'まっと']],
  verbs: { 捨てる: 'うっちゃる', ゆでる: 'うでる|1' },
  adjs: {
    怖い: 'おそがい', 大きい: 'いかい', ずるい: 'ずっこい', 温かい: 'ぬくとい', 暖かい: 'ぬくとい', 冷たい: 'ひゃっこい', 寒い: 'さぶい',
    うっとうしい: 'おとましい',
  },
};

const GIFU: Profile = {
  cop: 'や', copYo: 'やお', copNe: 'やな', copKara: 'やで', kara: 'で', dakara: 'やで',
  neg: 'n', prog: ['とる', 'どる'], progNeg: ['とらん', 'どらん'], progPast: ['とった', 'どった'],
  iru: 'おる', iruNeg: 'おらん', iruPast: 'おった',
  shimauPres: ['てまう', 'でまう'], shimauPast: ['てまった', 'でまった'],
  guess: 'やろ', guessCop: 'やろ', vol: 'mai', must: 'なかん',
  ii: 'ええ', very: 'どえらい', hayaku: 'はよ', dame: 'あかん', tired: 'えらい',
  phrases: [
    ['久しぶり', 'やっとかめ'],
    ['ばか', 'たわけ'],
    ['友達', 'つれ'],
  ],
  verbs: { 返す: 'かやす', 手伝う: 'てったう', 壊れる: 'こわける|1' },
  adjs: { 汚い: 'ばばい', 柔らかい: 'やーこい' },
};

// ==================== 北陸・甲信越 ====================
const HOKURIKU: Profile = {
  cop: 'や', copNe: 'やね', neg: 'n', prog: ['とる', 'どる'], progNeg: ['とらん', 'どらん'], progPast: ['とった', 'どった'],
  iru: 'おる', iruNeg: 'おらん', iruPast: 'おった', qNo: 'が', guess: 'やろ', guessCop: 'やろ', sou: 'ほ',
  phrases: [['ばか', 'だら']],
};

const TOYAMA: Profile = mix(HOKURIKU, {
  copYo: 'やちゃ', copKara: 'やさかい', kara: 'さかい', dakara: 'ほやさかい', yo: 'ちゃ', qKa: 'け',
  phrases: [
    ['たくさん', 'でかいと'],
    ['ありがとうございます', 'きのどくな'],
    ['ありがとう', 'きのどくな'],
    ['いいえ', 'なーん'],
  ],
  verbs: { 座る: 'ねまる' },
  adjs: { だるい: 'だやい', うっとうしい: 'いじくらしい' },
});

const KANAZAWA: Profile = mix(HOKURIKU, {
  copYo: 'やぞ', copKara: 'やさけ', kara: 'さけ', dakara: 'ほやさけ', tag: 'がいね', very: 'がんこ', qNo: 'がん',
  noda: 'げん', nodaEnd: '', uOnbin: true,
  nasai: (stem) => `${stem}まっし`,
  phrases: [['ありがとうございます', 'あんやと'], ['ありがとう', 'あんやと']],
  verbs: { 傾く: 'かたがる' },
  adjs: { もどかしい: 'はがいしい', しつこい: 'いじくらしい', うっとうしい: 'いじくらしい' },
});

const FUKUI: Profile = mix(HOKURIKU, {
  copYo: 'やざ', copNe: 'やのー', copKara: 'やで', kara: 'で', dakara: 'ほやで', yo: 'ざ', ne: 'のー', dame: 'あかん', qNo: undefined,
  prog: undefined, progNeg: ['てえん', 'でえん'], progPast: undefined, iru: undefined, iruNeg: 'えん', iruPast: undefined,
  shimauPast: ['てしもた', 'でしもた'], uOnbin: true, very: 'ひっで',
  phrases: [
    ['大丈夫', 'だんねえ', ADJ],
    ['ありがとうございます', 'きのどくな'],
    ['ありがとう', 'きのどくな'],
    ['少し', 'ちょっこし'],
    ['たくさん', 'ようけ'],
  ],
  verbs: { 捨てる: 'なげる|1', 片付ける: 'なおす', 座る: 'ねまる', 寄りかかる: 'よしかかる', ふざける: 'あばさける|1' },
  adjs: { 羨ましい: 'けなるい', くすぐったい: 'こしょばい' },
});

const NIIGATA: Profile = {
  copYo: 'だて', copKara: 'だすけ', kara: 'すけ', dakara: 'だすけ', kedo: 'ろも',
  verbs: { 帰る: 'けえる' },
  adjs: { 冷たい: 'しゃっこい' },
};
const NAGANO: Profile = {
  copYo: 'だに', copKara: 'だで', kara: 'で', dakara: 'だで', yo: 'に', yone: 'ずら', guess: 'ずら', guessCop: 'ずら',
};
const KOSHU: Profile = {
  neg: 'n', yone: 'ずら', copYone: 'ずら', guess: 'ずら', guessCop: 'ずら', tag: 'じゃんけ', vol: 'zaa',
  phrases: [
    ['ちゃんと', 'こぴっと'],
    ['お前', 'おまん'],
    ['子供', 'ぼこ'],
  ],
};

// ==================== 関東 ====================
const KANTO: Profile = {
  neg: 'nee', adjEe: true, nai: 'ねえ', progNeg: ['てねえ', 'でねえ'], mustSuru: 'し',
};
const EDO: Profile = mix(KANTO, {
  shimauPast: ['ちまった', 'じまった'], shimauPres: ['ちまう', 'じまう'], very: 'えらく', must: 'なきゃなんねえ',
  phrases: [
    ['大根', 'でえこん'],
    ['大工', 'でえく'],
    ['大事', 'でえじ'],
    ['大変', 'てえへん'],
    ['大丈夫', 'でえじょうぶ'],
  ],
  verbs: { 帰る: 'けえる', 入る: 'へえる', 捨てる: 'うっちゃる', 見つける: 'めっける|1' },
});
const IBARAKI: Profile = mix(KANTO, {
  guess: 'っぺ', guessCop: 'だっぺ', yone: 'っぺ', copYone: 'だっぺ', vol: 'ppe', qKa: 'け', sou: 'ん', tired: 'こわい',
  must: 'なきゃなんねえ',
  phrases: [
    ['でたらめ', 'ごじゃっぺ'],
    ['どうして', 'なして'],
    ['それで', 'ほんで', CONJ_COMMA],
    ['大丈夫', 'だいじ'],
  ],
  verbs: { 捨てる: 'かっぽる', 壊す: 'ぶっかす', 殴る: 'ぶっくらす', 見つける: 'めっける|1', 降りる: 'おじる|1' },
  adjs: { かわいい: 'めごい', 柔らかい: 'やーこい', ずるい: 'すっこい' },
});
const TOCHIGI: Profile = mix(KANTO, {
  guess: 'べ', guessCop: 'だべ', yone: 'べ', copYone: 'だべ', vol: 'be', qKa: 'け', sou: 'ん', noda: 'んさ', nodaEnd: '',
  phrases: [['大丈夫', 'だいじ']],
  verbs: { 片付ける: 'かたす' },
  adjs: { 怖い: 'おっかない' },
});
const GUNMA: Profile = mix(KANTO, {
  guessCop: 'だんべえ', copYone: 'だんべえ', vol: 'be', be: 'べえ', copKara: 'だけい', kara: 'けい',
  phrases: [
    ['少し', 'ちっとんべえ'],
    ['もっと', 'まっと'],
  ],
  verbs: { 驚く: 'たまげる|1', 捨てる: 'ぶちゃる', 片付ける: 'かたす', 帰る: 'けえる', 押す: 'おっぺす' },
  adjs: { 柔らかい: 'やっこい' },
});

// ==================== 北海道・東北 ====================
const TOHOKU: Profile = {
  neg: 'ne', nai: 'ね', progNeg: ['てね', 'でね'], sou: 'ん',
  guess: 'べ', guessCop: 'だべ', yone: 'べ', copYone: 'だべ', vol: 'be',
};

const HOKKAIDO: Profile = {
  guess: 'べ', guessCop: 'だべ', guessPolite: 'っしょ', yone: 'っしょ', copYone: 'っしょ', vol: 'be',
  very: 'なまら', tired: 'こわい', suteru: 'nageru',
  phrases: [['じゃあね', 'したっけね']],
  verbs: { 頑張る: 'けっぱる' },
  adjs: { かわいい: 'めんこい', 冷たい: 'しゃっこい', もったいない: 'いたましい' },
};

const TSUGARU: Profile = mix(TOHOKU, {
  copKara: 'だはんで', kara: 'はんで', dakara: 'んだはんで', kedo: 'ばって', very: 'たげ', dame: 'まいね', suteru: 'nageru',
  must: 'ねばまいね', mustSuru: 'さ',
  phrases: [
    ['友達', 'けやぐ'],
    ['子供', 'わらし'],
    ['お金', 'じぇんこ'],
    ['少し', 'わんつか'],
    ['頑固者', 'じょっぱり'],
  ],
  verbs: { 歩く: 'あさぐ' },
  adjs: { かわいい: 'めごい', 冷たい: 'しゃっこい' },
});
const NANBU: Profile = mix(TOHOKU, { copKara: 'だすけ', kara: 'すけ', dakara: 'んだすけ', kedo: 'ども', dame: 'わがね' });
const MORIOKA: Profile = mix(TOHOKU, { ne: 'なはん' });
const AKITA: Profile = mix(TOHOKU, { copKara: 'だがら', kara: 'がら', dakara: 'んだがら', kedo: 'ども', dame: 'わがね' });
const YAMAGATA: Profile = mix(TOHOKU, { copYo: 'だず', copKara: 'だがら', kara: 'がら', kedo: 'ども' });
const SENDAI: Profile = mix(TOHOKU, {
  yone: 'っちゃ', copYone: 'だっちゃ', very: 'いぎなり', tired: 'こわい', suteru: 'nageru',
  phrases: [['少し', 'ぺっこ']],
  verbs: { 怒る: 'ごしゃぐ' },
  adjs: { 恥ずかしい: 'おしょすい', かわいい: 'めんこい', 冷たい: 'しゃっこい', 小さい: 'ちゃっこい' },
});
const FUKUSHIMA: Profile = mix(TOHOKU, {
  neg: 'nee', progNeg: ['てねえ', 'でねえ'], copKara: 'だがら', kara: 'がら', tired: 'こわい',
});
// 会津弁: 丁寧の「なし」（〜ですね）、「さすけね」（大丈夫）、「ねっか」（とても）、「したがら」（だから）
const AIZU: Profile = mix(TOHOKU, {
  neg: 'nee', progNeg: ['てねえ', 'でねえ'], copKara: 'だがら', kara: 'がら', dakara: 'したがら',
  copNe: 'だなし', desuNe: ['なし', 'だなし'], very: 'ねっか',
  phrases: [
    ['そうですね', 'んだなし'],
    ['大丈夫', 'さすけね', ADJ],
  ],
  verbs: { 走る: 'とぶ' },
  adjs: { かわいい: 'めごい', もったいない: 'いだましい' },
});

// ==================== 沖縄 ====================
const UCHINAA: Profile = { copYo: 'さー', yo: 'さー', very: 'でーじ', nodaKeep: true };

// ==================== キャラ口調 ====================
const OJOUSAMA: Profile = {
  cop: 'です', copEnd: 'ですわ', copYo: 'ですわよ', copNe: 'ですわね', copYone: 'ですわよね', copPast: 'でしたわ',
  copNeg: 'ではありませんわ', copNegFixed: true,
  desu: 'ですわ', masu: 'ますわ', plainEnd: 'わ', yo: 'わよ', ne: 'わね', yone: 'わよね', very: 'とっても',
  phrases: [
    ['ありがとうございます', 'ありがとう存じます'],
    ['こんにちは', 'ごきげんよう'],
    ['私', 'わたくし'],
  ],
};

const BUSHI: Profile = {
  cop: 'でござる', copYo: 'でござる', copNe: 'でござるな', copPast: 'でござった', copKara: 'ゆえ', kara: 'ゆえ', dakara: 'ゆえに',
  copNeg: 'ではござらぬ', copNegFixed: true,
  neg: 'nu', masen: 'ませぬ', prog: ['ておる', 'でおる'], progNeg: ['ておらぬ', 'でおらぬ'], progPast: ['ておった', 'でおった'],
  iru: 'おる', iruNeg: 'おらぬ', iruPast: 'おった', must: 'ねばならぬ',
  desu: 'でござる', masu: 'まする', yo: 'ぞ', plainEnd: 'でござる', guess: 'であろう', guessCop: 'であろう', very: 'たいそう',
  hontouni: 'まことに',
  phrases: [
    ['ありがとうございます', 'かたじけない'],
    ['ありがとう', 'かたじけない'],
    ['私', '拙者'],
    ['あなた', 'そなた'],
  ],
};

const OIRAN: Profile = {
  cop: 'でありんす', copPast: 'でありんした', desu: 'でありんす', masu: 'んす', masen: 'んせん',
  copNeg: 'ではありんせん', copNegFixed: true,
  phrases: [
    ['ありがとうございます', 'ありがとうござりんす'],
    ['私', 'わっち'],
    ['あなた', 'ぬし'],
  ],
};

const GYARU: Profile = { very: 'マジ', hontouni: 'ガチで', sugoi: 'ヤバい' };

const NEKO: Profile = {
  copEnd: 'だにゃ', copYo: 'だにゃ', copNe: 'だにゃ', yo: 'にゃ', ne: 'にゃ', plainEnd: 'にゃ', desu: 'ですにゃ', masu: 'ますにゃ',
  post: (s) => s.replace(/な/g, 'にゃ').replace(/ナ/g, 'ニャ'),
};

const UNSUPPORTED: Profile = { unsupported: true };

export const PROFILES: Record<string, Profile> = {
  hokkaido: HOKKAIDO, tsugaru: TSUGARU, nanbu: NANBU, morioka: MORIOKA, akita: AKITA, yamagata: YAMAGATA, sendai: SENDAI, fukushima: FUKUSHIMA,
  aizu: AIZU,
  ibaraki: IBARAKI, tochigi: TOCHIGI, gunma: GUNMA, edo: EDO,
  niigata: NIIGATA, nagano: NAGANO, koshu: KOSHU, toyama: TOYAMA, kanazawa: KANAZAWA, fukui: FUKUI,
  shizuoka: SHIZUOKA, enshu: ENSHU, mikawa: MIKAWA, nagoya: NAGOYA, gifu: GIFU, mie: MIE,
  osaka: KANSAI, kyoto: KYOTO, kobe: KOBE, banshu: BANSHU, nara: KANSAI, wakayama: KANSAI, omi: KANSAI, kawachi: KAWACHI, senshu: SENSHU,
  hiroshima: HIROSHIMA, okayama: OKAYAMA, yamaguchi: YAMAGUCHI, tottori: TOTTORI, izumo: IZUMO,
  sanuki: SANUKI, awa: AWA, iyo: IYO, tosa: TOSA,
  hakata: HAKATA, kitakyushu: KITAKYUSHU, saga: SAGA, nagasaki: NAGASAKI, chikugo: CHIKUGO, kumamoto: KUMAMOTO, oita: OITA,
  miyazaki: MIYAZAKI, satsuma: SATSUMA,
  uchinaa: UCHINAA, okinawa: UNSUPPORTED, miyako: UNSUPPORTED, yaeyama: UNSUPPORTED, hachijo: UNSUPPORTED,
  ojousama: OJOUSAMA, bushi: BUSHI, oiran: OIRAN, gyaru: GYARU, neko: NEKO,
};

export const isRuleSupported = (id: string) => !!PROFILES[id] && !PROFILES[id].unsupported;
