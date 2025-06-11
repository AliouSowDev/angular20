import { test, expect } from '@playwright/test';

test('App has title', async ({ page }) => {
  await page.goto('http://localhost:4200');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Angular20/);
});

test('Navigate to Home', async ({ page }) => {
  await page.goto('http://localhost:4200');

  await page.click('#goHomeBtn');

  await expect(page).toHaveURL('http://localhost:4200/home');
});
