<template>
  <div class="absolute top-full left-0 w-full bg-surface border-b border-outline-variant/10 shadow-lg z-50">
    <div class="px-6 py-4 flex flex-col sm:flex-row gap-3 max-w-7xl mx-auto">
      <router-link
        v-for="bird in birdList"
        :key="bird.slug"
        :to="targetPath(bird.slug)"
        @click="$emit('close')"
        :class="[
          'flex items-center gap-3 px-4 py-3 rounded-xl transition-colors no-underline',
          bird.slug === currentBird
            ? 'bg-primary/10 border border-primary/20'
            : 'bg-surface-container-low hover:bg-surface-container'
        ]"
      >
        <img :src="bird.thumbnail" :alt="bird.name" class="w-10 h-10 rounded-full object-cover flex-shrink-0" />
        <div class="min-w-0">
          <p :class="['font-serif font-bold text-sm', bird.slug === currentBird ? 'text-primary' : 'text-on-surface']">{{ bird.name }}</p>
          <p class="text-on-surface-variant text-xs italic truncate">{{ bird.scientificName }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { birds } from '@/birds'

export default {
  name: 'BirdSelector',
  emits: ['close'],
  computed: {
    birdList() {
      return Object.values(birds)
    },
    currentBird() {
      return this.$route.params.bird
    }
  },
  methods: {
    targetPath(slug) {
      const currentSub = this.$route.path.replace('/' + this.currentBird, '')
      return '/' + slug + currentSub
    }
  }
}
</script>
