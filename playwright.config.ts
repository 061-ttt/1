import { defineConfig, devices } from '@playwright/test';

const executablePath = process.env.PW_CHROMIUM_PATH || undefined;

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 45_000,
  expect: { timeout: 8_000 },
  fullyParallel: false,
  workers: 1,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['list'], ['html', { open: 'never' }]] : [['list']],
  use: {
    baseURL: 'http://127.0.0.1:8787',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    locale: 'ja-JP',
    launchOptions: executablePath ? { executablePath, args: ['--no-sandbox', '--disable-dev-shm-usage'] } : {},
  },
  projects: [
    { name: 'mobile', use: { ...devices['Pixel 7'], browserName: 'chromium', viewport: { width: 390, height: 844 } }, testIgnore: /(desktop|static|map)\.spec\.ts/ },
    {
      name: 'static',
      use: { ...devices['Pixel 7'], browserName: 'chromium', viewport: { width: 390, height: 844 }, baseURL: 'http://127.0.0.1:4173/namari/' },
      testMatch: /static\.spec\.ts/,
    },
    {
      // 地図版は WebGL を使う。GPU のない環境でもソフトウェア描画（SwiftShader）で動かす
      name: 'map',
      use: {
        ...devices['Pixel 7'],
        browserName: 'chromium',
        viewport: { width: 390, height: 844 },
        baseURL: 'http://127.0.0.1:4173/namari/',
        launchOptions: {
          ...(executablePath ? { executablePath } : {}),
          args: ['--no-sandbox', '--disable-dev-shm-usage', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
        },
      },
      testMatch: /map\.spec\.ts/,
    },
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 860 } }, testMatch: /desktop\.spec\.ts/ },
  ],
  webServer: [
    {
      command: 'npm run build && npx wrangler d1 migrations apply DB --local --env test && npm run serve:test',
      url: 'http://127.0.0.1:8787/api/config',
      reuseExistingServer: !process.env.CI,
      timeout: 120_000,
    },
    {
      command: 'npm run build:static && npm run serve:static',
      url: 'http://127.0.0.1:4173/namari/',
      reuseExistingServer: !process.env.CI,
      timeout: 60_000,
    },
  ],
});
