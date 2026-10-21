import { convertText, expect, flick, pickDialect, ready, test, touchFlick } from './fixtures';

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
  // 代わりに地図版への入口がある（HTML の時点から）
  await expect(page.getByTestId('map-link')).toHaveAttribute('href', 'map/');
  expect(apiCalls).toEqual([]);
  void consoleErrors;
});

test('八丈方言は静的版では選べない。琉球諸語は選べる', async ({ page, consoleErrors }) => {
  await page.goto('./');
  await ready(page);
  await page.locator('#shell-q').fill('はちじょう');
  await expect(page.getByTestId('dialect-hit')).toHaveCount(0);
  await page.locator('#shell-q').fill('おきなわ');
  const hits = page.getByTestId('dialect-hit');
  await expect(hits.filter({ hasText: '沖縄語' })).toHaveCount(1);
  await expect(hits.filter({ hasText: 'うちなーやまとぐち' })).toHaveCount(1);
  await page.locator('#shell-q').fill('みやこ');
  await expect(page.getByTestId('dialect-hit').filter({ hasText: '宮古語' })).toHaveCount(1);
  void consoleErrors;
});

test('沖縄語: 文全体を訳し、訳せない語があれば訳さずに伝える', async ({ page, consoleErrors }) => {
  await page.goto('./');
  await ready(page);
  await pickDialect(page, 'おきなわご', '沖縄語');
  expect(await convertText(page, '本当にありがとうございます')).toBe('じゅんに にふぇーでーびる');
  expect(await convertText(page, '今日はとても暑いね')).toBe('ちゅーや いっぺー あちさやー');
  expect(await convertText(page, '疲れたから、もう帰るね')).toBe('疲れたから、もう帰るね');
  await expect(page.getByTestId('no-change')).toHaveText('沖縄語に訳せない言葉（疲れる）があるため、訳していません');
  void consoleErrors;
});

test('変換できる表現がない文は、その旨を表示して文を変えない', async ({ page, consoleErrors }) => {
  await page.goto('./');
  await ready(page);
  await page.getByTestId('input').fill('東京タワーの写真。');
  await page.getByTestId('convert').click();
  await expect(page.getByTestId('copy')).toBeVisible({ timeout: 20_000 });
  await expect(page.getByTestId('result-text')).toHaveText('東京タワーの写真。');
  await expect(page.getByTestId('no-change')).toBeVisible();
  void consoleErrors;
});

test('ルール変換がストリーミング表示され、方言らしく変わる', async ({ page, consoleErrors }) => {
  await page.goto('./');
  await ready(page);
  await pickDialect(page, 'おおさか', '大阪弁');
  await page.getByTestId('input').fill('今日はとても暑いですね。\nまだ食べていない。');
  await page.getByTestId('convert').click();
  await expect(page.locator('.caret')).toBeVisible({ timeout: 20_000 });
  await expect(page.getByTestId('copy')).toBeVisible();
  await expect(page.getByTestId('result-text')).toHaveText(/今日はめっちゃ暑いですなあ。\s*まだ食べてへん。/);

  await pickDialect(page, 'hiroshima', '広島弁');
  await page.getByTestId('input').fill('雨が降っているから、行かない。');
  await page.getByTestId('convert').click();
  await expect(page.getByTestId('copy')).toBeVisible();
  await expect(page.getByTestId('result-text')).toHaveText('雨が降っとるけえ、行かん。');
  void consoleErrors;
});

test('ログインなしでフレーズ帳に保存し、フリックで管理でき、再読み込み後も残る', async ({ page, consoleErrors }) => {
  await page.goto('./');
  await ready(page);
  await pickDialect(page, 'tosa', '土佐弁');
  await page.getByTestId('input').fill('本当にありがとう。');
  await page.getByTestId('convert').click();
  await expect(page.getByTestId('copy')).toBeVisible({ timeout: 20_000 });
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

test('地図版への入口から地図版を開ける', async ({ page, consoleErrors }) => {
  await page.goto('./');
  await ready(page);
  await page.getByRole('link', { name: '地図で見る' }).click();
  await expect(page).toHaveURL(/\/namari\/map\/$/);
  await expect(page.locator('#q')).toBeVisible();
  void consoleErrors;
});
