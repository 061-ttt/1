import { expect, flick, pickDialect, ready, test, touchFlick } from './fixtures';

// 静的版（GitHub Pages 用、サーバー・登録なし）

test('サブパス配下で起動し、JS 前の入力が引き継がれる・API 通信をしない', async ({ page, consoleErrors }) => {
  const apiCalls: string[] = [];
  page.on('request', (r) => {
    if (r.url().includes('/api/')) apiCalls.push(r.url());
  });
  await page.route('**/assets/*.js', async (route) => {
    await new Promise((r) => setTimeout(r, 1200));
    await route.continue().catch(() => undefined);
  });
  await page.goto('./', { waitUntil: 'commit' });
  await page.waitForSelector('#shell-q');
  await expect(page.locator('#boot')).toBeVisible();
  expect(await page.evaluate(() => document.activeElement?.id)).toBe('shell-q');
  await page.keyboard.type('おおさか');
  await ready(page);
  await expect(page.locator('#shell-q')).toHaveValue('おおさか');
  await expect(page.getByTestId('dialect-hit').first()).toContainText('大阪弁');
  // ログインはないのでアバターは出さない
  await expect(page.getByTestId('avatar')).toHaveCount(0);
  expect(apiCalls).toEqual([]);
  void consoleErrors;
});

test('ルール変換がストリーミング表示され、方言らしく変わる', async ({ page, consoleErrors }) => {
  await page.goto('./');
  await ready(page);
  await pickDialect(page, 'おおさか', '大阪弁');
  await page.getByTestId('input').fill('今日はとても暑いですね。\nまだ食べていない。');
  await page.getByTestId('convert').click();
  await expect(page.locator('.caret')).toBeVisible();
  await expect(page.getByTestId('copy')).toBeVisible();
  await expect(page.getByTestId('result-text')).toHaveText(/今日はめっちゃ暑いなぁ。\s*まだ食べてへん。/);

  await pickDialect(page, 'hiroshima', '広島弁');
  await page.getByTestId('input').fill('雨が降っているから、行かない。');
  await page.getByTestId('convert').click();
  await expect(page.getByTestId('copy')).toBeVisible();
  await expect(page.getByTestId('result-text')).toHaveText('雨が降っとるけぇ、行かん。');
  void consoleErrors;
});

test('ログインなしでフレーズ帳に保存し、フリックで管理でき、再読み込み後も残る', async ({ page, consoleErrors }) => {
  await page.goto('./');
  await ready(page);
  await pickDialect(page, 'tosa', '土佐弁');
  await page.getByTestId('input').fill('本当にありがとう。');
  await page.getByTestId('convert').click();
  await expect(page.getByTestId('copy')).toBeVisible();
  await page.getByTestId('save').click();
  await expect(page.getByTestId('save')).toHaveText('保存済み');
  await expect(page.getByTestId('account-sheet')).toHaveCount(0);

  await page.getByTestId('tab-book').click();
  const card = page.getByTestId('phrase').first();
  await expect(card).toContainText('まっこと');
  const id = (await card.getAttribute('data-id'))!;
  await flick(page, id, 1);
  await expect(page.getByTestId('count-1')).toHaveText('1');
  await page.getByTestId('seg-1').click();
  await touchFlick(page, id, 1);
  await expect(page.getByTestId('count-2')).toHaveText('1');

  await page.reload();
  await ready(page);
  await page.getByTestId('tab-book').click();
  await expect(page.getByTestId('count-2')).toHaveText('1');
  await page.getByTestId('seg-2').click();
  await flick(page, id, -1);
  await page.getByTestId('seg-1').click();
  await flick(page, id, -1);
  await page.getByTestId('seg-0').click();
  await flick(page, id, -1);
  await expect(page.getByTestId('toast')).toContainText('削除しました');
  await page.getByTestId('toast-action').click();
  await expect(page.locator(`[data-id="${id}"]`)).toBeVisible();
  await page.reload();
  await ready(page);
  await page.getByTestId('tab-book').click();
  await expect(page.locator(`[data-id="${id}"]`)).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  void consoleErrors;
});
