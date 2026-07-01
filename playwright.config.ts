import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/visual',
  fullyParallel: false,
  workers: 1,
  retries: 0,
  timeout: 60_000,
  forbidOnly: !!process.env.CI,
  reporter: [['list'], ['html', { open: 'never' }]],
  outputDir: 'test-results',
  use: {
    ...devices['Desktop Chrome'],
    baseURL: 'http://localhost:3000',
    trace: 'off',
  },
  webServer: {
    command: 'pnpm dev',
    cwd: 'apps/nextjs',
    url: 'http://localhost:3000/en/docs',
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
  expect: { timeout: 15_000 },
});
