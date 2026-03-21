<template>
  <header class="fixed top-0 w-full z-50 bg-[#fafaf5] dark:bg-zinc-900 border-b border-outline-variant/10">
    <div class="flex items-center justify-between px-6 py-4 w-full">
      <router-link to="/" class="flex items-center gap-3 no-underline">
        <span class="material-symbols-outlined text-[#375541] dark:text-[#8ba891]">nest_cam_outdoor</span>
        <h1 class="font-serif font-bold text-xl Newsreader text-[#375541] dark:text-[#8ba891] tracking-tight italic">
          {{ titles[currentLang] }}
        </h1>
      </router-link>
      <div class="flex items-center gap-4">
        <nav class="hidden md:flex gap-8 items-center mr-4">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            :class="[
              'font-label uppercase tracking-widest text-xs transition-opacity hover:opacity-80',
              isActive(item.path)
                ? 'text-[#375541] dark:text-[#8ba891] font-bold border-b-2 border-primary'
                : 'text-zinc-500'
            ]"
          >{{ item.labels[currentLang] }}</router-link>
        </nav>
        <LanguageSwitcher />
      </div>
    </div>
  </header>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { languageStore } from '@/stores/language'

export default {
  name: 'TopNav',
  components: { LanguageSwitcher },
  data() {
    return {
      titles: {
        en: 'Common Kestrel: The Living Archive',
        de: 'Turmfalke: Das lebende Archiv',
        hu: 'Vörös vércse: Az élő archívum'
      },
      navItems: [
        { path: '/hatch', labels: { en: 'Hatch', de: 'Schlüpfen', hu: 'Kikelés' } },
        { path: '/nest', labels: { en: 'Nest', de: 'Nest', hu: 'Fészek' } },
        { path: '/flight', labels: { en: 'Flight', de: 'Flug', hu: 'Repülés' } },
        { path: '/hunt', labels: { en: 'Hunt', de: 'Jagd', hu: 'Vadászat' } },
        { path: '/mate', labels: { en: 'Mate', de: 'Paarung', hu: 'Párzás' } }
      ]
    }
  },
  computed: {
    currentLang() {
      return languageStore.currentLang
    }
  },
  methods: {
    isActive(path) {
      return this.$route.path === path
    }
  }
}
</script>
