const { test, expect } = require('@playwright/test');

test('invalid OPENAI_API_KEY', async ({ page }) => {
  // 1. Launch the browser and navigate to your app's URL
//   await page.goto('http://localhost:8080');
  await page.goto('http://localhost:8080/');

  // 2. Locate the contenteditable input using its ID and wait for it to be visible
  await page.waitForLoadState('networkidle'); // Or 'domcontentloaded' or 'load'
  const textInput = page.locator('#insert-key-input');
  await page.screenshot({ path: 'screenshot-before-wait.png' });
  await textInput.waitFor({ state: 'visible', timeout: 60000 });
  await page.screenshot({ path: 'screenshot-after-wait.png' });

  // 3. Focus on the input
  await textInput.focus();

  // 4. Type text into the input
  await page.keyboard.type('invalid OPENAI_API_KEY');


  // 5. Locate the start button using its ID
  const startButton = page.locator('#start-button');
  await startButton.waitFor({ state: 'visible' }); // Wait for the button to be visible

  // 6. Click the start button
  await startButton.click();

  // 7. Assert that the correct error text is present
  const errorDiv = page.locator('#insert-key-input-invalid-text');
  await errorDiv.waitFor({ state: 'visible' }); // Wait for the error message
  const textContent = await errorDiv.textContent();
  expect(textContent).toBe('Invalid API Key');
});