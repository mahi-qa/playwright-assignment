import { Page, expect } from '@playwright/test';

export class CartPage {
    constructor(private page: Page) { }

    get checkoutButton() {
        return this.page.locator('[data-test="checkout"]');
    }

    get inventoryItem() {
        return this.page.locator('[data-test="inventory-item"]');
    }
    async verifyItemInCart() {
        await expect(this.inventoryItem).toBeVisible();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}