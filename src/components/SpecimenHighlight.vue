<template>
  <section class="mt-32 bg-primary py-24 px-6 md:px-12 text-on-primary overflow-hidden relative">
    <div class="absolute right-0 top-0 opacity-10 pointer-events-none">
      <span class="material-symbols-outlined text-[400px]" style="font-variation-settings: 'FILL' 1;">nest_cam_outdoor</span>
    </div>
    <div class="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">
      <div class="space-y-6">
        <h3 class="font-serif text-5xl leading-tight font-bold">
          <span v-html="$t('specimenHighlight.title')"></span>
        </h3>
        <p class="text-on-primary-container text-lg max-w-lg font-light leading-relaxed">
          {{ $t('specimenHighlight.description') }}
        </p>
        <button class="bg-white text-primary px-10 py-5 rounded-lg font-bold hover:bg-primary-fixed transition-colors active:scale-95">
          {{ $t('specimenHighlight.buttonText') }}
        </button>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-primary-container/30 backdrop-blur-md p-6 rounded-xl space-y-2">
          <span class="block text-3xl font-serif font-bold">1,240+</span>
          <span class="text-xs uppercase tracking-widest font-bold opacity-60">
            {{ $t('specimenHighlight.observations') }}
          </span>
        </div>
        <div class="bg-primary-container/30 backdrop-blur-md p-6 rounded-xl space-y-2">
          <span class="block text-3xl font-serif font-bold">47</span>
          <span class="text-xs uppercase tracking-widest font-bold opacity-60">
            {{ $t('specimenHighlight.specimens') }}
          </span>
        </div>
        <div class="bg-primary-container/30 backdrop-blur-md p-6 rounded-xl space-y-2">
          <span class="block text-3xl font-serif font-bold">3,500+</span>
          <span class="text-xs uppercase tracking-widest font-bold opacity-60">
            {{ $t('specimenHighlight.hours') }}
          </span>
        </div>
        <div class="bg-primary-container/30 backdrop-blur-md p-6 rounded-xl space-y-2">
          <span class="block text-3xl font-serif font-bold">24/7</span>
          <span class="text-xs uppercase tracking-widest font-bold opacity-60">
            {{ $t('specimenHighlight.monitoring') }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SpecimenHighlight'
}
</script>