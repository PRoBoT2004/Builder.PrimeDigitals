const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// 🛑 Make sure this matches your port (change to 5173 for Vite)
const PREVIEW_URL = 'http://localhost:5173/builder/export';
const OUTPUT_PATH = path.resolve(__dirname, '../output/builder-export.pdf');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: null,
    args: ['--start-maximized'],
  });

  const page = await browser.newPage();

  console.log('[🖥] Navigating to /builder/export page...');

  try {
    await page.goto(PREVIEW_URL, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });

    // Optional: Wait for some unique content on the Export page
    await page.waitForSelector('.ExportTips, .bg-yellow-50', { timeout: 15000 });

    console.log('[📄] Generating PDF from Export page...');

    await page.pdf({
      path: OUTPUT_PATH,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
    });

    console.log(`✅ PDF saved to: ${OUTPUT_PATH}`);
  } catch (e) {
    console.error('❌ Failed to render export page:', e.message);
  } finally {
    await browser.close();
  }
})();