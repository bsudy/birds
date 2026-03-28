<template>
  <div :data-bird="birdSlug" class="min-h-screen pt-[69px] pb-20">
    <TopNav />
    <router-view v-if="ready" />
    <BottomNav />
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import TopNav from '@/components/TopNav.vue'
import BottomNav from '@/components/BottomNav.vue'
import { birdSlugs } from '@/birds'
import { loadBirdMessages } from '@/i18n'

export default {
  name: 'BirdLayout',
  components: { TopNav, BottomNav },
  data() {
    return {
      ready: false
    }
  },
  computed: {
    birdSlug() {
      return this.$route.params.bird
    }
  },
  watch: {
    birdSlug: {
      immediate: true,
      async handler(slug) {
        if (!birdSlugs.includes(slug)) {
          this.$router.replace('/')
          return
        }
        this.ready = false
        await loadBirdMessages(slug)
        this.ready = true
      }
    }
  }
}
</script>
