import { convertText, expect, pickDialect, ready, test } from './fixtures';

test('デスクトップ：1 カラム中央寄せ、"/" キーで検索、Ctrl+Enter で変換', async ({ page, consoleErrors }) => {
  await page.goto('/');
  await ready(page);
  const main = await page.locator('.main').boundingBox();
  expect(main!.width).toBeLessThanOrEqual(560);
  expect(Math.abs(main!.x + main!.width / 2 - 640)).toBeLessThan(4);

  await page.getByTestId('input').click();
  await page.locator('body').click({ position: { x: 20, y: 600 } });
  await page.keyboard.press('/');
  await expect(page.locator('#shell-q')).toBeFocused();
  await page.keyboard.press('Escape');

  await pickDialect(page, 'nagoya', '名古屋弁');
  await page.getByTestId('input').fill('すごく疲れた。');
  await page.keyboard.press('Control+Enter');
  await expect(page.getByTestId('copy')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  void convertText;
  void consoleErrors;
});
