import { convertText, expect, flick, loginViaUi, pickDialect, ready, test, touchFlick } from './fixtures';

test.describe('起動と検索', () => {
  test('開いた瞬間に検索でき、JS 前の入力が引き継がれる・全画面スケルトンが出る', async ({ page, consoleErrors }) => {
    // JS を遅延させ、起動前の状態を確実に観測する
    await page.route('**/assets/*.js', async (route) => {
      await new Promise((r) => setTimeout(r, 1500));
      await route.continue();
    });
    await page.goto('/', { waitUntil: 'commit' });
    await page.waitForSelector('#shell-q');
    await expect(page.locator('#boot')).toBeVisible();
    await expect(page.locator('#boot .sk').first()).toBeVisible();
    expect(await page.evaluate(() => document.activeElement?.id)).toBe('shell-q');
    expect(await page.locator('#app').innerHTML()).toBe('');
    await page.keyboard.type('つがる');
    await ready(page);
    await expect(page.locator('#shell-q')).toHaveValue('つがる');
    await expect(page.locator('#shell-q')).toBeFocused();
    await expect(page.getByTestId('dialect-hit').first()).toContainText('津軽弁');
    void consoleErrors;
  });

  test('かな・ローマ字・漢字・地方名で探せる／該当なし', async ({ page, consoleErrors }) => {
    await page.goto('/');
    await ready(page);
    const q = page.locator('#shell-q');
    const first = page.getByTestId('dialect-hit').first();
    for (const [query, name] of [
      ['おおさか', '大阪弁'],
      ['osaka', '大阪弁'],
      ['oosaka', '大阪弁'],
      ['鹿児島', '薩摩弁'],
      ['hakata', '博多弁'],
    ]) {
      await q.fill(query);
      await expect(first).toContainText(name);
    }
    await q.fill('関西');
    const hits = page.getByTestId('dialect-hit');
    await expect(hits.filter({ hasText: '京都弁' })).toHaveCount(1);
    await expect(hits.filter({ hasText: '博多弁' })).toHaveCount(0);

    await q.fill('xyzxyz');
    await expect(page.getByTestId('no-hit')).toBeVisible();
    await expect(page.getByTestId('convert-query')).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(page.getByTestId('search-panel')).toHaveCount(0);
    await expect(q).toHaveValue('');

    // Enter で先頭候補を選べる
    await q.fill('ひろしま');
    await page.keyboard.press('Enter');
    await expect(page.getByTestId('current-dialect')).toHaveText('広島弁');
    void consoleErrors;
  });

  test('検索欄にフォーカスしただけでは画面を覆わない／空のまま開くと全方言を地方別に出す', async ({ page, consoleErrors }) => {
    await page.goto('/');
    await ready(page);
    await expect(page.getByTestId('search-panel')).toHaveCount(0);
    await page.locator('#shell-q').click();
    await expect(page.getByTestId('search-panel')).toBeVisible();
    const chips = page.getByTestId('dialect-chip');
    expect(await chips.count()).toBeGreaterThanOrEqual(50);
    await chips.filter({ hasText: '土佐弁' }).click();
    await expect(page.getByTestId('current-dialect')).toHaveText('土佐弁');
    await expect(page.getByTestId('search-panel')).toHaveCount(0);
    void consoleErrors;
  });
});

