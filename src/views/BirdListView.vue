<template>
  <div class="min-h-screen bg-background text-on-surface">
    <header class="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant/10">
      <div class="flex items-center justify-between px-6 py-4 w-full">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-primary flex-shrink-0">flutter_dash</span>
          <h1 class="font-serif font-bold text-xl text-primary tracking-tight italic">{{ $t('birdList.title') }}</h1>
        </div>
        <LanguageSwitcher />
      </div>
    </header>

    <main class="pt-[69px] px-6 md:px-12 max-w-5xl mx-auto py-16">
      <div class="mb-12 text-center">
        <h2 class="font-serif text-4xl md:text-5xl text-primary font-bold mb-4">{{ $t('birdList.title') }}</h2>
        <p class="text-on-surface-variant text-lg max-w-xl mx-auto">{{ $t('birdList.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <router-link
          v-for="bird in birdList"
          :key="bird.slug"
          :to="'/' + bird.slug + '/'"
          class="group rounded-xl overflow-hidden bg-surface-container-low hover:bg-surface-container transition-colors no-underline"
        >
          <div class="h-56 overflow-hidden">
            <img
              :src="bird.thumbnail"
              :alt="$t(bird.nameKey)"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div class="p-6">
            <h3 class="font-serif text-2xl text-primary font-bold mb-1">{{ $t(bird.nameKey) }}</h3>
            <p class="text-on-surface-variant text-sm italic mb-4">{{ bird.scientificName }}</p>
            <span class="inline-flex items-center gap-2 text-primary font-label text-xs uppercase tracking-widest">
              {{ $t('birdList.explore') }}
              <span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </span>
          </div>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { birds } from '@/birds'

export default {
  name: 'BirdListView',
  components: { LanguageSwitcher },
  computed: {
    birdList() {
      return Object.values(birds)
    }
  }
}
</script>
