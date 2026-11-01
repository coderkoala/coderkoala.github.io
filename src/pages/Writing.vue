<script setup>
import { writing, formatDate } from '../lib/content.js'
import { useSeo } from '../lib/seo.js'
import { crumbs } from '../lib/site.js'
useSeo({ title: 'Writing and case studies', description: 'Case studies and notes by Nobel Dahal on building ERPs, CRMs and cargo software.', path: '/writing', ld: crumbs([{ name: 'Writing', path: '/writing' }]) })
</script>

<template>
  <section class="wrap page">
    <header class="head">
      <h1 class="display">Writing</h1>
      <p class="lede">Case studies and notes from building software people use all day.</p>
    </header>
    <ol v-if="writing.length" class="list">
      <li v-for="p in writing" :key="p.slug">
        <RouterLink :to="p.url" class="item">
          <time :datetime="p.date" class="item__date">{{ formatDate(p.date) }}</time>
          <span class="item__title">{{ p.title }}<em v-if="p.draft" class="item__draft">Draft</em></span>
          <span class="item__sum">{{ p.summary }}</span>
        </RouterLink>
      </li>
    </ol>
    <p v-else class="lede">Nothing here yet. Soon.</p>
  </section>
</template>

<style scoped>
.page { padding-block: 64px 96px; display: grid; gap: 48px; }
.head { display: grid; gap: 16px; }
.list { border-top: 1px solid var(--ui-border); max-width: 820px; }
.list li { border-bottom: 1px solid var(--ui-border); }
.item { display: grid; grid-template-columns: 180px 1fr; gap: 4px 32px; padding-block: 28px; text-decoration: none; }
.item__date { grid-row: span 2; color: var(--ui-ink-faint); font-size: 14px; padding-top: 4px; }
.item__title { font-size: 22px; font-weight: 700; letter-spacing: -0.01em; }
.item:hover .item__title { text-decoration: underline; text-underline-offset: 4px; }
.item__sum { color: var(--ui-ink-soft); }
.item__draft { margin-left: 10px; font: 600 12px var(--ui-font-sans); font-style: normal; color: var(--ui-ink-faint); border: 1px solid var(--ui-border); border-radius: 4px; padding: 2px 6px; vertical-align: middle; }
@media (max-width: 767.98px) { .page { padding-block: 40px 64px; } .item { grid-template-columns: 1fr; } .item__date { grid-row: auto; } }
</style>
