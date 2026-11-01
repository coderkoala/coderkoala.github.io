<script setup>
import { toast } from '../lib/toast.js'
</script>

<template>
  <div class="toast" role="status" aria-live="polite">
    <Transition name="t"><span v-if="toast" class="toast__msg">{{ toast }}</span></Transition>
  </div>
</template>

<style scoped>
.toast { position: fixed; left: 0; right: 0; bottom: 24px; display: flex; justify-content: center; pointer-events: none; z-index: 50; }
.toast__msg { background: var(--ui-ink); color: var(--ui-surface); font-size: 14px; font-weight: 600; padding: 10px 16px; border-radius: 8px; box-shadow: 0 12px 32px -12px rgb(0 0 0 / .35); }
.t-enter-active, .t-leave-active { transition: opacity 160ms var(--ui-ease), transform 160ms var(--ui-ease); }
.t-enter-from, .t-leave-to { opacity: 0; transform: translateY(6px); }
</style>
