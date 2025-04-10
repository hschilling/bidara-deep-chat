// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  // ... other configurations
  reporter: [
    ['list'],
    ['json', { outputFile: 'test-results.json' }],
    ['html', { open: 'never' }],
  ],
  use: {
    // ... other use options
    screenshot: 'only-on-failure', // Take screenshots only when tests fail
  },
});