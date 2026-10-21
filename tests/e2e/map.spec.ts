import type { Page } from '@playwright/test';
import { expect, test } from './fixtures';

// 地図版（静的版の map/）。3D 地図の上に全方言のアイコンを出し、タップで拡大カードを開く

const ALL_ON_MAP = 57; // キャラ口調を除く全方言

async function mapReady(page: Page) {
  await expect(page.locator('#map.ready')).toHaveCount(1, { timeout: 20_000 });
  await expect(page.locator('#boot')).toHaveCount(0);
}

/** ピンが落ち着くまで待つ（位置が 2 回続けて変わらない） */
async function settled(page: Page) {
  let prev = '';
  for (let i = 0; i < 40; i++) {
    const now = await page.evaluate(() =>
      [...document.querySelectorAll<HTMLElement>('.pin')].map((e) => e.style.transform + e.className).join('|'),
    );
    const animating = await page.evaluate(() => document.getAnimations().length);
    if (now === prev && !animating) return;
    prev = now;
    await page.waitForTimeout(250);
  }
}

async function tapPin(page: Page, id: string) {
  const box = await page.locator(`.pin[data-id="${id}"]`).boundingBox();
  expect(box, id).not.toBeNull();
  // アイコン部分（ラベルの端から 10px）をタップ
  const flip = await page.locator(`.pin[data-id="${id}"]`).evaluate((e) => e.classList.contains('flip'));
  const x = flip ? box!.x + box!.width - 10 : box!.x + 10;
  await page.mouse.click(x, box!.y + box!.height / 2);
}

async function boxes(page: Page) {
  return page.evaluate(() =>
    [...document.querySelectorAll<HTMLElement>('.pin:not(.out)')].map((e) => {
      const r = e.getBoundingClientRect();
      return { id: e.dataset.id!, icon: e.classList.contains('icon'), x0: r.left, y0: r.top, x1: r.right, y1: r.bottom };
    }),
  );
}

/** 見た目の重なり。アイコンだけのものは丸、名前付きは角丸の矩形として調べる */
function overlaps(bs: { id: string; icon: boolean; x0: number; y0: number; x1: number; y1: number }[]) {
  const out: string[] = [];
  for (let i = 0; i < bs.length; i++)
    for (let j = i + 1; j < bs.length; j++) {
      const a = bs[i], b = bs[j];
      if (a.icon && b.icon) {
        const d = Math.hypot((a.x0 + a.x1 - b.x0 - b.x1) / 2, (a.y0 + a.y1 - b.y0 - b.y1) / 2);
        if (d < (a.x1 - a.x0 + b.x1 - b.x0) / 2 - 1.5) out.push(`${a.id}/${b.id}`);
        continue;
      }
      const ox = Math.min(a.x1, b.x1) - Math.max(a.x0, b.x0);
      const oy = Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0);
      if (ox > 1.5 && oy > 1.5) out.push(`${a.id}/${b.id}`);
    }
  return out;
}

test('起動直後から入力でき、全方言のアイコンが地図の上に重ならずに並ぶ', async ({ page, consoleErrors }) => {
  const apiCalls: string[] = [];
  page.on('request', (r) => {
    if (r.url().includes('/api/')) apiCalls.push(r.url());
  });
  // JS が遅い回線でも、先に出る入力欄に打った文字は失われない
  await page.route('**/assets/*.js', async (route) => {
    await new Promise((r) => setTimeout(r, 900));
    await route.continue().catch(() => undefined);
  });
  await page.goto('map/', { waitUntil: 'commit' });
  await page.waitForSelector('#q');
  await expect(page.locator('#boot svg path')).toBeVisible();
  expect(await page.evaluate(() => document.activeElement?.id)).toBe('q');
  await page.keyboard.type('今日はとても暑いね');
  await mapReady(page);
  await expect(page.locator('#q')).toHaveValue('今日はとても暑いね');
  await expect(page.locator('.pin')).toHaveCount(ALL_ON_MAP);
  await settled(page);
  await expect(page.locator('.pin.out')).toHaveCount(0);
  const bs = await boxes(page);
  expect(bs).toHaveLength(ALL_ON_MAP);
  expect(overlaps(bs)).toEqual([]);
  // アイコンはすべて画面内（入力欄の下）
  const top = await page.locator('#status').evaluate((e) => e.getBoundingClientRect().bottom);
  const vw = page.viewportSize()!;
  for (const b of bs) {
    expect(b.x0, b.id).toBeGreaterThanOrEqual(0);
    expect(b.x1, b.id).toBeLessThanOrEqual(vw.width);
    expect(b.y0, b.id).toBeGreaterThanOrEqual(top - 1);
    expect(b.y1, b.id).toBeLessThanOrEqual(vw.height);
  }
  expect(apiCalls).toEqual([]);
  void consoleErrors;
});

