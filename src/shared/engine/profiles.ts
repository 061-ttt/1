import type { Profile } from './types';

/*
 * 方言プロファイル。
 * 各項目は「その地域で広く使われ、意味が変わらない」と判断できたものだけを入れている。
 * 判断できない項目は空のまま（＝共通語のまま残す）。
 */

const vowelAppend = (stem: string, vowel: string, eRow: string, iRow: string) =>
  vowel === 'i' ? stem + iRow : stem + eRow;

// ---------- 近畿 ----------
const KANSAI: Profile = {
  cop: 'や', copYo: 'やで', copNe: 'やな', copYone: 'やんな', copKara: 'やから', dakara: 'せやから', sou: 'せ',
  neg: 'hen', negSuru: 'せえへん', negKuru: 'けえへん', masen: 'まへん',
  prog: ['てる', 'でる'], progNeg: ['てへん', 'でへん'], progPast: ['てた', 'でた'],
  iruNeg: 'おらへん',
  shimauPast: ['てもうた', 'でもうた'], shimauPres: ['てまう', 'でまう'],
  yo: 'で', ne: 'なあ', yone: 'よな', qNo: 'ん', tag: 'やん',
  desuYo: 'でっせ', masuYo: 'まっせ', pNe: 'なあ',
  guess: 'やろ', guessCop: 'やろ', guessPolite: 'でっしゃろ', vol: 'drop',
  ii: 'ええ', very: 'めっちゃ', hayaku: 'はよ', dame: 'あかん', damePolite: 'あきまへん', tired: 'しんどい',
  chigau: true, hontou: 'ほんま', hontouni: 'ほんまに', suteru: 'hokasu',
  nasai: (stem) => `${stem}なはれ`,
  phrases: [
    ['ありがとうございます', 'おおきに'],
    ['ありがとう', 'おおきに'],
    ['そうですね', 'そうですなあ'],
  ],
};

const KYOTO: Profile = {
  ...KANSAI,
  copKara: 'やさかい', kara: 'さかい', dakara: 'そやさかい', sou: 'そ',
  negSuru: 'しいひん', negKuru: 'きいひん', iruNeg: 'いいひん',
  shimauPast: ['てしもた', 'でしもた'], shimauPres: undefined,
  yo: 'で', desu: 'どす', desuYo: undefined, masuYo: undefined, pYo: 'え', pNe: 'なあ', adjDesuKyoto: true,
  guessPolite: 'どすやろ', very: 'えらい',
  nasai: (stem) => `${stem}よし`, kudasai: 'おくれやす',
  phrases: [
    ['ありがとうございます', 'おおきに'],
    ['ありがとう', 'おおきに'],
    ['いらっしゃいませ', 'おいでやす'],
    ['そうですね', 'そうどすなあ'],
  ],
};

const KOBE: Profile = { ...KANSAI, prog: ['とう', 'どう'], progPast: ['とった', 'どった'] };
const BANSHU: Profile = { ...KANSAI, prog: ['とう', 'どう'], progPast: ['とった', 'どった'], very: 'ごっつ' };

const MIE: Profile = {
  cop: 'や', copYo: 'やに', copNe: 'やな', copKara: 'やで', kara: 'で', dakara: 'やで',
  neg: 'hen', negSuru: 'せえへん', hen1: 'やへん',
  prog: ['とる', 'どる'], progNeg: ['とらへん', 'どらへん'], progPast: ['とった', 'どった'],
  yo: 'に', ne: 'なあ', qNo: 'ん', guess: 'やろ', guessCop: 'やろ', tag: 'やん',
  ii: 'ええ', very: 'めっちゃ', hayaku: 'はよ', dame: 'あかん', tired: 'えらい', hontou: 'ほんま',
};

// ---------- 中国 ----------
const HIROSHIMA: Profile = {
  cop: 'じゃ', copYo: 'じゃけえ', copNe: 'じゃのう', copYone: 'じゃろ', copKara: 'じゃけえ', kara: 'けえ', dakara: 'じゃけえ', sou: 'ほう',
  neg: 'n', prog: ['とる', 'どる'], progNeg: ['とらん', 'どらん'], progPast: ['とった', 'どった'],
  iru: 'おる', iruNeg: 'おらん', iruPast: 'おった',
  shimauPast: ['てしもうた', 'でしもうた'],
  ne: 'のう', yone: 'じゃろ', qNo: 'ん', guess: 'じゃろ', guessCop: 'じゃろ', guessU: true, tag: 'じゃん',
  ii: 'ええ', very: 'ぶち', hayaku: 'はよ', dame: 'いけん', tired: 'えらい', bother: 'たいぎい', hontou: 'ほんま', hontouni: 'ほんまに',
  nasai: (stem) => `${stem}んさい`, kudasai: 'つかあさい',
};

