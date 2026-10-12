import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), '../public/projects');

const sites = [
  { name: 'glozia', url: 'https://glozia01.vercel.app/' },
  { name: 'spc', url: 'https://spcwebnew.vercel.app/' },
];

const proxy = process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined;
const browser = await chromium.launch({ proxy, executablePath: process.env.CHROMIUM_PATH });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 });

for (const s of sites) {
  const page = await ctx.newPage();
  try {
    await page.goto(s.url, { timeout: 60000, waitUntil: 'domcontentloaded' });
    try { await page.waitForLoadState('networkidle', { timeout: 15000 }); } catch {}
    await page.waitForTimeout(3000);
    // Viewport-only shot = the hero section
    await page.screenshot({ path: path.join(OUT, `${s.name}.png`) });
    console.log('OK', s.name, await page.title());
  } catch (e) {
    console.log('FAIL', s.name, e.message);
  }
  await page.close();
}

await browser.close();
