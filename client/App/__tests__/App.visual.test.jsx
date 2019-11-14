const puppeteer = require('puppeteer');

const viewports = Object.entries(global.viewports);

describe('App', () => {
  it.each(viewports)(
    'renders the application index page correctly - %s',
    async (name, viewport) => {
      const browser = await puppeteer.launch({
        defaultViewport: viewport
      });

      const page = await browser.newPage();

      /**
       * API request is intercepted to return a static value
       * since a dynamic return value will cause visual changes
       * every time the test is run.
       */
      await page.setRequestInterception(true);

      page.on('request', request => {
        if (request.url().endsWith('/api/shortlink/new')) {
          request.respond({
            status: 200,
            contentType: 'application/json;',
            body: JSON.stringify({
              shortlink: 'mockShortlink'
            })
          });
        } else {
          request.continue();
        }
      });

      // Load the page
      await page.goto('http://localhost:3000');

      const image1 = await page.screenshot();

      expect(image1).toMatchImageSnapshot();

      // Enter a valid URL
      await page.type('input.Form__input', 'https://www.google.com');

      const image2 = await page.screenshot();

      expect(image2).toMatchImageSnapshot();

      // Click the Generate Link button
      await page.click('input.Form__submit');

      await page.waitForSelector('.Shortlink');

      const image3 = await page.screenshot();

      expect(image3).toMatchImageSnapshot();
    }
  );
});
