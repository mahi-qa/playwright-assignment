import { Page, expect } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) { }

    get usernameInput() {
        return this.page.locator('[data-test="username"]');
    }

    get passwordInput() {
        return this.page.locator('[data-test="password"]');
    }

    get loginButton() {
        return this.page.locator('[data-test="login-button"]');
    }

    get inventoryContainer() {
        return this.page.locator('[data-test="inventory-container"]');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async assertLoginSuccess() {
        await expect(this.inventoryContainer).toBeVisible();
    }
    async assertLoginFailure() {
        await expect(this.page.locator('[data-test="error"]')).toBeVisible();
    }
}