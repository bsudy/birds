<template>
  <div class="flex items-center bg-surface-container rounded-full px-2 py-1">
    <button
      v-for="lang in languages"
      :key="lang"
      :class="[
        'px-3 py-1 rounded-full text-[10px] font-bold transition-all',
        languageStore.currentLang === lang
          ? 'bg-primary text-on-primary'
          : 'text-on-surface-variant hover:bg-surface-container-high'
      ]"
      @click="switchLang(lang)"
    >
      {{ lang.toUpperCase() }}
    </button>
  </div>
</template>

<script>
import { languageStore, languages, switchLang } from '@/stores/language'

export default {
  name: 'LanguageSwitcher',
  data() {
    return { languageStore, languages }
  },
  methods: { switchLang }
}
</script>