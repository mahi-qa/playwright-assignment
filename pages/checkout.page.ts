import { Page, expect } from '@playwright/test';

export class CheckoutPage {
    constructor(private page: Page) { }

    get firstName() {
        return this.page.locator('[data-test="firstName"]');
    }

    get lastName() {
        return this.page.locator('[data-test="lastName"]');
    }

    get postalCode() {
        return this.page.locator('[data-test="postalCode"]');
    }

    get continueBtn() {
        return this.page.locator('[data-test="continue"]');
    }

    get finishBtn() {
        return this.page.locator('[data-test="finish"]');
    }

    get successMsg() {
        return this.page.locator('[data-test="complete-header"]');
    }

    async fillCheckoutInfo() {
        await this.firstName.fill('Mahima');
        await this.lastName.fill('QA');
        await this.postalCode.fill('560001');
        await this.continueBtn.click();
    }

    async finishOrder() {
        await this.finishBtn.click();
        await expect(this.successMsg).toHaveText(/Thank you for your order/i);
    }
}