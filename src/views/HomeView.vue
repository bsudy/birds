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
            <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('home.statGenusLabel') }}</p>
            <p class="font-headline text-2xl text-primary italic">Falco</p>
          </template>
          <template #stat-bottom>
            <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('home.statStatusLabel') }}</p>
            <p class="font-headline text-2xl text-tertiary">{{ $t('home.statStatusValue') }}</p>
          </template>
        </SpecimenHero>
      </div>

      <!-- Feature Grid -->
      <FeatureGrid />

      <!-- Male / Female Section -->
      <section class="px-6 md:px-12 max-w-7xl mx-auto mt-24 mb-24">
        <div class="mb-12">
          <p class="font-label text-xs uppercase tracking-widest text-primary mb-2">{{ $t('home.aboutLabel') }}</p>
          <h3 class="font-serif text-4xl text-on-surface font-bold italic mb-6">{{ $t('home.aboutTitle') }}</h3>
          <p class="text-on-surface-variant leading-relaxed max-w-2xl text-lg">{{ $t('home.aboutDesc') }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Male -->
          <div class="group rounded-xl overflow-hidden bg-surface-container-low">
            <div class="h-80 overflow-hidden">
              <img
                src="/male-kestrel_2023-03-15-205234_xwsc.webp"
                alt="Male Common Kestrel perched on a stump"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div class="p-8">
              <p class="font-label text-xs uppercase tracking-widest text-primary mb-2">{{ $t('home.maleLabel') }}</p>
              <p class="text-on-surface-variant leading-relaxed text-sm">{{ $t('home.maleDesc') }}</p>
            </div>
          </div>
          <!-- Female -->
          <div class="group rounded-xl overflow-hidden bg-surface-container-low">
            <div class="h-80 overflow-hidden">
              <img
                src="/eurasian-kestrel-female.webp"
                alt="Female Common Kestrel perched on a branch"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div class="p-8">
              <p class="font-label text-xs uppercase tracking-widest text-primary mb-2">{{ $t('home.femaleLabel') }}</p>
              <p class="text-on-surface-variant leading-relaxed text-sm">{{ $t('home.femaleDesc') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Distribution Map -->
      <section class="px-6 md:px-12 max-w-7xl mx-auto mt-24 mb-12">
        <div class="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p class="font-label text-xs uppercase tracking-widest text-primary mb-2">{{ $t('home.mapRangeLabel') }}</p>
            <h3 class="font-serif text-4xl text-on-surface font-bold">{{ $t('home.mapTitle') }}</h3>
          </div>
          <div class="flex items-center gap-6 text-xs text-on-surface-variant font-label uppercase tracking-wider">
            <span class="flex items-center gap-2"><span class="inline-block w-3 h-3 rounded-full bg-[#e8956d]"></span>{{ $t('home.mapBreeding') }}</span>
            <span class="flex items-center gap-2"><span class="inline-block w-3 h-3 rounded-full bg-[#8b9dc3]"></span>{{ $t('home.mapYearRound') }}</span>
            <span class="flex items-center gap-2"><span class="inline-block w-3 h-3 rounded-full bg-[#e8d44d]"></span>{{ $t('home.mapWintering') }}</span>
          </div>
        </div>
        <div class="rounded-xl overflow-hidden border border-outline-variant/10 shadow-sm">
          <img src="/map.png" alt="Distribution map of the Eurasian Kestrel showing breeding, year-round and wintering ranges across Europe, Asia and Africa" class="w-full" />
        </div>
        <p class="mt-4 text-[11px] text-on-surface-variant/60 leading-relaxed max-w-3xl" v-html="$t('home.mapAttribution')"></p>
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