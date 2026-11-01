<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppIcon from '../components/AppIcon.vue'
import NotFound from './NotFound.vue'
import { writing, formatDate } from '../lib/content.js'
import { site, crumbs } from '../lib/site.js'
import { useSeo } from '../lib/seo.js'

const route = useRoute()
const p = computed(() => writing.find((w) => w.slug === route.params.slug))
if (p.value) useSeo({
  title: p.value.title, description: p.value.summary, path: p.value.url, type: 'article', published: p.value.date,
  ld: [{
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: p.value.title,
    description: p.value.summary, datePublished: p.value.date, dateModified: p.value.updated || p.value.date,
    url: site.url + p.value.url, mainEntityOfPage: site.url + p.value.url, image: `${site.url}/og${p.value.url}.png`,
    author: { '@id': `${site.url}/#person`, name: site.name, url: site.url },
  }, crumbs([{ name: 'Writing', path: '/writing' }, { name: p.value.title, path: p.value.url }])],
})
</script>

<template>
  <NotFound v-if="!p" />
  <article v-else class="wrap page">
    <header class="head">
      <RouterLink to="/writing" class="back"><AppIcon name="back" /> Writing</RouterLink>
      <h1 class="display">{{ p.title }}</h1>
      <p class="lede">{{ p.summary }}</p>
      <time :datetime="p.date" class="date">{{ formatDate(p.date) }}</time>
    </header>
    <div class="prose" v-html="p.html" />
  </article>
</template>

<style scoped>
.page { padding-block: 56px 96px; display: grid; gap: 48px; max-width: calc(68ch + 80px); }
.head { display: grid; gap: 16px; }
.head .display { font-size: clamp(32px, 4vw, 48px); }
.back { display: inline-flex; align-items: center; gap: 6px; width: fit-content; color: var(--ui-ink-faint); text-decoration: none; font-size: 14px; }
.back:hover { color: var(--ui-ink); }
.date { color: var(--ui-ink-faint); font-size: 14px; }
</style>
