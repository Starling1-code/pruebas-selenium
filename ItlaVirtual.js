const { Builder, By, Key, until } = require('selenium-webdriver');

async function test() {
   
    let driver = await new Builder().forBrowser('chrome').build();

    try {
       
        await driver.get('https://plataformavirtual.itla.edu.do/login/index.php');

       
        await driver.wait(until.elementLocated(By.id('username')), 5000);
        await driver.wait(until.elementLocated(By.id('password')), 5000);

        
        const usernameInput = await driver.findElement(By.id('username'));
        const passwordInput = await driver.findElement(By.id('password'));

       
        await usernameInput.sendKeys('20186931');
        await passwordInput.sendKeys('Starling200117#');

     
        await passwordInput.sendKeys(Key.ENTER);

       
        await driver.wait(until.titleIs('Inicio'), 5000);


         // Hacer clic en el botón o enlace de menú con el ID "action-menu-toggle-1"
         const element = await driver.findElement(By.css('[data-toggle="dropdown"]'));

         await element.sendKeys(Key.ENTER);
 
        
     }

       
     finally {
        
        await driver.quit();
    }
}

test();
