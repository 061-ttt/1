// CI 用：SESSION_SECRET が未設定なら安全な乱数で設定する（既存は上書きしない）
import { execFileSync } from 'node:child_process';
import { randomBytes } from 'node:crypto';

const run = (args, input) =>
  execFileSync('npx', ['wrangler', ...args], { encoding: 'utf8', input, stdio: [input ? 'pipe' : 'ignore', 'pipe', 'inherit'] });

let names = [];
try {
  names = JSON.parse(run(['secret', 'list', '--format', 'json'])).map((s) => s.name);
} catch {
  names = [];
}
const provided = process.env.SESSION_SECRET;
if (provided) {
  run(['secret', 'put', 'SESSION_SECRET'], provided);
  console.log('SESSION_SECRET を GitHub Secrets の値で設定しました');
} else if (!names.includes('SESSION_SECRET')) {
  run(['secret', 'put', 'SESSION_SECRET'], randomBytes(48).toString('base64url'));
  console.log('SESSION_SECRET を生成して設定しました');
} else {
  console.log('SESSION_SECRET は設定済みです');
}
