<template>
  <div class="font-body text-on-surface antialiased overflow-x-hidden">

    <main class="pb-12 px-6 md:px-12 max-w-7xl mx-auto">
      <!-- Hero Section -->
      <section class="relative min-h-[618px] flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
        <div class="w-full md:w-1/2 order-2 md:order-1">
          <PhaseLabel>{{ $t('nest.phaseLabel') }}</PhaseLabel>
          <h2 class="font-headline text-5xl md:text-7xl text-primary leading-tight mb-8" v-html="$t('nest.heroTitle')"></h2>
          <div class="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-md">
            <p>{{ $t('nest.heroDesc') }}</p>
          </div>
          <div class="flex items-center gap-4">
            <button class="bg-primary text-on-primary px-8 py-3 rounded shadow-lg flex items-center gap-2 hover:opacity-90 transition-all">
              {{ $t('nest.exploreSites') }}
              <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </button>
            <button class="text-primary font-bold underline underline-offset-4 decoration-primary_fixed_dim hover:opacity-80">
              {{ $t('nest.fieldNotes') }}
            </button>
          </div>
        </div>
        <div class="w-full md:w-1/2 order-1 md:order-2 relative flex justify-center items-center">
          <div class="relative w-full aspect-square bg-surface-container-low rounded-full flex items-center justify-center p-12 overflow-visible">
            <div class="absolute inset-0 border-2 border-dashed border-outline-variant/30 rounded-full animate-spin-slow"></div>
            <img alt="Kestrel perched at a nesting site on a high ledge" class="nest-hero-image w-full h-full object-contain relative z-10 transform -rotate-6 scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0VdzSnDgajSW5H4T7GiFgpXBdBNwmhQSIAJoUFtr2WfAGw7vJAqpVNCDMZdJrE_vtQkRnSo8tuLVpkgkaEaXxP3RznYDiOQL9M0BKhinniHqUE1Sy1FqQt7kzIenYmEcB6HtooZrbMRfBneWrsK6gIm54-F7ISEjvKyLHqkj2vqGORr0ZDmcBmUzLi1fyZ8FDPglcCQeR8hRPZAAPbnlkrlP0oCadNaqqk27iJGo9NvPgJcKPU_6bojLLMW_terAYtUxT9TkiiiNf"/>
            <div class="absolute top-0 right-0 bg-surface-container-lowest p-4 shadow-xl rounded-lg z-20 max-w-[150px]">
              <p class="font-label text-[10px] text-outline uppercase mb-1">
                {{ $t('nest.nestingHeightLabel') }}
              </p>
              <p class="font-headline text-2xl text-primary">15-30m</p>
            </div>
            <div class="absolute bottom-10 -left-10 bg-surface-container-lowest p-4 shadow-xl rounded-lg z-20 max-w-[150px]">
              <p class="font-label text-[10px] text-outline uppercase mb-1">
                {{ $t('nest.clutchSizeLabel') }}
              </p>
              <p class="font-headline text-2xl text-tertiary">
                {{ $t('nest.clutchSizeValue') }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Detailed Content: Bento Grid Style -->
      <section class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
        <div class="md:col-span-8 bg-surface-container-low p-10 flex flex-col justify-end min-h-[400px]">
          <h3 class="font-headline text-3xl text-primary mb-6 italic">
            {{ $t('nest.borrowedArchitecture') }}
          </h3>
          <div class="columns-1 md:columns-2 gap-8 text-on-surface-variant leading-relaxed">
            <p class="mb-4">{{ $t('nest.borrowedP1') }}</p>
            <p>{{ $t('nest.borrowedP2') }}</p>
          </div>
        </div>
        <div class="md:col-span-4 bg-[#375541] text-white p-10 flex flex-col items-start justify-center">
          <span class="material-symbols-outlined text-4xl mb-6" data-icon="lightbulb">lightbulb</span>
          <h4 class="font-headline text-2xl mb-4">
            {{ $t('nest.didYouKnow') }}
          </h4>
          <div class="text-on-primary-container font-body text-sm leading-relaxed">
            <p>{{ $t('nest.didYouKnowBody') }}</p>
          </div>
        </div>
        <div class="md:col-span-4 bg-secondary-container text-on-secondary-container p-8">
          <h4 class="font-label text-xs uppercase tracking-tighter mb-4 opacity-70">
            {{ $t('nest.nestingHeightsLabel') }}
          </h4>
          <div class="flex items-end justify-between">
            <div>
              <p class="font-headline text-4xl">15-30m</p>
              <p class="text-xs mt-1 opacity-70 italic">
                {{ $t('nest.nestingHeightsDesc') }}
              </p>
            </div>
            <span class="material-symbols-outlined text-5xl opacity-40" data-icon="altitude">altitude</span>
          </div>
        </div>
        <div class="md:col-span-4 bg-secondary-container text-on-secondary-container p-8">
          <h4 class="font-label text-xs uppercase tracking-tighter mb-4 opacity-70">
            {{ $t('nest.clutchSizeGridLabel') }}
          </h4>
          <div class="flex items-end justify-between">
            <div>
              <p class="font-headline text-4xl">
                {{ $t('nest.clutchSizeGridValue') }}
              </p>
              <p class="text-xs mt-1 opacity-70 italic">
                {{ $t('nest.clutchSizeGridDesc') }}
              </p>
            </div>
            <span class="material-symbols-outlined text-5xl opacity-40" data-icon="egg_alt">egg_alt</span>
          </div>
        </div>
        <div class="md:col-span-4 bg-surface-container-high p-8 flex items-center gap-8">
          <div>
            <h4 class="font-headline text-2xl text-primary">
              {{ $t('nest.territoryDefense') }}
            </h4>
            <p class="text-on-surface-variant text-sm mt-1">
              {{ $t('nest.territoryDefenseDesc') }}
            </p>
          </div>
        </div>
      </section>

      <!-- Final Vision / Quote Section -->
      <section class="bg-surface-container-low p-12 text-center max-w-4xl mx-auto rounded-xl border border-outline-variant/10">
        <h2 class="font-headline text-4xl text-primary mb-6">
          {{ $t('nest.closingTitle') }}
        </h2>
        <p class="text-on-surface-variant text-lg leading-relaxed mb-10 italic">
          {{ $t('nest.closingQuote') }}
        </p>
        <div class="flex justify-center gap-4">
          <div class="w-12 h-1 border-b-2 border-primary"></div>
          <span class="material-symbols-outlined text-primary" data-icon="eco">eco</span>
          <div class="w-12 h-1 border-b-2 border-primary"></div>
        </div>
      </section>
    </main>

  </div>
</template>

<script>
import PhaseLabel from '@/components/PhaseLabel.vue'
export default {
  name: 'NestView',
  components: { PhaseLabel }
}
</script>

<style>
.nest-hero-image {
  filter: drop-shadow(0 10px 15px rgba(55, 85, 65, 0.1));
}

[data-lang]:not(.active-lang) {
  display: none;
}
</style>
