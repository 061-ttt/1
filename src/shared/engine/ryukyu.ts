/**
 * 琉球諸語（沖縄語・宮古語・八重山語）への変換。
 *
 * 琉球諸語は日本語と文法・語彙が大きく異なるため、語尾を置き換えるだけの方言変換では正しくならない。
 * そこで「文全体を辞書と文法で訳せたときだけ」訳文を返し、1 語でも訳せない語があれば訳さずに、
 * 訳せなかった語を返す（共通語と琉球語が混ざった、どちらでもない文を作らない）。
 *
 * - 沖縄語（首里・那覇）: 動詞・形容詞・断定（やん）を活用させ、助詞（や・ぬ・んかい・うてぃ…）を付け替える
 * - 宮古語・八重山語: 文法の資料が限られるため、確かめられた決まった挨拶だけを訳す
 *
 * 主な出典:
 * - JLect（日琉諸語辞典）の各見出し（いちゅん・ちゅーん・すん・ぬむん・あん・やん・わん など）
 *   活用は Funatsu (1988), Sakihara (2006), Shizato & Iwasaki (2024) に基づく
 * - Wikipedia「沖縄語」（活用の仕組み: 丁寧形 = 連用語幹＋abiiN、形容詞 タカサン／タカサタン／タカサイビーン）
 * - 沖縄県「しまくとぅば読本」、空港の歓迎表示（めんそーれ・んみゃーち・おーりとーり）
 */
import { toHira } from './kana';
import type { Tok, Tokenize } from './types';

export const RYUKYU_IDS = ['okinawa', 'miyako', 'yaeyama'] as const;
export type RyukyuId = (typeof RYUKYU_IDS)[number];
export const isRyukyu = (id: string): id is RyukyuId => (RYUKYU_IDS as readonly string[]).includes(id);

export interface RyukyuResult {
  /** 訳文。訳せなかったときは null */
  text: string | null;
  /** 訳せなかった語（共通語の表記） */
  missing: string[];
}

/* ==================== 沖縄語の辞書 ==================== */

/** 動詞。pol は丁寧形の語幹（＋びーん）、prog は「〜ている」 */
interface Verb {
  dict: string;
  past: string;
  neg: string;
  te: string;
  ren: string;
  pol: string;
  prog?: string;
  /** はい・いいえで答える疑問（現在） */
  q?: string;
  /** はい・いいえで答える疑問（過去） */
  qPast?: string;
}

const v = (dict: string, past: string, neg: string, te: string, ren: string, pol: string, extra: Partial<Verb> = {}): Verb => ({
  dict, past, neg, te, ren, pol, ...extra,
});

