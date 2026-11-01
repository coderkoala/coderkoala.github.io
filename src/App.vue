<script setup>
import SiteNav from './components/SiteNav.vue'
import { site } from './lib/site.js'
</script>

<template>
  <div class="backdrop" aria-hidden="true"></div>
  <a class="skip" href="#main">Skip to content</a>
  <SiteNav />
  <main id="main"><RouterView /></main>
  <footer class="foot">
    <div class="wrap foot__in">
      <span>© {{ new Date().getFullYear() }} {{ site.name }} · {{ site.place }}</span>
      <span class="foot__motto" lang="el" title="Find a way, or make one.">Βρείτε έναν τρόπο ή φτιάξτε έναν</span>
    </div>
  </footer>
</template>

<style scoped>
/* The ridge photo, faint and monochrome, behind the top of every page (Kaede-style).
   Light and dark strength live in tokens.css. */
.backdrop {
  position: absolute; inset: 64px 0 auto; height: min(780px, 94vh); z-index: -1; pointer-events: none;
  background: url('/media/backdrop/ridge.jpg') 100% 55% / cover no-repeat;
  filter: var(--ui-backdrop-filter);
  opacity: var(--ui-backdrop-opacity);
  -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 45%, transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0%, #000 45%, transparent 100%);
}
@media (max-width: 767.98px) { .backdrop { height: 560px; background-position: 50% 62%; } }
@media print { .backdrop { display: none; } }
.skip { position: absolute; left: -999px; top: 8px; }
.skip:focus { left: 16px; z-index: 10; background: var(--ui-surface); padding: 8px 12px; }
.foot { border-top: 1px solid var(--ui-border); color: var(--ui-ink-faint); font-size: var(--ui-text-xs); }
.foot__in { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px; padding-block: 20px; }
.foot__motto { font-style: italic; }
</style>
