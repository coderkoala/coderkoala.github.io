<script setup>
import { marked } from 'marked'
import raw from '../../content/now.md?raw'
import { formatDate } from '../lib/content.js'
import { useSeo } from '../lib/seo.js'
import { crumbs } from '../lib/site.js'
const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
const updated = m?.[1].match(/updated:\s*(\S+)/)?.[1]
const html = marked.parse(m ? m[2] : raw)
useSeo({ title: 'Now', description: 'What Nobel Dahal is building, maintaining and open to this month.', path: '/now', ld: crumbs([{ name: 'Now', path: '/now' }]) })
</script>

<template>
  <article class="wrap page">
    <header class="head">
      <h1 class="display">Now</h1>
      <p v-if="updated" class="date">Updated <time :datetime="updated">{{ formatDate(updated) }}</time> · Kathmandu</p>
    </header>
    <div class="prose" v-html="html" />
  </article>
</template>

<style scoped>
.page { padding-block: 56px 96px; display: grid; gap: 40px; max-width: calc(68ch + 80px); }
.head { display: grid; gap: 12px; }
.date { color: var(--ui-ink-faint); font-size: 14px; }
</style>
