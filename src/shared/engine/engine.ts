import { conjugate, ctypeOf, parseVerb, voicedTe } from './conj';
import { moraCount, shiftRow, toHira, vowelOf } from './kana';
import type { NegType, Phrase, Profile, Tok, Tokenize } from './types';

/*
 * 形態素解析の結果（品詞・活用）に基づいて共通語を方言へ変換する。
 * 方針: 文法的に特定できた箇所だけを変える。分からないところは共通語のまま残す。
 * 文末に語尾を機械的に付け足すことはしない（キャラ口調を除く）。
 */

const END_MARK = /^[。．.！!？?…‥」』）)\]]+$/;
const isEnd = (t?: Tok) => !t || (t.pos === '記号' && END_MARK.test(t.s));
const isQuestionMark = (t?: Tok) => !!t && t.pos === '記号' && /[？?]/.test(t.s);
const isFinal = (t?: Tok, ...w: string[]) => !!t && t.pos === '助詞' && t.p1 === '終助詞' && (w.length === 0 || w.includes(t.s));
const isConj = (t: Tok | undefined, ...w: string[]) => !!t && t.pos === '助詞' && t.p1 === '接続助詞' && w.includes(t.s);
const isAux = (t: Tok | undefined, ctype: string) => !!t && t.pos === '助動詞' && t.ctype === ctype;
const isCop = (t?: Tok) => isAux(t, '特殊・ダ');
const isDesu = (t?: Tok) => isAux(t, '特殊・デス');
const isMasu = (t?: Tok) => isAux(t, '特殊・マス');
const isNai = (t?: Tok) => isAux(t, '特殊・ナイ');
const isTa = (t?: Tok) => isAux(t, '特殊・タ');
const isU = (t?: Tok) => !!t && t.pos === '助動詞' && t.ctype === '不変化型' && t.s === 'う';
const isVerb = (t?: Tok) => !!t && t.pos === '動詞';
const isAdj = (t?: Tok) => !!t && t.pos === '形容詞';

/** 文末の終助詞列（直後が文末のときだけ）。'よ' | 'ね' | 'よね' のいずれか */
const isBoundary = (t?: Tok) => isEnd(t) || (!!t && t.pos === '記号' && /^[、，,]$/.test(t.s));

function particleSeq(T: Tok[], j: number): { seq: 'よ' | 'ね' | 'よね'; len: number } | null {
  const a = T[j];
  const b = T[j + 1];
  if (isFinal(a, 'よ') && isFinal(b, 'ね') && isBoundary(T[j + 2])) return { seq: 'よね', len: 2 };
  if (isFinal(a, 'よ') && isBoundary(b)) return { seq: 'よ', len: 1 };
  if (isFinal(a, 'ね') && isBoundary(b)) return { seq: 'ね', len: 1 };
  return null;
}

/** 「て/た」系（連用形の後の接続助詞て・で、助動詞た・だ） */
const isTeTa = (t?: Tok) =>
  !!t && ((t.pos === '助詞' && t.p1 === '接続助詞' && (t.s === 'て' || t.s === 'で')) || isAux(t, '特殊・タ'));

/** 九州のカ語尾にしてよい位置（文末・よ/ね・から/けど・名詞の前） */
function kaContext(T: Tok[], j: number): boolean {
  const n = T[j];
  const ps = particleSeq(T, j);
  return (
    isEnd(n) || (!!ps && ps.seq !== 'よね') || isConj(n, 'から', 'けど', 'けれど', 'けれども') ||
    (!!n && n.pos === '名詞' && n.p1 !== '非自立' && n.p1 !== '接尾')
  );
}

/** 後ろに否定があるか（全然→いっちょん 等の条件） */
function hasNegAfter(T: Tok[], j: number): boolean {
  for (let k = j; k < T.length && !isEnd(T[k]); k++) {
    if (isNai(T[k]) || T[k].base === 'ない' || (T[k].pos === '助動詞' && ['ん', 'ぬ'].includes(T[k].base))) return true;
  }
  return false;
}

/** 名詞の否定「〜ではない」（で＋は＋ない） */
function isDewaNai(T: Tok[], i: number): boolean {
  const t = T[i];
  return (
    !!t && t.s === 'で' && (isCop(t) || (t.pos === '助詞' && t.p1 === '格助詞')) && T[i + 1]?.s === 'は' &&
    T[i + 2]?.base === 'ない' && T[i + 2].cform === '基本形' && safeAfterNeg(T, i + 3)
  );
}

