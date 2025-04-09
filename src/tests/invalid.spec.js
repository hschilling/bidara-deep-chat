const { test, expect } = require('@playwright/test');

test('invalid OPENAI_API_KEY', async ({ page }) => {
  // 1. Launch the browser and navigate to your app's URL
  await page.goto('http://localhost:8080');

  // 2. Locate the contenteditable input using its ID and wait for it to be visible
  const textInput = page.locator('#insert-key-input');
  await textInput.waitFor({ state: 'visible' }); // Wait until the element is visible

  // 3. Focus on the input
  await textInput.focus();

  // 4. Type text into the input
  await page.keyboard.type('invalid OPENAI_API_KEY');

  // 5. Assert that the correct error text is present
  const errorDiv = page.locator('#insert-key-input-invalid-text');
  await errorDiv.waitFor({ state: 'visible' }); // Wait for the error message
  const textContent = await errorDiv.textContent();
  expect(textContent).toBe('Invalid API Key');
});