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
      <!-- Large Feature -->
      <div @click="$router.push('/hatch')" class="md:col-span-4 bg-surface-container rounded-xl p-8 flex flex-col justify-between group cursor-pointer hover:bg-surface-container-high transition-colors">
        <div class="flex justify-between items-start">
          <div class="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-white">
            <span class="material-symbols-outlined text-3xl">egg</span>
          </div>
          <span class="font-serif italic text-4xl text-primary/20 group-hover:text-primary/40 transition-colors">01</span>
        </div>
        <div class="mt-12">
          <h4 class="font-serif text-3xl font-bold text-primary mb-2">
            {{ $t('featureGrid.hatchTitle') }}
          </h4>
          <p class="text-on-surface-variant max-w-md">
            {{ $t('featureGrid.hatchDesc') }}
          </p>
        </div>
      </div>
      
      <!-- Small Feature -->
      <div @click="$router.push('/hunt')" class="md:col-span-2 bg-secondary-container rounded-xl p-8 flex flex-col justify-between group hover:opacity-90 transition-opacity cursor-pointer">
        <span class="material-symbols-outlined text-4xl text-on-secondary-container">target</span>
        <div class="mt-8">
          <h4 class="font-serif text-2xl font-bold text-on-secondary-container mb-2">
            {{ $t('featureGrid.huntTitle') }}
          </h4>
          <p class="text-on-secondary-fixed-variant text-sm">
            {{ $t('featureGrid.huntDesc') }}
          </p>
        </div>
      </div>
      
      <!-- Horizontal Feature -->
      <div @click="$router.push('/flight')" class="md:col-span-3 bg-surface-container-low rounded-xl p-8 flex items-center gap-6 group cursor-pointer hover:bg-surface-container transition-colors">
        <div class="flex-1">
          <h4 class="font-serif text-2xl font-bold text-primary mb-2">
            {{ $t('featureGrid.flightTitle') }}
          </h4>
          <p class="text-on-surface-variant text-sm">
            {{ $t('featureGrid.flightDesc') }}
          </p>
        </div>
        <span class="material-symbols-outlined text-5xl text-primary/30 group-hover:scale-110 transition-transform">flight</span>
      </div>
      
      <!-- Another Feature -->
      <div @click="$router.push('/nest')" class="md:col-span-3 bg-surface-container-highest rounded-xl p-8 flex items-center gap-6 group cursor-pointer hover:opacity-95 transition-opacity">
        <span class="material-symbols-outlined text-5xl text-primary">home_max</span>
        <div class="flex-1">
          <h4 class="font-serif text-2xl font-bold text-primary mb-2">
            {{ $t('featureGrid.nestTitle') }}
          </h4>
          <p class="text-on-surface-variant text-sm">
            {{ $t('featureGrid.nestDesc') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeatureGrid'
}
</script>