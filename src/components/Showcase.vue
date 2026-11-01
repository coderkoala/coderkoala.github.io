<script setup>
// A bento of screenshots; click one to see it full size.
import { ref } from 'vue'
const props = defineProps({ shots: Array, title: String })
const open = ref(null)
const dlg = ref(null)
function show(s) { open.value = s; dlg.value?.showModal() }
function close() { dlg.value?.close() }
</script>

<template>
  <section class="show wrap" :aria-label="`${title} screenshots`">
    <ul class="bento">
      <li v-for="s in shots" :key="s.src" :class="['tile', { 'tile--full': s.cols >= 6 }]" :style="{ '--c': s.cols, '--r': s.rows }">
        <button type="button" class="tile__btn shimmer" @click="show(s)" :aria-label="`Enlarge: ${s.caption}`">
          <img :src="s.src" :alt="s.caption" loading="lazy" decoding="async" />
        </button>
        <p class="tile__cap">{{ s.caption }}</p>
      </li>
    </ul>
    <dialog ref="dlg" class="lb" @click.self="close" @close="open = null">
      <figure v-if="open">
        <img :src="open.src" :alt="open.caption" />
        <figcaption>{{ open.caption }}</figcaption>
      </figure>
      <button type="button" class="lb__x" @click="close" aria-label="Close">×</button>
    </dialog>
  </section>
</template>

<style scoped>
.show { padding-bottom: 72px; }
.bento {
  display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); grid-auto-rows: minmax(150px, auto);
  grid-auto-flow: dense; gap: 20px;
}
.tile { grid-column: span var(--c); grid-row: span var(--r); display: grid; grid-template-rows: 1fr auto; gap: 8px; min-height: 0; }
.tile__btn {
  min-height: 0; padding: 0; border: 1px solid var(--ui-border); border-radius: 12px; overflow: hidden;
  background: var(--ui-surface-sunken); cursor: zoom-in; display: block; width: 100%;
}
.tile__btn img {
  width: 100%; height: 100%; object-fit: cover; object-position: top left; display: block;
  transition: transform 700ms var(--ui-ease);
}
.tile__btn:hover img { transform: scale(1.03); }
.tile--full { grid-row: span 1; grid-template-rows: auto auto; }
.tile--full .tile__btn img { height: auto; object-fit: initial; }
.tile__cap { font-size: 13px; color: var(--ui-ink-faint); line-height: 1.4; }

.lb { border: 0; padding: 0; background: transparent; max-width: min(1400px, 94vw); max-height: 92vh; overflow: visible; }
.lb::backdrop { background: rgb(10 10 10 / .82); backdrop-filter: blur(4px); }
.lb figure { display: grid; gap: 12px; }
.lb img { max-width: 100%; max-height: 84vh; border-radius: 10px; display: block; margin: 0 auto; }
.lb figcaption { color: #e6e6e3; font-size: 14px; text-align: center; }
.lb__x {
  position: fixed; top: 16px; right: 20px; width: 40px; height: 40px; border-radius: 50%; border: 0;
  background: #f5f5f4; color: #141414; font-size: 24px; line-height: 1; cursor: pointer;
}

@media (max-width: 991.98px) { .bento { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-auto-rows: 180px; } .tile { grid-column: span 2; grid-row: span 2; } }
@media (max-width: 767.98px) { .bento { grid-auto-rows: 120px; gap: 28px; } }
</style>
