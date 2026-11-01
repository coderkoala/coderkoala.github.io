// Cal.com's official embed, loaded only when needed (on demand or near the viewport).
// Monochrome to match the site; follows the visitor's light/dark choice.
import { site } from './site.js'

const LINK = () => site.booking.replace(/^https?:\/\/cal\.com\//, '')   // "nobel/30min"
let ready

function theme() {
  const t = document.documentElement.dataset.theme
  return t || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
}

export function loadCal() {
  if (ready) return ready
  ready = new Promise((resolve) => {
    /* eslint-disable */
    (function (C, A, L) { let p = function (a, ar) { a.q.push(ar) }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement('script')).src = A; cal.loaded = true } if (ar[0] === L) { const api = function () { p(api, arguments) }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === 'string') { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ['initNamespace', namespace]) } else p(cal, ar); return } p(cal, ar) } })(window, 'https://app.cal.com/embed/embed.js', 'init')
    /* eslint-enable */
    window.Cal('init', 'review', { origin: 'https://cal.com' })
    window.Cal.ns.review('ui', {
      theme: theme(), hideEventTypeDetails: false, layout: 'month_view',
      cssVarsPerTheme: { light: { 'cal-brand': '#141414' }, dark: { 'cal-brand': '#ecebe8' } },
    })
    resolve(window.Cal.ns.review)
  })
  return ready
}

export async function openCal() {
  const cal = await loadCal()
  cal('modal', { calLink: LINK(), config: { layout: 'month_view', theme: theme() } })
}

export async function inlineCal(el) {
  const cal = await loadCal()
  cal('inline', { elementOrSelector: el, calLink: LINK(), config: { layout: 'month_view', theme: theme() } })
}