/** 共通語の基本形 → 沖縄語の動詞 */
const VERBS: Record<string, Verb> = {
  // 不規則（JLect: いちゅん・ちゅーん・すん）
  行く: v('いちゅん', 'んじゃん', 'いかん', 'んじ', 'いち', 'いちゃ', { prog: 'んじょーん', q: 'いちゅみ', qPast: 'んじー' }),
  来る: v('ちゅーん', 'ちゃん', 'くーん', 'っち', 'ちー', 'ちゃー', { prog: 'ちょーん', q: 'ちゅーみ', qPast: 'っちー' }),
  する: v('すん', 'さん', 'さん', 'っし', 'しー', 'さ', { prog: 'そーん' }),
  // m 語幹（JLect: ぬむん → ぬだん・ぬまん・ぬでぃ・ぬみ・ぬまびーん・ぬむみ・ぬでぃー）
  飲む: v('ぬむん', 'ぬだん', 'ぬまん', 'ぬでぃ', 'ぬみ', 'ぬま', { prog: 'ぬどーん', q: 'ぬむみ', qPast: 'ぬでぃー' }),
  食べる: v('かむん', 'かだん', 'かまん', 'かでぃ', 'かみ', 'かま', { prog: 'かどーん', q: 'かむみ', qPast: 'かでぃー' }),
  読む: v('ゆむん', 'ゆだん', 'ゆまん', 'ゆでぃ', 'ゆみ', 'ゆま', { prog: 'ゆどーん', q: 'ゆむみ', qPast: 'ゆでぃー' }),
  遊ぶ: v('あしぶん', 'あしだん', 'あしばん', 'あしでぃ', 'あしび', 'あしば', { prog: 'あしどーん' }),
  // k 語幹（Wikipedia: kacuN・kacaN・kakaN・kaci・kacabiiN）
  書く: v('かちゅん', 'かちゃん', 'かかん', 'かち', 'かち', 'かちゃ', { prog: 'かちょーん', q: 'かちゅみ' }),
  聞く: v('ちちゅん', 'ちちゃん', 'ちかん', 'ちち', 'ちち', 'ちちゃ', { prog: 'ちちょーん', q: 'ちちゅみ' }),
  歩く: v('あっちゅん', 'あっちゃん', 'あっかん', 'あっち', 'あっち', 'あっちゃ', { prog: 'あっちょーん' }),
  働く: v('はたらちゅん', 'はたらちゃん', 'はたらかん', 'はたらち', 'はたらち', 'はたらちゃ', { prog: 'はたらちょーん' }),
  // r 語幹（Wikipedia: tuiN・tuQtaN・turaN・tuQti・tujabiiN）
  取る: v('とぅいん', 'とぅたん', 'とぅらん', 'とぅてぃ', 'とぅい', 'とぅや', { prog: 'とぅとーん' }),
  帰る: v('けーいん', 'けーたん', 'けーらん', 'けーてぃ', 'けーい', 'けーや', { prog: 'けーとーん' }),
  分かる: v('わかいん', 'わかたん', 'わからん', 'わかてぃ', 'わかい', 'わかや', { prog: 'わかとーん' }),
  降る: v('ふいん', 'ふたん', 'ふらん', 'ふてぃ', 'ふい', 'ふや', { prog: 'ふとーん' }),
  作る: v('ちゅくいん', 'ちゅくたん', 'ちゅくらん', 'ちゅくてぃ', 'ちゅくい', 'ちゅくや', { prog: 'ちゅくとーん' }),
  // 存在（JLect: あん・あたん・ねーん・あいびーん）
  ある: v('あん', 'あたん', 'ねーん', 'あてぃ', 'あい', 'あい'),
  いる: v('をぅん', 'をぅたん', 'をぅらん', 'をぅてぃ', 'をぅい', 'をぅい'),
  // s 語幹・t 語幹
  話す: v('はなすん', 'はなちゃん', 'はなさん', 'はなち', 'はなし', 'はなさ', { prog: 'はなちょーん' }),
  待つ: v('まちゅん', 'まっちゃん', 'またん', 'まっち', 'まち', 'また', { prog: 'まっちょーん' }), // JLect: matabiin
  // その他
  見る: v('んーじゅん', 'んーちゃん', 'んーだん', 'んーち', 'んーじ', 'んーじゃ', { prog: 'んーちょーん' }),
  寝る: v('にんじゅん', 'にんたん', 'にんだん', 'にんてぃ', 'にんじ', 'にんじゃ', { prog: 'にんとーん' }),
  起きる: v('うきゆん', 'うきたん', 'うきらん', 'うきてぃ', 'うきー', 'うきや', { prog: 'うきとーん' }),
  買う: v('こーいん', 'こーたん', 'こーらん', 'こーてぃ', 'こーい', 'こーや', { prog: 'こーとーん' }),
  会う: v('いちゃゆん', 'いちゃたん', 'いちゃらん', 'いちゃてぃ', 'いちゃい', 'いちゃや', { prog: 'いちゃとーん' }),
};

/** 形容詞: [語幹（＋さん）, 否定の語幹（＋こーねーん）。不明なら null] */
const ADJS: Record<string, [string, string | null]> = {
  暑い: ['あち', 'あち'],
  熱い: ['あち', 'あち'],
  寒い: ['ひー', 'ひー'],
  高い: ['たか', 'たか'],
  安い: ['やっ', null],
  おいしい: ['まー', null],
  美味しい: ['まー', null],
  うまい: ['まー', null],
  美しい: ['ちゅら', 'ちゅら'],
  きれい: ['ちゅら', 'ちゅら'],
  綺麗: ['ちゅら', 'ちゅら'],
  大きい: ['まぎ', 'まぎ'],
  小さい: ['ぐま', 'ぐま'], // JLect: gumasan
  多い: ['うふ', 'うふ'],
  いい: ['ゆた', null],
  良い: ['ゆた', null],
  よい: ['ゆた', null],
  悪い: ['わっ', null],
  嬉しい: ['うっ', null],
  うれしい: ['うっ', null],
  早い: ['ふぇー', null],
  速い: ['ふぇー', null],
  遠い: ['とぅー', null],
  近い: ['ちか', null],
};

/** 名詞。h は人（主語に「が」を使う。人以外は「ぬ」） */
/** h: 主語に「が」（代名詞・親族名称。ほかの名詞は「ぬ」）、ga: 主語の形、gen: 連体の「の」 */
interface Noun { w: string; h?: true; place?: true; time?: true; ga?: string; gen?: string }
const n = (w: string, o: Omit<Noun, 'w'> = {}): Noun => ({ w, ...o });
const H = { h: true } as const;
const P = { place: true } as const;
const T = { time: true } as const;