test.describe('変換', () => {
  test('ストリーミングで変換し、コピーできる', async ({ page, context, consoleErrors }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.goto('/');
    await ready(page);
    await pickDialect(page, 'はかた', '博多弁');
    await page.getByTestId('input').fill('今日はとても暑いです。\n一緒にアイスを食べに行こう。');
    await page.getByTestId('convert').click();
    // 途中経過（キャレット）が見え、完了後に消える
    await expect(page.locator('.caret')).toBeVisible();
    await expect(page.getByTestId('copy')).toBeVisible();
    await expect(page.locator('.caret')).toHaveCount(0);
    const result = (await page.getByTestId('result-text').innerText()).trim();
    expect(result).toContain('今日はとても暑い');
    expect(result.split('\n')).toHaveLength(2);
    await expect(page.getByTestId('result')).toContainText('博多弁');
    await page.getByTestId('copy').click();
    await expect(page.getByTestId('toast')).toContainText('コピーしました');
    expect((await page.evaluate(() => navigator.clipboard.readText())).trim()).toBe(result);
    // 履歴に残る
    await page.locator('#shell-q').click();
    await expect(page.getByTestId('search-panel')).toContainText('履歴');
    void consoleErrors;
  });

  test('入力が空・500文字超では変換できない', async ({ page, consoleErrors }) => {
    await page.goto('/');
    await ready(page);
    await expect(page.getByTestId('convert')).toBeDisabled();
    await page.getByTestId('input').fill('あ'.repeat(501));
    await expect(page.getByTestId('convert')).toBeDisabled();
    await expect(page.locator('.count.over')).toHaveText('501/500');
    void consoleErrors;
  });

  test('検索欄の文をそのまま変換できる', async ({ page, consoleErrors }) => {
    await page.goto('/');
    await ready(page);
    await page.locator('#shell-q').fill('ありがとうございます');
    await page.getByTestId('convert-query').click();
    await expect(page.getByTestId('copy')).toBeVisible();
    await expect(page.getByTestId('input')).toHaveValue('ありがとうございます');
    void consoleErrors;
  });
});

