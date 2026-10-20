// 静的版の確認用サーバー。GitHub Pages と同じくサブパス（/namari/）配下で配信する
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const ROOT = new URL('../dist-static/', import.meta.url).pathname;
const PREFIX = '/namari/';
const PORT = Number(process.env.PORT || 4173);
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webmanifest': 'application/manifest+json',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
  '.gz': 'application/gzip',
};

createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', 'http://localhost');
  if (url.pathname === '/') {
    res.writeHead(302, { Location: PREFIX }).end();
    return;
  }
  if (!url.pathname.startsWith(PREFIX)) {
    res.writeHead(404).end('not found');
    return;
  }
  const raw = decodeURIComponent(url.pathname.slice(PREFIX.length));
  let rel = raw ? normalize(raw).replace(/^(\.\.[/\\])+/, '') : '';
  if (!rel || rel === '.' || rel.endsWith('/')) rel += 'index.html';
  const file = join(ROOT, rel);
  try {
    const st = await stat(file);
    if (st.isDirectory()) {
      // GitHub Pages と同じく、末尾スラッシュなしのディレクトリはリダイレクト
      res.writeHead(301, { Location: url.pathname + '/' + url.search }).end();
      return;
    }
    if (!st.isFile()) throw new Error('not a file');
    res.writeHead(200, { 'Content-Type': TYPES[extname(file)] ?? 'application/octet-stream' });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404).end('not found');
  }
}).listen(PORT, '127.0.0.1', () => console.log(`static: http://127.0.0.1:${PORT}${PREFIX}`));
