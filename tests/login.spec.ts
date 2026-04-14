/**
 * This test automates the login flow of an e-commerce application.
 * The flow includes login validation, inventory access, and cart interaction.
 * This flow is critical as login is the entry point for users and ensures
 * authentication and core functionality work correctly.
 */
import { Locator, test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import users from '../data/users.json';

users.users.forEach((user) => {
    test(`login test for ${user.username}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(user.username, user.password);
        if (user.expected === 'success') {
            await loginPage.assertLoginSuccess();
        } else {
            await loginPage.assertLoginFailure();
        }
    });
});
