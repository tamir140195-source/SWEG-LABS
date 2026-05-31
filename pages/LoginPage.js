import { expect } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameField = page.getByRole("textbox", { name: "Username" });
    this.passwordField = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async openLoginPage() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(username, password) {
    await this.usernameField.fill(username); 
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async verifyErrorMessageIsVisible(errorText) {
    await expect(this.errorMessage).toContainText(errorText);
  }
}