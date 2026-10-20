/** 形態素（kuromoji の IPADIC 出力を簡略化したもの） */
export interface Tok {
  /** 表層形 */
  s: string;
  /** 品詞 */
  pos: string;
  /** 品詞細分類1 */
  p1: string;
  /** 活用型 */
  ctype: string;
  /** 活用形 */
  cform: string;
  /** 基本形 */
  base: string;
  /** 読み（カタカナ） */
  read: string;
}

export type Tokenize = (text: string) => Tok[];

/** 否定の型 */
export type NegType =
  | 'n' // 行かん・食べん
  | 'hen' // 行かへん・食べへん
  | 'nee' // 行かねえ
  | 'ne' // 行かね
  | 'nu'; // 行かぬ（武士言葉）

/**
 * 方言プロファイル。
 * 未指定の項目は「変換しない（共通語のまま残す）」を意味する。
 * 確信の持てない変換は入れない方針。
 */
export interface Profile {
  /** 規則変換に対応していない（琉球諸語など）。静的版では選べない */
  unsupported?: true;

  // --- コピュラ「だ」 ---
  /** 文中・文末の「だ」 */
  cop?: string;
  /** 文末（終助詞なし）の「だ」。未指定は cop */
  copEnd?: string;
  /** 「だよ」 */
  copYo?: string;
  /** 「だね」 */
  copNe?: string;
  /** 「だよね」 */
  copYone?: string;
  /** 「だった」 */
  copPast?: string;
  /** 「だから」（接続助詞） */
  copKara?: string;
  /** 文頭の接続詞「だから」 */
  dakara?: string;
  /** 「そう」＋コピュラの「そう」（せ／そ／ほう／ほ） */
  sou?: string;
  /** 「のだ／んだ」の「の(ん)だ」（博多「と」） */
  noda?: string;
  /** noda の文末（既定「よ」。熊本「たい」） */
  nodaEnd?: string;
  /** 「〜んだ」のコピュラは変換しない */
  nodaKeep?: true;

  // --- 否定 ---
  neg?: NegType;
  negSuru?: string;
  negKuru?: string;
  /** 一音節の一段動詞の否定（見ない→見やへん）。未指定は京阪の 見いひん／寝えへん */
  hen1?: string;
  /** 「ません」 */
  masen?: string;

  // --- アスペクト ---
  /** 「ている」「でいる」 */
  prog?: [string, string];
  /** 「ていない」「でいない」 */
  progNeg?: [string, string];
  /** 「ていた」「でいた」 */
  progPast?: [string, string];
  /** 「てしまった」「でしまった」 */
  shimauPast?: [string, string];
  /** 「てしまう」「でしまう」 */
  shimauPres?: [string, string];
  /** 「てください」→ て＋これ */
  kudasai?: string;
  /** 連用形＋「なさい」 */
  nasai?: (stem: string, vowel: string) => string;

  // --- 存在の「いる」 ---
  iru?: string;
  iruNeg?: string;
  iruPast?: string;

  // --- 接続 ---
  /** 接続助詞「から」 */
  kara?: string;
  /** 接続助詞「けど」 */
  kedo?: string;

  // --- 文末 ---
  /** 動詞・形容詞の後の「よ」 */
  yo?: string;
  /** 動詞・形容詞の後の「ね」 */
  ne?: string;
  /** 動詞・形容詞の後の「よね」 */
  yone?: string;
  /** 疑問の「の」 */
  qNo?: string;
  /** 平叙文末に添える（キャラ口調のみ） */
  plainEnd?: string;
  /** 「(動詞・形容詞)じゃない」（確認） */
  tag?: string;

  // --- 丁寧 ---
  /** 名詞＋「です」（文末・終助詞前） */
  desu?: string;
  /** 「ます」（文末・終助詞前） */
  masu?: string;
  /** 「ですよ」 */
  desuYo?: string;
  /** 「ますよ」 */
  masuYo?: string;
  /** 丁寧形の後の「よ」「ね」 */
  pYo?: string;
  pNe?: string;
  /** 京都の「暑おす」 */
  adjDesuKyoto?: true;

  // --- 推量・意志 ---
  /** 動詞・形容詞＋だろう */
  guess?: string;
  /** 名詞＋だろう */
  guessCop?: string;
  /** 元が「だろう」のとき う を残す（じゃろう） */
  guessU?: true;
  /** 〜でしょう */
  guessPolite?: string;
  /** 意志「行こう」 */
  vol?: 'drop' | 'be' | 'ppe' | 'mai';

  // --- 形容詞 ---
  /** 九州のカ語尾（暑か・よか） */
  adjKa?: true;
  /** 関東の連母音融合（すげえ・たけえ） */
  adjEe?: true;
  /** いい／よい */
  ii?: string;
  /** 形容詞「ない」 */
  nai?: string;

  // --- 語彙 ---
  very?: string;
  hayaku?: string;
  dame?: string;
  damePolite?: string;
  /** 文末の「疲れた」 */
  tired?: string;
  /** めんどくさい */
  bother?: string;
  /** うるさい */
  noisy?: string;
  /** すごい */
  sugoi?: string;
  /** 違う→ちゃう */
  chigau?: true;
  hontou?: string;
  hontouni?: string;
  suteru?: 'nageru' | 'hokasu';
  /** 表層の語・句の置換（トークン境界で一致したときだけ） */
  phrases?: [string, string][];

  /** 最後に全体へかける整形（キャラ口調のみ） */
  post?: (s: string) => string;
}