const OKAYAMA: Profile = {
  ...HIROSHIMA,
  copNe: 'じゃなあ', ne: 'なあ', very: 'でーれー', dame: 'おえん', bother: undefined, nasai: undefined, kudasai: 'つかあせえ',
};

const YAMAGUCHI: Profile = {
  ...HIROSHIMA,
  copYo: 'っちゃ', copNe: 'じゃね', copKara: 'じゃけ', kara: 'け', dakara: 'じゃけ', sou: undefined,
  prog: ['ちょる', 'じょる'], progNeg: ['ちょらん', 'じょらん'], progPast: ['ちょった', 'じょった'],
  shimauPast: undefined, yo: 'っちゃ', ne: undefined, kudasai: undefined,
};

const TOTTORI: Profile = {
  copKara: 'だけぇ', kara: 'けぇ', dakara: 'だけぇ',
  neg: 'n', prog: ['とる', 'どる'], progNeg: ['とらん', 'どらん'], progPast: ['とった', 'どった'],
  iru: 'おる', iruNeg: 'おらん', iruPast: 'おった',
  guess: 'だら', guessCop: 'だら', ii: 'ええ', very: 'がいに', hayaku: 'はよ', dame: 'いけん',
};

const IZUMO: Profile = {
  ...TOTTORI,
  copKara: 'だけん', kara: 'けん', dakara: 'だけん',
  prog: ['ちょる', 'じょる'], progNeg: ['ちょらん', 'じょらん'], progPast: ['ちょった', 'じょった'],
  phrases: [
    ['ありがとうございます', 'だんだん'],
    ['ありがとう', 'だんだん'],
  ],
};

// ---------- 四国 ----------
const SHIKOKU: Profile = {
  neg: 'n', prog: ['とる', 'どる'], progNeg: ['とらん', 'どらん'], progPast: ['とった', 'どった'],
  iru: 'おる', iruNeg: 'おらん', iruPast: 'おった',
  kara: 'けん', qNo: 'ん', ii: 'ええ', hayaku: 'はよ', hontou: 'ほんま',
};

const SANUKI: Profile = {
  ...SHIKOKU,
  cop: 'や', copYo: 'やで', copNe: 'やな', copKara: 'やけん', dakara: 'やけん',
  yo: 'で', ne: 'なあ', guess: 'やろ', guessCop: 'やろ', very: 'がいに', dame: 'いかん', tag: 'やん',
};

const AWA: Profile = {
  ...SHIKOKU,
  cop: 'じゃ', copYo: 'じょ', copNe: 'じゃな', copKara: 'じゃけん', dakara: 'じゃけん',
  yo: 'じょ', ne: 'なあ', guess: 'じゃろ', guessCop: 'じゃろ', dame: 'あかん', tag: 'やん',
};

const IYO: Profile = {
  ...SHIKOKU,
  cop: 'じゃ', copNe: 'じゃね', copKara: 'じゃけん', dakara: 'じゃけん', sou: 'ほう',
  guess: 'じゃろ', guessCop: 'じゃろ', very: 'がいに', dame: 'いかん',
  phrases: [
    ['ありがとうございます', 'だんだん'],
    ['ありがとう', 'だんだん'],
  ],
};

const TOSA: Profile = {
  ...SHIKOKU,
  cop: 'や', copYo: 'やき', copNe: 'やね', copKara: 'やき', kara: 'き', dakara: 'やき',
  prog: ['ちゅう', 'じゅう'], progNeg: undefined, progPast: ['ちょった', 'じょった'],
  yo: 'ぜ', qNo: 'が', guess: 'やろ', guessCop: 'やろ', guessU: true, tag: 'やいか',
  ii: 'えい', dame: 'いかん', hontou: undefined, hontouni: 'まっこと',
};

