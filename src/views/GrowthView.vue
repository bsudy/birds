<template>
  <div class="font-body text-on-surface selection:bg-primary-fixed-dim selection:text-on-primary-fixed">

    <main class="pb-12 px-6 max-w-7xl mx-auto">
      <!-- Hero Section -->
      <SpecimenHero image-src="/Turmfalken_jung_Sylvia_Urbaniak01.jpg" image-alt="Young kestrels starting to develop their plumage">
        <PhaseLabel>{{ $t('growth.phaseLabel') }}</PhaseLabel>
        <h2 class="font-headline text-5xl md:text-7xl text-primary leading-tight mb-8">
          {{ $t('growth.titleLine1') }} <br/>
          <span class="italic">{{ $t('growth.titleLine2') }}</span>
        </h2>
        <div class="space-y-6 text-on-surface-variant leading-relaxed text-lg mb-10">
          <p>{{ $t('growth.introParagraph') }}</p>
          <p class="font-headline italic text-2xl text-tertiary-container py-4 border-l-2 border-primary-container/20 pl-6">"{{ $t('growth.quote') }}"</p>
        </div>
        <template #stat-top>
          <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('growth.growthRate') }}</p>
          <p class="font-headline text-2xl text-primary">14.2g/day</p>
        </template>
        <template #stat-bottom>
          <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('growth.preyFrequency') }}</p>
          <p class="font-headline text-2xl text-tertiary">4-6 / hr</p>
        </template>
      </SpecimenHero>

      <!-- Secondary Content Section: Bento Grid Visuals -->
      <section class="mt-32">
        <h3 class="font-headline text-3xl text-primary mb-12 italic">{{ $t('growth.visualDocumentation') }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          <!-- Row 1: young fledgling + text cards -->
          <div class="md:col-span-2 bg-surface-container-high rounded overflow-hidden group">
            <img
              alt="Young kestrel fledgling"
              class="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              src="/young_kestrel_fledgling.png"
            />
          </div>
          <div class="bg-surface-container-low rounded p-6 flex flex-col justify-end relative overflow-hidden">
            <span class="material-symbols-outlined absolute top-4 right-4 text-primary/20 scale-150">egg_alt</span>
            <span class="text-[10px] font-bold uppercase tracking-widest text-outline mb-1">Development</span>
            <h5 class="font-headline text-xl">Post-Hatch Day 5</h5>
          </div>
          <div class="bg-tertiary-container text-on-tertiary-container rounded p-6 flex flex-col justify-center">
            <p class="font-headline italic text-lg leading-snug">"{{ $t('growth.bentoQuote') }}"</p>
          </div>

          <!-- Row 2: more developed fledglings + diet -->
          <div class="md:col-span-2 rounded overflow-hidden group">
            <img
              alt="Three kestrel fledglings perched in a tree hollow"
              class="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              src="/July2012_1524-blog.webp"
            />
          </div>
          <div class="md:col-span-2 bg-surface-container-lowest rounded p-8 border border-outline-variant/10 flex flex-col justify-center">
            <h5 class="font-bold text-sm uppercase mb-2">{{ $t('growth.dietTitle') }}</h5>
            <p class="text-sm opacity-80">{{ $t('growth.dietBody') }}</p>
          </div>
        </div>
      </section>
    </main>

  </div>
</template>

<script>
import PhaseLabel from '@/components/PhaseLabel.vue'
import SpecimenHero from '@/components/SpecimenHero.vue'
export default {
  name: 'GrowthView',
  components: { PhaseLabel, SpecimenHero }
}
</script>
