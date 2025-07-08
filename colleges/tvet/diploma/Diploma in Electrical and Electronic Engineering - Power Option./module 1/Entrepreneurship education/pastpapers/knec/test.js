const puppeteer = require('puppeteer');
const fs = require('fs');

async function testResponsiveness(htmlFiles) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  for (const htmlFile of htmlFiles) {
    try {
      await page.goto(`file://${__dirname}/${htmlFile}`);

      // Mobile viewport
      await page.setViewport({ width: 768, height: 667 });
      const mobileLayout = await page.evaluate(() => {
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('main');
        // Check if sidebar is taking full width and main content is below it
        return window.getComputedStyle(sidebar).position === 'fixed';
      });

      // Desktop viewport
      await page.setViewport({ width: 1200, height: 800 });
      const desktopLayout = await page.evaluate(() => {
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('main');
        // Check if sidebar is on the side and main content is next to it
        return window.getComputedStyle(sidebar).position === 'sticky';
      });


      const isResponsive = mobileLayout && desktopLayout;
      console.log(`${htmlFile}: Responsive - ${isResponsive}`);

    } catch (error) {
      console.error(`Error testing ${htmlFile}: ${error}`);
    }
  }

  await browser.close();
}

// Get list of html files
fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  const htmlFiles = files.filter(file => file.endsWith('.html'));
  testResponsiveness(htmlFiles);
});