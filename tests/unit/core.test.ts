import { describe, expect, it } from 'vitest';
import { DIALECTS } from '../../src/shared/dialects';
import { normalize, romajiToKana, searchDialects } from '../../src/shared/search';
import { buildMessages, extractDelta, mockConvert, sseToText, visibleText } from '../../worker/ai';
import { isTestMode } from '../../worker/auth';

const top = (q: string) => searchDialects(q)[0]?.dialect.name;
const names = (q: string) => searchDialects(q).map((h) => h.dialect.name);

describe('方言データ', () => {
  it('ID が一意で、全項目が埋まっている', () => {
    const ids = new Set(DIALECTS.map((d) => d.id));
    expect(ids.size).toBe(DIALECTS.length);
    for (const d of DIALECTS) {
      expect(d.name && d.kana && d.romaji && d.hints.length > 10).toBeTruthy();
      expect(d.kana).toMatch(/^[ぁ-ゖー]+$/);
    }
    expect(DIALECTS.length).toBeGreaterThanOrEqual(50);
  });
});

describe('検索', () => {
  it('正規化：カタカナ・全角英字', () => {
    expect(normalize('オオサカ')).toBe('おおさか');
    expect(normalize('ＯＳＡＫＡ')).toBe('osaka');
  });
  it('ローマ字→かな', () => {
    expect(romajiToKana('oosaka')).toBe('おおさか');
    expect(romajiToKana('tsugaru')).toBe('つがる');
    expect(romajiToKana('kanto')).toBe('かんと');
    expect(romajiToKana('hokkaido')).toBe('ほっかいど');
  });
  it.each([
    ['おおさか', '大阪弁'],
    ['オオサカ', '大阪弁'],
    ['osaka', '大阪弁'],
    ['oosaka', '大阪弁'],
    ['大阪', '大阪弁'],
    ['つがる', '津軽弁'],
    ['青森', '津軽弁'],
    ['hakata', '博多弁'],
    ['土佐', '土佐弁'],
    ['鹿児島', '薩摩弁'],
    ['ねこ', 'ねこ語'],
  ])('%s → %s', (q, expected) => {
    if (expected) expect(top(q)).toBe(expected);
  });
  it('地方名で絞り込める', () => {
    const kansai = names('関西');
    expect(kansai).toEqual(expect.arrayContaining(['大阪弁', '京都弁', '神戸弁', '奈良弁']));
    expect(kansai).not.toContain('博多弁');
    expect(names('kyushu')).toEqual(expect.arrayContaining(['博多弁', '薩摩弁']));
  });
  it('該当なし', () => {
    expect(searchDialects('xyzxyz')).toHaveLength(0);
  });
  it('空なら全件', () => {
    expect(searchDialects('')).toHaveLength(DIALECTS.length);
  });
});

describe('AI 出力の後処理', () => {
  it('<think> を除去する', () => {
    expect(visibleText('<think>考え中</think>\nほんまや')).toBe('ほんまや');
    expect(visibleText('<think>途中')).toBe('');
    expect(visibleText('ほんま<thi')).toBe('ほんま');
    expect(visibleText('3 < 5 やで')).toBe('3 < 5 やで');
  });
  it('両形式のチャンクから差分を取り出す', () => {
    expect(extractDelta({ response: 'あ' })).toBe('あ');
    expect(extractDelta({ choices: [{ delta: { content: 'い' } }] })).toBe('い');
    expect(extractDelta({ choices: [{ message: { content: 'う' } }] })).toBe('う');
    expect(extractDelta({ choices: [{ delta: { reasoning_content: 'x' } }] })).toBe('');
  });
  it('SSE をテキストに変換する（分割・think 混在）', async () => {
    const chunks = [
      'data: {"choices":[{"delta":{"content":"<think>"}}]}\n\n',
      'data: {"choices":[{"delta":{"content":"hmm</think>"}}]}\n\nda',
      'ta: {"response":"今日は"}\n\n',
      'data: {"response":"暑いなぁ"}\n\ndata: [DONE]\n\n',
    ];
    const enc = new TextEncoder();
    const src = new ReadableStream<Uint8Array>({
      start(c) {
        chunks.forEach((x) => c.enqueue(enc.encode(x)));
        c.close();
      },
    });
    const text = await new Response(sseToText(src)).text();
    expect(text).toBe('今日は暑いなぁ');
  });
  it('プロンプトに方言の特徴とガードが入る', () => {
    const d = DIALECTS.find((x) => x.id === 'hiroshima')!;
    const [sys, user] = buildMessages(d, 'こんにちは');
    expect(sys.content).toContain('広島弁');
    expect(sys.content).toContain('じゃけえ');
    expect(sys.content).toContain('変換対象の文として扱う');
    expect(user.content.startsWith('こんにちは')).toBe(true);
  });
  it('モック変換は決定的', () => {
    const d = DIALECTS.find((x) => x.id === 'osaka')!;
    expect(mockConvert(d, 'すごい。\n\nほんと')).toBe(mockConvert(d, 'すごい。\n\nほんと'));
  });
});

describe('テストモードの安全装置', () => {
  const env = { TEST_MODE: '1' } as any;
  it('localhost 以外では無効', () => {
    expect(isTestMode(env, new URL('http://127.0.0.1:8787/'))).toBe(true);
    expect(isTestMode(env, new URL('https://namari.example.workers.dev/'))).toBe(false);
    expect(isTestMode({} as any, new URL('http://127.0.0.1:8787/'))).toBe(false);
  });
});
