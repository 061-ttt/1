import { test as base, expect, type Page } from '@playwright/test';

/** 各テストで固有のユーザーを使い、コンソールエラーが 0 件であることを確認する */
export const test = base.extend<{ sub: string; consoleErrors: string[] }>({
  sub: async ({}, use, info) => {
    await use(`e2e-${info.project.name}-${info.testId}-${Date.now()}`);
  },
  consoleErrors: async ({ page }, use) => {
    const errors: string[] = [];
    page.on('console', (m) => {
      if (m.type() === 'error') errors.push(m.text());
    });
    page.on('pageerror', (e) => errors.push(e.message));
    await use(errors);
    const unexpected = errors.filter((e) => !/status of 40[13]/.test(e));
    expect(unexpected, 'コンソールエラー').toEqual([]);
  },
  page: async ({ page, sub }, use) => {
    await page.addInitScript((s) => {
      try {
        if (!sessionStorage.getItem('nm:init')) {
          localStorage.clear();
          sessionStorage.setItem('nm:init', '1');
        }
        localStorage.setItem('nm:testSub', s);
      } catch {
        /* noop */
      }
    }, sub);
    await use(page);
  },
});

export { expect };

export async function ready(page: Page) {
  await expect(page.locator('#boot')).toHaveCount(0, { timeout: 10_000 });
}

export async function pickDialect(page: Page, q: string, name: string) {
  const input = page.locator('#shell-q');
  await input.click();
  await input.fill(q);
  await page.getByTestId('dialect-hit').filter({ hasText: name }).first().click();
  await expect(page.getByTestId('current-dialect')).toHaveText(name);
}

export async function convertText(page: Page, text: string) {
  await page.getByTestId('input').fill(text);
  await page.getByTestId('convert').click();
  await expect(page.getByTestId('copy')).toBeVisible();
  return (await page.getByTestId('result-text').innerText()).trim();
}

export async function loginViaUi(page: Page) {
  await page.getByTestId('avatar').click();
  await page.getByTestId('google-login').click();
  await expect(page.getByTestId('account-sheet')).toHaveCount(0);
  await expect(page.getByTestId('avatar')).toHaveAttribute('aria-label', /アカウント/);
}

/** マウスでカードをフリック／ドラッグする */
export async function flick(page: Page, id: string, dir: 1 | -1, opts: { distance?: number; steps?: number } = {}) {
  const card = page.locator(`[data-testid="phrase"][data-id="${id}"] .swipe-card`);
  // 入場アニメーション・画面遷移が落ち着くまで待つ
  await card.hover({ position: { x: 20, y: 20 } });
  await page.waitForTimeout(250);
  const box = (await card.boundingBox())!;
  const y = box.y + box.height / 2;
  const x0 = box.x + box.width / 2;
  const distance = opts.distance ?? box.width * 0.6;
  const steps = opts.steps ?? 6;
  await page.mouse.move(x0, y);
  await page.mouse.down();
  for (let i = 1; i <= steps; i++) await page.mouse.move(x0 + (dir * distance * i) / steps, y + i * 0.5);
  await page.mouse.up();
}

/** 実機に近いタッチ操作でフリックする（CDP の Input.dispatchTouchEvent） */
export async function touchFlick(page: Page, id: string, dir: 1 | -1) {
  const card = page.locator(`[data-testid="phrase"][data-id="${id}"] .swipe-card`);
  await card.hover({ position: { x: 20, y: 20 } });
  await page.waitForTimeout(250);
  const box = (await card.boundingBox())!;
  const y = box.y + box.height / 2;
  const x0 = box.x + box.width / 2;
  const cdp = await page.context().newCDPSession(page);
  const point = (x: number) => [{ x, y, id: 1, radiusX: 4, radiusY: 4, force: 1 }];
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: point(x0) });
  for (let i = 1; i <= 5; i++) {
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: point(x0 + dir * i * 34) });
    await page.waitForTimeout(16);
  }
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await cdp.detach();
}
