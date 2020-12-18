const puppeteer = require('puppeteer');
const path = require('path');

async function main() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.type('input[name="q"]', 'vue');
  await page.$eval('form[name="f"]', form => form.submit());

  await page.waitForNavigation();

  await page.screenshot({ path: 'example.png' });
  await browser.close();
}

main();
