<template>
  <nav class="fixed bottom-0 left-0 right-0 z-50 bg-[#fafaf5] dark:bg-zinc-900 border-t border-outline-variant/20 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
    <div class="flex justify-around items-center w-full px-4 py-3">
      <router-link
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        :class="[
          'flex flex-col items-center justify-center cursor-pointer transition-all duration-300',
          isActive(item.path)
            ? 'bg-[#4f6d58] text-white rounded-full px-4 py-1 scale-110'
            : 'text-[#375541]/60 dark:text-zinc-400 group'
        ]"
      >
        <span
          :class="[
            'material-symbols-outlined',
            !isActive(item.path) && 'transition-transform duration-300 group-hover:scale-110'
          ]"
          :style="isActive(item.path) ? { fontVariationSettings: '\'FILL\' 1' } : {}"
        >{{ item.icon }}</span>
        <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope mt-0.5">{{ $t(item.labelKey) }}</span>
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
        { path: '/', icon: 'nest_cam_outdoor', labelKey: 'nav.home' },
        { path: '/hatch', icon: 'egg', labelKey: 'nav.hatch' },
        { path: '/growth', icon: 'trending_up', labelKey: 'nav.growth' },
        { path: '/flight', icon: 'flight', labelKey: 'nav.flight' },
        { path: '/hunt', icon: 'target', labelKey: 'nav.hunt' },
        { path: '/mate', icon: 'favorite', labelKey: 'nav.mate' },
        { path: '/nest', icon: 'home_max', labelKey: 'nav.nest' }
      ]
    }
  },
  methods: {
    isActive(path) {
      if (path === '/') return this.$route.path === '/'
      return this.$route.path.startsWith(path)
    }
  }
}
</script>
