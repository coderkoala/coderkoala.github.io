import '@fontsource/ibm-plex-sans/400.css'
import '@fontsource/ibm-plex-sans/600.css'
import '@fontsource/ibm-plex-sans/700.css'
import '@fontsource/ibm-plex-mono/400.css'
import './styles/tokens.css'
import './styles/base.css'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './routes.js'

export const createApp = ViteSSG(App, {
  routes,
  scrollBehavior: (to, from, saved) => saved || (to.hash ? { el: to.hash, top: 88 } : { top: 0 }),
}, ({ router, isClient }) => {
  if (!isClient) return
  const done = new Set()
  const load = (c) => { if (typeof c === 'function' && !done.has(c)) { done.add(c); c().catch(() => {}) } }
  // Hover or focus a link: fetch that page's code before the click lands.
  const near = (e) => {
    const a = e.target.closest?.('a[href^="/"]')
    if (a) router.resolve(a.getAttribute('href')).matched.forEach((r) => load(r.components?.default))
  }
  addEventListener('pointerover', near, { passive: true })
  addEventListener('focusin', near)
  // Once the page is idle, fetch every page's code so each navigation is instant.
  const idle = window.requestIdleCallback || ((f) => setTimeout(f, 1500))
  const warmAll = () => idle(() => routes.forEach((r) => load(r.component)))
  if (document.readyState === 'complete') warmAll(); else addEventListener('load', warmAll, { once: true })
})