test('文を入れると全方言が一度に変換され、変わらない方言は薄く表示される', async ({ page, consoleErrors }) => {
  await page.goto('map/');
  await mapReady(page);
  await page.locator('#q').fill('今日はとても暑いね');
  await expect(page.getByTestId('summary')).toContainText('56 の方言のうち', { timeout: 30_000 });
  await expect(page.locator('.pin[data-id="osaka"]')).toHaveAttribute('aria-label', '大阪弁: 今日はめっちゃ暑いなあ');
  await expect(page.locator('.pin[data-id="hakata"]')).toHaveAttribute('aria-label', '博多弁: 今日はばり暑かね');
  await expect(page.locator('.pin[data-id="hokkaido"]')).toHaveAttribute('aria-label', '北海道弁: 今日はなまら暑いね');
  await expect(page.locator('.pin[data-id="satsuma"]')).toHaveAttribute('aria-label', '薩摩弁: 今日はわっぜ暑かね');
  // 共通語と同じになった方言
  await expect(page.locator('.pin[data-id="nanbu"]')).toHaveClass(/\bsame\b/);
  const changed = await page.locator('.pin.said').count();
  const same = await page.locator('.pin.same').count();
  const nofit = await page.locator('.pin.nofit').count();
  expect(changed + same + nofit).toBe(56);
  await expect(page.getByTestId('summary')).toHaveText(`56 の方言のうち ${changed} で言い方が変わりました`);
  // 沖縄語は文全体を訳す。宮古語はこの文を訳せないので、訳せないことを示す
  await expect(page.locator('.pin[data-id="okinawa"]')).toHaveAttribute('aria-label', '沖縄語: ちゅーや いっぺー あちさやー');
  await expect(page.locator('.pin[data-id="miyako"]')).toHaveClass(/\bnofit\b/);
  await expect(page.locator('.pin[data-id="miyako"]')).toHaveAttribute('aria-label', '宮古語: この文は訳せません');
  // 規則変換できない方言は結果を持たない
  await expect(page.locator('.pin[data-id="hachijo"]')).toHaveAttribute('aria-label', '八丈方言');
  // 入力を消すと元に戻り、例文が出る
  await page.getByRole('button', { name: '入力を消す' }).click();
  await expect(page.locator('.pin.said')).toHaveCount(0);
  await expect(page.locator('.sample')).toHaveCount(10);
  await expect(page.locator('.sample[aria-pressed="true"]')).toHaveCount(0);
  void consoleErrors;
});

