<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { prefs, reset, languages, translateUrl } from '../lib/a11y.js'
const dlg = ref(null)
const route = useRoute()
const here = ref('https://nobeldahal.com.np/')
function show() { here.value = location.href; dlg.value?.showModal() }
function hide() { dlg.value?.close() }
const onOpen = () => show()
onMounted(() => addEventListener('a11y:open', onOpen))
onBeforeUnmount(() => removeEventListener('a11y:open', onOpen))
const sizes = [['sm', 'A−'], ['md', 'A'], ['lg', 'A+'], ['xl', 'A++']]
</script>

<template>
  <dialog ref="dlg" class="ap" aria-labelledby="ap-title" @click.self="hide">
    <div class="ap__box">
      <header class="ap__head"><h2 id="ap-title">Reading and accessibility</h2>
        <button type="button" class="ap__x" @click="hide" aria-label="Close">×</button></header>

      <fieldset class="ap__row"><legend>Text size</legend>
        <div class="seg" role="radiogroup">
          <button v-for="[v, l] in sizes" :key="v" type="button" role="radio" :aria-checked="prefs.text === v" @click="prefs.text = v">{{ l }}</button>
        </div></fieldset>

      <div class="ap__row"><span class="ap__l" id="ap-c">High contrast</span>
        <button type="button" role="switch" :aria-checked="prefs.contrast === 'high'" aria-labelledby="ap-c" class="sw" @click="prefs.contrast = prefs.contrast === 'high' ? 'normal' : 'high'"><span /></button></div>
      <div class="ap__row"><span class="ap__l" id="ap-m">Reduce motion</span>
        <button type="button" role="switch" :aria-checked="prefs.motion === 'reduce'" aria-labelledby="ap-m" class="sw" @click="prefs.motion = prefs.motion === 'reduce' ? 'auto' : 'reduce'"><span /></button></div>
      <div class="ap__row"><span class="ap__l" id="ap-u">Underline all links</span>
        <button type="button" role="switch" :aria-checked="prefs.links === 'underline'" aria-labelledby="ap-u" class="sw" @click="prefs.links = prefs.links === 'underline' ? 'auto' : 'underline'"><span /></button></div>
      <div class="ap__row"><span class="ap__l" id="ap-s">Easier reading spacing</span>
        <button type="button" role="switch" :aria-checked="prefs.spacing === 'wide'" aria-labelledby="ap-s" class="sw" @click="prefs.spacing = prefs.spacing === 'wide' ? 'normal' : 'wide'"><span /></button></div>

      <div class="ap__lang">
        <p class="ap__l">Read this page in</p>
        <ul><li v-for="[code, name, en] in languages" :key="code"><a :href="translateUrl(code, here)" :lang="code" rel="noopener" :title="en">{{ name }}</a></li></ul>
        <p class="ap__note">Free machine translation by Google Translate. It opens a translated copy of this page.</p>
      </div>

      <footer class="ap__foot"><button type="button" class="btn btn--sm" @click="reset">Reset</button>
        <span class="ap__note">Saved on this device. Your system's reduced-motion and dark mode are always respected.</span></footer>
    </div>
  </dialog>
</template>

<style scoped>
.ap { border: 0; padding: 0; background: transparent; width: min(520px, calc(100vw - 24px)); margin: auto 12px auto auto; height: auto; max-height: calc(100vh - 24px); }
.ap::backdrop { background: rgb(10 10 10 / .35); }
.ap__box { background: var(--ui-surface); color: var(--ui-ink); border: 1px solid var(--ui-border); border-radius: 14px; padding: 20px 22px; display: grid; gap: 4px; box-shadow: 0 30px 80px -30px rgb(0 0 0 / .5); overflow-y: auto; max-height: calc(100vh - 24px); }
.ap__head { display: flex; justify-content: space-between; align-items: center; padding-bottom: 8px; }
.ap__head h2 { font-size: 18px; font-weight: 700; }
.ap__x { width: 36px; height: 36px; border-radius: 50%; border: 1px solid var(--ui-border); background: transparent; color: inherit; font-size: 20px; cursor: pointer; }
.ap__row { display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 12px 0; border: 0; border-top: 1px solid var(--ui-border); margin: 0; }
fieldset.ap__row legend { float: left; padding: 0; font-weight: 600; font-size: 15px; }
.ap__l { font-weight: 600; font-size: 15px; }
.seg { display: inline-flex; border: 1px solid var(--ui-border); border-radius: 999px; overflow: hidden; }
.seg button { min-width: 48px; height: 34px; border: 0; background: transparent; color: var(--ui-ink-soft); font: 600 14px var(--ui-font-sans); cursor: pointer; }
.seg button[aria-checked='true'] { background: var(--ui-ink); color: var(--ui-surface); }
.sw { position: relative; width: 44px; height: 26px; border-radius: 999px; border: 1px solid var(--ui-border); background: var(--ui-hover); cursor: pointer; flex: none; }
.sw span { position: absolute; top: 3px; left: 3px; width: 18px; height: 18px; border-radius: 50%; background: var(--ui-ink-faint); transition: transform 160ms var(--ui-ease), background 160ms var(--ui-ease); }
.sw[aria-checked='true'] { background: var(--ui-ink); border-color: var(--ui-ink); }
.sw[aria-checked='true'] span { transform: translateX(18px); background: var(--ui-surface); }
.ap__lang { padding-top: 12px; border-top: 1px solid var(--ui-border); display: grid; gap: 10px; }
.ap__lang ul { display: flex; flex-wrap: wrap; gap: 6px; }
.ap__lang a { font-family: var(--ui-font-sans), 'Noto Sans', 'Noto Sans Devanagari', 'Noto Sans KR', 'Noto Sans Bengali', system-ui, sans-serif; display: inline-block; padding: 6px 10px; border: 1px solid var(--ui-border); border-radius: 999px; font-size: 14px; text-decoration: none; }
.ap__lang a:hover { background: var(--ui-hover); }
.ap__note { font-size: 12px; color: var(--ui-ink-faint); }
.ap__foot { display: flex; align-items: center; gap: 12px; padding-top: 14px; margin-top: 6px; border-top: 1px solid var(--ui-border); }
</style>
