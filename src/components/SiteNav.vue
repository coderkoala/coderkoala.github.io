<script setup>
import { ref, onMounted } from 'vue'
import AppIcon from './AppIcon.vue'
import { site } from '../lib/site.js'

const dark = ref(false)
onMounted(() => {
  const t = document.documentElement.dataset.theme
  dark.value = t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches
})
function toggle() {
  dark.value = !dark.value
  const t = dark.value ? 'dark' : 'light'
  document.documentElement.dataset.theme = t
  try { localStorage.setItem('theme', t) } catch (e) {}
}
</script>

<template>
  <header class="nav">
    <div class="wrap nav__in">
      <RouterLink to="/" class="brand" aria-label="Nobel Dahal, home">
        <span class="brand__mark" aria-hidden="true">ND</span>
        <span class="brand__name">Nobel Dahal</span>
      </RouterLink>
      <nav class="links" aria-label="Main">
        <RouterLink to="/work">Work</RouterLink>
        <RouterLink to="/writing">Writing</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <div class="nav__end">
        <a class="btn btn--solid btn--sm nav__cta" :href="`mailto:${site.email}`">Get in touch</a>
        <button class="iconbtn" type="button" @click="toggle" :aria-label="dark ? 'Use light theme' : 'Use dark theme'">
          <AppIcon :name="dark ? 'sun' : 'moon'" />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky; top: 0; z-index: 5;
  background: color-mix(in srgb, var(--ui-surface) 92%, transparent);
  backdrop-filter: saturate(1.4) blur(10px);
  border-bottom: 1px solid var(--ui-border);
}
.nav__in { display: flex; align-items: center; gap: 40px; height: 64px; }
.brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; color: var(--ui-ink); }
.brand__mark {
  display: grid; place-items: center; width: 32px; height: 32px; border-radius: 8px;
  background: var(--ui-ink); color: var(--ui-surface); font: 700 12px var(--ui-font-mono); letter-spacing: .02em;
}
.brand__name { font-weight: 700; font-size: 17px; }
.links { display: flex; gap: 28px; }
.links a { color: var(--ui-ink-soft); text-decoration: none; font-size: 15px; }
.links a:hover, .links a.router-link-active { color: var(--ui-ink); }
.nav__end { margin-left: auto; display: flex; align-items: center; gap: 12px; }
.iconbtn {
  display: grid; place-items: center; width: 36px; height: 36px; border-radius: 50%;
  border: 1px solid var(--ui-border); background: var(--ui-surface); color: var(--ui-ink); cursor: pointer;
}
.iconbtn:hover { background: var(--ui-hover); }
@media (max-width: 767.98px) {
  .nav__in { gap: 16px; height: 56px; }
  .brand__name, .nav__cta { display: none; }
  .links { gap: 20px; }
}
</style>