test('アイコンをタップすると拡大して変換結果のカードが開き、前へ・次へで隣の方言に移れる', async ({ page, consoleErrors }) => {
  await page.goto('map/?q=' + encodeURIComponent('疲れたから、もう帰るね'));
  await mapReady(page);
  await expect(page.getByTestId('summary')).toBeVisible({ timeout: 30_000 });
  await settled(page);
  const before = await page.evaluate(() => document.getElementById('map')!.className);
  expect(before).toContain('far');
  await tapPin(page, 'hiroshima');
  const card = page.getByRole('dialog');
  await expect(card).toBeVisible();
  await expect(card.getByRole('heading')).toHaveText('広島弁');
  await expect(page.getByTestId('card-said')).toHaveText('疲れたけえ、もう帰るのう');
  await expect(page).toHaveURL(/#hiroshima$/);
  // カメラが寄る（全体表示より細かい表示になる）
  await expect(page.locator('#map')).not.toHaveClass(/\bfar\b/, { timeout: 5_000 });
  // カードの吹き出しの先は、選んだ地点を指す
  await page.waitForTimeout(1000);
  const tail = await page.locator('.card-tail').boundingBox();
  const cardBox = await card.boundingBox();
  expect(tail!.y).toBeGreaterThan(cardBox!.y + cardBox!.height - 20);
  // 次へ（方言一覧で次の方言）
  await card.getByRole('button', { name: '次の方言' }).click();
  await expect(card.getByRole('heading')).toHaveText('岡山弁');
  await expect(page.getByTestId('card-said')).toHaveText('疲れたけえ、もう帰るなあ');
  await card.getByRole('button', { name: '前の方言' }).click();
  await expect(card.getByRole('heading')).toHaveText('広島弁');
  // Esc で閉じて元の表示へ戻る
  await page.keyboard.press('Escape');
  await expect(card).toBeHidden();
  await expect(page).not.toHaveURL(/#/);
  await expect(page.locator('#map')).toHaveClass(/\bfar\b/, { timeout: 5_000 });
  void consoleErrors;
});

test('地図はアイコンの上から指でドラッグしても動き、タップ扱いにならない', async ({ page, consoleErrors }) => {
  await page.goto('map/');
  await mapReady(page);
  await settled(page);
  const a = await page.locator('.pin[data-id="osaka"]').boundingBox();
  const sx = a!.x + 10, sy = a!.y + a!.height / 2;
  await page.mouse.move(sx, sy);
  await page.mouse.down();
  for (let i = 1; i <= 10; i++) await page.mouse.move(sx + i * 8, sy - i * 12);
  await page.mouse.up();
  await page.waitForTimeout(600);
  await expect(page.getByRole('dialog')).toBeHidden();
  const b = await page.locator('.pin[data-id="osaka"]').boundingBox();
  expect(Math.hypot(b!.x - a!.x, b!.y - a!.y)).toBeGreaterThan(40);
  // 全体表示ボタンで戻る
  await page.getByRole('button', { name: '日本全体を表示' }).click();
  await page.waitForTimeout(1500);
  await settled(page);
  const c = await page.locator('.pin[data-id="osaka"]').boundingBox();
  expect(Math.hypot(c!.x - a!.x, c!.y - a!.y)).toBeLessThan(30);
  void consoleErrors;
});

test('キーボードだけで方言を選んでカードを開き、閉じるとフォーカスが戻る', async ({ page, consoleErrors }) => {
  await page.goto('map/?q=' + encodeURIComponent('明日は雨だろう'));
  await mapReady(page);
  await expect(page.getByTestId('summary')).toBeVisible({ timeout: 30_000 });
  const pin = page.locator('.pin[data-id="osaka"]');
  await pin.focus();
  await page.keyboard.press('Enter');
  const card = page.getByRole('dialog');
  await expect(card.getByRole('heading')).toHaveText('大阪弁');
  await expect(card).toBeFocused();
  // ↓ キーでも次へ
  await page.keyboard.press('ArrowDown');
  await expect(card.getByRole('heading')).not.toHaveText('大阪弁');
  await page.keyboard.press('ArrowUp');
  await expect(card.getByRole('heading')).toHaveText('大阪弁');
  await card.getByRole('button', { name: '閉じる' }).click();
  await expect(card).toBeHidden();
  await expect(pin).toBeFocused();
  void consoleErrors;
});

test('共有リンク（?q= と #方言）で開くと、その方言のカードが出る。コピーもできる', async ({ page, context, consoleErrors }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('map/?q=' + encodeURIComponent('すごくおいしいね') + '#kumamoto');
  await mapReady(page);
  const card = page.getByRole('dialog');
  await expect(card.getByRole('heading')).toHaveText('熊本弁', { timeout: 10_000 });
  await expect(page.getByTestId('card-said')).not.toHaveClass(/pending/, { timeout: 30_000 });
  const said = (await page.getByTestId('card-said').innerText()).trim();
  expect(said).not.toBe('すごくおいしいね');
  await card.getByRole('button', { name: 'コピー' }).click();
  await expect(card.getByRole('button', { name: 'コピーしました' })).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(said);
  void consoleErrors;
});

test('琉球諸語: 訳せる文は訳し、訳せない文は訳せない語を伝える', async ({ page, consoleErrors }) => {
  await page.goto('map/?q=' + encodeURIComponent('本当にありがとうございます') + '#okinawa');
  await mapReady(page);
  const card = page.getByRole('dialog');
  await expect(card.getByRole('heading')).toHaveText('沖縄語', { timeout: 10_000 });
  await expect(page.getByTestId('card-said')).toHaveText('じゅんに にふぇーでーびる', { timeout: 30_000 });
  await expect(card.getByRole('button', { name: 'コピー' })).toBeEnabled();
  // 訳せない語を含む文
  await page.locator('#q').fill('疲れたから、もう帰るね');
  await expect(card).toContainText('「疲れる」の沖縄語訳がまだ辞書にないため、この文は訳していません。');
  await expect(card.getByRole('button', { name: 'コピー' })).toBeDisabled();
  // 宮古語は決まった挨拶だけ
  await card.getByRole('button', { name: '次の方言' }).click();
  await expect(card.getByRole('heading')).toHaveText('宮古語');
  await expect(card).toContainText('宮古語で訳せるのは、今のところ「ありがとう」「ようこそ」などの決まった挨拶だけです。');
  await page.locator('#q').fill('ありがとう');
  await expect(page.getByTestId('card-said')).toHaveText('たんでぃがーたんでぃ');
  void consoleErrors;
});

test('規則で変換できない方言（八丈方言）のカードは、変換できないことを伝える', async ({ page, consoleErrors }) => {
  await page.goto('map/?q=' + encodeURIComponent('ありがとう') + '#hachijo');
  await mapReady(page);
  const card = page.getByRole('dialog');
  await expect(card.getByRole('heading')).toHaveText('八丈方言', { timeout: 10_000 });
  await expect(card).toContainText('この地図版では変換できません');
  await expect(card.getByRole('button', { name: 'コピー' })).toBeDisabled();
  void consoleErrors;
});

test('タッチ操作: タップで開き、地図の空いた所をタップすると閉じる', async ({ page, consoleErrors }) => {
  await page.goto('map/?q=' + encodeURIComponent('早く来てよ'));
  await mapReady(page);
  await expect(page.getByTestId('summary')).toBeVisible({ timeout: 30_000 });
  await settled(page);
  const box = await page.locator('.pin[data-id="sendai"]').boundingBox();
  await page.touchscreen.tap(box!.x + 10, box!.y + box!.height / 2);
  const card = page.getByRole('dialog');
  await expect(card.getByRole('heading')).toHaveText('仙台弁');
  await page.waitForTimeout(1200);
  // 画面の下端近く（海）をタップ
  const vw = page.viewportSize()!;
  const cardBox = await card.boundingBox();
  const y = cardBox!.y > vw.height / 2 ? cardBox!.y - 60 : vw.height - 90;
  await page.touchscreen.tap(30, y);
  await expect(card).toBeHidden();
  void consoleErrors;
});

/** 例文が帯の見える範囲に収まっているか */
async function inTrack(page: Page, i: number) {
  return page.evaluate((i) => {
    const t = document.querySelector('.samples')!.getBoundingClientRect();
    const b = document.querySelectorAll('.sample')[i].getBoundingClientRect();
    return b.left >= t.left - 1 && b.right <= t.right + 1;
  }, i);
}

test('例文は 10 個のカルーセル。指で横に送れて、最後の例文も選べる', async ({ page, consoleErrors }) => {
  await page.goto('map/');
  await mapReady(page);
  const chips = page.locator('.sample');
  await expect(chips).toHaveCount(10);
  await expect(page.locator('.carousel')).toHaveClass(/at-start/);
  // 矢印はタッチの画面では出さない
  await expect(page.getByRole('button', { name: '次の例文' })).toBeHidden();
  expect(await inTrack(page, 9)).toBe(false);
  // 横スワイプで送る
  const box = (await page.locator('.samples').boundingBox())!;
  const cdp = await page.context().newCDPSession(page);
  const y = box.y + box.height / 2;
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: box.x + box.width - 20, y }] });
  for (let k = 1; k <= 12; k++)
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: box.x + box.width - 20 - k * 22, y }] });
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await expect(page.locator('.carousel')).not.toHaveClass(/at-start/);
  // 最後の例文まで送って選ぶ
  await chips.last().scrollIntoViewIfNeeded();
  await expect(page.locator('.carousel')).toHaveClass(/at-end/);
  await chips.last().click();
  await expect(page.locator('#q')).toHaveValue('本当にありがとうございます');
  await expect(chips.last()).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByTestId('summary')).toBeVisible({ timeout: 30_000 });
  await expect(page.locator('.pin[data-id="okinawa"]')).toHaveAttribute('aria-label', '沖縄語: じゅんに にふぇーでーびる');
  // 別の例文に切り替えられる（入力中でもカルーセルは残る）
  await chips.first().scrollIntoViewIfNeeded();
  await chips.first().click();
  await expect(page.locator('#q')).toHaveValue('今日はとても暑いね');
  await expect(chips.first()).toHaveAttribute('aria-pressed', 'true');
  await expect(chips.last()).toHaveAttribute('aria-pressed', 'false');
  void consoleErrors;
});

