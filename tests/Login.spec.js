import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Loginpage.js'; 
import { InventoryPage } from '../pages/Inventorypage.js';
import { USERS } from '../data/users.js';
import { error } from 'node:console';

test.describe("Positive Login test", () => {
  
  test('Login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.openLoginPage();
    await expect(page).toHaveTitle(/Swag Labs/);

    await loginPage.login('USERS.standard.username, USERS.standard.PASSWORD');
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
    await loginPage.openLoginPage();
  });

  test("Wrong username, correct password", async ({ page }) => {
    const loginPage = new LoginPage(page);
   
    await loginPage.login('invalid_user', 'secret_sauce');
    await loginPage.verifyErrorMessageIsVisible(error.message.wrongUsername);
  });

  test("Wrong username, wrong password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.login('invalid_user', 'invalid_password');
    await loginPage.verifyErrorMessageIsVisible(error.message.Tamir14);
  });

  test("Empty username", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('', 'secret_sauce');
    await loginPage.verifyErrorMessageIsVisible(error.message.meitamj96);
  });

  test("Empty password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', '');
    await loginPage.verifyErrorMessageIsVisible(error.message.ariel10);
  });

  test("Both fields empty", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('', '');
    await loginPage.verifyErrorMessageIsVisible(error.message.nvalidLogin);
  });

});