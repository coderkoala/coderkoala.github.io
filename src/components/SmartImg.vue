<script setup>
// Progressive image: a blurred ~24 px placeholder paints instantly (inline, no request), then the
// right-sized WebP for this screen fades in the moment it has loaded. No timers, only the load event.
import { computed, ref, onMounted } from 'vue'
import manifest from '../lib/images.json'

const props = defineProps({
  src: String,
  alt: { type: String, default: '' },
  sizes: { type: String, default: '100vw' },
  eager: Boolean,            // the page's largest image: fetch first, with high priority
  fit: { type: String, default: 'cover' },
  position: { type: String, default: 'top left' },
})
const m = computed(() => manifest[props.src])
const srcset = computed(() => m.value?.variants.map((v) => `${v.src} ${v.w}w`).join(', '))
const fallback = computed(() => m.value ? m.value.variants[m.value.variants.length - 1].src : props.src)
const loaded = ref(false)
const img = ref(null)
onMounted(() => { if (img.value?.complete && img.value.naturalWidth) loaded.value = true })
</script>

<template>
  <span class="si" :class="{ 'si--done': loaded }"
    :style="{ '--lqip': m ? `url(${m.lqip})` : 'none', '--fit': fit, '--pos': position, aspectRatio: m ? `${m.w} / ${m.h}` : null }">
    <img ref="img" :src="fallback" :srcset="srcset" :sizes="sizes" :alt="alt" :width="m?.w" :height="m?.h"
      :loading="eager ? 'eager' : 'lazy'" :fetchpriority="eager ? 'high' : 'auto'" decoding="async"
      @load="loaded = true" @error="loaded = true" />
  </span>
</template>

<style scoped>
.si {
  position: relative; display: block; width: 100%; height: 100%; overflow: hidden;
  background: var(--lqip) var(--pos) / var(--fit) no-repeat, var(--ui-surface-sunken);
}
.si::after {   /* the placeholder stays soft: blur it once more, then fade it away when the real image lands */
  content: ''; position: absolute; inset: 0; background: inherit; filter: blur(14px); transform: scale(1.06);
  transition: opacity 420ms var(--ui-ease);
}
.si img { position: relative; z-index: 1; width: 100%; height: 100%; object-fit: var(--fit); object-position: var(--pos); display: block;
  opacity: 0; transition: opacity 420ms var(--ui-ease); }
.si--done img { opacity: 1; }
.si--done::after { opacity: 0; }
@media (prefers-reduced-motion: reduce) { .si img, .si::after { transition: none; } }
</style>
