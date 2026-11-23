import { chromium } from '/home/hatch/workspace/gta6-brillianagent/shot/node_modules/playwright-core/index.mjs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const directory = dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch({
  executablePath: '/home/hatch/.cache/ms-playwright/chromium-1148/chrome-linux/chrome',
  headless: false,
  args: ['--headless=old', '--no-sandbox', '--disable-crashpad-for-testing', '--no-zygote', '--single-process'],
});

try {
  const page = await browser.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(join(directory, 'meme.html')).href, { waitUntil: 'load' });
  await page.evaluate(() => Promise.all([...document.images].map((image) => image.decode())));
  await page.screenshot({ path: join(directory, 'meme.png'), type: 'png' });
} finally {
  await browser.close();
}
