import { cpSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import preact from '@preact/preset-vite';

const STATIC = process.env.VITE_STATIC === '1';

/** 静的版ではログインがないので、HTML からアバター枠を除く（起動時のレイアウトずれ防止） */
const staticShell = (): Plugin => ({
  name: 'namari-static-shell',
  transformIndexHtml: (html) => (STATIC ? html.replace('<span class="avatar-btn" aria-hidden="true"></span>', '') : html),
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

export default defineConfig({
  plugins: [preact(), staticShell(), copyDict()],
  // 静的版はどのサブパス（GitHub Pages の /<repo>/ など）でも動くよう相対パスで出力
  base: STATIC ? './' : '/',
  build: {
    target: 'es2022',
    cssCodeSplit: false,
    modulePreload: { polyfill: false },
    outDir: STATIC ? 'dist-static' : 'dist',
  },
  server: { proxy: { '/api': 'http://127.0.0.1:8787' } },
});
