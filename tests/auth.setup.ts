import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

setup('authenticate', async ({ page }) => {
    await page.goto('/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();

    // Save auth state
    await page.context().storageState({ path: 'storage/auth.json' });
})