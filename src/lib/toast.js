import { ref } from 'vue'

// One quiet message at a time, bottom centre.
export const toast = ref('')
let timer
export function say(message) {
  toast.value = message
  clearTimeout(timer)
  timer = setTimeout(() => { toast.value = '' }, 2200)
}

export async function copy(text, message = 'Copied') {
  try { await navigator.clipboard.writeText(text); say(message) } catch (e) { say('Copy failed. Select it instead.') }
}
