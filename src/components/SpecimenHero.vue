<template>
  <section class="relative min-h-[618px] flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
    <!-- Text content -->
    <div :class="['w-full md:w-1/2', flip ? 'order-2 md:order-2' : 'order-2 md:order-1']">
      <slot />
    </div>

    <!-- Circular image -->
    <div :class="['w-full md:w-1/2 relative flex justify-center items-center', flip ? 'order-1 md:order-1' : 'order-1 md:order-2']">
      <div class="relative w-full aspect-square bg-surface-container-low rounded-full flex items-center justify-center p-12 overflow-visible">
        <div class="absolute inset-0 border-2 border-dashed border-outline-variant/30 rounded-full animate-spin-slow"></div>
        <img
          :alt="imageAlt"
          :src="imageSrc"
          :class="['w-full h-full object-cover relative z-10 transform scale-110 rounded-full specimen-hero-image', flip ? 'rotate-6' : '-rotate-6']"
        />
        <div class="absolute top-0 right-0 bg-surface-container-lowest p-4 shadow-xl rounded-lg z-20 max-w-[150px]">
          <slot name="stat-top" />
        </div>
        <div class="absolute bottom-10 -left-10 bg-surface-container-lowest p-4 shadow-xl rounded-lg z-20 max-w-[150px]">
          <slot name="stat-bottom" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SpecimenHero',
  props: {
    imageSrc: { type: String, required: true },
    imageAlt: { type: String, default: 'Kestrel specimen' },
    flip: { type: Boolean, default: false }
  }
}
</script>

<style>
.specimen-hero-image {
  filter: drop-shadow(0 10px 15px rgba(55, 85, 65, 0.1));
}
</style>
