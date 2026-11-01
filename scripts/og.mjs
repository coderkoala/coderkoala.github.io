// Renders a 1200×630 preview image per page into public/og/. Run: npm run og
// Needs a Chromium: set CHROME_PATH, or it tries Playwright's cache.
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { chromium } from 'playwright-core'
import { pages } from './pages.mjs'

export function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH
  const cache = path.join(os.homedir(), '.cache/ms-playwright')
  for (const d of fs.existsSync(cache) ? fs.readdirSync(cache).sort().reverse() : []) {
    const p = path.join(cache, d, 'chrome-linux64/chrome')
    if (d.startsWith('chromium-') && fs.existsSync(p)) return p
  }
  throw new Error('No Chromium found. Set CHROME_PATH.')
}

const font = (f) => fs.readFileSync(`node_modules/@fontsource/ibm-plex-sans/files/${f}`).toString('base64')
const css = `
@font-face{font-family:P;font-weight:400;src:url(data:font/woff2;base64,${font('ibm-plex-sans-latin-400-normal.woff2')})}
@font-face{font-family:P;font-weight:700;src:url(data:font/woff2;base64,${font('ibm-plex-sans-latin-700-normal.woff2')})}
*{margin:0;box-sizing:border-box}body{width:1200px;height:630px;background:#f5f5f4;color:#141414;font-family:P;padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between}
.top{display:flex;align-items:center;gap:16px;font-size:26px;font-weight:700}.m{width:52px;height:52px;border-radius:12px;background:#141414;color:#f5f5f4;display:grid;place-items:center;font-size:18px}
.k{font-size:30px;color:#4a4a48;margin-bottom:18px}h1{font-size:96px;line-height:1.02;letter-spacing:-.03em;font-weight:700;max-width:1000px}
.b{display:flex;justify-content:space-between;font-size:24px;color:#75746f;border-top:2px solid #e4e3df;padding-top:24px}`
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])

if (import.meta.url === `file://${process.argv[1]}`) {
const browser = await chromium.launch({ executablePath: findChrome() })
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
const all = pages().all
for (const p of all) {
  const title = p.path === '/' ? 'I build the software businesses count on.' : p.title
  await page.setContent(`<style>${css}</style>
    <div class="top"><span class="m">ND</span>Nobel Dahal</div>
    <div><p class="k">${esc(p.kind)}</p><h1 style="font-size:${title.length > 30 ? 72 : 96}px">${esc(title)}</h1></div>
    <div class="b"><span>nobeldahal.com.np</span><span>Kathmandu, Nepal</span></div>`)
  await page.evaluate(() => document.fonts.ready)
  const out = path.join('public/og', (p.og || p.path.slice(1)) + '.png')
  fs.mkdirSync(path.dirname(out), { recursive: true })
  await page.screenshot({ path: out })
}
// App icons from the same mark.
for (const [name, size] of [['apple-touch-icon', 180], ['icon-192', 192], ['icon-512', 512]]) {
  await page.setViewportSize({ width: size, height: size })
  await page.setContent(`<style>${css}body{width:${size}px;height:${size}px;padding:0;display:grid;place-items:center;background:#141414}</style><div style="font-family:P;font-weight:700;color:#f5f5f4;font-size:${Math.round(size * 0.38)}px;letter-spacing:-.02em">ND</div>`)
  await page.evaluate(() => document.fonts.ready)
  await page.screenshot({ path: `public/${name}.png` })
}
await browser.close()
console.log(`og: ${all.length} images`)
}