test('例文のカルーセルはキーボードでも操作できる（← → Home End）', async ({ page, consoleErrors }) => {
  await page.goto('map/');
  await mapReady(page);
  const chips = page.locator('.sample');
  await chips.first().focus();
  await page.keyboard.press('ArrowRight');
  await expect(chips.nth(1)).toBeFocused();
  await page.keyboard.press('End');
  await expect(chips.last()).toBeFocused();
  await expect.poll(() => inTrack(page, 9)).toBe(true);
  await page.keyboard.press('Home');
  await expect(chips.first()).toBeFocused();
  // Tab で入るのは 1 つだけ（ロービング）
  expect(await chips.evaluateAll((els) => els.filter((e) => (e as HTMLElement).tabIndex === 0).length)).toBe(1);
  await page.keyboard.press('Enter');
  await expect(page.locator('#q')).toHaveValue('今日はとても暑いね');
  void consoleErrors;
});

test.describe('パソコンの画面', () => {
  test.use({ viewport: { width: 1280, height: 800 }, isMobile: false, hasTouch: false });
  test('横長の画面でも全アイコンが重ならずに収まる', async ({ page, consoleErrors }) => {
    await page.goto('map/');
    await mapReady(page);
    await settled(page);
    const bs = await boxes(page);
    expect(bs).toHaveLength(ALL_ON_MAP);
    expect(overlaps(bs)).toEqual([]);
    void consoleErrors;
  });
  test('マウスの画面では矢印でカルーセルを送れる', async ({ page, consoleErrors }) => {
    await page.goto('map/');
    await mapReady(page);
    const prev = page.getByRole('button', { name: '前の例文' });
    const next = page.getByRole('button', { name: '次の例文' });
    await expect(prev).toBeDisabled();
    await expect(next).toBeEnabled();
    // なめらかなスクロールが終わるのを待ちながら、端まで送る
    for (let k = 0; k < 10; k++) {
      await page.waitForTimeout(900);
      if (await next.isDisabled()) break;
      await next.click({ timeout: 3000 }).catch(() => undefined);
    }
    await expect(next).toBeDisabled();
    await expect(prev).toBeEnabled();
    expect(await inTrack(page, 9)).toBe(true);
    await prev.click();
    await expect(next).toBeEnabled();
    void consoleErrors;
  });
});
