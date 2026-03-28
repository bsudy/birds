<template>
  <section class="px-6 md:px-12 max-w-7xl mx-auto mt-24">
    <div class="mb-12 space-y-2">
      <h3 class="font-serif text-4xl text-primary font-bold">
        {{ $t('featureGrid.chaptersTitle') }}
      </h3>
      <p class="text-on-surface-variant max-w-xl">
        {{ $t('featureGrid.chaptersDesc') }}
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-6 gap-6">
      <!-- Hatch -->
      <div @click="$router.push('/' + $route.params.bird + '/hatch')" class="md:col-span-3 bg-surface-container rounded-xl p-8 flex flex-col justify-between group cursor-pointer hover:bg-surface-container-high transition-colors">
        <div class="flex justify-between items-start">
          <div class="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-white">
            <span class="material-symbols-outlined text-3xl">egg</span>
          </div>
          <span class="font-serif italic text-4xl text-primary/20 group-hover:text-primary/40 transition-colors">01</span>
        </div>
        <div class="mt-8">
          <h4 class="font-serif text-2xl font-bold text-primary mb-2">
            {{ $t('featureGrid.hatchTitle') }}
          </h4>
          <p class="text-on-surface-variant text-sm">
            {{ $t('featureGrid.hatchDesc') }}
          </p>
        </div>
      </div>
      
      <!-- Growth -->
      <div @click="$router.push('/' + $route.params.bird + '/growth')" class="md:col-span-3 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between group cursor-pointer hover:bg-surface-container transition-colors">
        <div class="flex justify-between items-start">
          <div class="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center">
            <span class="material-symbols-outlined text-3xl text-on-secondary-container">trending_up</span>
          </div>
          <span class="font-serif italic text-4xl text-primary/20 group-hover:text-primary/40 transition-colors">02</span>
        </div>
        <div class="mt-8">
          <h4 class="font-serif text-2xl font-bold text-primary mb-2">
            {{ $t('featureGrid.growthTitle') }}
          </h4>
          <p class="text-on-surface-variant text-sm">
            {{ $t('featureGrid.growthDesc') }}
          </p>
        </div>
      </div>
      
      <!-- Flight -->
      <div @click="$router.push('/' + $route.params.bird + '/flight')" class="md:col-span-2 bg-tertiary-container rounded-xl p-8 flex flex-col justify-between group hover:opacity-90 transition-opacity cursor-pointer">
        <div class="flex justify-between items-start">
          <span class="material-symbols-outlined text-4xl text-on-tertiary-container">flight</span>
          <span class="font-serif italic text-4xl text-on-tertiary-container/20 group-hover:text-on-tertiary-container/40 transition-colors">03</span>
        </div>
        <div class="mt-8">
          <h4 class="font-serif text-xl font-bold text-on-tertiary-container mb-2">
            {{ $t('featureGrid.flightTitle') }}
          </h4>
          <p class="text-on-tertiary-fixed-variant text-sm">
            {{ $t('featureGrid.flightDesc') }}
          </p>
        </div>
      </div>

      <!-- Hunt -->
      <div @click="$router.push('/' + $route.params.bird + '/hunt')" class="md:col-span-2 bg-secondary-container rounded-xl p-8 flex flex-col justify-between group hover:opacity-90 transition-opacity cursor-pointer">
        <div class="flex justify-between items-start">
          <span class="material-symbols-outlined text-4xl text-on-secondary-container">target</span>
          <span class="font-serif italic text-4xl text-on-secondary-container/20 group-hover:text-on-secondary-container/40 transition-colors">04</span>
        </div>
        <div class="mt-8">
          <h4 class="font-serif text-xl font-bold text-on-secondary-container mb-2">
            {{ $t('featureGrid.huntTitle') }}
          </h4>
          <p class="text-on-secondary-fixed-variant text-sm">
            {{ $t('featureGrid.huntDesc') }}
          </p>
        </div>
      </div>

      <!-- Mate -->
      <div @click="$router.push('/' + $route.params.bird + '/mate')" class="md:col-span-2 bg-surface-container-high rounded-xl p-8 flex flex-col justify-between group cursor-pointer hover:bg-surface-container-highest transition-colors">
        <div class="flex justify-between items-start">
          <span class="material-symbols-outlined text-4xl text-primary">favorite</span>
          <span class="font-serif italic text-4xl text-primary/20 group-hover:text-primary/40 transition-colors">05</span>
        </div>
        <div class="mt-8">
          <h4 class="font-serif text-xl font-bold text-primary mb-2">
            {{ $t('featureGrid.mateTitle') }}
          </h4>
          <p class="text-on-surface-variant text-sm">
            {{ $t('featureGrid.mateDesc') }}
          </p>
        </div>
      </div>

      <!-- Nest -->
      <div @click="$router.push('/' + $route.params.bird + '/nest')" class="md:col-span-6 bg-surface-container-highest rounded-xl p-8 flex items-center gap-6 group cursor-pointer hover:opacity-95 transition-opacity">
        <span class="material-symbols-outlined text-5xl text-primary">forward_circle</span>
        <div class="flex-1">
          <h4 class="font-serif text-2xl font-bold text-primary mb-2">
            {{ $t('featureGrid.nestTitle') }}
          </h4>
          <p class="text-on-surface-variant">
            {{ $t('featureGrid.nestDesc') }}
          </p>
        </div>
        <span class="font-serif italic text-4xl text-primary/20 group-hover:text-primary/40 transition-colors">06</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeatureGrid'
}
</script>