/** 「〜なければならない」系（未然形の後に続く表層） */
const MUST_PATTERNS = [
  'なければならない', 'なければいけない', 'なければだめだ', 'なきゃならない', 'なきゃいけない', 'なきゃだめだ',
  'ないといけない', 'ないとだめだ', 'なくてはならない', 'なくてはいけない', 'なくちゃいけない', 'なくちゃならない',
];

/** 否定形に変えてよい後続か */
function safeAfterNeg(T: Tok[], j: number): boolean {
  const t = T[j];
  if (isEnd(t) || isFinal(t)) return true;
  if (isConj(t, 'から', 'けど', 'けれど', 'けれども', 'し')) return true;
  if (t.pos === '記号' && t.s === '、') return true;
  if (t.pos === '助詞' && (t.s === 'って' || t.s === 'と')) return true;
  if (t.pos === '名詞' && t.p1 !== '非自立' && t.p1 !== '接尾') return true;
  return false;
}

const NEG_SUFFIX: Record<NegType, string> = { n: 'ん', hen: 'へん', nee: 'ねえ', ne: 'ね', nu: 'ぬ' };
const NEG_SURU: Partial<Record<NegType, string>> = { n: 'せん', nee: 'しねえ', ne: 'しね', nu: 'せぬ' };
const NEG_KURU: Partial<Record<NegType, string>> = { n: 'こん', nee: 'こねえ', ne: 'こね', nu: 'こぬ' };

function negForm(P: Profile, verb: Tok, stem: string): string | undefined {
  const k = P.neg;
  if (!k) return undefined;
  if (verb.ctype === 'サ変・スル') return P.negSuru ?? NEG_SURU[k];
  if (verb.ctype.startsWith('カ変')) return P.negKuru ?? NEG_KURU[k];
  if (verb.ctype === '一段' && k === 'hen' && moraCount(verb.read) === 1) {
    if (P.hen1) return stem + P.hen1;
    const v = vowelOf(verb.read);
    return v === 'i' ? `${stem}いひん` : v === 'e' ? `${stem}えへん` : undefined;
  }
  return stem + NEG_SUFFIX[k];
}

function negPastForm(P: Profile, verb: Tok, stem: string): string | undefined {
  if (P.neg === 'nee' || P.neg === 'nu') return undefined;
  const f = negForm(P, verb, stem);
  if (!f) return undefined;
  return f + (P.neg === 'ne' ? 'がった' : P.negPastTail ?? 'かった');
}

/** 関東の連母音融合（すごい→すげえ、暑い→あちい） */
function eeForm(t: Tok): string | undefined {
  const r = toHira(t.read);
  if (!r.endsWith('い') || r.length < 2 || !t.s.endsWith('い')) return undefined;
  const pen = r[r.length - 2];
  const v = vowelOf(pen);
  if (v === 'a' || v === 'o') return r.slice(0, -2) + shiftRow(pen, 'e') + 'え';
  if (v === 'u') return r.slice(0, -2) + shiftRow(pen, 'i') + 'い';
  return undefined;
}

/** 京都の形容詞＋どす（暑おす・たこおす） */
function kyotoAdj(t: Tok): string | undefined {
  if (['いい', 'よい', '良い'].includes(t.base) && t.cform === '基本形') return 'よろしおす';
  if (!t.s.endsWith('い')) return undefined;
  const r = toHira(t.read);
  const pen = r[r.length - 2];
  const v = vowelOf(pen);
  if (v === 'u' || v === 'i' || v === 'o') return `${t.s.slice(0, -1)}おす`;
  if (v === 'a') return `${r.slice(0, -2)}${shiftRow(pen, 'o')}おす`;
  return undefined;
}

const HOKASU: Record<string, string> = {
  基本形: 'ほかす', 連用形: 'ほかし', 未然形: 'ほかさ', 未然ウ接続: 'ほかそ', 仮定形: 'ほかせ', 命令ｒｏ: 'ほかせ', 命令ｙｏ: 'ほかせ',
};

type Ctx = 'none' | 'plain' | 'polite' | 'noun' | 'other';