const NOUNS: Record<string, Noun> = {
  // 「私が」は わーが（Wikipedia 英語版・琉球新報）
  私: n('わん', { h: true, ga: 'わーが' }), わたし: n('わん', { h: true, ga: 'わーが' }), 僕: n('わん', { h: true, ga: 'わーが' }), ぼく: n('わん', { h: true, ga: 'わーが' }), 俺: n('わん', { h: true, ga: 'わーが' }),
  あなた: n('うんじゅ', H), 君: n('やー', H), きみ: n('やー', H), お前: n('やー', H),
  誰: n('たー', H),
  // 指示代名詞の連体は「が」（ありが〜。琉球新報）
  これ: n('くり', { gen: 'が' }), それ: n('うり', { gen: 'が' }), あれ: n('あり', { gen: 'が' }),
  ここ: n('くま', P), そこ: n('うま', P), あそこ: n('あま', P),
  何: n('ぬー'), なに: n('ぬー'), どこ: n('まー', P),
  今日: n('ちゅー', T), 明日: n('あちゃー', T), 昨日: n('ちぬー', T), 今: n('なま', T), 朝: n('あさ', T), 夜: n('ゆる', T),
  時間: n('じかん'),
  雨: n('あみ'), 水: n('みじ'), 海: n('うみ', P), 空: n('てぃん'), 太陽: n('てぃーだ'), 花: n('はな'),
  家: n('やー', P), うち: n('やー', P), 名前: n('なー'), 家族: n('やーにんじゅ'),
  子ども: n('わらび'), 子供: n('わらび'), 友達: n('どぅし'), 友だち: n('どぅし'),
  先生: n('しんしー'), 人: n('っちゅ'), 男: n('いきが'), 女: n('いなぐ'),
  母: n('あんまー', H), お母さん: n('あんまー', H),
  学校: n('がっこー', P), 沖縄: n('うちなー', P), 東京: n('とーちょー', P),
  猫: n('まやー'), 犬: n('いん'), 鳥: n('とぅい'), 魚: n('いゆ'),
  酒: n('さき'), お酒: n('さき'), 茶: n('ちゃ'), お茶: n('ちゃ'),
  心: n('ちむ'), 頭: n('ちぶる'), 手: n('てぃー'), 目: n('みー'), 口: n('くち'), 足: n('ひさ'), 髪: n('からじ'),
  船: n('ふに'), 本: n('しむち'), 三線: n('さんしん'), 勉強: n('びんちょー'), 元気: n('がんじゅー'),
};

/** 疑問詞（文末は「〜が」になる） */
const WH = new Set(['ぬー', 'まー', 'たー']);

const ADVERBS: Record<string, string> = {
  とても: 'いっぺー',
  本当に: 'じゅんに',
  ほんとうに: 'じゅんに',
  もう: 'なー',
  早く: 'ふぇーく',
  一緒に: 'まじゅん',
};

const PRENOUN: Record<string, string> = { この: 'くぬ', その: 'うぬ', あの: 'あぬ' };
const INTERJ: Record<string, string> = { はい: 'うー', いいえ: 'うーうー' };

/** 決まった言い方（ひらがなに直した表層で一致） */
const OKINAWA_PHRASES: [string, string][] = [
  ['ありがとうございました', 'にふぇーでーびたん'],
  ['ありがとうございます', 'にふぇーでーびる'],
  ['ありがとう', 'にふぇーでーびる'],
  ['こんにちは', 'ちゅーうがなびら'],
  ['いらっしゃいませ', 'めんそーれ'],
  ['いらっしゃい', 'めんそーれ'],
  ['ようこそ', 'めんそーれ'],
  ['いただきます', 'くゎっちーさびら'],
  ['ごちそうさまでした', 'くゎっちーさびたん'],
  ['ごちそうさま', 'くゎっちーさびたん'],
  ['がんばって', 'ちばりよー'],
  ['がんばれ', 'ちばりよー'],
  ['げんきですか', 'ちゃーがんじゅーやいびーみ'],
  ['ごめんなさい', 'わっさいびーん'],
  ['なんとかなる', 'なんくるないさ'],
];

/* ==================== 音の変化 ==================== */

const ROWS: Record<string, string> = {
  あ: 'あいうえお', か: 'かきくけこ', が: 'がぎぐげご', さ: 'さしすせそ', ざ: 'ざじずぜぞ', た: 'たちつてと',
  だ: 'だぢづでど', な: 'なにぬねの', は: 'はひふへほ', ば: 'ばびぶべぼ', ぱ: 'ぱぴぷぺぽ', ま: 'まみむめも',
  や: 'やいゆえよ', ら: 'らりるれろ', わ: 'わいうえを',
};

