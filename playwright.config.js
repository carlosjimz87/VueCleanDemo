// playwright.config.js
export default {
  testDir: './tests/e2e',
  use: {
    baseURL: 'http://localhost:5173',
    browserName: 'chromium',
    headless: true,
  },
}