export function convertTokens(T: Tok[], P: Profile): string {
  const out: string[] = [];
  let ctx = 'none' as Ctx;
  /** 直前の出力が述語（文末に plainEnd を付けてよい）か */
  let predEnd = false;
  /** 京都用: 直前に出力した形容詞 */
  let lastAdj = null as { at: number; tok: Tok } | null;
  let voiceNext = null as 'te' | 'de' | null;
  const phrases = [...(P.phrases ?? [])].sort((a, b) => b[0].length - a[0].length);

  const emit = (s: string, c: Ctx, pred = false) => {
    out.push(s);
    ctx = c;
    predEnd = pred;
    if (c !== 'plain') lastAdj = null;
  };

  let i = 0;
  while (i < T.length) {
    let t = T[i];
    // 方言の動詞に差し替えた直後の「て/た」の清濁を合わせる（ほかして・あさいだ）
    if (voiceNext) {
      if (isTeTa(t)) {
        const head = voiceNext === 'de' ? { て: 'で', た: 'だ' } : { で: 'て', だ: 'た' };
        const c0 = t.s[0] as keyof typeof head;
        if (head[c0]) t = { ...t, s: head[c0] + t.s.slice(1) };
      }
      voiceNext = null;
    }

    // ---- 文末記号 ----
    if (t.pos === '記号') {
      if (isEnd(t) && predEnd && P.plainEnd && !/ぬ$/.test(out[out.length - 1] ?? '')) out.push(P.plainEnd);
      emit(t.s, 'none');
      i++;
      continue;
    }

    // ---- 句の置換（トークン境界で一致したときだけ） ----
    let matched = false;
    for (const [from, to, opt] of phrases as Phrase[]) {
      if (opt?.pos && t.pos !== opt.pos) continue;
      let acc = '';
      let j = i;
      while (j < T.length && acc.length < from.length) acc += T[j++].s;
      if (acc === from || toHira(acc) === from) {
        if (opt?.needNeg && !hasNegAfter(T, j)) continue;
        // 置換後の語の品詞で文脈を決める（動詞・形容詞で終わる句は述語扱い）
        const last = T[j - 1];
        const pred = last.pos === '動詞' || last.pos === '形容詞' || isNai(last) || isTa(last);
        emit(to, pred ? 'plain' : 'other', pred);
        i = j;
        matched = true;
        break;
      }
    }
    if (matched) continue;

    // ---- 「〜なければならない」系 ----
    if (P.must && isVerb(t) && t.p1 === '自立' && t.cform === '未然形') {
      const rest = T.slice(i + 1, i + 6).map((x) => x.s);
      let len = 0;
      for (const pat of MUST_PATTERNS) {
        let acc = '';
        for (let k = 0; k < rest.length && acc.length < pat.length; k++) {
          acc += rest[k];
          if (acc === pat) len = k + 1;
        }
        if (len) break;
      }
      if (len) {
        const stem = t.ctype === 'サ変・スル' ? P.mustSuru ?? 'せ' : t.ctype.startsWith('カ変') ? 'こ' : P.verbs?.[t.base] ? conjugate(parseVerb(P.verbs[t.base]), '未然形', false) ?? t.s : t.s;
        emit(stem + P.must, 'plain', true);
        i += 1 + len;
        continue;
      }
    }

    // ---- 文頭の「だから」 ----
    if (t.pos === '接続詞' && t.s === 'だから' && P.dakara) {
      emit(P.dakara, 'other');
      i++;
      continue;
    }

    // ---- 「そう」＋だ ----
    if (t.s === 'そう' && t.pos === '副詞' && isCop(T[i + 1]) && T[i + 1].cform !== '体言接続' && P.sou) {
      emit(P.sou, 'noun');
      i++;
      continue;
    }

    // ---- 「(行く)んだ」→ 博多「と」 ----
    if (
      P.noda && t.pos === '名詞' && t.p1 === '非自立' && (t.s === 'ん' || t.s === 'の') &&
      isCop(T[i + 1]) && T[i + 1].cform === '基本形' && ctx === 'plain'
    ) {
      const ps = particleSeq(T, i + 2);
      if (isEnd(T[i + 2]) || ps?.seq === 'よ') {
        emit(P.noda + (P.nodaEnd ?? 'よ'), 'other');
        i += 2 + (ps?.len ?? 0);
        continue;
      }
      if (ps && ps.seq === 'ね') {
        emit(P.noda + ps.seq, 'other');
        i += 2 + ps.len;
        continue;
      }
    }

    // ---- 「〜んだ」を変換しない方言 ----
    if (P.nodaKeep && isCop(t) && T[i - 1]?.pos === '名詞' && T[i - 1].p1 === '非自立' && ['ん', 'の'].includes(T[i - 1].s)) {
      emit(t.s, 'other');
      i++;
      continue;
    }

    // ---- コピュラ「だ」 ----
    if (isCop(t)) {
      const c = P.cop ?? 'だ';
      if (t.cform === '基本形') {
        if (isConj(T[i + 1], 'から')) {
          emit(P.copKara ?? c + (P.kara ?? 'から'), 'other');
          i += 2;
          continue;
        }
        const ps = particleSeq(T, i + 1);
        if (ps?.seq === 'よね') emit(P.copYone ?? `${c}よね`, 'other');
        else if (ps?.seq === 'よ') {
          // 「そうだよ、…」で「だよ」の方言形が「だから」と同形になる方言（じゃけえ・やき）は、
          // 読点の前では接続詞と誤読されるため断定の形だけにする
          const beforeComma = !isEnd(T[i + 2]);
          const ambiguous = !!P.copYo && (P.copYo === P.copKara || P.copYo === P.dakara);
          emit(beforeComma && ambiguous ? c : P.copYo ?? `${c}よ`, 'other');
        }
        else if (ps?.seq === 'ね') emit(P.copNe ?? `${c}ね`, 'other');
        else if (isEnd(T[i + 1])) emit(P.copEnd ?? c, 'other');
        else emit(c, 'other');
        i += 1 + (ps?.len ?? 0);
        continue;
      }
      if (t.cform === '未然形') {
        const hasU = isU(T[i + 1]);
        const g = ctx === 'plain' ? P.guess : P.guessCop;
        if (g) {
          emit(g + (hasU && P.guessU ? 'う' : ''), 'other');
          i += hasU ? 2 : 1;
          continue;
        }
      }
      if (t.cform === '連用タ接続' && isTa(T[i + 1]) && T[i + 1].cform === '基本形') {
        emit(P.copPast ?? (P.cop ? `${P.cop}った` : 'だった'), 'plain');
        i += 2;
        continue;
      }
      // 「ではない」→ や(じゃ)ない
      if (t.cform === '連用形' && t.s === 'で' && T[i + 1]?.s === 'は' && (T[i + 2]?.base === 'ない') && P.cop) {
        emit(P.cop, 'other');
        i += 2;
        continue;
      }
      emit(t.s, 'other');
      i++;
      continue;
    }

    // ---- 名詞の否定「〜じゃない」全体の置き換え（ちゃう） ----
    if (P.copNeg && ctx !== 'plain') {
      const isJa = t.s === 'じゃ' && (t.pos === '接続詞' || t.pos === '助詞') && T[i + 1]?.base === 'ない' && T[i + 1].cform === '基本形';
      const isDewa = isDewaNai(T, i);
      if (isJa || isDewa) {
        emit(P.copNeg, 'plain', true);
        i += isJa ? 2 : 3;
        continue;
      }
    }

    // ---- 「(名詞)ではない」→ や(じゃ)ない ----
    if (isDewaNai(T, i) && ctx !== 'plain' && P.cop) {
      emit(P.cop, 'other');
      i += 2;
      continue;
    }

    // ---- 関東・東北: 名詞の否定の「ない」→ ねえ（雨じゃねえ） ----
    if (isNai(t) && t.cform === '基本形' && P.nai && (T[i - 1]?.s === 'じゃ' || (T[i - 1]?.s === 'は' && T[i - 2]?.s === 'で')) && ctx !== 'plain' && safeAfterNeg(T, i + 1)) {
      emit(P.nai, 'plain', true);
      i++;
      continue;
    }

    // ---- 「じゃない」 ----
    if (t.s === 'じゃ' && T[i + 1]?.base === 'ない') {
      // 動詞・形容詞の後の「じゃない」は確認（いいじゃない）
      if (t.pos === '助詞' && ctx === 'plain' && isNai(T[i + 1])) {
        if (P.tag) {
          let j = i + 2;
          if (isFinal(T[j], 'か', 'の')) j++;
          emit(P.tag, 'other');
          i = j;
          continue;
        }
      } else if (ctx !== 'plain' && P.cop) {
        emit(P.cop, 'other');
        i++;
        continue;
      }
    }

    // ---- です ----
    if (isDesu(t)) {
      if (t.cform === '基本形') {
        const ps = particleSeq(T, i + 1);
        const endish = isEnd(T[i + 1]) || !!ps;
        if (P.adjDesuKyoto && endish && ctx === 'plain' && lastAdj) {
          const k = kyotoAdj(lastAdj.tok);
          if (k) {
            out[lastAdj.at] = k;
            const tail = ps?.seq === 'よ' ? P.pYo ?? 'よ' : ps?.seq === 'ね' ? P.pNe ?? 'ね' : ps?.seq ?? '';
            emit(tail, 'polite');
            i += 1 + (ps?.len ?? 0);
            continue;
          }
        }
        if (ps?.seq === 'ね' && P.desuNe) {
          emit(ctx === 'plain' ? P.desuNe[0] : P.desuNe[1], 'polite');
          i += 2;
          continue;
        }
        const base = endish && ctx !== 'plain' && P.desu ? P.desu : 'です';
        if (ps?.seq === 'よ') emit(base === 'です' && P.desuYo ? P.desuYo : base + (P.pYo ?? 'よ'), 'polite');
        else if (ps?.seq === 'ね') emit(base + (P.pNe ?? 'ね'), 'polite');
        else if (ps?.seq === 'よね') emit(`${base}よね`, 'polite');
        else emit(base, 'polite');
        i += 1 + (ps?.len ?? 0);
        continue;
      }
      if (t.cform === '未然形' && isU(T[i + 1]) && P.guessPolite) {
        emit(P.guessPolite, 'polite');
        i += 2;
        continue;
      }
      emit(t.s, 'polite');
      i++;
      continue;
    }

    // ---- ます ----
    if (isMasu(t)) {
      if (t.cform === '基本形') {
        const ps = particleSeq(T, i + 1);
        const endish = isEnd(T[i + 1]) || !!ps;
        const base = endish && P.masu ? P.masu : 'ます';
        if (ps?.seq === 'よ') emit(base === 'ます' && P.masuYo ? P.masuYo : base + (P.pYo ?? 'よ'), 'polite');
        else if (ps?.seq === 'ね') emit(base + (P.pNe ?? 'ね'), 'polite');
        else if (ps?.seq === 'よね') emit(`${base}よね`, 'polite');
        else emit(base, 'polite');
        i += 1 + (ps?.len ?? 0);
        continue;
      }
      if (t.s === 'ませ' && T[i + 1]?.s === 'ん' && P.masen && (isBoundary(T[i + 2]) || isFinal(T[i + 2]) || !P.plainEnd)) {
        emit(P.masen, 'polite');
        i += 2;
        continue;
      }
      emit(t.s, 'polite');
      i++;
      continue;
    }

    // ---- だめ ----
    if (t.pos === '名詞' && ['だめ', 'ダメ', '駄目'].includes(t.s) && P.dame) {
      const n = T[i + 1];
      if (isCop(n) && n.cform === '基本形') {
        emit(P.dame, 'plain', true);
        i += 2;
        continue;
      }
      if (isEnd(n)) {
        emit(P.dame, 'plain', true);
        i++;
        continue;
      }
      if (isDesu(n) && n.cform === '基本形' && P.damePolite) {
        emit(P.damePolite, 'polite');
        i += 2;
        continue;
      }
      if (isCop(n) && n.cform === '連用タ接続' && isTa(T[i + 2]) && P.dame.endsWith('ん')) {
        emit(`${P.dame}かった`, 'plain', true);
        i += 3;
        continue;
      }
    }

    // ---- 動詞 ----
    if (isVerb(t) && t.p1 === '自立') {
      let stem = t.s;
      let verb = t;
      const nextTeTa = isTeTa(T[i + 1]);
      // 語彙（活用を合わせて差し替え）
      const spec = P.verbs?.[t.base];
      if (spec) {
        const v = parseVerb(spec);
        const f = conjugate(v, t.cform, nextTeTa);
        if (f) {
          stem = f;
          verb = { ...t, ctype: ctypeOf(v), read: v.base };
          if (nextTeTa && (t.cform === '連用形' || t.cform === '連用タ接続')) voiceNext = voicedTe(v) ? 'de' : 'te';
        }
      } else if (P.uOnbin && t.ctype === '五段・ワ行促音便' && t.cform === '連用タ接続' && nextTeTa) {
        // 買った→こうた、言った→ゆうた（西日本のウ音便）
        if (t.base === '言う') stem = P.uOnbin === 'kansai' ? 'ゆう' : 'いう';
        else {
          const r = toHira(t.read).replace(/っ$/, '');
          const lastK = r.slice(-1);
          const v = vowelOf(lastK);
          stem = v === 'a' ? `${r.slice(0, -1)}${shiftRow(lastK, 'o')}う` : v === 'o' || v === 'u' ? `${r}う` : stem;
        }
      }
      // 語彙
      if (P.chigau && t.base === '違う') {
        if (t.cform === '基本形') stem = 'ちゃう';
        else if (t.cform === '連用形') stem = 'ちゃい';
      }
      if (P.suteru && t.base === '捨てる') {
        if (P.suteru === 'nageru') stem = t.s.replace('捨て', '投げ');
        else if (HOKASU[t.cform]) {
          stem = HOKASU[t.cform];
          verb = { ...t, ctype: '五段・サ行' };
        }
      }
      if (P.tired && t.base === '疲れる' && t.cform === '連用形' && isTa(T[i + 1]) && T[i + 1].cform === '基本形' && (isEnd(T[i + 2]) || isFinal(T[i + 2], 'よ', 'ね', 'な'))) {
        emit(P.tired, 'plain', true);
        i += 2;
        continue;
      }
      // 存在の「いる」
      if (t.base === 'いる') {
        if (t.cform === '基本形' && P.iru) {
          emit(P.iru, 'plain', true);
          i++;
          continue;
        }
        if (t.cform === '未然形' && isNai(T[i + 1])) {
          const f = P.iruNeg ?? (P.neg === 'nee' || P.neg === 'ne' || P.neg === 'nu' ? `い${NEG_SUFFIX[P.neg]}` : undefined);
          if (f && T[i + 1].cform === '基本形' && safeAfterNeg(T, i + 2)) {
            emit(f, 'plain', true);
            i += 2;
            continue;
          }
          // 「おらん」等を定義していない方言では「いない」のまま（「いん」等の誤形を作らない）
          emit(t.s, 'plain', true);
          i++;
          continue;
        }
        if (t.cform === '連用形' && isTa(T[i + 1]) && P.iruPast) {
          emit(P.iruPast + T[i + 1].s.slice(1), 'plain', true);
          i += 2;
          continue;
        }
      }
      // 否定
      if (t.cform === '未然形' && isNai(T[i + 1])) {
        const nai = T[i + 1];
        if (nai.cform === '基本形' && safeAfterNeg(T, i + 2)) {
          const f = negForm(P, verb, stem);
          if (f) {
            emit(f, 'plain', true);
            i += 2;
            continue;
          }
        }
        if (nai.cform === '連用タ接続' && isTa(T[i + 2]) && T[i + 2].cform === '基本形') {
          const f = negPastForm(P, verb, stem);
          if (f) {
            emit(f, 'plain', true);
            i += 3;
            continue;
          }
        }
      }
      // 意志
      if (t.cform === '未然ウ接続' && isU(T[i + 1]) && P.vol) {
        const after = T[i + 2];
        const ok = isEnd(after) || isFinal(after, 'か') || (P.vol === 'drop' && isFinal(after, 'よ', 'や'));
        if (ok) {
          const base = t.ctype === 'サ変・スル' ? 'する' : t.base;
          let f: string;
          if (P.vol === 'drop') f = stem;
          else if (P.vol === 'be') f = base + (P.be ?? 'べ');
          else if (P.vol === 'ppe') f = t.ctype === 'サ変・スル' ? 'すっぺ' : `${base}っぺ`;
          else if (P.vol === 'mai') f = `${stem}まい`;
          else {
            // 未然形（ア段）＋まい／ざあ：行かまい・行かざあ
            if (t.ctype === 'サ変・スル' || t.ctype.startsWith('カ変')) {
              emit(stem, 'plain', true);
              i++;
              continue;
            }
            const lastK = stem.slice(-1);
            const mz = verb.ctype === '一段' ? stem.replace(/よ$/, '') : stem.slice(0, -1) + (lastK === 'お' ? 'わ' : shiftRow(lastK, 'a'));
            f = mz + (P.vol === 'maiA' ? 'まい' : 'ざあ');
          }
          emit(f, 'plain', true);
          i += 2;
          continue;
        }
      }
      // 命令「〜なさい」
      if (P.nasai && (t.cform === '連用形') && T[i + 1]?.base === 'なさる' && T[i + 1].cform.startsWith('命令')) {
        emit(P.nasai(stem, vowelOf(t.read.slice(-1)), verb.ctype), 'plain', true);
        i += 2;
        continue;
      }
      emit(stem, 'plain', !t.cform.startsWith('命令'));
      i++;
      // て／で＋補助動詞
      const te = T[i];
      const d = te && te.s === 'で' ? 1 : 0;
      if (te && te.pos === '助詞' && te.p1 === '接続助詞' && (te.s === 'て' || te.s === 'で')) {
        const a = T[i + 1];
        if (a && a.pos === '動詞' && a.p1 === '非自立') {
          if (a.base === 'いる') {
            if (a.cform === '基本形' && P.prog) {
              emit(P.prog[d], 'plain', true);
              i += 2;
              continue;
            }
            if (a.cform === '未然形' && isNai(T[i + 2]) && T[i + 2].cform === '基本形' && P.progNeg && safeAfterNeg(T, i + 3)) {
              emit(P.progNeg[d], 'plain', true);
              i += 3;
              continue;
            }
            if (a.cform === '連用形' && isTa(T[i + 2]) && P.progPast) {
              emit(P.progPast[d] + T[i + 2].s.slice(1), 'plain', true);
              i += 3;
              continue;
            }
          }
          if (a.base === 'しまう') {
            if (a.cform === '連用タ接続' && isTa(T[i + 2]) && T[i + 2].cform === '基本形' && P.shimauPast) {
              emit(P.shimauPast[d], 'plain', true);
              i += 3;
              continue;
            }
            if (a.cform === '基本形' && P.shimauPres) {
              emit(P.shimauPres[d], 'plain', true);
              i += 2;
              continue;
            }
          }
          if (a.base === 'くださる' && a.cform.startsWith('命令') && P.kudasai) {
            emit(te.s + P.kudasai, 'plain', true);
            i += 2;
            continue;
          }
        }
      }
      // 口語の「てる／でる」
      if (te && te.pos === '動詞' && te.p1 === '非自立' && (te.base === 'てる' || te.base === 'でる')) {
        const dd = te.base === 'でる' ? 1 : 0;
        if (te.cform === '基本形' && P.prog) {
          emit(P.prog[dd], 'plain', true);
          i += 1;
          continue;
        }
        if (te.cform === '連用形' && isTa(T[i + 1]) && P.progPast) {
          emit(P.progPast[dd] + T[i + 1].s.slice(1), 'plain', true);
          i += 2;
          continue;
        }
        if (te.cform === '未然形' && isNai(T[i + 1]) && T[i + 1].cform === '基本形' && P.progNeg && safeAfterNeg(T, i + 2)) {
          emit(P.progNeg[dd], 'plain', true);
          i += 2;
          continue;
        }
      }
      continue;
    }

    // ---- 形容詞 ----
    if (isAdj(t)) {
      if (t.cform === '連用テ接続') {
        const n = T[i + 1];
        if (t.base === 'すごい' && P.very && (isAdj(n) || isVerb(n) || n?.pos === '副詞' || n?.p1 === '形容動詞語幹')) {
          emit(P.very, 'other');
          i++;
          continue;
        }
        if ((t.base === '早い' || t.base === '速い') && P.hayaku && isVerb(n)) {
          emit(P.hayaku, 'other');
          i++;
          continue;
        }
      }
      // 語彙（語幹を差し替えて活用）
      const tgt = P.adjs?.[t.base];
      let adjSurface = t.s;
      if (tgt) {
        const kaOnly = tgt.endsWith('か');
        if (kaOnly) {
          if (t.cform === '基本形' && kaContext(T, i + 1)) {
            emit(tgt, 'plain', true);
            i++;
            continue;
          }
        } else {
          const srcStem = t.base.slice(0, -1);
          if (t.s.startsWith(srcStem)) adjSurface = tgt.slice(0, -1) + t.s.slice(srcStem.length);
        }
      }
      if (t.cform !== '基本形' && adjSurface !== t.s) {
        emit(adjSurface, 'plain', true);
        i++;
        continue;
      }
      if (t.cform === '基本形') {
        let s = adjSurface;
        const kaPos = isEnd(T[i + 1]) || (!!particleSeq(T, i + 1) && particleSeq(T, i + 1)?.seq !== 'よね') ||
          isConj(T[i + 1], 'から', 'けど', 'けれど', 'けれども') || (T[i + 1]?.pos === '名詞' && T[i + 1].p1 !== '非自立') ||
          (!!P.noda && T[i + 1]?.p1 === '非自立' && ['ん', 'の'].includes(T[i + 1].s) && isCop(T[i + 2]));
        if (['いい', 'よい', '良い'].includes(t.base) && P.ii && (!P.adjKa || kaPos)) {
          s = P.ii;
        } else if (['めんどくさい', '面倒くさい', 'めんどうくさい'].includes(t.base) && P.bother) {
          s = P.bother;
        } else if (t.base === 'うるさい' && P.noisy) {
          s = P.noisy;
        } else if (t.base === 'すごい' && P.sugoi) {
          s = P.sugoi;
        } else if (t.base === 'ない' && t.p1 === '自立' && P.nai) {
          s = P.nai;
        } else if (P.adjEe && !isDesu(T[i + 1]) && !tgt) {
          const e = eeForm(t);
          if (e) s = e;
        }
        // 「いいじゃない」で確認の言い方を持たない方言は、形容詞も共通語のまま
        if (T[i + 1]?.s === 'じゃ' && T[i + 1].pos === '助詞' && isNai(T[i + 2]) && !P.tag) s = t.s;
        if (P.adjKa && s.endsWith('い') && kaContext(T, i + 1)) s = `${s.slice(0, -1)}か`;
        emit(s, 'plain', true);
        lastAdj = { at: out.length - 1, tok: t };
        i++;
        continue;
      }
      emit(t.s, 'plain', true);
      i++;
      continue;
    }

    // ---- 形容詞＋ない（暑くない） ----
    if (isNai(t) && t.cform === '基本形' && isAdj(T[i - 1]) && (P.neg === 'nee' || P.neg === 'ne') && safeAfterNeg(T, i + 1)) {
      emit(NEG_SUFFIX[P.neg], 'plain', true);
      i++;
      continue;
    }

    // ---- 副詞・名詞の語彙 ----
    if (t.pos === '副詞' && ['とても', '非常に', 'めっちゃ', 'めちゃくちゃ', 'めちゃめちゃ'].includes(t.s) && P.very) {
      emit(P.very, 'other');
      i++;
      continue;
    }
    if (['本当に', 'ほんとうに', 'ほんとに'].includes(t.s) && (P.hontouni || P.hontou)) {
      emit(P.hontouni ?? `${P.hontou}に`, 'other');
      i++;
      continue;
    }
    if (t.pos === '名詞' && ['本当', 'ほんとう', 'ほんと'].includes(t.s) && P.hontou) {
      emit(P.hontou, 'noun');
      i++;
      continue;
    }

    // ---- 接続助詞 ----
    // 変換していない「〜ない」の後で から→で にすると、共通語の「〜ないで」と同形になり意味が変わる
    const unconvertedNai = isNai(T[i - 1]) && out[out.length - 1] === 'ない' && P.kara === 'で';
    if (isConj(t, 'から') && (ctx === 'plain') && P.kara && !unconvertedNai) {
      emit(P.kara, 'other');
      i++;
      continue;
    }
    if (isConj(t, 'けど', 'けれど', 'けれども') && (ctx === 'plain' || ctx === 'other') && P.kedo) {
      emit(P.kedo, 'other');
      i++;
      continue;
    }

    // ---- 疑問の「か？」 ----
    if (P.qKa && t.s === 'か' && t.pos === '助詞' && t.p1.includes('終助詞') && isQuestionMark(T[i + 1]) && ctx === 'plain') {
      emit(P.qKa, 'other');
      i++;
      continue;
    }

    // ---- 終助詞 ----
    if (isFinal(t)) {
      if (ctx === 'plain') {
        const ps = particleSeq(T, i);
        const rep = ps?.seq === 'よ' ? P.yo : ps?.seq === 'ね' ? P.ne : ps?.seq === 'よね' ? P.yone : undefined;
        if (ps && rep !== undefined) {
          emit(rep, 'other');
          i += ps.len;
          continue;
        }
      }
      if (t.s === 'の' && isQuestionMark(T[i + 1]) && P.qNo && (ctx === 'plain' || ctx === 'other')) {
        emit(P.qNo, 'other');
        i++;
        continue;
      }
      emit(t.s, 'other');
      i++;
      continue;
    }

    // ---- その他 ----
    const prev = T[i - 1];
    let c: Ctx = 'other';
    let pred = false;
    if (t.pos === '名詞') c = 'noun';
    else if (isTa(t) && (isDesu(prev) || isMasu(prev))) c = 'polite';
    else if (isNai(t) && prev?.s === 'じゃ') c = 'plain';
    else if (isTa(t) || isNai(t) || (t.pos === '助動詞' && ['ぬ', 'ん', 'たい'].includes(t.base)) || (t.pos === '動詞' && !t.cform.startsWith('命令'))) {
      c = 'plain';
      pred = true;
    } else if (isU(t)) c = 'plain';
    emit(t.s, c, pred);
    i++;
  }
  const s = out.join('');
  return P.post ? P.post(s) : s;
}

/** 文章を行ごとに解析して変換する */
export function convertText(tokenize: Tokenize, P: Profile, text: string): string {
  return text
    .split('\n')
    .map((line) => {
      if (!line.trim()) return line;
      const lead = line.match(/^\s*/)?.[0] ?? '';
      const trail = line.match(/\s*$/)?.[0] ?? '';
      return lead + convertTokens(tokenize(line.trim()), P) + trail;
    })
    .join('\n');
}
