import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';

test.describe('Checkout Tests', () => {
    test('should complete checkout process successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        // Login
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.assertLoginSuccess();

        // Add to cart
        await inventoryPage.addFirstItemToCart();
        await inventoryPage.navigateToCart();

        // Verify cart and proceed to checkout
        await cartPage.verifyItemInCart();
        await cartPage.proceedToCheckout();

        // Fill checkout info and finish order
        await checkoutPage.fillCheckoutInfo();
        await checkoutPage.finishOrder();
    });
});