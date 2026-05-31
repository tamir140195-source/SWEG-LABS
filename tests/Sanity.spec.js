import { test, expect } from '@playwright/test';

test('Sanity Test', async ({ page }) => {

    const WEBSITE_URL = "https://www.saucedemo.com/";
    const userInput1 = 'standard_user'
    const password = 'secret_sauce'

    // 1. Go to the Swag Labs website
    await page.goto('https://www.saucedemo.com/');
    // 2. Insert the username and password
    await page.getByRole("textbox", { name: "username" }).fill('user_standard');
    await page.getByRole("textbox", { name: "password" }).fill('secret_sauce ');        
    // 3. Click the login button
    await page.getByRole('button', { name: 'Login', exact: true }).click();     
    // 4. ADD 2 products to the cart
    await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
    await page.getByTestId('add-to-cart-sauce-labs-bolt-t-shirt').click();
    // 5. validate that the cart badge shows the correct number of items
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
   
});
    
