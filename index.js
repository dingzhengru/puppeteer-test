const puppeteer = require('puppeteer');
const path = require('path');

const iPhone = puppeteer.devices['iPhone 6'];

async function main() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.emulate(iPhone);
  // await page.goto('https://google.com');
  // await page.type('input[name="q"]', 'vue');
  // await page.$eval('form[name="f"]', form => form.submit());

  // await page.waitForNavigation();

  // await page.screenshot({ path: 'example.png' });
  // await browser.close();

  await page.goto('http://localhost');

  const cookies = [
    {
      name: 'lang',
      value: 'zh-cn',
    },
    {
      name: 'isLoggedIn',
      value: 'true',
    },
    {
      name: 'publicKey',
      value:
        '-----BEGIN%20PUBLIC%20KEY-----%0AMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCcNSLwgS1LVv7S9tsvBl3Wehy6%0AJS0gvL+OoEsEcvf6HafrFq/TuG/yHnSxI/WqnMmG4sFD9HfbneMorjaOHS6Ww9w/%0A51GkojPNU4zuAqJv1ma4lYB4JYCio3HxAuZ4gvxKVw+m4gUlHMOVOPnk+vlrj5LJ%0AgKyi0ntIqfsTFJIaQwIDAQAB%0A-----END%20PUBLIC%20KEY-----',
    },
    {
      name: 'token',
      value:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTZXNzaW9uSUQiOiJoMWo1MXZoazFnMWJ4M3gwZ2ZvY2l2aHAiLCJTaXRlSUQiOiJDIn0.q9ZxpY6gqdSuhLe-fR0Z3lUpnTjxHfP1b-duHPS_cYQ',
    },
    {
      name: 'ASP.NET_SessionId',
      value: 'h1j51vhk1g1bx3x0gfocivhp',
    },
  ];

  await page.setCookie(...cookies);

  await page.reload();
}

main();
