<script setup>
import SiteNav from './components/SiteNav.vue'
import { site } from './lib/site.js'
</script>

<template>
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
.skip { position: absolute; left: -999px; top: 8px; }
.skip:focus { left: 16px; z-index: 10; background: var(--ui-surface); padding: 8px 12px; }
.foot { border-top: 1px solid var(--ui-border); color: var(--ui-ink-faint); font-size: var(--ui-text-xs); }
.foot__in { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px; padding-block: 20px; }
.foot__motto { font-style: italic; }
</style>
