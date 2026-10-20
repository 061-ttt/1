// CI 用：D1 データベースを用意し、wrangler.jsonc に ID を書き込む
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

const NAME = 'namari-db';
const wrangler = (...args) => execFileSync('npx', ['wrangler', ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] });
const list = () => JSON.parse(wrangler('d1', 'list', '--json'));

let db = list().find((d) => d.name === NAME);
if (!db) {
  console.log(`D1 "${NAME}" を作成します`);
  wrangler('d1', 'create', NAME);
  db = list().find((d) => d.name === NAME);
}
if (!db?.uuid) throw new Error('D1 の ID を取得できませんでした');

const path = 'wrangler.jsonc';
const src = readFileSync(path, 'utf8');
// 最上位（本番）の database_id だけを置き換える
const out = src.replace('"database_id": "00000000-0000-0000-0000-000000000000"', `"database_id": "${db.uuid}"`);
writeFileSync(path, out);
console.log(`D1 ${NAME} = ${db.uuid}`);
