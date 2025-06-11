import {test, expect } from "@playwright/test";

test('Navigate to Home', async ({ page }) => {
  await page.goto('http://localhost:4200/home');

  await page.click('#backToAppBtn');

  await expect(page).toHaveURL('http://localhost:4200/');
});