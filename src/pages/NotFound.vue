<script setup>
import { useSeo } from '../lib/seo.js'
useSeo({ title: 'Not found', description: 'This page does not exist.', path: '/404', image: '/og/default.png', noindex: true })
</script>

<template>
  <section class="wrap page">
    <p class="eyebrow mono">404</p>
    <h1 class="display">Nothing lives here.</h1>
    <p class="lede">Find a way, or make one. Or just <RouterLink to="/">go home</RouterLink>.</p>
  </section>
</template>

<style scoped>
.page { padding-block: 96px; display: grid; gap: 20px; min-height: 60vh; align-content: center; }
</style>