// ---------- 九州 ----------
const HAKATA: Profile = {
  cop: 'や', copYo: 'ばい', copNe: 'やね', copYone: 'やろ', copKara: 'やけん', kara: 'けん', dakara: 'やけん', noda: 'と',
  kedo: 'ばってん',
  neg: 'n', prog: ['とる', 'どる'], progNeg: ['とらん', 'どらん'], progPast: ['とった', 'どった'],
  iru: 'おる', iruNeg: 'おらん', iruPast: 'おった',
  yo: 'ばい', yone: 'やろ', qNo: 'と', guess: 'やろ', guessCop: 'やろ', tag: 'やん',
  shimauPast: ['てしもうた', 'でしもうた'],
  adjKa: true, ii: 'よか', very: 'ばり', hayaku: 'はよ', dame: 'いかん', tired: 'きつか', noisy: 'せからしい',
  nasai: (stem) => `${stem}んしゃい`,
};

const KITAKYUSHU: Profile = {
  cop: 'や', copYo: 'っちゃ', copNe: 'やね', copYone: 'やろ', copKara: 'やけ', kara: 'け', dakara: 'やけ',
  neg: 'n', prog: ['ちょる', 'じょる'], progNeg: ['ちょらん', 'じょらん'], progPast: ['ちょった', 'じょった'],
  iru: 'おる', iruNeg: 'おらん', iruPast: 'おった',
  yo: 'っちゃ', yone: 'やろ', qNo: 'ん', guess: 'やろ', guessCop: 'やろ', tag: 'やん',
  very: 'ばり', hayaku: 'はよ', dame: 'いけん',
};

const SAGA: Profile = { ...HAKATA, tag: undefined, very: 'がばい', nasai: (stem) => `${stem}んさい` };
const NAGASAKI: Profile = { ...HAKATA, tag: undefined, very: 'ばさろ', nasai: undefined };

const KUMAMOTO: Profile = {
  ...HAKATA,
  cop: undefined, copYo: 'たい', copNe: undefined, copYone: 'だろ', copKara: 'だけん', dakara: 'だけん', noda: 'と', nodaEnd: 'たい',
  guess: undefined, guessCop: undefined, yone: undefined, tag: undefined,
  very: 'たいぎゃ', nasai: (stem) => `${stem}なっせ`,
};

const OITA: Profile = {
  cop: 'じゃ', copYo: 'じゃ', copKara: 'じゃけん', kara: 'けん', dakara: 'じゃけん',
  neg: 'n', prog: ['ちょる', 'じょる'], progNeg: ['ちょらん', 'じょらん'], progPast: ['ちょった', 'じょった'],
  iru: 'おる', iruNeg: 'おらん', iruPast: 'おった',
  yo: 'っちゃ', qNo: 'ん', guess: 'じゃろ', guessCop: 'じゃろ',
  very: 'しんけん', hayaku: 'はよ', dame: 'いけん', bother: 'よだきい',
};

const MIYAZAKI: Profile = {
  ...OITA,
  copYo: 'じゃっちゃ', copKara: 'じゃかい', kara: 'かい', dakara: 'じゃかい', qNo: 'と', very: 'てげ', dame: undefined,
};

const SATSUMA: Profile = {
  cop: 'じゃ', copYo: 'じゃっど', copKara: 'じゃっで', kara: 'で', dakara: 'じゃっで', kedo: 'どん', nodaKeep: true,
  neg: 'n', prog: ['ちょる', 'じょる'], progNeg: ['ちょらん', 'じょらん'], progPast: ['ちょった', 'じょった'],
  iru: 'おる', iruNeg: 'おらん', iruPast: 'おった',
  yo: 'ど', guess: 'じゃろ', guessCop: 'じゃろ',
  adjKa: true, ii: 'よか', very: 'わっぜ', hayaku: 'はよ',
  phrases: [
    ['ありがとうございます', 'あいがとさげもした'],
    ['ありがとう', 'あいがと'],
  ],
};

// ---------- 東海 ----------
const NAGOYA: Profile = {
  copYo: 'だがね', copKara: 'だで', kara: 'で', dakara: 'だで',
  neg: 'n', prog: ['とる', 'どる'], progNeg: ['とらん', 'どらん'], progPast: ['とった', 'どった'],
  iru: 'おる', iruNeg: 'おらん', iruPast: 'おった',
  yo: 'がね', vol: 'mai', ii: 'ええ', very: 'でら', hayaku: 'はよ', dame: 'いかん', tired: 'えらい',
  nasai: (stem, v) => vowelAppend(stem, v, 'やあ', 'ゃあ'),
};

