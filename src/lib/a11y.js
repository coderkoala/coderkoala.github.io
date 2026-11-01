import { reactive, watch } from 'vue'

// Reader preferences, kept on <html> as data attributes (applied before paint by index.html).
const KEY = 'a11y'
const defaults = { text: 'md', contrast: 'normal', motion: 'auto', links: 'auto', spacing: 'normal' }
function load() { try { return { ...defaults, ...JSON.parse(localStorage.getItem(KEY) || '{}') } } catch (e) { return { ...defaults } } }
export const prefs = reactive(typeof window === 'undefined' ? { ...defaults } : load())
export function apply() {
  const el = document.documentElement
  for (const [k, v] of Object.entries(prefs)) { if (v === defaults[k]) delete el.dataset[`a11y${k[0].toUpperCase()}${k.slice(1)}`]; else el.dataset[`a11y${k[0].toUpperCase()}${k.slice(1)}`] = v }
  try { localStorage.setItem(KEY, JSON.stringify(prefs)) } catch (e) {}
}
export function reset() { Object.assign(prefs, defaults) }
if (typeof window !== 'undefined') watch(prefs, apply, { deep: true })

// Free translation of any page, through Google Translate's page proxy. Nothing loads until chosen.
export const languages = [
  ['ne', 'नेपाली', 'Nepali'], ['hi', 'हिन्दी', 'Hindi'], ['ja', '日本語', 'Japanese'], ['zh-CN', '中文', 'Chinese'],
  ['ko', '한국어', 'Korean'], ['ar', 'العربية', 'Arabic'], ['de', 'Deutsch', 'German'], ['fr', 'Français', 'French'],
  ['es', 'Español', 'Spanish'], ['pt', 'Português', 'Portuguese'], ['it', 'Italiano', 'Italian'], ['nl', 'Nederlands', 'Dutch'],
  ['ru', 'Русский', 'Russian'], ['tr', 'Türkçe', 'Turkish'], ['id', 'Bahasa Indonesia', 'Indonesian'], ['bn', 'বাংলা', 'Bengali'],
]
export const translateUrl = (lang, url = typeof location !== 'undefined' ? location.href : 'https://nobeldahal.com.np/') =>
  `https://translate.google.com/translate?sl=en&tl=${lang}&u=${encodeURIComponent(url)}`
