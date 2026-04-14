import { Page, expect } from '@playwright/test';

export class InventoryPage {
    constructor(private page: Page) { }

    get firstAddToCartButton() {
        return this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    get shoppingCartBadge() {
        return this.page.locator('.shopping_cart_badge');
    }

    get cartIcon() {
        return this.page.locator('[data-test="shopping-cart-link"]');
    }

    async addFirstItemToCart() {
        await this.firstAddToCartButton.click();
        expect(this.shoppingCartBadge).toHaveText('1');
    }

    async navigateToCart() {
        await this.cartIcon.click();
    }
}