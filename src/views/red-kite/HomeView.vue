<template>
  <div class="bg-background text-on-surface selection:bg-primary-fixed-dim selection:text-on-primary-fixed min-h-screen">

    <main class="pb-12">
      <!-- Hero Section -->
      <div class="px-6 md:px-12 max-w-7xl mx-auto">
        <SpecimenHero image-src="/red-kite-flight-hero.jpg" image-alt="Red Kite soaring in flight with forked tail">
          <h2 class="font-serif text-6xl md:text-8xl leading-tight text-primary font-bold tracking-tight mb-6" v-html="$t('home.heroTitle')"></h2>
          <p class="max-w-md text-on-surface-variant text-lg leading-relaxed font-body mb-10">{{ $t('home.heroDesc') }}</p>
          <div class="flex items-center gap-6">
            <button @click="$router.push('/' + $route.params.bird + '/journey')" class="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:opacity-90 transition-opacity active:scale-95 shadow-xl shadow-primary/10">
              <span>{{ $t('home.beginJourney') }}</span>
              <span class="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <template #stat-top>
            <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('home.statGenusLabel') }}</p>
            <p class="font-headline text-2xl text-primary italic">Milvus</p>
          </template>
          <template #stat-bottom>
            <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('home.statStatusLabel') }}</p>
            <p class="font-headline text-2xl text-tertiary">{{ $t('home.statStatusValue') }}</p>
          </template>
        </SpecimenHero>
      </div>

      <!-- About Section -->
      <section class="px-6 md:px-12 max-w-7xl mx-auto mt-24 mb-24">
        <div class="flex flex-col md:flex-row gap-12 items-start">
          <div class="md:w-1/2">
            <p class="font-label text-xs uppercase tracking-widest text-primary mb-2">{{ $t('home.aboutLabel') }}</p>
            <h3 class="font-serif text-4xl text-on-surface font-bold italic mb-6">{{ $t('home.aboutTitle') }}</h3>
            <p class="text-on-surface-variant leading-relaxed text-lg mb-6">{{ $t('home.aboutDesc') }}</p>
            <p class="text-on-surface-variant leading-relaxed text-lg">{{ $t('home.aboutDesc2') }}</p>
          </div>
          <div class="md:w-1/2 rounded-xl overflow-hidden group">
            <img
              src="/red-kite-courtship.jpg"
              alt="Red Kite soaring with distinctive forked tail"
              class="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <p class="mt-3 text-[11px] text-on-surface-variant/60 italic">{{ $t('home.plateCaption') }}</p>
          </div>
        </div>
      </section>

      <!-- Feature Grid -->
      <FeatureGrid />

      <!-- Distribution Map -->
      <section class="px-6 md:px-12 max-w-7xl mx-auto mt-24 mb-12">
        <div class="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p class="font-label text-xs uppercase tracking-widest text-primary mb-2">{{ $t('home.mapRangeLabel') }}</p>
            <h3 class="font-serif text-4xl text-on-surface font-bold">{{ $t('home.mapTitle') }}</h3>
          </div>
          <div class="flex items-center gap-6 text-xs text-on-surface-variant font-label uppercase tracking-wider">
            <span class="flex items-center gap-2"><span class="inline-block w-3 h-3 rounded-full bg-[#7ecbf0]"></span>{{ $t('home.mapResident') }}</span>
            <span class="flex items-center gap-2"><span class="inline-block w-3 h-3 rounded-full bg-[#5ddc5d]"></span>{{ $t('home.mapBreeding') }}</span>
          </div>
        </div>
        <div class="rounded-xl overflow-hidden border border-outline-variant/10 shadow-sm">
          <img src="/red-kite/map.png" alt="Distribution map of the Red Kite showing resident and summer breeding ranges across Europe" class="w-full" />
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