/**
 * 主題の「や」との融合（ワン＋ヤ→ワンネー、クリ＋ヤ→クレー、ハナ＋ヤ→ハナー、ウチナー＋ヤ→ウチナーヤ）。
 * 語末が母音だけの拍（〜い・〜う）や長音のときは融合させず「や」を付ける。
 */
function topic(w: string): string {
  if (w.endsWith('ん')) return w + 'ねー';
  if (w.endsWith('ー') || /[あいうえお]$/.test(w)) return w + 'や';
  const last = w.slice(-1);
  if (/[ゃゅょぁぃぅぇぉ]/.test(last)) {
    const head = w.slice(0, -1);
    if (last === 'ゃ') return w + 'ー';
    if (last === 'ゅ') return head + 'ょー'; // ちゅ→ちょー
    if (last === 'ぅ') return head + 'ー'; // とぅ→とー、どぅ→どー
    if (last === 'ぃ' && /[てで]$/.test(head)) return head + 'ー'; // てぃ→てー
    return w + 'や';
  }
  // ち・し・じ は「ちぇー・しぇー・じぇー」（クチ＋ヤ→クチェー）
  const palatal: Record<string, string> = { ち: 'ちぇ', し: 'しぇ', じ: 'じぇ' };
  if (palatal[last]) return w.slice(0, -1) + palatal[last] + 'ー';
  for (const row of Object.values(ROWS)) {
    const i = row.indexOf(last);
    if (i < 0) continue;
    if (i === 0) return w + 'ー';
    if (i === 1) return w.slice(0, -1) + row[3] + 'ー';
    if (i === 2) return w.slice(0, -1) + row[4] + 'ー';
    return w + 'や';
  }
  return w + 'や';
}

/** 「〜も」（ワン＋ン→ワンニン） */
const also = (w: string) => (w.endsWith('ん') ? w + 'にん' : w + 'ん');

/* ==================== 沖縄語の変換 ==================== */

type Fail = { missing: string };
const isFail = (x: unknown): x is Fail => typeof x === 'object' && x !== null && 'missing' in x;

const PUNCT: Record<string, string> = { '。': '。', '、': '、', '！': '！', '!': '！', '？': '？', '?': '？', '．': '。', '，': '、' };

/** 動詞の連体形（ぬむん→ぬむる） */
const attr = (dictOrPast: string) => dictOrPast.replace(/ん$/, 'る');

