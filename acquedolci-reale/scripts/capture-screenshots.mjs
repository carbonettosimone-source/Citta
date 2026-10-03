#!/usr/bin/env node
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const out = process.env.ARTIFACT_DIR || '/opt/cursor/artifacts/screenshots';
mkdirSync(out, { recursive: true });

const URL = process.env.SCREENSHOT_URL || 'http://127.0.0.1:5190/';

async function ready(page) {
  await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 120000 });
  await page.waitForFunction(() => window.__acq && window.__acq.heightAt, { timeout: 180000 });
  await page.keyboard.press('Escape');
  await page.waitForTimeout(800);
  await page.evaluate(() => window.__acq.intro.stop());
  await page.waitForTimeout(1200);
}

async function cam(page, x, z, h, lookY = 0) {
  await page.evaluate(({ x, z, h, lookY }) => {
    const { camera, controls, heightAt } = window.__acq;
    const g = heightAt(x, z);
    camera.position.set(x, g + h, z);
    controls.target.set(x, g + lookY, z - 1);
    camera.fov = 48;
    camera.updateProjectionMatrix();
    controls.update();
  }, { x, z, h, lookY });
  await page.waitForTimeout(2500);
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
await ready(page);

await cam(page, -67, -6, 28);
await page.screenshot({ path: join(out, 'street-secondary-worn.png') });

await cam(page, -160, -10, 32);
await page.screenshot({ path: join(out, 'street-via-ricca-clean.png') });

await cam(page, -45, -35, 18);
await page.screenshot({ path: join(out, 'buildings-facade-detail.png') });

await cam(page, -155, -12, 22);
await page.screenshot({ path: join(out, 'traffic-via-ricca.png') });

await browser.close();
console.log('Screenshots in', out);
