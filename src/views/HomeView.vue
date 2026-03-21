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

      <!-- Distribution Map -->
      <section class="px-6 md:px-12 max-w-7xl mx-auto mt-24 mb-12">
        <div class="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p class="font-label text-xs uppercase tracking-widest text-primary mb-2">Global Range</p>
            <h3 class="font-serif text-4xl text-on-surface font-bold">Where Kestrels Live</h3>
          </div>
          <div class="flex items-center gap-6 text-xs text-on-surface-variant font-label uppercase tracking-wider">
            <span class="flex items-center gap-2"><span class="inline-block w-3 h-3 rounded-full bg-[#e8956d]"></span>Breeding</span>
            <span class="flex items-center gap-2"><span class="inline-block w-3 h-3 rounded-full bg-[#8b9dc3]"></span>Year-round</span>
            <span class="flex items-center gap-2"><span class="inline-block w-3 h-3 rounded-full bg-[#e8d44d]"></span>Wintering</span>
          </div>
        </div>
        <div class="rounded-xl overflow-hidden border border-outline-variant/10 shadow-sm">
          <img src="/map.png" alt="Distribution map of the Eurasian Kestrel showing breeding, year-round and wintering ranges across Europe, Asia and Africa" class="w-full" />
        </div>
        <p class="mt-4 text-[11px] text-on-surface-variant/60 leading-relaxed max-w-3xl">
          Cornell Lab of Ornithology (2025) Distribution map for Eurasian Kestrel <span class="italic">Falco tinnunculus</span>. Modified accounting for taxonomic differences from BirdLife International and Handbook of the Birds of the World (2021) Bird species distribution maps of the world. Version 2021.1.
        </p>
      </section>
    </main>
  </div>
</template>

<script>
import FeatureGrid from '@/components/FeatureGrid.vue'
import SpecimenHero from '@/components/SpecimenHero.vue'

export default {
  name: 'HomeView',
  components: {
    FeatureGrid,
    SpecimenHero
  }
}
</script>