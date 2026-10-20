import { describe, expect, it } from 'vitest';
import { DIALECTS } from '../../src/shared/dialects';
import { PLACES, PREF_REGION, project } from '../../src/map/places';
import { inRing, PREFS } from '../../src/map/shapes';

describe('地図データ', () => {
  it('47 都道府県を読み込める', () => {
    expect(PREFS).toHaveLength(47);
    for (const p of PREFS) {
      expect(p.rings.length).toBeGreaterThan(0);
      expect(PREF_REGION[p.id]).toBeTruthy();
    }
  });

  it('キャラ口調以外の全方言に地点がある', () => {
    for (const d of DIALECTS) {
      if (d.region === 'キャラ') expect(PLACES[d.id]).toBeUndefined();
      else expect(PLACES[d.id], d.id).toBeTruthy();
    }
  });

  it('各地点がその都道府県の陸地の上にある', () => {
    const off = Object.entries(PLACES)
      .filter(([, [lat, lon, pref]]) => !PREFS.find((p) => p.id === pref)!.rings.some((r) => inRing(project(lat, lon), r)))
      .map(([id]) => id);
    expect(off).toEqual([]);
  });
});

describe('一括変換（地図版）', () => {
  it('dialectConvertMany は方言ごとの dialectConvert と同じ結果になる', async () => {
    const { nodeTokenizer } = await import('../support/tokenizer');
    const { dialectConvert, dialectConvertMany } = await import('../../src/shared/engine');
    const { CORPUS } = await import('./corpus');
    const tk = await nodeTokenizer();
    const ids = DIALECTS.map((d) => d.id);
    for (const s of [...CORPUS, '  本当に\n\nありがとう  ']) {
      const many = dialectConvertMany(tk, ids, s);
      for (const id of ids) expect(many[id], `${id}: ${s}`).toBe(dialectConvert(tk, id, s));
    }
  }, 60_000);
});