const MIKAWA: Profile = {
  copYo: 'だに', copKara: 'だで', kara: 'で', dakara: 'だで',
  neg: 'n', prog: ['とる', 'どる'], progNeg: ['とらん', 'どらん'], progPast: ['とった', 'どった'],
  yo: 'に', yone: 'だら', guess: 'だら', guessCop: 'だら', tag: 'じゃん',
  dame: 'いかん', tired: 'えらい', nasai: (stem) => `${stem}りん`,
};

const ENSHU: Profile = {
  copYo: 'だに', copKara: 'だで', kara: 'で', dakara: 'だで',
  neg: 'n', prog: ['とる', 'どる'], progNeg: ['とらん', 'どらん'], progPast: ['とった', 'どった'],
  yo: 'に', yone: 'だら', guess: 'だら', guessCop: 'だら', tag: 'じゃん', very: 'ばか', tired: 'えらい',
};

const SHIZUOKA: Profile = {
  copYo: 'だに', copKara: 'だもんで', kara: 'もんで', dakara: 'だもんで',
  neg: 'n', yo: 'に', yone: 'だら', guess: 'だら', guessCop: 'だら', tag: 'じゃん', very: 'ばか', tired: 'えらい',
};

const GIFU: Profile = {
  cop: 'や', copYo: 'やお', copNe: 'やな', copKara: 'やで', kara: 'で', dakara: 'やで',
  neg: 'n', prog: ['とる', 'どる'], progNeg: ['とらん', 'どらん'], progPast: ['とった', 'どった'],
  iru: 'おる', iruNeg: 'おらん', iruPast: 'おった',
  guess: 'やろ', guessCop: 'やろ', ii: 'ええ', hayaku: 'はよ', dame: 'あかん', tired: 'えらい',
};

// ---------- 北陸・甲信越 ----------
const HOKURIKU: Profile = {
  cop: 'や', copNe: 'やね', neg: 'n', prog: ['とる', 'どる'], progNeg: ['とらん', 'どらん'], progPast: ['とった', 'どった'],
  iru: 'おる', iruNeg: 'おらん', iruPast: 'おった', qNo: 'が', guess: 'やろ', guessCop: 'やろ', sou: 'ほ',
};

const TOYAMA: Profile = {
  ...HOKURIKU, copYo: 'やちゃ', copKara: 'やさかい', kara: 'さかい', dakara: 'ほやさかい', yo: 'ちゃ',
};
const KANAZAWA: Profile = {
  ...HOKURIKU, copYo: 'やぞ', copKara: 'やさけ', kara: 'さけ', dakara: 'ほやさけ', tag: 'がいね', very: 'まんで',
  nasai: (stem) => `${stem}まっし`,
};
const FUKUI: Profile = {
  ...HOKURIKU, copYo: 'やざ', copNe: 'やのー', copKara: 'やで', kara: 'で', dakara: 'ほやで', yo: 'ざ', ne: 'のー', dame: 'あかん',
};

const NIIGATA: Profile = { copYo: 'だて', copKara: 'だすけ', kara: 'すけ', dakara: 'だすけ', very: 'がんこ' };
const NAGANO: Profile = {
  copYo: 'だに', copKara: 'だで', kara: 'で', dakara: 'だで', yo: 'に', yone: 'ずら', guess: 'ずら', guessCop: 'ずら',
};
const KOSHU: Profile = { yone: 'ずら', copYone: 'ずら', guess: 'ずら', guessCop: 'ずら', tag: 'じゃん' };

// ---------- 関東 ----------
const KANTO: Profile = {
  neg: 'nee', adjEe: true, nai: 'ねえ', progNeg: ['てねえ', 'でねえ'],
};
const EDO: Profile = { ...KANTO, shimauPast: ['ちまった', 'じまった'], shimauPres: ['ちまう', 'じまう'], very: 'えらく' };
const IBARAKI: Profile = {
  ...KANTO, guess: 'っぺ', guessCop: 'だっぺ', yone: 'っぺ', copYone: 'だっぺ', vol: 'ppe',
};
const TOCHIGI: Profile = { ...KANTO, guess: 'べ', guessCop: 'だべ', yone: 'べ', copYone: 'だべ', vol: 'be' };
const GUNMA: Profile = { ...KANTO, guess: 'べ', guessCop: 'だんべ', yone: 'べ', copYone: 'だんべ', vol: 'be' };

// ---------- 北海道・東北 ----------
const TOHOKU: Profile = {
  neg: 'ne', nai: 'ね', progNeg: ['てね', 'でね'],
  guess: 'べ', guessCop: 'だべ', yone: 'べ', copYone: 'だべ', vol: 'be',
};

