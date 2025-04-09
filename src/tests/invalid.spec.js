const { test, expect } = require('@playwright/test');

test('invalid OPENAI_API_KEY', async ({ page }) => {
  // 1. Launch the browser and navigate to your app's URL
  await page.goto('http://localhost:8080'); // Replace with your app's URL

  // 2. Locate the contenteditable div using its ID
  const textInputDiv = await page.locator('#insert-key-input');

  // 3. Focus on the div (important for contenteditable)
  await textInputDiv.focus();

  // 4. Type text into the div
  await page.keyboard.type('invalid OPENAI_API_KEY');

  // 5. Assert that the correct error text is present
  const errorDiv = await page.locator('#insert-key-input-invalid-text');
  const textContent = await errorDiv.textContent();
  expect(textContent).toBe('Invalid API Key');
});