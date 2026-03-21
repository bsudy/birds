<template>
  <div class="bg-background text-on-surface min-h-screen selection:bg-primary-fixed">

    <main class="pb-12 px-6 max-w-7xl mx-auto">
      <!-- Hero Section -->
      <SpecimenHero image-src="/bf-male-and-female-common-kestrels.jpg" image-alt="Male and female kestrels perched together" :flip="true">
        <PhaseLabel>{{ $t('mate.chapterLabel') }}</PhaseLabel>
        <h2 class="font-serif text-5xl md:text-7xl leading-[1.1] text-on-surface mb-8">
          {{ $t('mate.heroTitleLine1') }} <br/><span class="italic text-primary">{{ $t('mate.heroTitleLine2') }}</span>
        </h2>
        <p class="font-body text-lg text-on-surface-variant leading-relaxed max-w-md mb-10">{{ $t('mate.heroDesc') }}</p>
        <template #stat-top>
          <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('mate.eggsTitle') }}</p>
          <p class="font-headline text-2xl text-primary">3-6 eggs</p>
        </template>
        <template #stat-bottom>
          <p class="font-label text-[10px] text-outline uppercase mb-1">Breeding season</p>
          <p class="font-headline text-2xl text-tertiary">Apr–Jul</p>
        </template>
      </SpecimenHero>

      <!-- Bento Grid: Lifecycle Details -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <!-- The Selection Card -->
        <div class="md:col-span-2 bg-surface-container-low p-10 rounded-xl relative overflow-hidden flex flex-col justify-end min-h-[400px]">
          <div class="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <span class="material-symbols-outlined text-[200px]">favorite</span>
          </div>
          <h3 class="font-serif text-3xl mb-4">{{ $t('mate.selectionTitle') }}</h3>
          <p class="text-on-surface-variant font-body leading-relaxed max-w-xl">{{ $t('mate.selectionDesc') }}</p>
        </div>
        <!-- Eggs Card -->
        <div class="bg-secondary-container p-10 rounded-xl flex flex-col items-center justify-center text-center">
          <div class="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center mb-6 shadow-sm">
            <span class="material-symbols-outlined text-on-secondary-container" style="font-variation-settings: 'FILL' 1;">egg</span>
          </div>
          <h4 class="font-serif text-2xl text-on-secondary-container mb-1">{{ $t('mate.eggsTitle') }}</h4>
          <p class="text-on-secondary-container/80 text-sm font-body">{{ $t('mate.eggsDesc') }}</p>
        </div>
      </div>

      <!-- Kestrel Call -->
      <div class="bg-surface-container-low rounded-xl p-8 mb-24 flex flex-col sm:flex-row items-start sm:items-center gap-8">
        <div class="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
          <span class="material-symbols-outlined text-primary text-3xl">graphic_eq</span>
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-label text-[10px] text-outline uppercase tracking-widest mb-1">Kestrel Call</p>
          <h4 class="font-serif text-xl text-on-surface mb-3"><span class="italic">Falco tinnunculus tinnunculus</span> — flight call</h4>
          <audio controls class="w-full" style="accent-color: var(--md-sys-color-primary)">
            <source src="/XC608709 - Common Kestrel - Falco tinnunculus tinnunculus.mp3" type="audio/mpeg" />
          </audio>
          <p class="mt-3 text-xs text-on-surface-variant">
            Recording: XC608709 via
            <a href="https://xeno-canto.org/species/Falco-tinnunculus" target="_blank" rel="noopener" class="text-primary underline underline-offset-2 hover:opacity-70 transition-opacity">xeno-canto.org</a>
            — explore more kestrel recordings there.
          </p>
        </div>
      </div>

      <!-- Asymmetric Content Block -->
      <section class="flex flex-col md:flex-row gap-16 items-start">
        <div class="md:w-1/3">
          <div class="sticky top-32">
            <h3 class="font-serif text-4xl mb-4">{{ $t('mate.archiveTitle') }}</h3>
            <p class="font-body text-on-surface-variant mb-8">{{ $t('mate.archiveDesc') }}</p>
            <div class="p-6 bg-surface-container-high rounded-lg border-l-4 border-primary">
              <p class="italic font-serif text-lg text-primary">"{{ $t('mate.quote') }}"</p>
              <p class="mt-2 font-sans text-[10px] uppercase tracking-wider">— Dr. Elias Thorne, 1924</p>
            </div>
          </div>
        </div>
        <div class="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div class="space-y-4">
            <div class="h-64 bg-surface-container-low rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img alt="Feather detail" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANbEoErhVK8vY1cuTe_ahuRCZ7eeAtibC5Gb_uXytEb7in2gENskpxKDIpC2YQu7JwotCS2fsdRrFKhoRQ6R7755SX-8oldmTZF6Hi2VKdCGzPcxzuGJ7tKIUnxo7UCL_2X1tehMXA2fLYO7Peme6QkZlwfqlr55BvO2TyR8BrciXBw9JE6Eo_WNYdt7NzreGdwzfx7AnQz1dF2Gqy-JPR02Mmhuzu6P1CYHSyCvhxI5l-TXaZ-zIg5mcQtKlnx-t4LlUKkgWEjRzT"/>
            </div>
            <h5 class="font-serif text-xl">{{ $t('mate.plumageTitle') }}</h5>
            <p class="text-sm text-on-surface-variant leading-relaxed">{{ $t('mate.plumageDesc') }}</p>
          </div>
          <div class="space-y-4 mt-12">
            <div class="h-64 bg-surface-container-low rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img alt="Ancient tree hollow" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0VdzSnDgajSW5H4T7GiFgpXBdBNwmhQSIAJoUFtr2WfAGw7vJAqpVNCDMZdJrE_vtQkRnSo8tuLVpkgkaEaXxP3RznYDiOQL9M0BKhinniHqUE1Sy1FqQt7kzIenYmEcB6HtooZrbMRfBneWrsK6gIm54-F7ISEjvKyLHqkj2vqGORr0ZDmcBmUzLi1fyZ8FDPglcCQeR8hRPZAAPbnlkrlP0oCadNaqqk27iJGo9NvPgJcKPU_6bojLLMW_terAYtUxT9TkiiiNf"/>
            </div>
            <h5 class="font-serif text-xl">{{ $t('mate.sanctuaryTitle') }}</h5>
            <p class="text-sm text-on-surface-variant leading-relaxed">{{ $t('mate.sanctuaryDesc') }}</p>
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
  name: 'MateView',
  components: { PhaseLabel, SpecimenHero }
}
</script>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>