import { chromium } from 'playwright';
import path from 'path';

const OUT = path.join(process.env.HOME, 'Desktop/port2/public/projects');
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 });
const page = await ctx.newPage();

await page.goto('https://salon-app-opal.vercel.app/login', { timeout: 60000, waitUntil: 'domcontentloaded' });
try { await page.waitForLoadState('networkidle', { timeout: 20000 }); } catch {}
await page.waitForTimeout(2000);

const email = page.locator('input').first();
const pass = page.locator('input[type="password"]').first();
await email.click();
await email.pressSequentially('admin@glowdesk.in', { delay: 30 });
await pass.click();
await pass.pressSequentially('admin123', { delay: 30 });
await page.waitForTimeout(500);
await page.locator('button:has-text("Sign In")').first().click();

try {
  await page.waitForURL(u => !u.toString().includes('/login'), { timeout: 30000 });
  console.log('navigated to', page.url());
} catch {
  console.log('still on', page.url());
}
try { await page.waitForLoadState('networkidle', { timeout: 20000 }); } catch {}
await page.waitForTimeout(4000);
await page.screenshot({ path: path.join(OUT, 'glowdesk.png') });
console.log('shot saved from', page.url());
await browser.close();
