import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Loginpage.js'; 
import { InventoryPage } from '../pages/Inventorypage.js';

test.describe("Positive Login test", () => {
  
  test('Login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.openLoginPage();
    await expect(page).toHaveTitle(/Swag Labs/);

    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/);
  });

});

test.describe('Negative Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
  });

  test("Correct username, wrong password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', '12531Aa3');
    await loginPage.verifyErrorMessageIsVisible();
  });

  test("Wrong username, correct password", async ({ page }) => {
    const loginPage = new LoginPage(page);
   
    await loginPage.login('invalid_user', 'secret_sauce');
    await loginPage.verifyErrorMessageIsVisible();
  });

  test("Wrong username, wrong password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.login('invalid_user', 'invalid_password');
    await loginPage.verifyErrorMessageIsVisible();
  });

  test("Empty username", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('', 'secret_sauce');
    await loginPage.verifyErrorMessageIsVisible();
  });

  test("Empty password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', '');
    await loginPage.verifyErrorMessageIsVisible();
  });

  test("Both fields empty", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('', '');
    await loginPage.verifyErrorMessageIsVisible();
  });

});