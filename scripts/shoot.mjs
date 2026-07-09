import { chromium } from 'playwright';
import path from 'path';

const OUT = path.join(process.env.HOME, 'Desktop/port2/public/projects');
import fs from 'fs';
fs.mkdirSync(OUT, { recursive: true });

const sites = [
  { name: 'worknest', url: 'https://worknestcoworking.in/' },
  { name: 'lingacoin', url: 'https://coin.lingacode.org/' },
  { name: 'covercapital', url: 'https://www.covercapital.in/' },
  { name: 'lingacode', url: 'https://lc-propzine-bkt1.s3.ap-south-1.amazonaws.com/index.html' },
  { name: 'propzine', url: 'https://www.propzine.in/' },
  { name: 'febel', url: 'https://www.febel.in/' },
];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 });

async function settle(page) {
  try { await page.waitForLoadState('networkidle', { timeout: 15000 }); } catch {}
  await page.waitForTimeout(3000);
}

for (const s of sites) {
  const page = await ctx.newPage();
  try {
    await page.goto(s.url, { timeout: 60000, waitUntil: 'domcontentloaded' });
    await settle(page);
    await page.screenshot({ path: path.join(OUT, `${s.name}.png`) });
    console.log('OK', s.name);
  } catch (e) {
    console.log('FAIL', s.name, e.message);
  }
  await page.close();
}

// Glow Desk — needs login
{
  const page = await ctx.newPage();
  try {
    await page.goto('https://salon-app-opal.vercel.app/login', { timeout: 60000, waitUntil: 'domcontentloaded' });
    await settle(page);
    // fill credentials
    const email = page.locator('input[type="email"], input[name*="email" i], input[placeholder*="mail" i], input[type="text"]').first();
    const pass = page.locator('input[type="password"]').first();
    await email.fill('admin@glowdesk.in');
    await pass.fill('admin123');
    await page.locator('button[type="submit"], button:has-text("Login"), button:has-text("Sign in")').first().click();
    await page.waitForTimeout(6000);
    try { await page.waitForLoadState('networkidle', { timeout: 15000 }); } catch {}
    await page.screenshot({ path: path.join(OUT, 'glowdesk.png') });
    console.log('OK glowdesk ->', page.url());
  } catch (e) {
    console.log('FAIL glowdesk', e.message);
  }
  await page.close();
}

await browser.close();