test.describe('ログインとフレーズ帳', () => {
  test('未ログインで保存するとログインを促す', async ({ page, consoleErrors }) => {
    await page.goto('/');
    await ready(page);
    await convertText(page, 'おはようございます。');
    await page.getByTestId('save').click();
    await expect(page.getByTestId('account-sheet')).toBeVisible();
    await expect(page.getByTestId('sheet-reason')).toBeVisible();
    await expect(page.getByTestId('google-login')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByTestId('account-sheet')).toHaveCount(0);
    await page.getByTestId('tab-book').click();
    await expect(page.getByTestId('book-locked')).toBeVisible();
    void consoleErrors;
  });

  test('Google ログイン → 保存 → フリックでステータス管理 → 削除と取り消し → ログアウト', async ({ page, consoleErrors }) => {
    await page.goto('/');
    await ready(page);
    await loginViaUi(page);
    await expect(page.getByTestId('toast')).toContainText('ログインしました');

    await pickDialect(page, 'tosa', '土佐弁');
    const result = await convertText(page, '本当にありがとう。');
    await page.getByTestId('save').click();
    await expect(page.getByTestId('save')).toHaveText('保存済み');
    await expect(page.getByTestId('toast')).toContainText('保存しました');
    await page.getByTestId('toast-action').click();

    await expect(page.getByTestId('view-book')).toBeVisible();
    const card = page.getByTestId('phrase').first();
    await expect(card).toContainText(result);
    await expect(card).toContainText('土佐弁');
    const id = (await card.getAttribute('data-id'))!;
    await expect(page.getByTestId('count-0')).toHaveText('1');

    // 小さなドラッグは元に戻る
    await flick(page, id, 1, { distance: 40, steps: 10 });
    await expect(page.locator(`[data-id="${id}"]`)).toHaveAttribute('data-status', '0');

    // 右フリック → 練習中
    await flick(page, id, 1);
    await expect(page.locator(`[data-id="${id}"]`)).toHaveCount(0);
    await expect(page.getByTestId('count-0')).toHaveText('0');
    await expect(page.getByTestId('count-1')).toHaveText('1');
    await expect(page.getByTestId('book-empty')).toBeVisible();

    await page.getByTestId('seg-1').click();
    await expect(page.locator(`[data-id="${id}"]`)).toHaveAttribute('data-status', '1');
    // 右フリック → マスター
    await flick(page, id, 1);
    await expect(page.getByTestId('count-2')).toHaveText('1');
    await page.getByTestId('seg-2').click();
    await expect(page.locator(`[data-id="${id}"]`)).toHaveAttribute('data-status', '2');
    // マスターでは右へ進めない（ボタンもない）
    await expect(page.locator(`[data-id="${id}"] [data-testid="phrase-next"]`)).toHaveCount(0);
    await flick(page, id, 1);
    await expect(page.locator(`[data-id="${id}"]`)).toHaveAttribute('data-status', '2');

    // 左フリック → 練習中、さらに未着手へ
    await flick(page, id, -1);
    await expect(page.getByTestId('count-1')).toHaveText('1');
    await page.getByTestId('seg-1').click();
    await flick(page, id, -1);
    await expect(page.getByTestId('count-0')).toHaveText('1');

    // 未着手で左フリック → 削除 → 元に戻す
    await page.getByTestId('seg-0').click();
    await flick(page, id, -1);
    await expect(page.getByTestId('toast')).toContainText('削除しました');
    await expect(page.getByTestId('count-0')).toHaveText('0');
    await page.getByTestId('toast-action').click();
    await expect(page.locator(`[data-id="${id}"]`)).toBeVisible();
    await expect(page.getByTestId('count-0')).toHaveText('1');

    // リロードしても状態が残る（サーバー保存）
    await page.reload();
    await ready(page);
    await page.getByTestId('tab-book').click();
    await expect(page.locator(`[data-id="${id}"]`)).toBeVisible();

    // 保存フレーズが検索でヒットする
    await page.locator('#shell-q').fill(result.slice(0, 4));
    await expect(page.getByTestId('phrase-hit').first()).toBeVisible();
    await page.keyboard.press('Escape');

    // ログアウト
    await page.getByTestId('avatar').click();
    await expect(page.getByTestId('me-name')).toHaveText('テスト太郎');
    await page.getByTestId('logout').click();
    await expect(page.getByTestId('book-locked')).toBeVisible();
    await page.reload();
    await ready(page);
    await expect(page.getByTestId('avatar')).toHaveAttribute('aria-label', 'ログイン');
    void consoleErrors;
  });

  test('キーボードだけでステータスを操作できる', async ({ page, consoleErrors }) => {
    await page.goto('/');
    await ready(page);
    await loginViaUi(page);
    await convertText(page, 'また明日。');
    await page.getByTestId('save').click();
    await expect(page.getByTestId('save')).toHaveText('保存済み');
    await page.getByTestId('tab-book').click();
    const next = page.getByTestId('phrase-next').first();
    await next.focus();
    await page.keyboard.press('Enter');
    await expect(page.getByTestId('count-1')).toHaveText('1');
    await page.getByTestId('seg-1').focus();
    await page.keyboard.press('Enter');
    await page.getByTestId('phrase-back').first().focus();
    await page.keyboard.press('Space');
    await expect(page.getByTestId('count-0')).toHaveText('1');
    void consoleErrors;
  });

  test('タッチ操作でもフリックできる', async ({ page, consoleErrors }) => {
    await page.goto('/');
    await ready(page);
    await loginViaUi(page);
    await convertText(page, 'ちょっと待って。');
    await page.getByTestId('save').click();
    await expect(page.getByTestId('save')).toHaveText('保存済み');
    await page.getByTestId('tab-book').click();
    const id = (await page.getByTestId('phrase').first().getAttribute('data-id'))!;
    await touchFlick(page, id, 1);
    await expect(page.getByTestId('count-1')).toHaveText('1');
    await page.getByTestId('seg-1').click();
    await touchFlick(page, id, -1);
    await expect(page.getByTestId('count-0')).toHaveText('1');
    void consoleErrors;
  });

  test('動きを減らす設定でもフリックが機能する', async ({ page, consoleErrors }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await ready(page);
    await loginViaUi(page);
    await convertText(page, 'よろしくお願いします。');
    await page.getByTestId('save').click();
    await expect(page.getByTestId('save')).toHaveText('保存済み');
    await page.getByTestId('tab-book').click();
    const id = (await page.getByTestId('phrase').first().getAttribute('data-id'))!;
    await flick(page, id, 1);
    await expect(page.getByTestId('count-1')).toHaveText('1');
    void consoleErrors;
  });
});

test.describe('レイアウト', () => {
  test('390px 幅で横スクロールが出ない（全画面）', async ({ page, consoleErrors }) => {
    await page.goto('/');
    await ready(page);
    const noOverflow = async () =>
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await noOverflow();
    await convertText(page, '長い文章のテストです。'.repeat(8));
    await noOverflow();
    await page.locator('#shell-q').click();
    await noOverflow();
    await page.keyboard.press('Escape');
    await page.getByTestId('tab-book').click();
    await noOverflow();
    await page.getByTestId('avatar').click();
    await noOverflow();
    void consoleErrors;
  });
});
