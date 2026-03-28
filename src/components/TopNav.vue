<template>
  <header class="fixed top-0 w-full z-50 bg-surface dark:bg-zinc-900 border-b border-outline-variant/10">
    <div class="flex items-center justify-between px-6 py-4 w-full">
      <div class="flex items-center gap-3 min-w-0 overflow-hidden">
        <router-link :to="'/' + birdSlug + '/'" class="flex items-center no-underline flex-shrink-0">
          <span class="material-symbols-outlined text-primary dark:text-primary-fixed-dim">home</span>
        </router-link>
        <button
          @click="showBirdSelector = !showBirdSelector"
          class="font-serif font-bold text-xl text-primary dark:text-primary-fixed-dim tracking-tight italic whitespace-nowrap text-ellipsis cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-1 bg-transparent border-none p-0"
        >
          <span class="lg:hidden">{{ $t('nav.siteTitleShort') }}</span>
          <span class="hidden lg:inline">{{ $t('nav.siteTitle') }}</span>
          <span class="material-symbols-outlined text-base">expand_more</span>
        </button>
      </div>
      <div class="flex items-center gap-4">
        <nav class="hidden lg:flex gap-8 items-center mr-4">
          <router-link
            v-for="item in computedNavItems"
            :key="item.path"
            :to="item.path"
            :class="[
              'font-label uppercase tracking-widest text-xs transition-opacity hover:opacity-80',
              isActive(item.path)
                ? 'text-primary dark:text-primary-fixed-dim font-bold border-b-2 border-primary'
                : 'text-zinc-500'
            ]"
          >{{ $t(item.labelKey) }}</router-link>
        </nav>
        <LanguageSwitcher />
      </div>
    </div>
    <BirdSelector v-if="showBirdSelector" @close="showBirdSelector = false" />
  </header>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import BirdSelector from '@/components/BirdSelector.vue'

export default {
  name: 'TopNav',
  components: { LanguageSwitcher, BirdSelector },
  data() {
    return {
      showBirdSelector: false,
      navItems: [
        { subPath: 'hatch', labelKey: 'nav.hatch' },
        { subPath: 'growth', labelKey: 'nav.growth' },
        { subPath: 'flight', labelKey: 'nav.flight' },
        { subPath: 'hunt', labelKey: 'nav.hunt' },
        { subPath: 'mate', labelKey: 'nav.mate' },
        { subPath: 'nest', labelKey: 'nav.nest' }
      ]
    }
  },
  computed: {
    birdSlug() {
      return this.$route.params.bird || 'common-kestrel'
    },
    computedNavItems() {
      return this.navItems.map(item => ({
        ...item,
        path: '/' + this.birdSlug + '/' + item.subPath
      }))
    }
  },
  methods: {
    isActive(path) {
      return this.$route.path === path
    }
  }
}
</script>
