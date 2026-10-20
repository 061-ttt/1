// UPDATE_GOLD=1 のときだけ正解ファイルを書き出す（目視レビュー後に実行する）
import { writeFileSync } from 'node:fs';
import { test } from 'vitest';
import { DIALECTS } from '../../src/shared/dialects';
import { dialectConvert, isRuleSupported } from '../../src/shared/engine';
import { nodeTokenizer } from '../support/tokenizer';
import { CORPUS } from './corpus';

/** 入力と出力で異なる文字数（変化の大きい例を優先） */
const countDiff = ([a, b]: [string, string]) => {
  let n = 0;
  for (let i = 0; i < Math.max(a.length, b.length); i++) if (a[i] !== b[i]) n++;
  return n;
};

test.runIf(process.env.UPDATE_GOLD === '1')('正解ファイルを更新', async () => {
  const tk = await nodeTokenizer();
  const gold: Record<string, Record<string, string>> = {};
  for (const d of DIALECTS) {
    if (!isRuleSupported(d.id)) continue;
    gold[d.id] = Object.fromEntries(CORPUS.map((s) => [s, dialectConvert(tk, d.id, s)]));
  }
  writeFileSync('tests/unit/gold.json', JSON.stringify(gold, null, 1) + '\n');
  // AI 版の few-shot 用：変換が起きた例を方言ごとに最大 4 件
  const examples: Record<string, [string, string][]> = {};
  for (const [id, pairs] of Object.entries(gold)) {
    examples[id] = Object.entries(pairs)
      .filter(([a, b]) => a !== b && !a.includes('ないで'))
      .sort((x, y) => countDiff(y) - countDiff(x))
      .slice(0, 4);
  }
  writeFileSync('src/shared/engine/examples.json', JSON.stringify(examples, null, 1) + '\n');
}, 60_000);