function convertOkinawaLine(T: Tok[]): RyukyuResult {
  const words: string[] = [];
  const missing: string[] = [];
  const hasWh = T.some((t) => WH.has(NOUNS[t.base]?.w ?? NOUNS[t.s]?.w ?? ''));
  const s = (k: number) => T[k]?.s ?? '';
  const b = (k: number) => T[k]?.base ?? '';
  const isEnd = (k: number) => k >= T.length || T[k].pos === '記号';
  /** 文末の「か・の・？」があるか */
  const askAt = (k: number) => (s(k) === 'か' || s(k) === 'の') && T[k].p1.includes('終助詞') ? 1 : 0;
  const question = (k: number) => askAt(k) > 0 || s(k) === '？' || s(k) === '?';

  const attach = (suffix: string) => {
    words[words.length - 1] += suffix;
  };

  let i = 0;
  while (i < T.length) {
    const t = T[i];

    // 句読点
    if (t.pos === '記号') {
      const p = PUNCT[t.s];
      if (p === undefined) return { text: null, missing: [t.s] };
      if (words.length) attach(p);
      else words.push(p);
      i++;
      continue;
    }

    // 決まった言い方
    let matched = false;
    for (const [from, to] of OKINAWA_PHRASES) {
      // 表層（ひらがな）でも読みでも一致を見る（「頑張って」「元気ですか」）
      let acc = '', accRead = '', k = i;
      while (k < T.length && Math.min(acc.length, accRead.length) < from.length) {
        acc += toHira(T[k].s);
        accRead += toHira(T[k].read);
        k++;
        if (acc === from || accRead === from) break;
      }
      if (acc === from || accRead === from) {
        words.push(to);
        i = k;
        matched = true;
        break;
      }
    }
    if (matched) continue;

    // 副詞（「本当に」は 1 語で切られる。「早く」は形容詞の連用形）
    if (ADVERBS[t.s] && (t.pos === '副詞' || t.pos === '形容詞' || t.pos === '名詞')) {
      if (t.pos === '名詞' && s(i + 1) === 'に' && ADVERBS[t.s + 'に']) {
        words.push(ADVERBS[t.s + 'に']);
        i += 2;
        continue;
      }
      if (t.pos !== '名詞') {
        words.push(ADVERBS[t.s]);
        i++;
        continue;
      }
    }
    if (t.pos === '名詞' && s(i + 1) === 'に' && ADVERBS[t.s + 'に']) {
      words.push(ADVERBS[t.s + 'に']);
      i += 2;
      continue;
    }

    if (t.pos === '連体詞' && PRENOUN[t.s]) {
      words.push(PRENOUN[t.s]);
      i++;
      continue;
    }
    if (t.pos === '感動詞' && INTERJ[t.s]) {
      words.push(INTERJ[t.s]);
      i++;
      continue;
    }

    // 形容動詞（きれいだ → ちゅらさん）
    if (t.pos === '名詞' && t.p1 === '形容動詞語幹' && ADJS[t.base]) {
      const r = adjPredicate(ADJS[t.base], i + 1, true);
      if (isFail(r)) { missing.push(r.missing); break; }
      words.push(r.w);
      i = r.next;
      continue;
    }

    // 接頭辞「お・ご」（お酒・お茶）は名詞と合わせて辞書を引く
    if (t.pos === '接頭詞' && T[i + 1]?.pos === '名詞' && (NOUNS[t.s + s(i + 1)] || NOUNS[s(i + 1)])) {
      i++;
      const r = nounPhrase(i, NOUNS[t.s + s(i)]);
      if (isFail(r)) { missing.push(r.missing); break; }
      words.push(...r.words);
      i = r.next;
      continue;
    }

    if (t.pos === '名詞') {
      const r = nounPhrase(i);
      if (isFail(r)) { missing.push(r.missing); break; }
      words.push(...r.words);
      i = r.next;
      continue;
    }
    if (t.pos === '動詞') {
      const r = verbPredicate(i);
      if (isFail(r)) { missing.push(r.missing); break; }
      words.push(r.w);
      i = r.next;
      continue;
    }
    if (t.pos === '形容詞') {
      const a = ADJS[t.base];
      if (!a) { missing.push(t.base); break; }
      const r = adjPredicate(a, i, false);
      if (isFail(r)) { missing.push(r.missing); break; }
      words.push(r.w);
      i = r.next;
      continue;
    }
    missing.push(t.s);
    break;
  }
  if (missing.length) return { text: null, missing };
  return { text: words.join(' ').replace(/ (?=[。、！？])/g, '').replace(/([。、！？]) /g, '$1'), missing: [] };

  /* ---------- 名詞句（名詞＋助詞、または名詞＋断定） ---------- */
  function nounPhrase(i0: number, given?: Noun): { words: string[]; next: number } | Fail {
    const t = T[i0];
    let w: string;
    let noun: Noun | undefined = given ?? NOUNS[t.s] ?? NOUNS[t.base];
    // 「お茶」「お母さん」は 1 語、「友だち」は 2 語に切られることがある
    let k = i0 + 1;
    if (!noun && T[i0 + 1]?.pos === '名詞' && NOUNS[t.s + s(i0 + 1)]) {
      noun = NOUNS[t.s + s(i0 + 1)];
      k = i0 + 2;
    }
    if (noun) w = noun.w;
    else if (t.p1 === '数' || t.p1 === '固有名詞' && t.s !== '沖縄' && t.s !== '東京') {
      // 人名・地名・数は訳さずにそのまま
      w = t.s;
      noun = { w, h: t.p1 === '固有名詞' ? undefined : undefined };
    } else return { missing: t.s };

    // サ変名詞＋する（勉強する → びんちょー すん）
    if (T[k]?.pos === '動詞' && b(k) === 'する') {
      const r = verbPredicate(k);
      if (isFail(r)) return r;
      return { words: [w + ' ' + r.w], next: r.next };
    }

    const p = s(k);
    const pT = T[k];
    if (pT?.pos === '助詞') {
      switch (p) {
        case 'は':
          return { words: [topic(w)], next: k + 1 };
        case 'が':
          if (pT.p1 === '格助詞') return { words: [noun.ga ?? w + (noun.h ? 'が' : 'ぬ')], next: k + 1 };
          break;
        case 'の':
          if (pT.p1 === '連体化') return { words: [w + (noun.gen ?? 'ぬ')], next: k + 1 };
          break;
        case 'を':
          return { words: [w], next: k + 1 };
        case 'に':
        case 'へ':
          if (noun.time) return { missing: w === noun.w ? t.s + p : p };
          return { words: [w + 'んかい'], next: k + 1 };
        case 'で':
          if (pT.p1 === '格助詞' && noun.place) return { words: [w + 'うてぃ'], next: k + 1 };
          break;
        case 'も':
          return { words: [also(w)], next: k + 1 };
        case 'と':
          if (pT.p1 === '格助詞' || pT.p1 === '並立助詞') return { words: [w + 'とぅ'], next: k + 1 };
          break;
        case 'から':
          return { words: [w + 'から'], next: k + 1 };
        case 'まで':
          return { words: [w + 'までぃ'], next: k + 1 };
        case 'より':
          return { words: [w + 'ゆか'], next: k + 1 };
        case 'じゃ':
        case 'で': {
          // 名詞の否定（〜じゃない・〜ではない・〜ではありません）
          const r = copulaNeg(w, k);
          if (r) return r;
          break;
        }
      }
      if (p === 'で' && s(k + 1) === 'は') {
        const r = copulaNeg(w, k);
        if (r) return r;
      }
      if (p === 'よ' || p === 'ね' || p === 'か') {
        const r = copula(w, k);
        if (isFail(r)) return r;
        return { words: [r.w], next: r.next };
      }
      return { missing: p };
    }
    if (pT?.pos === '助動詞' || isEnd(k)) {
      const r = copula(w, k);
      if (isFail(r)) return r;
      return { words: [r.w], next: r.next };
    }
    // 助詞なしで続く（今日 行く、など）
    if (noun.time) return { words: [w], next: k };
    return { missing: t.s + p };
  }

  /** 名詞＋断定（だ・です・だった・でした・だろう・か） */
  function copula(w: string, k: number): { w: string; next: number } | Fail {
    const wh = WH.has(w);
    const p = s(k), p2 = s(k + 1);
    if (isEnd(k)) {
      // 「何？」のような体言止めの疑問は 名詞＋が（JLect: ふろー まーが？）
      if (question(k)) return hasWh ? { w: w + 'が', next: k } : { missing: 'か' };
      return { w, next: k };
    }
    if (p === 'だ' && T[k].cform === '基本形') {
      if (s(k + 1) === 'よ') return { w: w + ' やんどー', next: k + 2 };
      if (s(k + 1) === 'ね') return { missing: 'だね' };
      return { w: w + ' やん', next: k + 1 };
    }
    if (p === 'です') {
      if (askAt(k + 1) || p2 === '？') return { w: w + (hasWh || wh ? ' やいびーが' : ' やいびーみ'), next: k + 1 + askAt(k + 1) };
      if (p2 === 'よ' || p2 === 'ね') return { missing: 'です' + p2 };
      return { w: w + ' やいびーん', next: k + 1 };
    }
    if (p === 'だっ' && p2 === 'た') return { w: w + ' やたん', next: k + 2 };
    if (p === 'でし' && p2 === 'た') return { w: w + ' やいびーたん', next: k + 2 }; // JLect: yaibiitan
    if (p === 'だろ' && p2 === 'う') return { w: w + ' やるはじ', next: k + 2 };
    if (p === 'よ' && T[k].p1.includes('終助詞')) return { w: w + ' やんどー', next: k + 1 };
    // 普通体の名詞の疑問は、疑問詞のある文だけ（名詞＋が）
    if ((p === 'か' || p === 'の') && T[k].p1.includes('終助詞') && (hasWh || wh)) return { w: w + 'が', next: k + 1 };
    return { missing: p };
  }

  /** 名詞の否定。「や」と融合した形＋あらん（JLect: warabaa arantan） */
  function copulaNeg(w: string, k: number): { words: string[]; next: number } | null {
    // じゃ ない / で は ない / じゃ なかっ た / で は あり ませ ん
    let j = k + 1;
    if (s(k) === 'で' && s(j) === 'は') j++;
    if (s(j) === 'ない') return { words: [topic(w) + ' あらん'], next: j + 1 };
    if (s(j) === 'なかっ' && s(j + 1) === 'た') return { words: [topic(w) + ' あらんたん'], next: j + 2 };
    if (s(j) === 'あり' && s(j + 1) === 'ませ' && s(j + 2) === 'ん') return { words: [topic(w) + ' あやびらん'], next: j + 3 };
    return null;
  }

  /* ---------- 動詞 ---------- */
  function verbPredicate(i0: number): { w: string; next: number } | Fail {
    const t = T[i0];
    const V = VERBS[t.base];
    if (!V) return { missing: t.base };
    let k = i0 + 1;
    const nx = () => s(k);
    let form: string;

    if (nx() === 'ます' ) {
      k++;
      if (askAt(k) || nx() === '？') {
        form = V.pol + (hasWh ? 'びーが' : 'びーみ');
        k += askAt(k);
      } else form = V.pol + 'びーん';
    } else if (nx() === 'ませ' && s(k + 1) === 'ん') {
      form = V.pol + 'びらん';
      k += 2;
    } else if (nx() === 'まし' && s(k + 1) === 'た') {
      form = V.pol + 'びたん';
      k += 2;
    } else if (nx() === 'ましょ' && s(k + 1) === 'う') {
      form = V.pol + 'びら';
      k += 2;
    } else if ((nx() === 'た' || nx() === 'だ') && T[k].pos === '助動詞') {
      k++;
      if (T[k]?.pos === '名詞') form = attr(V.past);
      else if (question(k) && !hasWh) {
        if (!V.qPast) return { missing: t.s + s(i0 + 1) + '？' };
        form = V.qPast;
        k += askAt(k);
      } else if (question(k)) return { missing: t.s + s(i0 + 1) + '？' };
      else form = V.past;
    } else if (nx() === 'ない' && T[k].pos === '助動詞') {
      form = V.neg;
      k++;
      if (question(k)) {
        if (hasWh) return { missing: t.s + 'ない？' };
        form = V.neg.replace(/ん$/, 'に'); // JLect: numani
        k += askAt(k);
      }
    } else if (nx() === 'なかっ' && s(k + 1) === 'た') {
      form = V.neg + 'たん';
      k += 2;
      if (question(k)) {
        // 否定過去の疑問は 〜んてぃー（JLect: numantii）。疑問詞のある文は未対応
        if (hasWh) return { missing: t.s + 'なかった？' };
        form = V.neg + 'てぃー';
        k += askAt(k);
      }
    } else if ((nx() === 'て' || nx() === 'で') && T[k].pos === '助詞') {
      k++;
      if (b(k) === 'いる' && T[k].pos === '動詞') {
        if (!V.prog) return { missing: t.s + 'ている' };
        const c = T[k];
        k++;
        if (c.cform === '連用形' && (nx() === 'た') && T[k].pos === '助動詞') {
          form = V.prog.replace(/ん$/, 'たん');
          k++;
        } else if (c.cform === '基本形') form = T[k]?.pos === '名詞' ? attr(V.prog) : V.prog;
        else return { missing: t.s + 'て' + c.s };
      } else if (b(k) === 'くださる' || s(k) === 'ください') {
        // 「来てください」は尊敬の めんそーれ、ほかは 〜くぃみそーれ（JLect: nudi-kwimisooree）
        form = t.base === '来る' ? 'めんそーれ' : V.te + 'くぃみそーれ';
        k++;
      } else if (s(k) === '、' || T[k]?.pos === '名詞' || T[k]?.pos === '副詞' || T[k]?.pos === '動詞') {
        form = V.te; // 〜して、〜
      } else return { missing: t.s + 'て' + s(k) };
    } else if (nx() === 'たい' && T[k].pos === '助動詞') {
      form = V.ren + 'ぶさん';
      k++;
    } else if (nx() === 'たかっ' && s(k + 1) === 'た') {
      form = V.ren + 'ぶさたん';
      k += 2;
    } else if (t.cform === '基本形') {
      if (T[k]?.pos === '名詞') form = attr(V.dict);
      else if (question(k)) {
        if (hasWh) form = V.dict.replace(/ん$/, 'が');
        else if (V.q) form = V.q;
        else return { missing: t.s + '？' };
        k += askAt(k);
      } else if (nx() === 'から' && T[k].pos === '助詞') {
        form = V.dict.replace(/ん$/, 'くとぅ');
        k++;
      } else if (nx() === 'けど' || nx() === 'けれど') {
        form = V.dict.replace(/ん$/, 'しが');
        k++;
      } else if (nx() === 'だろ' && s(k + 1) === 'う') {
        form = attr(V.dict) + 'はじ';
        k += 2;
      } else form = V.dict;
    } else return { missing: t.s + nx() };

    // 文末の「よ」
    if (nx() === 'よ' && T[k].p1.includes('終助詞')) {
      form += 'どー';
      k++;
    } else if (!isEnd(k) && T[k].pos === '助詞' && T[k].p1.includes('終助詞')) return { missing: nx() };
    return { w: form, next: k };
  }

  /* ---------- 形容詞（暑い・きれいだ） ---------- */
  function adjPredicate(a: [string, string | null], i0: number, nominal: boolean): { w: string; next: number } | Fail {
    const [stem, negStem] = a;
    let k = i0;
    let form: string;
    const t = T[i0];
    if (nominal) {
      // きれい｜だ・です・だった・じゃない・な＋名詞
      const p = s(k);
      if (p === 'だ' && T[k].cform === '基本形') { form = stem + 'さん'; k++; }
      else if (p === 'です') { form = stem + 'さいびーん'; k++; }
      else if (p === 'だっ' && s(k + 1) === 'た') { form = stem + 'さたん'; k += 2; }
      else if (p === 'な' && T[k + 1]?.pos === '名詞') { form = stem + 'さる'; k++; }
      else if ((p === 'じゃ' || p === 'で') && (s(k + 1) === 'ない' || s(k + 2) === 'ない')) {
        if (!negStem) return { missing: T[i0 - 1].s + 'じゃない' };
        form = negStem + 'こーねーん';
        k += s(k + 1) === 'ない' ? 2 : 3;
      } else if (isEnd(k) || (p === 'ね' || p === 'よ')) { form = stem + 'さん'; }
      else return { missing: T[i0 - 1].s + p };
    } else {
      const cf = t.cform;
      k = i0 + 1;
      if (cf === '基本形') {
        if (T[k]?.pos === '名詞') form = stem + 'さる';
        else if (s(k) === 'です') {
          form = stem + 'さいびーん';
          k++;
          if (s(k) === 'ね' || s(k) === 'よ' || askAt(k)) return { missing: t.s + 'です' + s(k) };
        } else form = stem + 'さん';
      } else if (cf === '連用タ接続' && s(k) === 'た') {
        k++;
        if (s(k) === 'です') { form = stem + 'さいびたん'; k++; }
        else form = stem + 'さたん';
      } else if (cf === '連用テ接続' && s(k) === 'ない') {
        if (!negStem) return { missing: t.s + 'ない' };
        form = negStem + 'こーねーん';
        k++;
      } else if (cf === '連用テ接続' && s(k) === 'なかっ' && s(k + 1) === 'た') {
        if (!negStem) return { missing: t.s + 'なかった' };
        form = negStem + 'こーねーんたん';
        k += 2;
      } else return { missing: t.s + s(k) };
    }
    // 文末: ね → 〜さやー、よ → 〜どー、か → 未対応
    if (s(k) === 'ね' && form === stem + 'さん') {
      form = stem + 'さやー';
      k++;
    } else if (s(k) === 'よ') {
      form += 'どー';
      k++;
    } else if (!isEnd(k) && T[k].pos === '助詞' && T[k].p1.includes('終助詞')) return { missing: s(k) };
    return { w: form, next: k };
  }
}

