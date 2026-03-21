import { reactive } from 'vue'

export const languages = ['en', 'de', 'hu']

export const languageStore = reactive({
  currentLang: 'en'
})

export function switchLang(lang) {
  if (languages.includes(lang)) {
    languageStore.currentLang = lang
  }
}