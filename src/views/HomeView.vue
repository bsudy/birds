<template>
  <div class="bg-background text-on-surface selection:bg-primary-fixed-dim selection:text-on-primary-fixed min-h-screen">

    <main class="pb-12">
      <!-- Hero Section -->
      <div class="px-6 md:px-12 max-w-7xl mx-auto">
        <SpecimenHero image-src="/bf-kestrel-nesting.jpg" image-alt="Common Kestrel nesting in a tree hollow" image-object-position="left">
          <h2 class="font-serif text-6xl md:text-8xl leading-tight text-primary font-bold tracking-tight mb-6" v-html="$t('home.heroTitle')"></h2>
          <p class="max-w-md text-on-surface-variant text-lg leading-relaxed font-body mb-10">{{ $t('home.heroDesc') }}</p>
          <div class="flex items-center gap-6">
            <button @click="$router.push('/journey')" class="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:opacity-90 transition-opacity active:scale-95 shadow-xl shadow-primary/10">
              <span>{{ $t('home.beginJourney') }}</span>
              <span class="material-symbols-outlined">arrow_forward</span>
            </button>
            <button class="text-primary font-bold underline underline-offset-8 decoration-primary-fixed-dim hover:text-primary-container transition-colors">
              <span>{{ $t('home.exploreMethodology') }}</span>
            </button>
          </div>
          <template #stat-top>
            <p class="font-label text-[10px] text-outline uppercase mb-1">Genus</p>
            <p class="font-headline text-2xl text-primary italic">Falco</p>
          </template>
          <template #stat-bottom>
            <p class="font-label text-[10px] text-outline uppercase mb-1">Status</p>
            <p class="font-headline text-2xl text-tertiary">Least Concern</p>
          </template>
        </SpecimenHero>
      </div>

      <!-- Feature Grid -->
      <FeatureGrid />

      <!-- Specimen Highlight Section -->
      <SpecimenHighlight />
    </main>
  </div>
</template>

<script>
import FeatureGrid from '@/components/FeatureGrid.vue'
import SpecimenHighlight from '@/components/SpecimenHighlight.vue'
import SpecimenHero from '@/components/SpecimenHero.vue'

export default {
  name: 'HomeView',
  components: {
    FeatureGrid,
    SpecimenHighlight,
    SpecimenHero
  }
}
</script>