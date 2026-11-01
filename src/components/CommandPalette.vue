<script setup>
// ⌘K / Ctrl K / "/" to jump anywhere: pages, projects, posts, and a few actions.
import { ref, computed, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { work, writing, gallery } from '../lib/content.js'
import { site } from '../lib/site.js'
import { copy } from '../lib/toast.js'
import { languages, translateUrl } from '../lib/a11y.js'

const router = useRouter()
const open = ref(false)
const q = ref('')
const active = ref(0)
const input = ref(null)
const dlg = ref(null)

function toggleTheme() {
  const root = document.documentElement
  const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches
  root.dataset.theme = dark ? 'light' : 'dark'
  try { localStorage.setItem('theme', root.dataset.theme) } catch (e) {}
}

const items = computed(() => [
  { group: 'Pages', label: 'Home', to: '/' },
  { group: 'Pages', label: 'Work', hint: 'Everything since 2017', to: '/work/' },
  { group: 'Pages', label: 'Writing', to: '/writing/' },
  { group: 'Pages', label: 'About', to: '/about' },
  { group: 'Pages', label: 'Consult', hint: 'How I help, how we work, questions', to: '/consult' },
  { group: 'Pages', label: 'Résumé', hint: 'as a page', to: '/cv' },
  ...work.map((w) => ({ group: 'Case studies', label: w.title, hint: w.kind, to: w.url })),
  ...writing.map((p) => ({ group: 'Writing', label: p.title, to: p.url })),
  ...gallery.filter((g) => !g.featured).map((g) => ({ group: 'Gallery', label: g.title, hint: `${g.kind} · ${g.year}`, to: '/work/' })),
  { group: 'Actions', label: 'Copy email address', hint: site.email, run: () => copy(site.email, 'Email address copied') },
  { group: 'Actions', label: 'Download résumé (PDF)', run: () => { location.href = site.cv } },
  { group: 'Actions', label: 'Switch light / dark', run: toggleTheme },
  { group: 'Actions', label: 'Accessibility settings', hint: 'text size, contrast, motion', run: () => dispatchEvent(new Event('a11y:open')) },
  ...languages.map(([code, name, en]) => ({ group: 'Read in', label: `Read in ${en}`, hint: name, run: () => { location.href = translateUrl(code) } })),
  { group: 'Actions', label: 'GitHub', hint: 'coderkoala', run: () => window.open(site.github, '_blank', 'noopener') },
  { group: 'Actions', label: 'LinkedIn', hint: 'coderkoala', run: () => window.open(site.linkedin, '_blank', 'noopener') },
])

const results = computed(() => {
  const words = q.value.toLowerCase().split(/\s+/).filter(Boolean)
  const list = words.length ? items.value.filter((i) => words.every((w) => `${i.label} ${i.hint || ''} ${i.group}`.toLowerCase().includes(w))) : items.value
  return list.slice(0, 40)
})

async function show() { open.value = true; q.value = ''; active.value = 0; dlg.value?.showModal(); await nextTick(); input.value?.focus() }
function hide() { open.value = false; dlg.value?.close() }
function choose(i) {
  const item = results.value[i]; if (!item) return
  hide()
  if (item.to) router.push(item.to); else item.run()
}
function onKey(e) {
  if (e.key === 'ArrowDown') { active.value = Math.min(active.value + 1, results.value.length - 1); e.preventDefault(); scroll() }
  else if (e.key === 'ArrowUp') { active.value = Math.max(active.value - 1, 0); e.preventDefault(); scroll() }
  else if (e.key === 'Enter') { choose(active.value); e.preventDefault() }
}
function scroll() { nextTick(() => dlg.value?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' })) }
function global(e) {
  const typing = /input|textarea|select/i.test(e.target.tagName) || e.target.isContentEditable
  if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) { e.preventDefault(); open.value ? hide() : show() }
}
onMounted(() => window.addEventListener('keydown', global))
onBeforeUnmount(() => window.removeEventListener('keydown', global))
defineExpose({ show })
</script>

<template>
  <dialog ref="dlg" class="cp" aria-label="Go to" @close="open = false" @click.self="hide">
    <div class="cp__box">
      <input ref="input" v-model="q" class="cp__input" type="text" placeholder="Go to a page, project or post…"
        role="combobox" aria-expanded="true" aria-controls="cp-list" :aria-activedescendant="`cp-${active}`" @keydown="onKey" @input="active = 0" />
      <ul id="cp-list" class="cp__list" role="listbox">
        <template v-for="(r, i) in results" :key="r.group + r.label">
          <li v-if="i === 0 || results[i - 1].group !== r.group" class="cp__group" role="presentation">{{ r.group }}</li>
          <li :id="`cp-${i}`" role="option" :aria-selected="i === active" class="cp__item" @mousemove="active = i" @click="choose(i)">
            <span class="cp__label">{{ r.label }}</span><span v-if="r.hint" class="cp__hint">{{ r.hint }}</span>
          </li>
        </template>
        <li v-if="!results.length" class="cp__empty">Nothing matches “{{ q }}”.</li>
      </ul>
      <p class="cp__foot"><kbd>↑</kbd><kbd>↓</kbd> to move · <kbd>Enter</kbd> to open · <kbd>Esc</kbd> to close</p>
    </div>
  </dialog>
</template>

<style scoped>
.cp { border: 0; padding: 0; background: transparent; width: min(640px, calc(100vw - 32px)); margin-top: 12vh; }
.cp::backdrop { background: rgb(10 10 10 / .45); backdrop-filter: blur(3px); }
.cp__box { background: var(--ui-surface); color: var(--ui-ink); border: 1px solid var(--ui-border); border-radius: 14px; overflow: hidden; box-shadow: 0 30px 80px -30px rgb(0 0 0 / .5); }
.cp__input { width: 100%; height: 56px; padding: 0 20px; border: 0; border-bottom: 1px solid var(--ui-border); background: transparent; color: inherit; font: 400 17px var(--ui-font-sans); outline: none; }
.cp__list { max-height: min(420px, 55vh); overflow-y: auto; padding: 6px; }
.cp__group { padding: 10px 12px 4px; font-size: 12px; font-weight: 600; color: var(--ui-ink-faint); }
.cp__item { display: flex; justify-content: space-between; gap: 16px; padding: 10px 12px; border-radius: 8px; cursor: pointer; }
.cp__item[aria-selected='true'] { background: var(--ui-hover); }
.cp__label { font-weight: 600; }
.cp__hint { color: var(--ui-ink-faint); font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.cp__empty { padding: 20px 12px; color: var(--ui-ink-faint); }
.cp__foot { padding: 10px 16px; border-top: 1px solid var(--ui-border); font-size: 12px; color: var(--ui-ink-faint); }
kbd { font: 11px var(--ui-font-mono); border: 1px solid var(--ui-border); border-radius: 4px; padding: 1px 5px; margin-right: 2px; }
</style>
