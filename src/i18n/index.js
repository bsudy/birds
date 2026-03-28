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

export async function loadBirdMessages(birdSlug) {
  const localeModules = {
    en: () => import(`./locales/${birdSlug}/en.json`),
    de: () => import(`./locales/${birdSlug}/de.json`),
    hu: () => import(`./locales/${birdSlug}/hu.json`)
  }

  for (const locale of supportedLocales) {
    // Reset to shared messages, then layer bird-specific on top
    const base = { ...sharedMessages[locale] }
    try {
      const mod = await localeModules[locale]()
      Object.assign(base, mod.default)
    } catch (e) {
      console.warn(`Missing ${locale} translations for ${birdSlug}`)
    }
    i18n.global.setLocaleMessage(locale, base)
  }
}

export default i18n
