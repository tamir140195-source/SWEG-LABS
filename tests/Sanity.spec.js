import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Loginpage.js';
import { InventoryPage } from '../pages/Inventorypage.js';
import { CartPage } from '../pages/Cartpage.js';
import { URLS } from '../data/URLS.js';            
import { CHECKOUT_DATA } from '../data/checkout.js'; 
import { USERS } from '../data/users.js';

test.describe('Sanity Test', () => {
  test("Validate Complete Purchase Flow", async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
       
   
    await loginPage.openLoginPage();
    await expect(page).toHaveTitle('Swag Labs');
    
   
    await loginPage.login(USERS.standard.username, USERS.standard.password);
    await expect(page).toHaveURL(URLS.INVENTORY);

   
    await inventoryPage.goToCart(); 
    await expect(page).toHaveURL(URLS.CART);
    await expect(cartPage.cartTitle).toHaveText('Your Cart');
    
    
    await cartPage.proceedToCheckout();
    await expect(page).toHaveURL(URLS.CHECKOUT_STEP_ONE);

   
    await cartPage.fillCheckoutInformation(
        CHECKOUT_DATA.validCustomer.firstName,
        CHECKOUT_DATA.validCustomer.lastName,
        CHECKOUT_DATA.validCustomer.postalCode
    ); 

   
    await cartPage.continueButton.click();
    await expect(page).toHaveURL(URLS.CHECKOUT_STEP_TWO);

   
    await cartPage.finishOrder();
    
    await expect(page).toHaveURL(URLS.CHECKOUT_COMPLETE);
    await cartPage.verifyOrderSuccess();
  });
});