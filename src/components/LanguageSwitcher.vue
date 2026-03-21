<template>
  <div class="flex items-center bg-surface-container rounded-full px-2 py-1">
    <button
      v-for="lang in supportedLocales"
      :key="lang"
      :class="[
        'px-3 py-1 rounded-full text-[10px] font-bold transition-all',
        $i18n.locale === lang
          ? 'bg-primary text-on-primary'
          : 'text-on-surface-variant hover:bg-surface-container-high'
      ]"
      @click="$i18n.locale = lang"
    >
      {{ lang.toUpperCase() }}
    </button>
  </div>
</template>

<script>
import { supportedLocales } from '@/i18n'

export default {
  name: 'LanguageSwitcher',
  data() {
    return { supportedLocales }
  }
}
</script>
