<script setup>
import SiteNav from './components/SiteNav.vue'
import RouteProgress from './components/RouteProgress.vue'
import CommandPalette from './components/CommandPalette.vue'
import AppToast from './components/AppToast.vue'
import A11yPanel from './components/A11yPanel.vue'
import MobileTabBar from './components/MobileTabBar.vue'
import { isMobile } from './lib/device.js'
import { useLang, formatDay, num } from './lib/i18n.js'
import { computed } from 'vue'
const { lang, t } = useLang()
import { apply as applyA11y } from './lib/a11y.js'
import { onMounted } from 'vue'

// Subtle parallax: the far mountain drifts with scroll and pointer; the land barely moves.
onMounted(() => {
  applyA11y()
  // Phones get a still backdrop: no scroll work on every frame, better battery.
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || isMobile.value) return
  const root = document.documentElement
  let sy = 0, mx = 0, queued = false
  const paint = () => { queued = false; root.style.setProperty('--sy', sy); root.style.setProperty('--mx', mx) }
  const ask = () => { if (!queued) { queued = true; requestAnimationFrame(paint) } }
  addEventListener('scroll', () => { sy = Math.min(scrollY, 900); ask() }, { passive: true })
  if (matchMedia('(hover: hover)').matches) addEventListener('pointermove', (e) => { mx = (e.clientX / innerWidth - 0.5) * 2; ask() }, { passive: true })
})
import { site } from './lib/site.js'
/* global __BUILT_AT__ */
const builtAt = __BUILT_AT__
const openA11y = () => dispatchEvent(new Event('a11y:open'))
const builtLabel = computed(() => formatDay(builtAt, lang.value))
</script>

<template>
  <div class="backdrop" aria-hidden="true">
    <div class="bd bd--far"></div>
    <div class="bd bd--mist bd--mist-a"></div>
    <div class="bd bd--land"></div>
    <div class="bd bd--mist bd--mist-b"></div>
  </div>
  <a class="skip" href="#main">Skip to content</a>
  <RouteProgress />
  <SiteNav />
  <main id="main">
    <RouterView v-slot="{ Component, route }">
      <Transition name="page" mode="out-in"><component :is="Component" :key="route.path" /></Transition>
    </RouterView>
  </main>
  <footer class="foot">
    <div class="wrap foot__in">
      <span>© {{ num(new Date(builtAt).getFullYear(), lang) }} {{ t.name }} · {{ t.place }} · {{ t.updated }} <time :datetime="builtAt">{{ builtLabel }}</time></span>
      <span class="foot__links"><RouterLink to="/now">{{ t.now }}</RouterLink><RouterLink to="/colophon">{{ t.colophon }}</RouterLink><button type="button" class="foot__a11y" @click="openA11y">{{ t.a11y }}</button></span>
      <span class="foot__motto" lang="el" title="Find a way, or make one.">Βρείτε έναν τρόπο ή φτιάξτε έναν</span>
    </div>
  </footer>
  <MobileTabBar />
  <CommandPalette />
  <A11yPanel />
  <AppToast />
</template>

<style scoped>
/* The ridge photo, faint and monochrome, behind the top of every page (Kaede-style).
   Light and dark strength live in tokens.css. */
.backdrop {
  position: absolute; inset: 64px 0 auto; height: min(820px, 96vh); z-index: -1; pointer-events: none; overflow: hidden;
  -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 55%, transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0%, #000 55%, transparent 100%);
}
.bd { position: absolute; inset: -40px -40px -40px -40px; will-change: transform; }
.bd--far, .bd--land {
  background: var(--ui-backdrop-ink);
  -webkit-mask: var(--m) 100% 55% / cover no-repeat; mask: var(--m) 100% 55% / cover no-repeat;
}
.bd--far {
  --m: url('/media/backdrop/far.svg'); opacity: var(--ui-backdrop-far);
  transform: translate3d(calc(var(--mx, 0) * -10px), calc(var(--sy, 0) * 0.16px), 0);
}
.bd--land {
  --m: url('/media/backdrop/land.svg'); opacity: var(--ui-backdrop-land);
  transform: translate3d(calc(var(--mx, 0) * -3px), calc(var(--sy, 0) * 0.04px), 0);
}
.bd--mist {
  background:
    radial-gradient(40% 18% at 20% 62%, var(--ui-backdrop-mist), transparent 70%),
    radial-gradient(34% 14% at 70% 70%, var(--ui-backdrop-mist), transparent 70%),
    radial-gradient(30% 12% at 45% 50%, var(--ui-backdrop-mist), transparent 70%);
  animation: drift 70s ease-in-out infinite alternate;
}
.bd--mist-b { animation-duration: 95s; animation-direction: alternate-reverse; opacity: .22; }
@keyframes drift { from { transform: translate3d(-6%, 0, 0); } to { transform: translate3d(6%, -1.5%, 0); } }
@media (prefers-reduced-motion: reduce) { .bd { transform: none !important; animation: none !important; } }
@media (max-width: 767.98px) { .backdrop { height: 600px; } .bd--far, .bd--land { -webkit-mask-position: 68% 60%; mask-position: 68% 60%; } }
@media print { .backdrop { display: none; } }
/* Between pages: a short cross-fade with a slight rise. */
.page-leave-active { transition: opacity 160ms cubic-bezier(.4, 0, 1, 1), transform 160ms cubic-bezier(.4, 0, 1, 1); }
.page-enter-active { transition: opacity 300ms cubic-bezier(.16, 1, .3, 1), transform 360ms cubic-bezier(.16, 1, .3, 1); }
.page-enter-from { opacity: 0; transform: translateY(10px); }
.page-leave-to { opacity: 0; transform: translateY(-3px); }
@media (prefers-reduced-motion: reduce) { .page-enter-active, .page-leave-active { transition: none; } }
.skip { position: absolute; left: -999px; top: 8px; }
.skip:focus { left: 16px; z-index: 10; background: var(--ui-surface); padding: 8px 12px; }
.foot { border-top: 1px solid var(--ui-border); color: var(--ui-ink-faint); font-size: var(--ui-text-xs); }
.foot__in { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px; padding-block: 20px; }
.foot__motto { font-style: italic; }
.foot__links { display: inline-flex; flex-wrap: wrap; gap: 6px 18px; }
.foot__links a { color: inherit; text-underline-offset: 3px; }
.foot__links a:hover { color: var(--ui-ink); }
.foot__a11y { border: 0; background: none; padding: 0; color: inherit; font: inherit; text-decoration: underline; text-underline-offset: 3px; cursor: pointer; }
.foot__a11y:hover { color: var(--ui-ink); }
</style>
