import { expect } from "@playwright/test";

export class CartPage {
  constructor(page) {
    this.page = page;

    this.cartTitle = page.locator(".title");
    this.checkoutButton = page.getByRole("button", { name: "Checkout" });

    this.firstNameField = page.getByRole("textbox", { name: "First Name" });
    this.lastNameField = page.getByRole("textbox", { name: "Last Name" });
    this.postalCodeField = page.getByRole("textbox", {name: "Zip/Postal Code",});

    this.continueButton = page.getByRole("button", { name: "Continue" });
    this.finishButton = page.getByRole("button", { name: "Finish" });
    this.successHeader = page.locator(".complete-header");
  }

  async verifyCartPageOpened() {
    await expect(this.cartTitle).toHaveText("Your Cart");
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async fillCheckoutInformation(firstName, lastName, postalCode) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.postalCodeField.fill(postalCode);
  }

  async finishOrder() {
    await this.finishButton.click();
  }

  async verifyOrderSuccess() {
    await expect(this.successHeader).toHaveText('Thank you for your order!');
  }
}
