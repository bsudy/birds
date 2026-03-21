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
        <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope mt-0.5">{{ item.label }}</span>
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
        { path: '/', icon: 'nest_cam_outdoor', label: 'Home' },
        { path: '/hatch', icon: 'egg', label: 'Hatch' },
        { path: '/nest', icon: 'home_max', label: 'Nest' },
        { path: '/hunt', icon: 'target', label: 'Hunt' },
        { path: '/flight', icon: 'flight', label: 'Flight' },
        { path: '/mate', icon: 'favorite', label: 'Mate' }
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
