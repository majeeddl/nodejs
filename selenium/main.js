const { Builder, Browser } = require("selenium-webdriver");

(async function helloSelenium() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();

  await driver.get("http://10.0.90.145/");

  //   await driver.quit();
})();
