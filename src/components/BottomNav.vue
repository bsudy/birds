<template>
  <nav class="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-surface dark:bg-zinc-900 border-t border-outline-variant/20 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
    <div class="flex justify-around items-center w-full px-1 py-2">
      <router-link
        v-for="item in computedNavItems"
        :key="item.path"
        :to="item.path"
        :class="[
          'flex flex-col items-center justify-center cursor-pointer transition-all duration-300 min-w-0',
          isActive(item.path)
            ? 'bg-primary-container text-white rounded-full px-2 py-1'
            : 'text-primary/60 dark:text-zinc-400 group'
        ]"
      >
        <span
          :class="[
            'material-symbols-outlined text-[20px] leading-none',
            !isActive(item.path) && 'transition-transform duration-300 group-hover:scale-110'
          ]"
          :style="isActive(item.path) ? { fontVariationSettings: '\'FILL\' 1' } : {}"
        >{{ item.icon }}</span>
        <span class="font-sans font-medium text-[8px] tracking-wide uppercase mt-0.5 truncate max-w-[44px]">{{ $t(item.labelKey) }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BottomNav',
  data() {
    return {
      navItems: [
        { subPath: '', icon: 'home', labelKey: 'nav.home' },
        { subPath: 'hatch', icon: 'egg', labelKey: 'nav.hatch' },
        { subPath: 'growth', icon: 'trending_up', labelKey: 'nav.growth' },
        { subPath: 'flight', icon: 'flight', labelKey: 'nav.flight' },
        { subPath: 'hunt', icon: 'target', labelKey: 'nav.hunt' },
        { subPath: 'mate', icon: 'favorite', labelKey: 'nav.mate' },
        { subPath: 'nest', icon: 'forward_circle', labelKey: 'nav.nest' }
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
      const currentPath = this.$route.path.replace(/\/$/, '')
      const itemPath = path.replace(/\/$/, '')
      if (itemPath === '/' + this.birdSlug) return currentPath === itemPath
      return currentPath.startsWith(itemPath)
    }
  }
}
</script>
