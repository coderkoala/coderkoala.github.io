<script setup>
import { ref, watch, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import AppIcon from './AppIcon.vue'
import { site } from '../lib/site.js'
import { openCal, loadCal } from '../lib/cal.js'
import { isLandscape } from '../lib/device.js'
import { useLang } from '../lib/i18n.js'
const { t, to, other } = useLang()

// The phone app's own navigation: a thumb-reach tab bar and a "More" sheet.
// Rendered always, shown only under the mobile media query (no hydration mismatch, no flash).
const route = useRoute()
const open = ref(false)
const dark = ref(false)
const tabs = computed(() => [
  { to: to('/'), label: t.value.home, icon: 'home', match: (p) => p === '/' || p === '/ne' },
  { to: '/work/', label: t.value.work, icon: 'grid', match: (p) => p.startsWith('/work') },
  { to: '/writing/', label: t.value.writing, icon: 'pen', match: (p) => p.startsWith('/writing') },
  { to: to('/consult'), label: t.value.consult, icon: 'chat', match: (p) => /^(\/ne)?\/consult/.test(p) },
])
const more = computed(() => [
  { to: to('/about'), label: t.value.about },
  { to: '/cv', label: t.value.resume },
  { to: '/now', label: t.value.now },
  { to: '/colophon', label: t.value.colophon },
])
watch(() => route.path, () => { open.value = false })
watch(isLandscape, () => { open.value = false })
watch(open, (v) => { document.documentElement.classList.toggle('sheet-open', v); if (v) loadCal() })
onMounted(() => {
  addEventListener('keydown', onKey)
  const t = document.documentElement.dataset.theme
  dark.value = t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches
})
function theme() {
  dark.value = !dark.value
  const t = dark.value ? 'dark' : 'light'
  document.documentElement.dataset.theme = t
  try { localStorage.setItem('theme', t) } catch (e) {}
}
const a11y = () => { open.value = false; dispatchEvent(new Event('a11y:open')) }
const search = () => { open.value = false; dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, metaKey: true })) }
const book = () => { open.value = false; openCal() }
function onKey(e) { if (e.key === 'Escape') open.value = false }
</script>

<template>
  <nav class="tabbar" aria-label="App">
    <RouterLink v-for="t in tabs" :key="t.to" :to="t.to" class="tab" :class="{ on: t.match(route.path) }" :aria-current="t.match(route.path) ? 'page' : null">
      <AppIcon :name="t.icon" :size="22" /><span>{{ t.label }}</span>
    </RouterLink>
    <button type="button" class="tab" :class="{ on: open || more.some((m) => route.path === m.to) }" :aria-expanded="open" aria-controls="more-sheet" @click="open = !open">
      <AppIcon name="more" :size="22" /><span>{{ t.more }}</span>
    </button>
  </nav>

  <Transition name="sheet">
    <div v-if="open" class="scrim" @click.self="open = false">
      <div id="more-sheet" class="sheet" role="dialog" aria-modal="true" :aria-label="t.more">
        <div class="sheet__grip" aria-hidden="true"></div>
        <button v-if="site.booking" type="button" class="btn btn--solid sheet__cta" @click="book"><AppIcon name="calendar" /> {{ t.bookReview }}</button>
        <ul class="sheet__list">
          <li v-for="m in more" :key="m.to"><RouterLink :to="m.to">{{ m.label }} <AppIcon name="arrow" /></RouterLink></li>
          <li><RouterLink :to="other.path" :lang="other.lang">{{ other.label }} <AppIcon name="web" /></RouterLink></li>
          <li><a :href="`mailto:${site.email}`">{{ t.email }} {{ site.email }} <AppIcon name="mail" /></a></li>
        </ul>
        <div class="sheet__tools">
          <button type="button" @click="search"><AppIcon name="search" :size="20" /><span>{{ t.search }}</span></button>
          <button type="button" @click="a11y"><AppIcon name="person" :size="20" /><span>{{ t.access }}</span></button>
          <button type="button" @click="theme"><AppIcon :name="dark ? 'sun' : 'moon'" :size="20" /><span>{{ dark ? t.light : t.dark }}</span></button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.tabbar { display: none; }
