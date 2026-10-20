import { cpSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import preact from '@preact/preset-vite';
import { PREFS, type Ring } from './src/map/shapes';

const STATIC = process.env.VITE_STATIC === '1';

/** 静的版ではログインがないので、アバター枠の場所に地図版への入口を HTML の時点で置く（起動時のレイアウトずれ防止） */
const MAP_LINK =
  '<a class="avatar-btn map-link" href="map/" aria-label="地図で見る" data-testid="map-link">' +
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
  '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/></svg></a>';
const staticShell = (): Plugin => ({
  name: 'namari-static-shell',
  transformIndexHtml: (html) => (STATIC ? html.replace('<span class="avatar-btn" aria-hidden="true"></span>', MAP_LINK) : html),
});

/** 静的版: kuromoji の辞書を dict/ に配置（ブラウザ内で形態素解析するため） */
const copyDict = (): Plugin => ({
  name: 'namari-copy-dict',
  apply: 'build',
  writeBundle(opts) {
    if (!STATIC) return;
    cpSync(resolve('node_modules/kuromoji/dict'), resolve(opts.dir ?? 'dist-static', 'dict'), { recursive: true });
  },
});

/** 輪郭を Douglas–Peucker で間引く */
function simplify(r: Ring, eps: number): Ring {
  if (r.length < 4) return r;
  const keep = new Uint8Array(r.length);
  keep[0] = keep[r.length - 1] = 1;
  const stack: [number, number][] = [[0, r.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop()!;
    const [ax, ay] = r[a], [bx, by] = r[b];
    const L = Math.hypot(bx - ax, by - ay) || 1;
    let best = -1, bd = 0;
    for (let i = a + 1; i < b; i++) {
      const d = Math.abs((bx - ax) * (ay - r[i][1]) - (ax - r[i][0]) * (by - ay)) / L;
      if (d > bd) { bd = d; best = i; }
    }
    if (bd > eps && best > 0) { keep[best] = 1; stack.push([a, best], [best, b]); }
  }
  return r.filter((_, i) => keep[i]);
}

/** 地図版: 読み込み中に見せる列島のシルエット（スケルトン）を HTML に埋め込む */
const mapShell = (): Plugin => ({
  name: 'namari-map-shell',
  transformIndexHtml(html) {
    if (!html.includes('__SILHOUETTE__')) return html;
    const d = PREFS.flatMap((p) => p.rings)
      .map((r) => simplify(r, 0.9))
      .filter((r) => r.length >= 3)
      .map((r) => 'M' + r.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join('L') + 'Z')
      .join('');
    return html.replace('__SILHOUETTE__', d);
  },
});

export default defineConfig({
  plugins: [preact(), staticShell(), copyDict(), mapShell()],
  // 静的版はどのサブパス（GitHub Pages の /<repo>/ など）でも動くよう相対パスで出力
  base: STATIC ? './' : '/',
  build: {
    target: 'es2022',
    // 静的版は一覧版と地図版の 2 ページ。CSS はページごとに分ける
    cssCodeSplit: STATIC,
    modulePreload: { polyfill: false },
    outDir: STATIC ? 'dist-static' : 'dist',
    rollupOptions: STATIC ? { input: { main: resolve('index.html'), map: resolve('map/index.html') } } : undefined,
  },
  server: { proxy: { '/api': 'http://127.0.0.1:8787' } },
});
