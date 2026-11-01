import '@fontsource/ibm-plex-sans/400.css'
import '@fontsource/ibm-plex-sans/600.css'
import '@fontsource/ibm-plex-sans/700.css'
import '@fontsource/ibm-plex-mono/400.css'
// Devanagari for the Nepali pages. Plex covers Latin first, so English pages never fetch these files.
import '@fontsource/noto-sans-devanagari/devanagari-400.css'
import '@fontsource/noto-sans-devanagari/devanagari-600.css'
import '@fontsource/noto-sans-devanagari/devanagari-700.css'
import './styles/tokens.css'
import './styles/base.css'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './routes.js'

export const createApp = ViteSSG(App, {
  routes,
  // Wait for the old page to fade before jumping to the top, so the switch never looks abrupt.
  scrollBehavior: (to, from, saved) => {
    const where = saved || (to.hash ? { el: to.hash, top: 88, behavior: 'smooth' } : { top: 0 })
    if (to.path === from.path) return where
    return new Promise((done) => setTimeout(() => done(where), 170))
  },
}, ({ router, isClient }) => {
  if (!isClient) return
  // Fade images in when they have truly loaded; already-cached ones are marked straight away.
  const mark = (img) => img.classList.add('is-loaded')
  document.addEventListener('load', (e) => { if (e.target.tagName === 'IMG') mark(e.target) }, true)   // image load events stop at document, never window
  document.addEventListener('error', (e) => { if (e.target.tagName === 'IMG') mark(e.target) }, true)
  const sweep = () => document.querySelectorAll('img').forEach((i) => { if (i.complete && i.naturalWidth) mark(i) })
  router.afterEach(() => requestAnimationFrame(() => requestAnimationFrame(sweep)))
  if (document.readyState !== 'loading') sweep(); else addEventListener('DOMContentLoaded', sweep, { once: true })
  const done = new Set()
  const load = (c) => { if (typeof c === 'function' && !done.has(c)) { done.add(c); c().catch(() => {}) } }
  // Hover or focus a link: fetch that page's code before the click lands.
  const near = (e) => {
    const a = e.target.closest?.('a[href^="/"]')
    if (a) router.resolve(a.getAttribute('href')).matched.forEach((r) => load(r.components?.default))
  }
  addEventListener('pointerover', near, { passive: true })
  addEventListener('touchstart', near, { passive: true })
  addEventListener('focusin', near)
  // Once the page is idle, fetch every page's code so each navigation is instant.
  const idle = window.requestIdleCallback || ((f) => setTimeout(f, 1500))
  const warmAll = () => idle(() => routes.forEach((r) => load(r.component)))
  // On phones, respect data plans: only the pages behind the tab bar get warmed.
  const phone = matchMedia('(max-width: 767.98px), (pointer: coarse) and (max-height: 500px)').matches || navigator.connection?.saveData
  const warm = phone ? () => idle(() => ['/work/', '/writing/', '/consult'].forEach((p) => router.resolve(p).matched.forEach((r) => load(r.components?.default)))) : warmAll
  if (document.readyState === 'complete') warm(); else addEventListener('load', warm, { once: true })
})
