import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/Loginpage.js";
import { USERS } from "../data/users.js";
import { ERROR_MESSAGES } from "../data/messages.data.js";



test.describe("Positive Login test", () => {
  test("Login successfully", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.openLoginPage();
    await expect(page).toHaveTitle(/Swag Labs/);

    
    await loginPage.login(USERS.standard.username, USERS.standard.password);
    await expect(page).toHaveURL(/inventory.html/);
  });
});

test.describe("Negative Login Tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
  });

  test("Correct username, wrong password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("standard_user", "12531Aa3");
   
  });

  test("Wrong username, correct password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("invalid_user", "secret_sauce");
    await loginPage.verifyErrorMessageIsVisible(ERROR_MESSAGES.wrongUsername);
  });

  test("Wrong username, wrong password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("invalid_user", "invalid_password");
    await loginPage.verifyErrorMessageIsVisible(ERROR_MESSAGES.wrongUsername);
  });

  test("Empty username", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("", "secret_sauce");
    await loginPage.verifyErrorMessageIsVisible(ERROR_MESSAGES.Tamir14);
  });

  test("Empty password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("standard_user", "");
    await loginPage.verifyErrorMessageIsVisible(ERROR_MESSAGES.meitamj96);
  });

  test("Both fields empty", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("", "");
   await loginPage.verifyErrorMessageIsVisible(ERROR_MESSAGES.invalidLogin);
   
  });
});