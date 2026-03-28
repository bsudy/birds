<template>
  <div class="font-body text-on-surface antialiased overflow-x-hidden">

    <main class="pb-12 px-6 md:px-12 max-w-7xl mx-auto">
      <!-- Hero Section -->
      <SpecimenHero image-src="/red-kite/red-kite-adult-chick-egg-nest-alamy-ack02y-john-cancalosi.jpg" image-alt="Red Kite adult brooding chick and egg in nest">
        <PhaseLabel>{{ $t('nest.phaseLabel') }}</PhaseLabel>
        <h2 class="font-headline text-5xl md:text-7xl text-primary leading-tight mb-8" v-html="$t('nest.heroTitle')"></h2>
        <div class="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-md">
          <p>{{ $t('nest.heroDesc') }}</p>
        </div>
        <template #stat-top>
          <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('nest.nestingHeightLabel') }}</p>
          <p class="font-headline text-2xl text-primary">12-20m</p>
        </template>
        <template #stat-bottom>
          <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('nest.clutchSizeLabel') }}</p>
          <p class="font-headline text-2xl text-tertiary">{{ $t('nest.clutchSizeValue') }}</p>
        </template>
      </SpecimenHero>

      <!-- Detailed Content: Bento Grid -->
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
        <div class="md:col-span-4 bg-primary text-white p-10 flex flex-col items-start justify-center">
          <span class="material-symbols-outlined text-4xl mb-6">lightbulb</span>
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
              <p class="font-headline text-4xl">12-20m</p>
              <p class="text-xs mt-1 opacity-70 italic">
                {{ $t('nest.nestingHeightsDesc') }}
              </p>
            </div>
            <span class="material-symbols-outlined text-5xl opacity-40">altitude</span>
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
            <span class="material-symbols-outlined text-5xl opacity-40">egg_alt</span>
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

      <!-- Closing Quote -->
      <section class="bg-surface-container-low p-12 text-center max-w-4xl mx-auto rounded-xl border border-outline-variant/10">
        <h2 class="font-headline text-4xl text-primary mb-6">
          {{ $t('nest.closingTitle') }}
        </h2>
        <p class="text-on-surface-variant text-lg leading-relaxed mb-10 italic">
          {{ $t('nest.closingQuote') }}
        </p>
        <div class="flex justify-center gap-4">
          <div class="w-12 h-1 border-b-2 border-primary"></div>
          <span class="material-symbols-outlined text-primary">eco</span>
          <div class="w-12 h-1 border-b-2 border-primary"></div>
        </div>
      </section>
    </main>

  </div>
</template>

<script>
import PhaseLabel from '@/components/PhaseLabel.vue'
import SpecimenHero from '@/components/SpecimenHero.vue'
export default {
  name: 'NestView',
  components: { PhaseLabel, SpecimenHero }
}
</script>
