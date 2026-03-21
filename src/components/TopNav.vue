<template>
  <header class="fixed top-0 w-full z-50 bg-[#fafaf5] dark:bg-zinc-900 border-b border-outline-variant/10">
    <div class="flex items-center justify-between px-6 py-4 w-full">
      <router-link to="/" class="flex items-center gap-3 no-underline">
        <span class="material-symbols-outlined text-[#375541] dark:text-[#8ba891]">nest_cam_outdoor</span>
        <h1 class="font-serif font-bold text-xl Newsreader text-[#375541] dark:text-[#8ba891] tracking-tight italic">
          {{ $t('nav.siteTitle') }}
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
          >{{ $t(item.labelKey) }}</router-link>
        </nav>
        <LanguageSwitcher />
      </div>
    </div>
  </header>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

export default {
  name: 'TopNav',
  components: { LanguageSwitcher },
  data() {
    return {
      navItems: [
        { path: '/hatch', labelKey: 'nav.hatch' },
        { path: '/nest', labelKey: 'nav.nest' },
        { path: '/flight', labelKey: 'nav.flight' },
        { path: '/hunt', labelKey: 'nav.hunt' },
        { path: '/mate', labelKey: 'nav.mate' }
      ]
    }
  },
  methods: {
    isActive(path) {
      return this.$route.path === path
    }
  }
}
</script>
