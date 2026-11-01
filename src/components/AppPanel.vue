<script setup>
defineProps({ title: String, count: [Number, String], id: String })
</script>

<template>
  <section class="panel" :aria-labelledby="id && id + '-title'">
    <header class="panel__header">
      <h2 :id="id && id + '-title'" class="panel__title">{{ title }}</h2>
      <span v-if="count" class="panel__count">{{ count }}</span>
      <div class="panel__actions"><slot name="actions" /></div>
    </header>
    <div class="panel__body"><slot /></div>
  </section>
</template>

<style scoped>
.panel {
  background: var(--ui-surface);
  border: 1px solid var(--ui-border);
  border-radius: var(--ui-radius-card);
}
.panel__header {
  display: flex;
  align-items: center;
  gap: var(--ui-gap);
  min-height: 40px;
  padding: 0 var(--ui-panel-pad);
  border-bottom: 1px solid var(--ui-border);
}
.panel__title { font-size: var(--ui-text-md); font-weight: 600; }
.panel__count { color: var(--ui-ink-faint); font-size: var(--ui-text-xs); }
.panel__actions { margin-left: auto; display: flex; gap: var(--ui-gap); }
.panel__body { padding: var(--ui-panel-pad); }
</style>
