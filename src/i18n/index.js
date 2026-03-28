import { createI18n } from 'vue-i18n'
import sharedEn from './locales/shared/en.json'
import sharedDe from './locales/shared/de.json'
import sharedHu from './locales/shared/hu.json'

export const supportedLocales = ['en', 'de', 'hu']

const i18n = createI18n({
  legacy: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: { ...sharedEn },
    de: { ...sharedDe },
    hu: { ...sharedHu }
  },
  warnHtmlInMessage: 'off'
})

const sharedMessages = {
  en: sharedEn,
  de: sharedDe,
  hu: sharedHu
}

function deepMerge(target, source) {
  const result = { ...target }
  for (const key of Object.keys(source)) {
    if (
      source[key] && typeof source[key] === 'object' && !Array.isArray(source[key]) &&
      result[key] && typeof result[key] === 'object' && !Array.isArray(result[key])
    ) {
      result[key] = deepMerge(result[key], source[key])
    } else {
      result[key] = source[key]
    }
  }
  return result
}

export async function loadBirdMessages(birdSlug) {
  const localeModules = {
    en: () => import(`./locales/${birdSlug}/en.json`),
    de: () => import(`./locales/${birdSlug}/de.json`),
    hu: () => import(`./locales/${birdSlug}/hu.json`)
  }

  for (const locale of supportedLocales) {
    let messages = structuredClone(sharedMessages[locale])
    try {
      const mod = await localeModules[locale]()
      messages = deepMerge(messages, mod.default)
    } catch (e) {
      console.warn(`Missing ${locale} translations for ${birdSlug}`)
    }
    i18n.global.setLocaleMessage(locale, messages)
  }
}

export default i18n
