export class LoginPage {

    constructor(page) {
        this.page = page

        this.userNameInput = page.locator('#user-name')
        this.passwordInput = page.locator('#password')
        this.loginButton = page.locator('#login-button')
        this.errorMessage = page.locator('[data-test="error"]')
    }

    async loginData(userName, password) {
        await this.userNameInput.fill(userName)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}
