<script setup>
// A framed "window" that plays a project's walkthrough one step at a time.
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
const props = defineProps({ project: Object, autoplay: { type: Boolean, default: true } })
const i = ref(0)
const paused = ref(false)
let timer
const steps = computed(() => props.project.steps)

function tick() { if (!paused.value) i.value = (i.value + 1) % steps.value.length }
onMounted(() => {
  if (props.autoplay && !matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(tick, 2800)
})
onBeforeUnmount(() => clearInterval(timer))
watch(() => props.project, () => { i.value = 0 })
</script>

<template>
  <figure class="win" @mouseenter="paused = true" @mouseleave="paused = false" @focusin="paused = true" @focusout="paused = false">
    <div class="win__bar" aria-hidden="true">
      <span class="dots"><i /><i /><i /></span>
      <span class="win__addr mono">{{ project.slug }} · dry run</span>
    </div>
    <ol class="run">
      <li v-for="(s, n) in steps" :key="s.title" :class="{ on: n === i, done: n < i }">
        <button type="button" class="run__row" @click="i = n" :aria-current="n === i ? 'step' : undefined">
          <span class="run__n mono">{{ String(n + 1).padStart(2, '0') }}</span>
          <span class="run__t">{{ s.title }}</span>
        </button>
        <p class="run__d"><span>{{ s.text }}</span></p>
      </li>
    </ol>
    <figcaption class="sr-only">A walkthrough of {{ project.title }}, step by step.</figcaption>
  </figure>
</template>

<style scoped>
.win {
  border: 1px solid var(--ui-border); border-radius: 14px; background: var(--ui-surface);
  box-shadow: 0 1px 2px rgb(0 0 0 / .04), 0 24px 48px -24px rgb(0 0 0 / .18);
  overflow: hidden;
}
.win__bar { display: flex; align-items: center; gap: 16px; height: 40px; padding: 0 16px; border-bottom: 1px solid var(--ui-border); background: var(--ui-surface-sunken); }
.dots { display: flex; gap: 6px; }
.dots i { width: 10px; height: 10px; border-radius: 50%; background: var(--ui-border); }
.win__addr { flex: 1; text-align: center; font-size: 12px; color: var(--ui-ink-faint); margin-right: 46px; }
.run { padding: 12px 0; }
.run li { position: relative; padding: 0 24px; }
.run li::before {
  content: ''; position: absolute; left: 0; top: 8px; bottom: 8px; width: 2px;
  background: var(--ui-ink); transform: scaleY(0); transition: transform var(--ui-duration-slow, 240ms) var(--ui-ease);
}
.run li.on::before { transform: scaleY(1); }
.run__row {
  display: flex; align-items: baseline; gap: 14px; width: 100%; padding: 11px 0 0;
  border: 0; background: none; text-align: left; font: inherit; color: var(--ui-ink-faint); cursor: pointer;
  transition: color var(--ui-duration) var(--ui-ease);
}
.run__n { font-size: 12px; width: 18px; flex: none; }
.run__t { font-size: 16px; font-weight: 600; }
.run li.on .run__row, .run li.done .run__row { color: var(--ui-ink); }
.run li.done .run__row { color: var(--ui-ink-soft); }
.run__d {
  margin-left: 32px; font-size: 14px; color: var(--ui-ink-soft);
  display: grid; grid-template-rows: 0fr; opacity: 0;
  transition: grid-template-rows 260ms var(--ui-ease), opacity 260ms var(--ui-ease), padding 260ms var(--ui-ease);
  overflow: hidden; padding-bottom: 0;
}
.run__d > span { min-height: 0; overflow: hidden; }
.run li.on .run__d { grid-template-rows: 1fr; opacity: 1; padding: 4px 0 4px; }
.run li:last-child .run__d { padding-bottom: 6px; }
</style>