.scrim { display: none; }
@media (max-width: 767.98px), (pointer: coarse) and (max-height: 500px) {
  .tabbar {
    position: fixed; inset: auto 0 0; z-index: 30; display: grid; grid-template-columns: repeat(5, 1fr);
    padding: 6px 4px calc(6px + env(safe-area-inset-bottom));
    background: color-mix(in srgb, var(--ui-surface) 94%, transparent);
    backdrop-filter: saturate(1.4) blur(12px); -webkit-backdrop-filter: saturate(1.4) blur(12px);
    border-top: 1px solid var(--ui-border);
  }
  .tab {
    display: grid; justify-items: center; gap: 3px; min-height: 48px; padding: 6px 0 2px;
    border: 0; background: none; font: inherit; font-size: 11px; font-weight: 600; letter-spacing: .01em;
    color: var(--ui-ink-faint); text-decoration: none; cursor: pointer; -webkit-tap-highlight-color: transparent;
    transition: color 160ms var(--ui-ease), transform 120ms var(--ui-ease);
  }
  .tab:active { transform: scale(.92); }
  .tab.on { color: var(--ui-ink); }
  .tab.on :deep(svg) { stroke-width: 2.2; }

  .scrim { display: block; position: fixed; inset: 0; z-index: 40; background: rgb(0 0 0 / .32); }
  .sheet {
    position: absolute; inset: auto 0 0; display: grid; gap: 16px;
    padding: 10px 20px calc(20px + env(safe-area-inset-bottom));
    background: var(--ui-surface); border-radius: 18px 18px 0 0; border-top: 1px solid var(--ui-border);
    box-shadow: 0 -20px 40px -20px rgb(0 0 0 / .3);
  }
  .sheet__grip { justify-self: center; width: 40px; height: 4px; border-radius: 2px; background: var(--ui-border); }
  .sheet__cta { width: 100%; height: 52px; font-size: 16px; }
  .sheet__list { display: grid; }
  .sheet__list a { display: flex; align-items: center; justify-content: space-between; min-height: 52px; font-size: 17px; font-weight: 600; color: var(--ui-ink); text-decoration: none; border-bottom: 1px solid var(--ui-border); }
  .sheet__list a :deep(svg) { color: var(--ui-ink-faint); }
  .sheet__tools { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
  .sheet__tools button {
    display: grid; justify-items: center; gap: 6px; padding: 14px 0; border: 1px solid var(--ui-border); border-radius: 12px;
    background: var(--ui-surface-sunken); color: var(--ui-ink); font: inherit; font-size: 13px; font-weight: 600; cursor: pointer;
  }
  .sheet__tools button:active { transform: scale(.97); }
  /* Sideways: a slim icon-and-label row, and a sheet that scrolls instead of covering the screen. */
  @media (orientation: landscape) {
    .tabbar { padding: 2px max(12px, env(safe-area-inset-right)) calc(2px + env(safe-area-inset-bottom)) max(12px, env(safe-area-inset-left)); }
    .tab { grid-auto-flow: column; align-items: center; justify-content: center; gap: 8px; min-height: 40px; padding: 0; font-size: 12px; }
    .sheet { max-height: 86vh; overflow-y: auto; max-width: 560px; margin-inline: auto; border-left: 1px solid var(--ui-border); border-right: 1px solid var(--ui-border); }
    .sheet__list { grid-template-columns: 1fr 1fr; column-gap: 20px; }
  }
  .sheet-enter-active, .sheet-leave-active { transition: background 240ms var(--ui-ease); }
  .sheet-enter-active .sheet { transition: transform 320ms cubic-bezier(.16, 1, .3, 1); }
  .sheet-leave-active .sheet { transition: transform 200ms cubic-bezier(.4, 0, 1, 1); }
  .sheet-enter-from, .sheet-leave-to { background: transparent; }
  .sheet-enter-from .sheet, .sheet-leave-to .sheet { transform: translateY(100%); }
}
</style>
