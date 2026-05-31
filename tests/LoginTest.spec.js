import { test, expect } from '@playwright/test';

test.describe('Positive Login Tests', () => {
 test.beforeEach('Login', async ({ page }) => {

 test('Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
   
});

    test('Login with standard_user', async ({ page }) => {
    
       const loginpage = new LoginPage(page);
       await loginpage.Login('standard_user', 'secret_sauce');
    });

test('Login with problem_user', async ({ page }) => {

    const loginPage = LoginPage(page)
    await loginPage.Login ('problem_user', 'secret_sauce');
    });

 });
 

    export class LoginPage {

    constructor(page) {
        this.page = page;

        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async goto() {

        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {

        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

   await expect(page.getByText('Products')).toBeVisible();

     console.log ('Login failed with locked_out_user');


    // שם משתמש נכון + סיסמא שגויה
    // שם משתמש שגוי + סיסמה נכונה
    //שם משתמש שגוי + סיסמה שגויה 
    // שם משתמש ריק + סיסמה נכונה
    // שם משתמש נכון + סיסמה ריקה
    // שם משתמש ריק + סיסמה ריקה
 // fill(' ')
 //toHaveText

 
import { test, expect } from '@playwright/test';

 test.describe('Nagative Login Tests',() => {

  test.beforeEach(async ({ page }) => {

     await page.goto('https://www.saucedemo.com/');
    });

     test('Login with wrong password', async ({ page }) => {

    
 await page.goto(WEBSITE_URL); //URL
    await page.getByRole("textbox", { name: "Username" }).fill(userInput1);
    await page.getByRole("textbox", { name: "Password" }).fill('12352test');//failed
    await page.getByRole('button', { name: 'Login', exact: true }).click(); 

     await expect(page.locator('[data-test="error"]') 
     .toContainText('Epic sadface');

  console.log('Checking Error message')
  

  await page.goto(WEBSITE_URL); //URL
    await page.getByRole("textbox", { name: "Username" }).fill("locked_out_user"); //failed
    await page.getByRole("textbox", { name: "Password" }).fill(passwordInput);
    await page.getByRole('button', { name: 'Login', exact: true }).click();

       await expect(page.locator('[data-test="error"]')
     .toContainText('Epic sadface');
     
    console.log("'Checking Error message'")
    

    await page.getByRole("textbox", { name: "Username" }).fill("locked_out_user") //failed
    await page.getByRole("textbox", { name: "Password" }).fill("123456qaaaz"); //failed
    await page.getByRole('button', { name: 'Login', exact: true }).click();

       await expect(page.locator('[data-test="error"]')
     .toContainText('Epic sadface');

    console.log("'Checking Error message' username, Password");

    await page.getByRole("textbox", { name: "Username" }).fill('') //failed
    await page.getByRole("textbox", { name: "Password" }).fill(passwordInput);
    await page.getByRole('button', { name: 'Login', exact: true }).click();

       await expect(page.locator('[data-test="error"]')
     .toContainText('Epic sadface');

    console.log("'Checking error message'")
    .toContainText('Epic sadface');

    await page.getByRole("textbox", { name: "Username" }).fill(userInput5);
    await page.getByRole("textbox", { name: "Password" }).fill(''); //failed
    await page.getByRole('button', { name: 'Login', exact: true }).click();

      await expect(page.locator('[data-test="error"]')
    .toContainText('Epic sadface');

    console.log("'Checking error message'")

    await page.getByRole("textbox", { name: "Username" }).fill(''); //failed
    await page.getByRole("textbox", { name: "Password" }).fill(''); //failed
    await page.getByRole('button', { name: 'Login', exact: true }).click();

      await expect(page.locator('[data-test="error"]'))
    .toContainText('Epic sadface');

    await expect(page.getByText("Epic sadface: You can only access '/cart.html' when you are logged in."))
  .toBeVisible(); 
    
    console.log("failed username, Password")


//npx playwright test LoginTest.spec.js

});