/* ==================== 宮古語・八重山語（決まった挨拶だけ） ==================== */

const SOUTH_PHRASES: Record<'miyako' | 'yaeyama', [string[], string][]> = {
  miyako: [
    [['ありがとう', 'ありがとうございます', 'ありがとうございました'], 'たんでぃがーたんでぃ'],
    [['ようこそ', 'いらっしゃい', 'いらっしゃいませ'], 'んみゃーち'],
  ],
  yaeyama: [
    [['ありがとう', 'ありがとうございます', 'ありがとうございました'], 'みーふぁいゆー'],
    [['ようこそ', 'いらっしゃい', 'いらっしゃいませ'], 'おーりとーり'],
  ],
};

/** 宮古語・八重山語で変換できる文（UI の案内用） */
export const SOUTH_EXAMPLES = ['ありがとう', 'ようこそ'];

function convertSouthLine(id: 'miyako' | 'yaeyama', line: string): RyukyuResult {
  const m = line.match(/^(.*?)([。！!？?]*)$/)!;
  const body = toHira(m[1].replace(/\s/g, ''));
  for (const [froms, to] of SOUTH_PHRASES[id]) {
    if (froms.includes(body)) return { text: to + m[2].replace('!', '！'), missing: [] };
  }
  return { text: null, missing: [m[1].trim()] };
}

/* ==================== 入口 ==================== */

export function ryukyuConvert(tokenize: Tokenize, id: RyukyuId, text: string): RyukyuResult {
  const out: string[] = [];
  const missing: string[] = [];
  for (const line of text.split('\n')) {
    if (!line.trim()) {
      out.push(line);
      continue;
    }
    const r = id === 'okinawa' ? convertOkinawaLine(tokenize(line.trim())) : convertSouthLine(id, line.trim());
    if (r.text === null) missing.push(...r.missing);
    else out.push(r.text);
  }
  if (missing.length) return { text: null, missing: [...new Set(missing)] };
  return { text: out.join('\n'), missing: [] };
}
