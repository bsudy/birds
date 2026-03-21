<template>
  <div class="font-body selection:bg-primary-fixed selection:text-on-primary-fixed">

    <main class="pb-12 px-6 max-w-7xl mx-auto">
      <!-- Hero Section: The Hunt in Motion -->
      <SpecimenHero image-src="/bf-male-kestrel-hunting-flight.jpg" image-alt="Male kestrel hunting in flight" :flip="true">
        <PhaseLabel>{{ $t('hunt.stageLabel') }}</PhaseLabel>
        <h2 class="font-headline text-5xl md:text-7xl leading-tight text-on-surface mb-8">{{ $t('hunt.heroTitle') }}</h2>
        <div class="space-y-6 text-lg text-on-surface-variant font-light leading-relaxed mb-10">
          <p v-html="$t('hunt.heroParagraph1')"></p>
          <p>{{ $t('hunt.heroParagraph2') }}</p>
        </div>
        <template #stat-top>
          <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('hunt.volesLabel') }}</p>
          <p class="font-headline text-2xl text-primary">75%</p>
        </template>
        <template #stat-bottom>
          <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('hunt.beetlesLabel') }}</p>
          <p class="font-headline text-2xl text-tertiary">12%</p>
        </template>
      </SpecimenHero>

      <!-- Bento Grid: The Scientific Anatomy -->
      <section class="mb-24">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Eye Specimen Card -->
          <div class="md:col-span-2 bg-surface-container-low rounded-xl p-10 relative overflow-hidden flex flex-col justify-between min-h-[400px]">
            <div class="relative z-10 max-w-md">
              <h3 class="font-headline text-3xl mb-4">{{ $t('hunt.uvVisionTitle') }}</h3>
              <p class="text-on-surface-variant leading-relaxed mb-6">{{ $t('hunt.uvVisionDesc') }}</p>
              <div class="flex gap-4">
                <span class="px-3 py-1 bg-primary/10 text-primary font-label text-xs uppercase tracking-widest rounded-full">{{ $t('hunt.visionTag') }}</span>
                <span class="px-3 py-1 bg-primary/10 text-primary font-label text-xs uppercase tracking-widest rounded-full">{{ $t('hunt.uvTag') }}</span>
              </div>
            </div>
            <div class="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
              <img
                alt="Kestrel eye detail"
                class="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9vRkuXoJ78ZJ10Dh0WUEU68jJb6X62F9iTS7B6mmDGlfu4M2Qtp05D5Kogri3NucTyX2jcrSMWPb2JvQNr7pquaHH8c6eqDTpEO_1EolpTHBnEQ86VJBh2JK7qa70sN_3v_epiYb2hYV26uwMcAqE6iU6SSM6bGnPThuSJ1DAe_P_5TorqfW4PRc3TBfLlcKhRv8Qv_uwGCbBX0PtFOqvL-2WNGdbko4qCsRcT2HAgPq74f4-FkUjrn2MIxSZYI_lsak0JLd-6a9O"
              />
            </div>
          </div>
          <!-- The Talons -->
          <div class="bg-surface-container-highest rounded-xl p-8 flex flex-col">
            <div class="mb-8">
              <span class="material-symbols-outlined text-4xl text-primary">precision_manufacturing</span>
            </div>
            <h3 class="font-headline text-2xl mb-4">{{ $t('hunt.talonsTitle') }}</h3>
            <p class="text-sm text-on-surface-variant leading-relaxed">{{ $t('hunt.talonsDesc') }}</p>
            <div class="mt-auto pt-8">
              <img
                alt="Bird claws"
                class="rounded-lg grayscale mix-blend-multiply opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsR-SiS-7zHSn_5V8wmWE8xWL8Q065IVjssp8iNF9lxNwdeD0bPfOekCTCMFOwrLxSbMG-bQmFca1C169ROt_yBKRadSMDNshnbwl66AU53_yN4GUJJq3QRxrne75-_QUQ1IXPO8l9sx7F6ybz8Zvc8_vihd-jYUuVv1qHvSRz4XxBe20rEqmShgE9C9kRIN0Iv5OE_6MHg8pyQgs47t_jaPX34dSLKZp9XR0s7Jn_belBr0U3-OrDXiAP-mmiVsD71dsX0VgVgh8t"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- The Diet Table -->
      <section class="bg-surface-container-low rounded-xl p-12 mb-24">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-outline-variant/20 pb-8">
          <div>
            <h3 class="font-headline text-4xl">{{ $t('hunt.dietTitle') }}</h3>
            <p class="text-on-surface-variant mt-2 font-label uppercase tracking-widest text-xs">{{ $t('hunt.dietSubtitle') }}</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">75%</span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">{{ $t('hunt.volesLabel') }}</span>
            <p class="text-sm italic">{{ $t('hunt.volesDesc') }}</p>
          </div>
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">12%</span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">{{ $t('hunt.beetlesLabel') }}</span>
            <p class="text-sm italic">{{ $t('hunt.beetlesDesc') }}</p>
          </div>
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">8%</span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">{{ $t('hunt.birdsLabel') }}</span>
            <p class="text-sm italic">{{ $t('hunt.birdsDesc') }}</p>
          </div>
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">5%</span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">{{ $t('hunt.othersLabel') }}</span>
            <p class="text-sm italic">{{ $t('hunt.othersDesc') }}</p>
          </div>
        </div>
      </section>

      <!-- Educational CTA -->
      <section class="max-w-3xl mx-auto text-center py-12">
        <h4 class="font-headline text-3xl mb-6 italic">"{{ $t('hunt.closingQuote') }}"</h4>
        <div class="h-1 w-24 bg-primary/20 mx-auto rounded-full"></div>
      </section>
    </main>


    <!-- Floating Action Button -->
    <div class="fixed bottom-24 right-6 md:bottom-12 md:right-12 z-40 hidden md:block">
      <button class="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_20px_40px_rgba(26,28,25,0.06)] hover:scale-105 transition-transform">
        <span class="material-symbols-outlined text-3xl">visibility</span>
      </button>
    </div>
  </div>
</template>

<script>
import PhaseLabel from '@/components/PhaseLabel.vue'
import SpecimenHero from '@/components/SpecimenHero.vue'
export default {
  name: 'HuntView',
  components: { PhaseLabel, SpecimenHero }
}
</script>
