import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'node:fs'
import { SITE, pages } from './scripts/pages.mjs'

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c])

function writeSitemap({ all }) {
  const urls = all.map((p) => `<url><loc>${SITE}${p.path}</loc><lastmod>${p.lastmod}</lastmod><priority>${p.priority}</priority></url>`).join('')
  fs.writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`)
}

function writeFeed({ posts }) {
  const items = posts.map((p) => `<item><title>${esc(p.title)}</title><link>${SITE}${p.path}</link><guid>${SITE}${p.path}</guid><pubDate>${new Date(p.date).toUTCString()}</pubDate><description>${esc(p.summary)}</description></item>`).join('')
  fs.writeFileSync('dist/feed.xml', `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Nobel Dahal · Writing</title><link>${SITE}/writing</link><atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml"/><description>Case studies and notes from building business software.</description><language>en</language>${items}</channel></rss>`)
}

export default defineConfig({
  plugins: [vue()],
  server: { port: 9000, strictPort: true, host: true },
  preview: { port: 9000 },
  ssgOptions: {
    dirStyle: 'nested',
    formatting: 'none',
    includedRoutes: () => [...pages().all.map((p) => p.path), '/404'],
    onFinished() {
      const data = pages()
      writeSitemap(data)
      writeFeed(data)
      fs.renameSync('dist/404/index.html', 'dist/404.html') // Netlify serves this for unknown paths
      fs.rmSync('dist/404', { recursive: true })
    },
  },
})
