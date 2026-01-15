const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const viewports = [
    { width: 375, height: 667, name: 'Mobile' },  // iPhone SE
    { width: 768, height: 1024, name: 'Tablet' }, // iPad
    { width: 1920, height: 1080, name: 'Desktop' }
];

async function testPage(page, url, viewport) {
    await page.setViewportSize(viewport);
    await page.goto(url);

    // Check meta viewport tag
    const metaViewport = await page.$('meta[name="viewport"]');
    if (!metaViewport) {
        console.error(`❌ ${url} - Missing meta viewport tag`);
        return false;
    }

    // Check responsive images
    const images = await page.$$('img');
    for (const img of images) {
        const style = await img.evaluate(el => window.getComputedStyle(el));
        if (style.maxWidth !== '100%') {
            console.error(`❌ ${url} - Non-responsive image found`);
            return false;
        }
    }

    // Check overflow
    const body = await page.$('body');
    const hasHorizontalScroll = await body.evaluate(el => 
        el.scrollWidth > el.clientWidth
    );
    if (hasHorizontalScroll) {
        console.error(`❌ ${url} - Horizontal scrolling detected at ${viewport.width}px`);
        return false;
    }

    return true;
}

async function main() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    let allPassed = true;

    // Get all HTML files
    const topicsDir = path.join(__dirname, 'topics');
    const files = fs.readdirSync(topicsDir)
        .filter(file => file.endsWith('.html'))
        .map(file => path.join(topicsDir, file));

    // Add index.html
    files.push(path.join(__dirname, 'index.html'));

    for (const file of files) {
        console.log(`\nTesting ${file}`);
        const url = `file://${file}`;

        for (const viewport of viewports) {
            console.log(`\nChecking ${viewport.name} (${viewport.width}x${viewport.height})`);
            const passed = await testPage(page, url, viewport);
            if (!passed) {
                allPassed = false;
            }
        }
    }

    await browser.close();

    if (allPassed) {
        console.log('\n✅ All pages are mobile responsive');
    } else {
        console.error('\n❌ Some pages need responsive design fixes');
        process.exit(1);
    }
}

main().catch(console.error);