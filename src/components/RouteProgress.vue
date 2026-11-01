<script setup>
// A 2px line under the nav while a page loads; shown only if it takes longer than 120 ms.
import { ref, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const state = ref('idle')           // idle | loading | done
let showTimer
const offBefore = router.beforeEach((to, from) => {
  if (to.path === from.path) return
  clearTimeout(showTimer)
  showTimer = setTimeout(() => { state.value = 'loading' }, 120)
})
const offAfter = router.afterEach(() => {
  clearTimeout(showTimer)
  if (state.value === 'loading') { state.value = 'done'; setTimeout(() => { state.value = 'idle' }, 300) }
})
onBeforeUnmount(() => { offBefore(); offAfter() })
</script>

<template>
  <div :class="['rp', `rp--${state}`]" aria-hidden="true"></div>
</template>

<style scoped>
.rp { position: fixed; top: 0; left: 0; height: 2px; width: 0; background: var(--ui-ink); z-index: 60; opacity: 0; }
.rp--loading { opacity: 1; width: 70%; transition: width 2.4s cubic-bezier(.1, .7, .2, 1); }
.rp--done { opacity: 0; width: 100%; transition: width 160ms var(--ui-ease), opacity 260ms 120ms var(--ui-ease); }
</style>
