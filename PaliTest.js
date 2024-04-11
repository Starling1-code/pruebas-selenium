//en esta prueba veremos que se este validando que un cliente no pueda hacer solicitudes si ya tiene una en pendiente

const { Builder, By, Key, until } = require('selenium-webdriver');

async function test() {
    // Inicializar el navegador (en este caso, Chrome)
    let driver = await new Builder().forBrowser('chrome').build();

    try {
    
        await driver.get('https://www.palitest.com.do/');

     
        await driver.wait(until.elementLocated(By.id('solicitar_general')), 5000);

     
        const solicitarGeneralButton = await driver.findElement(By.id('solicitar_general'));
        await solicitarGeneralButton.click();

       
        await driver.wait(until.elementLocated(By.className('swal2-input')), 5000);

      
        const cedulaInput = await driver.findElement(By.className('swal2-input'));
        await cedulaInput.sendKeys('40210957300');

       
        await cedulaInput.sendKeys(Key.ENTER);

    

        


        await driver.wait(until.elementLocated(By.className('swal2-success')), 5000);

     
    } finally {
        
        await driver.quit();
    }
}

test();
