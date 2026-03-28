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

const loadedBirds = new Set()

export async function loadBirdMessages(birdSlug) {
  if (loadedBirds.has(birdSlug)) return

  const localeModules = {
    en: () => import(`./locales/${birdSlug}/en.json`),
    de: () => import(`./locales/${birdSlug}/de.json`),
    hu: () => import(`./locales/${birdSlug}/hu.json`)
  }

  for (const locale of supportedLocales) {
    try {
      const mod = await localeModules[locale]()
      i18n.global.mergeLocaleMessage(locale, mod.default)
    } catch (e) {
      console.warn(`Missing ${locale} translations for ${birdSlug}`)
    }
  }

  loadedBirds.add(birdSlug)
}

export default i18n
