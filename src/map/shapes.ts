import japan from '@svg-maps/japan';

export type Ring = [number, number][];
export interface Pref {
  id: string;
  name: string;
  rings: Ring[];
}

/** SVG パス（m/l/h/v/z の相対・絶対）を多角形の配列に変換する。曲線は含まれないデータ */
export function parsePath(d: string): Ring[] {
  const out: Ring[] = [];
  const tok = d.match(/[a-zA-Z]|-?\d*\.?\d+(?:e-?\d+)?/g) ?? [];
  let cur: Ring = [];
  let x = 0, y = 0, sx = 0, sy = 0, cmd = 'm', i = 0;
  const n = () => parseFloat(tok[i++]);
  while (i < tok.length) {
    const t = tok[i];
    if (/[a-zA-Z]/.test(t)) {
      cmd = t;
      i++;
      if (cmd === 'z' || cmd === 'Z') {
        if (cur.length > 2) out.push(cur);
        cur = [];
        x = sx;
        y = sy;
        continue;
      }
    }
    switch (cmd) {
      case 'm': case 'M': {
        const a = n(), b = n();
        if (cur.length > 2) out.push(cur);
        x = cmd === 'm' ? x + a : a;
        y = cmd === 'm' ? y + b : b;
        sx = x; sy = y;
        cur = [[x, y]];
        cmd = cmd === 'm' ? 'l' : 'L';
        break;
      }
      case 'l': x += n(); y += n(); cur.push([x, y]); break;
      case 'L': x = n(); y = n(); cur.push([x, y]); break;
      case 'h': x += n(); cur.push([x, y]); break;
      case 'H': x = n(); cur.push([x, y]); break;
      case 'v': y += n(); cur.push([x, y]); break;
      case 'V': y = n(); cur.push([x, y]); break;
      default: throw new Error(`unsupported path command ${cmd}`);
    }
  }
  if (cur.length > 2) out.push(cur);
  return out;
}

type MapData = { viewBox: string; locations: { id: string; name: string; path: string }[] };

export const PREFS: Pref[] = (japan as unknown as MapData).locations.map((l) => ({
  id: l.id,
  name: l.name,
  rings: parsePath(l.path),
}));

export const VIEW = { w: 438, h: 516 };

export function inRing(p: [number, number], r: Ring): boolean {
  let inside = false;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
    const [xi, yi] = r[i], [xj, yj] = r[j];
    if (yi > p[1] !== yj > p[1] && p[0] < ((xj - xi) * (p[1] - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
