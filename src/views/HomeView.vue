<template>
  <div class="bg-background text-on-surface selection:bg-primary-fixed-dim selection:text-on-primary-fixed min-h-screen">

    <main class="pb-12">
      <!-- Hero Section -->
      <section class="relative min-h-[707px] flex flex-col md:flex-row items-center px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div class="w-full md:w-1/2 z-10 space-y-8 py-12">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-widest">
            <span class="material-symbols-outlined text-sm">verified</span>
            <span>Specimen A-124</span>
          </div>
          
          <div>
            <h2 class="font-serif text-6xl md:text-8xl leading-tight text-primary font-bold tracking-tight" v-html="$t('home.heroTitle')"></h2>
            <p class="max-w-md text-on-surface-variant text-lg leading-relaxed font-body mt-6">{{ $t('home.heroDesc') }}</p>
          </div>
          
          <div class="flex items-center gap-6 pt-4">
            <button @click="$router.push('/journey')" class="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:opacity-90 transition-opacity active:scale-95 shadow-xl shadow-primary/10">
              <span>{{ $t('home.beginJourney') }}</span>
              <span class="material-symbols-outlined">arrow_forward</span>
            </button>
            <button class="text-primary font-bold underline underline-offset-8 decoration-primary-fixed-dim hover:text-primary-container transition-colors">
              <span>{{ $t('home.exploreMethodology') }}</span>
            </button>
          </div>
        </div>

        <!-- Specimen Component -->
        <div class="w-full md:w-1/2 relative mt-12 md:mt-0">
          <div class="relative bg-surface-container-low aspect-[4/5] rounded-xl overflow-visible p-8 md:p-12 shadow-sm">
            <div class="absolute -top-12 -right-8 w-64 h-64 md:w-96 md:h-96 z-20">
              <img alt="Common Kestrel in flight" class="w-full h-full object-contain drop-shadow-2xl transform hover:rotate-2 transition-transform duration-700" 
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAiCJnEokIij40WxwTVEgCMfEGVd_e7k1V661M2fpYg_T7hd_14RvIXXYif9uJ4Ax7yKj8zPQPiQ-38_zSQEEUnWb8hr5HHQEi3jz9Dw_idnpKEwnoN7XaWXz0MufqTigvjeA8F6THdsjA1G0_gc__p7IM8MoZtYiu-i8PfFvX3lchuiIgWyLne8lw0Xn5N82duQw7c1D3kiHqSY9-b3DYCyyFNWv-Zcwq2tqWRqRGgVzgbFUtdUTO_NfdlHbqtmbvQzsITs2oBGLP"/>
            </div>
            <div class="mt-auto pt-48 space-y-4">
              <div class="h-px bg-outline-variant/20 w-full"></div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <span class="block text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">Genus</span>
                  <span class="font-serif italic text-lg text-primary">Falco</span>
                </div>
                <div>
                  <span class="block text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">Status</span>
                  <span class="font-serif italic text-lg text-primary">Least Concern</span>
                </div>
              </div>
            </div>
            <div class="absolute -left-4 top-1/2 -translate-y-1/2 writing-vertical-lr rotate-180 hidden md:block">
              <span class="text-[10px] uppercase tracking-[0.5em] text-outline/40 font-black">ARCHIVE-SERIAL-2024</span>
            </div>
          </div>
        </div>
      </section>

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

export default {
  name: 'HomeView',
  components: {
    FeatureGrid,
    SpecimenHighlight
  }
}
</script>