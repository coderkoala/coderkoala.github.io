<script setup>
// "Your day vs Kathmandu": the visitor's time, mine, and how many working hours we share.
import { ref, onMounted, onBeforeUnmount } from 'vue'
const ready = ref(false)
const mine = ref('')
const yours = ref('')
const zone = ref('')
const overlap = ref(0)
const same = ref(false)
let timer

const KTM = 'Asia/Kathmandu'
const fmt = (tz) => new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: tz }).format(new Date())
const offsetMin = (tz) => {
  const d = new Date()
  const s = (t) => new Date(d.toLocaleString('en-US', { timeZone: t }))
  return (s(tz) - s('UTC')) / 60000
}

function update() {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'
  zone.value = tz.replace(/_/g, ' ').split('/').pop()
  same.value = offsetMin(tz) === offsetMin(KTM)
  mine.value = fmt(KTM); yours.value = fmt(tz)
  // My working day 09:00–20:00 Kathmandu; yours 09:00–18:00 local. Overlap in hours.
  const shift = (offsetMin(KTM) - offsetMin(tz)) / 60
  const a0 = 9 - shift, a1 = 20 - shift
  overlap.value = Math.max(0, Math.round((Math.min(a1, 18) - Math.max(a0, 9)) * 2) / 2)
  ready.value = true
}
onMounted(() => { update(); timer = setInterval(update, 30000) })
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <div class="to" aria-live="off">
    <div class="to__cell"><span class="to__k">Kathmandu</span><span class="to__v mono">{{ ready ? mine : '--:--' }}</span></div>
    <template v-if="ready && !same">
      <div class="to__cell"><span class="to__k">You · {{ zone }}</span><span class="to__v mono">{{ yours }}</span></div>
      <div class="to__cell to__cell--wide"><span class="to__k">Shared working hours</span>
        <span class="to__v">{{ overlap >= 1 ? `${overlap} h of your 9–6` : 'Async, with a call slot early or late' }}</span></div>
    </template>
    <div v-else-if="ready" class="to__cell to__cell--wide"><span class="to__k">Shared working hours</span><span class="to__v">Same time zone</span></div>
  </div>
</template>

<style scoped>
.to { display: grid; grid-template-columns: repeat(3, auto); justify-content: start; gap: 8px 40px; padding: 16px 0; border-top: 1px solid var(--ui-border); border-bottom: 1px solid var(--ui-border); }
.to__cell { display: grid; gap: 2px; }
.to__k { font-size: 12px; color: var(--ui-ink-faint); }
.to__v { font-size: 18px; font-weight: 600; }
@media (max-width: 767.98px) { .to { grid-template-columns: 1fr 1fr; } .to__cell--wide { grid-column: 1 / -1; } }
</style>
