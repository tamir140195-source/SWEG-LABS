import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Loginpage.js';
import { InventoryPage } from '../pages/Inventorypage.js';
import { CartPage } from '../pages/Cartpage.js';

test.describe('Sanity Test', () => {

  test("Validate Complete Purchase Flow", async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

  
    await loginPage.openLoginPage();
    await expect(page).toHaveTitle('Swag Labs');
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  
    await inventoryPage.goToCart(); 
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await cartPage.verifyCartPageOpened();
    
   
    await cartPage.proceedToCheckout();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

   
    await cartPage.fillCheckoutInformation('Tamir', 'Nusuyev', '3849270');
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

   
    await cartPage.finishOrder();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    await cartPage.verifyOrderSuccess();
  });

});