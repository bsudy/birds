<template>
  <div class="font-body text-on-surface selection:bg-primary-fixed-dim selection:text-on-primary-fixed">

    <main class="pb-12 px-6 max-w-7xl mx-auto">
      <!-- Hero Section -->
      <SpecimenHero image-src="/bf-young-kestrels.jpg" image-alt="Young kestrels in a nest">
        <PhaseLabel>{{ $t('growth.phaseLabel') }}</PhaseLabel>
        <h2 class="font-headline text-5xl md:text-7xl text-primary leading-tight mb-8">
          {{ $t('growth.titleLine1') }} <br/>
          <span class="italic">{{ $t('growth.titleLine2') }}</span>
        </h2>
        <div class="space-y-6 text-on-surface-variant leading-relaxed text-lg mb-10">
          <p>{{ $t('growth.introParagraph') }}</p>
          <p class="font-headline italic text-2xl text-tertiary-container py-4 border-l-2 border-primary-container/20 pl-6">"{{ $t('growth.quote') }}"</p>
        </div>
        <div class="flex gap-4">
          <button class="bg-primary text-on-primary px-8 py-4 rounded shadow-sm flex items-center gap-2 hover:opacity-90 transition-all active:scale-95">
            <span class="material-symbols-outlined">menu_book</span>
            <span>{{ $t('growth.viewFieldData') }}</span>
          </button>
          <button class="bg-secondary-container text-on-secondary-container px-8 py-4 rounded flex items-center gap-2 hover:opacity-90 transition-all">
            <span class="material-symbols-outlined">volume_up</span>
            <span>{{ $t('growth.calls') }}</span>
          </button>
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
          <!-- Large Feature -->
          <div class="md:col-span-2 md:row-span-2 bg-surface-container-high rounded overflow-hidden group">
            <img
              alt="Young kestrel fledgling"
              class="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlvRsiKozVehnYhmH9IjqzwneLf3vOeUw5E81aEWP6GqB-ZLCdP40hvmSrugIJTAQularNJSrg55L9F8LtU3l9THIx4JlKjiEnb-xbBwouusQWpkwGv-ycNQXa5lN16c1q-xrKzOqY_5sPEVMpOJYPRIlQVNoRZ_Fgk_K431VqBA5UlxyyA_p7_f_N7nqHNKCI42RtZ7q1uv9Of9IwkKuaYFMvRS8VcI1vyzg0lfzd40l0K3tXhr3tQxPO7WUtpHWofniGpZzxuhqM"
            />
          </div>
          <!-- Top Right -->
          <div class="bg-surface-container-low rounded p-6 flex flex-col justify-end relative overflow-hidden">
            <span class="material-symbols-outlined absolute top-4 right-4 text-primary/20 scale-150">egg_alt</span>
            <span class="text-[10px] font-bold uppercase tracking-widest text-outline mb-1">Development</span>
            <h5 class="font-headline text-xl">Post-Hatch Day 5</h5>
          </div>
          <!-- Bottom Right -->
          <div class="bg-tertiary-container text-on-tertiary-container rounded p-6 flex flex-col justify-center">
            <p class="font-headline italic text-lg leading-snug">"{{ $t('growth.bentoQuote') }}"</p>
          </div>
          <!-- Middle Right Wide -->
          <div class="md:col-span-2 bg-surface-container-lowest rounded p-6 border border-outline-variant/10 flex items-center gap-8">
            <div class="w-24 h-24 flex-shrink-0 bg-surface-variant rounded-full overflow-hidden">
              <img
                alt="Predatory feeding"
                class="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNZ-rcWpoc2WfbmVVch5h_c3YO2xIJ49fVuU7WN5idBfi7zN4DRobvbYPd-gKxdrRCBsywDR9YqzbQ_ldMbx_2cKardkYHNFhyxtq6PXN06ErfTpGOY-KCcchF4TPGUG6hsKOG50uCnvWbXEx-GMNIhEfZFQYuQgoMHjIEmo5eeXzfLpc2dTH9uyrHuKASkqVAZBdy04gaGJvIe72sW-NGKHcI8S5wg-JUbETuBjJChGPWd4XWMVrIm1y2HAbuaRWYzC-C3DwYHLDv"
              />
            </div>
            <div>
              <h5 class="font-bold text-sm uppercase mb-2">{{ $t('growth.dietTitle') }}</h5>
              <p class="text-sm opacity-80">{{ $t('growth.dietBody') }}</p>
            </div>
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
