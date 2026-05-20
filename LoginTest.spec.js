import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {

    const WEBSITE_URL = "https://www.saucedemo.com/";
    const userInput1 = 'standard_user';
    const userInput2 = 'problem_user';
    const userInput3 = 'performance_glitch_user';
    const userInput4 = 'error_user';
    const userInput5 = 'visual_user';
    const passwordInput = 'secret_sauce';

    /*await page.goto(WEBSITE_URL); //URL
    await expect(page).toHaveURL(WEBSITE_URL); //VALIDATION OF URL
    await expect(page).toHaveTitle("Swag Labs"); //VALIDATION OF TITLE  

    await page.goto(WEBSITE_URL); //URL
    await page.getByRole("textbox", { name: "Username" }).fill(userInput1);
    await page.getByRole("textbox", { name: "Password" }).fill(passwordInput);
    await page.getByRole('button', { name: 'Login', exact: true }).click(); 

  console.log("Login succeeded with standard_user");

        await page.goto(WEBSITE_URL); //URL

    await page.getByRole("textbox", { name: "Username" }).fill(userInput2)
    await page.getByRole("textbox", { name: "Password" }).fill(passwordInput);
    await page.getByRole('button', { name: 'Login', exact: true }).click();

    console.log("Login succeeded with problem_user");
     
        await page.goto(WEBSITE_URL); //URL
    
    await page.getByRole("textbox", { name: "Username" }).fill(userInput3)
    await page.getByRole("textbox", { name: "Password" }).fill(passwordInput);
    await page.getByRole('button', { name: 'Login', exact: true }).click();

    console.log("Login succeeded with performance_glitch_user");
        
     await page.goto(WEBSITE_URL); //URL

    await page.getByRole("textbox", { name: "Username" }).fill(userInput4)
    await page.getByRole("textbox", { name: "Password" }).fill(passwordInput);
    await page.getByRole('button', { name: 'Login', exact: true }).click();

    console.log("Login succeeded with visual_user");
        
       await page.goto(WEBSITE_URL); //URL

    await page.getByRole("textbox", { name: "Username" }).fill(userInput5)
    await page.getByRole("textbox", { name: "Password" }).fill(passwordInput);
    await page.getByRole('button', { name: 'Login', exact: true }).click();

    console.log("Login succeeded with error_user");
         
     await page.goto(WEBSITE_URL); //URL

    await page.getByRole('textbox', { name: 'Username' }).fill("locked_out_user");
    await page.getByRole("textbox", { name: "Password" }).fill(passwordInput);
    await page.getByRole('button', { name: 'Login', exact: true }).click();

    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();

     console.log ('Login failed with locked_out_user');
*/

    // שם משתמש נכון + סיסמא שגויה
    // שם משתמש שגוי + סיסמה נכונה
    //שם משתמש שגוי + סיסמה שגויה 
    // שם משתמש ריק + סיסמה נכונה
    // שם משתמש נכון + סיסמה ריקה
    // שם משתמש ריק + סיסמה ריקה
 // fill(' ')
 //toHaveText

 await page.goto(WEBSITE_URL); //URL
    await page.getByRole("textbox", { name: "Username" }).fill(userInput1);
    await page.getByRole("textbox", { name: "Password" }).fill('12352test');//failed
    await page.getByRole('button', { name: 'Login', exact: true }).click(); 

  console.log("failed password");

  await page.goto(WEBSITE_URL); //URL
    await page.getByRole("textbox", { name: "Username" }).fill("locked_out_user"); //failed
    await page.getByRole("textbox", { name: "Password" }).fill(passwordInput);
    await page.getByRole('button', { name: 'Login', exact: true }).click();
     
    console.log("failed username");

    await page.getByRole("textbox", { name: "Username" }).fill("locked_out_user") //failed
    await page.getByRole("textbox", { name: "Password" }).fill("123456qaaaz"); //failed
    await page.getByRole('button', { name: 'Login', exact: true }).click();

    console.log("failed username, Password");  

    await page.getByRole("textbox", { name: "Username" }).fill('') //failed
    await page.getByRole("textbox", { name: "Password" }).fill(passwordInput);
    await page.getByRole('button', { name: 'Login', exact: true }).click();

    console.log("failed username");

    await page.getByRole("textbox", { name: "Username" }).fill(userInput5);
    await page.getByRole("textbox", { name: "Password" }).fill(''); //failed
    await page.getByRole('button', { name: 'Login', exact: true }).click();

    console.log("failed password");

    await page.getByRole("textbox", { name: "Username" }).fill(''); //failed
    await page.getByRole("textbox", { name: "Password" }).fill(''); //failed
    await page.getByRole('button', { name: 'Login', exact: true }).click();

    await expect(page.getByText("Epic sadface: You can only access '/cart.html' when you are logged in.")).toHaveText(); 
    
    console.log("failed username, Password");


//npx playwright test LoginTest.spec.js

});