const HOKKAIDO: Profile = {
  guess: 'べ', guessCop: 'だべ', guessPolite: 'っしょ', yone: 'っしょ', copYone: 'っしょ', vol: 'be',
  very: 'なまら', tired: 'こわい', suteru: 'nageru',
  phrases: [['じゃあね', 'したっけね']],
};

const TSUGARU: Profile = {
  ...TOHOKU, copKara: 'だはんで', kara: 'はんで', dakara: 'んだはんで', kedo: 'ばって', very: 'たげ', dame: 'まいね', suteru: 'nageru',
};
const NANBU: Profile = { ...TOHOKU, copKara: 'だすけ', kara: 'すけ', dakara: 'んだすけ', kedo: 'ども', dame: 'わがね' };
const MORIOKA: Profile = { ...TOHOKU, ne: 'なはん' };
const AKITA: Profile = { ...TOHOKU, copKara: 'だすけ', kara: 'すけ', dakara: 'んだすけ', kedo: 'ども', dame: 'わがね' };
const YAMAGATA: Profile = { ...TOHOKU, copYo: 'だず', copKara: 'だがら', kara: 'がら', kedo: 'ども' };
const SENDAI: Profile = { ...TOHOKU, copYo: 'だっちゃ', very: 'いぎなり' };
const FUKUSHIMA: Profile = {
  ...TOHOKU, neg: 'nee', progNeg: ['てねえ', 'でねえ'], copKara: 'だがら', kara: 'がら', tired: 'こわい',
};

// ---------- 沖縄 ----------
const UCHINAA: Profile = { copYo: 'さー', yo: 'さー', very: 'でーじ', nodaKeep: true };

// ---------- キャラ口調 ----------
const OJOUSAMA: Profile = {
  cop: 'です', copEnd: 'ですわ', copYo: 'ですわよ', copNe: 'ですわね', copYone: 'ですわよね', copPast: 'でしたわ',
  desu: 'ですわ', masu: 'ますわ', plainEnd: 'わ', yo: 'わよ', ne: 'わね', yone: 'わよね', very: 'とっても',
  phrases: [
    ['ありがとうございます', 'ありがとう存じます'],
    ['こんにちは', 'ごきげんよう'],
    ['私', 'わたくし'],
  ],
};

const BUSHI: Profile = {
  cop: 'でござる', copYo: 'でござる', copNe: 'でござるな', copPast: 'でござった', copKara: 'ゆえ', kara: 'ゆえ', dakara: 'ゆえに',
  neg: 'nu', masen: 'ませぬ', prog: ['ておる', 'でおる'], progNeg: ['ておらぬ', 'でおらぬ'], progPast: ['ておった', 'でおった'],
  iru: 'おる', iruNeg: 'おらぬ', iruPast: 'おった',
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
  ibaraki: IBARAKI, tochigi: TOCHIGI, gunma: GUNMA, edo: EDO,
  niigata: NIIGATA, nagano: NAGANO, koshu: KOSHU, toyama: TOYAMA, kanazawa: KANAZAWA, fukui: FUKUI,
  shizuoka: SHIZUOKA, enshu: ENSHU, mikawa: MIKAWA, nagoya: NAGOYA, gifu: GIFU, mie: MIE,
  osaka: KANSAI, kyoto: KYOTO, kobe: KOBE, banshu: BANSHU, nara: KANSAI, wakayama: KANSAI, omi: KANSAI,
  hiroshima: HIROSHIMA, okayama: OKAYAMA, yamaguchi: YAMAGUCHI, tottori: TOTTORI, izumo: IZUMO,
  sanuki: SANUKI, awa: AWA, iyo: IYO, tosa: TOSA,
  hakata: HAKATA, kitakyushu: KITAKYUSHU, saga: SAGA, nagasaki: NAGASAKI, kumamoto: KUMAMOTO, oita: OITA, miyazaki: MIYAZAKI, satsuma: SATSUMA,
  uchinaa: UCHINAA, okinawa: UNSUPPORTED, miyako: UNSUPPORTED, yaeyama: UNSUPPORTED, hachijo: UNSUPPORTED,
  ojousama: OJOUSAMA, bushi: BUSHI, oiran: OIRAN, gyaru: GYARU, neko: NEKO,
};

export const isRuleSupported = (id: string) => !!PROFILES[id] && !PROFILES[id].unsupported;
