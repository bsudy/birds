<template>
  <div class="font-body text-on-surface selection:bg-primary-fixed-dim selection:text-on-primary-fixed">

    <main class="pb-12 px-6 max-w-7xl mx-auto">
      <!-- Hero Section -->
      <SpecimenHero image-src="/red-kite-courtship.jpg" image-alt="Red Kite courtship display in flight" :flip="true">
        <PhaseLabel>{{ $t('mate.chapterLabel') }}</PhaseLabel>
        <h2 class="font-serif text-5xl md:text-7xl leading-[1.1] text-on-surface mb-8">
          {{ $t('mate.heroTitleLine1') }} <br/><span class="italic text-primary">{{ $t('mate.heroTitleLine2') }}</span>
        </h2>
        <p class="font-body text-lg text-on-surface-variant leading-relaxed max-w-md mb-10">{{ $t('mate.heroDesc') }}</p>
        <template #stat-top>
          <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('mate.infoBox1.label') }}</p>
          <p class="font-headline text-2xl text-primary">{{ $t('mate.infoBox1.value') }}</p>
        </template>
        <template #stat-bottom>
          <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('mate.infoBox2.label') }}</p>
          <p class="font-headline text-2xl text-tertiary">{{ $t('mate.infoBox2.value') }}</p>
        </template>
      </SpecimenHero>

      <!-- Courtship Quote -->
      <div class="max-w-3xl mx-auto mb-24 text-center">
        <p class="font-headline italic text-2xl text-primary leading-relaxed">{{ $t('mate.courtshipQuote') }}</p>
      </div>

      <!-- Aerial Courtship Section -->
      <section class="mb-24">
        <h3 class="font-serif text-3xl mb-8">{{ $t('mate.selectionTitle') }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Sky-Dance -->
          <div class="bg-surface-container-low p-10 rounded-xl relative overflow-hidden">
            <div class="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span class="material-symbols-outlined text-primary">cyclone</span>
            </div>
            <h4 class="font-serif text-2xl mb-4">{{ $t('mate.skyDanceTitle') }}</h4>
            <p class="text-on-surface-variant leading-relaxed">{{ $t('mate.skyDanceDesc') }}</p>
          </div>
          <!-- Talon Locking -->
          <div class="bg-surface-container-low p-10 rounded-xl relative overflow-hidden">
            <div class="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span class="material-symbols-outlined text-primary">handshake</span>
            </div>
            <h4 class="font-serif text-2xl mb-4">{{ $t('mate.talonLockingTitle') }}</h4>
            <p class="text-on-surface-variant leading-relaxed">{{ $t('mate.talonLockingDesc') }}</p>
          </div>
        </div>
      </section>

      <!-- Lifelong Fidelity -->
      <section class="bg-surface-container-low rounded-xl p-10 mb-24">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div class="max-w-xl">
            <h3 class="font-serif text-3xl mb-4">{{ $t('mate.fidelityTitle') }}</h3>
            <p class="text-on-surface-variant leading-relaxed">{{ $t('mate.fidelityDesc') }}</p>
          </div>
          <div class="flex-shrink-0 bg-primary/10 rounded-xl px-8 py-6 text-center">
            <p class="font-label text-xs uppercase tracking-widest text-outline mb-1">{{ $t('mate.bondStrengthLabel') }}</p>
            <p class="font-headline text-3xl text-primary">{{ $t('mate.bondStrength') }}</p>
          </div>
        </div>
      </section>

      <!-- The Curator's Nest -->
      <section class="mb-24">
        <h3 class="font-serif text-3xl mb-4">{{ $t('mate.archiveTitle') }}</h3>
        <p class="text-on-surface-variant mb-12 max-w-xl">{{ $t('mate.archiveDesc') }}</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-surface-container-low p-8 rounded-xl">
            <span class="font-headline text-5xl text-primary/20 block mb-4">{{ $t('mate.foundMaterialsStep') }}</span>
            <h4 class="font-serif text-xl mb-2">{{ $t('mate.foundMaterialsTitle') }}</h4>
            <p class="text-on-surface-variant text-sm leading-relaxed">{{ $t('mate.foundMaterialsDesc') }}</p>
          </div>
          <div class="bg-surface-container-low p-8 rounded-xl">
            <span class="font-headline text-5xl text-primary/20 block mb-4">{{ $t('mate.liningStep') }}</span>
            <h4 class="font-serif text-xl mb-2">{{ $t('mate.liningTitle') }}</h4>
            <p class="text-on-surface-variant text-sm leading-relaxed">{{ $t('mate.liningDesc') }}</p>
          </div>
          <div class="bg-surface-container-low p-8 rounded-xl">
            <span class="font-headline text-5xl text-primary/20 block mb-4">{{ $t('mate.curiosStep') }}</span>
            <h4 class="font-serif text-xl mb-2">{{ $t('mate.curiosTitle') }}</h4>
            <p class="text-on-surface-variant text-sm leading-relaxed">{{ $t('mate.curiosDesc') }}</p>
          </div>
        </div>
      </section>

      <!-- Nest image + plumage -->
      <section class="flex flex-col md:flex-row gap-16 items-start mb-24">
        <div class="md:w-1/2 space-y-4">
          <div class="h-80 bg-surface-container-low rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <img alt="Red Kite nest with found materials" class="w-full h-full object-cover" src="/red-kite-nest-materials.jpg"/>
          </div>
          <h5 class="font-serif text-xl">{{ $t('mate.sanctuaryTitle') }}</h5>
          <p class="text-sm text-on-surface-variant leading-relaxed">{{ $t('mate.sanctuaryDesc') }}</p>
        </div>
        <div class="md:w-1/2 space-y-4 md:mt-12">
          <div class="h-80 bg-surface-container-low rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <img alt="Red Kite showing rufous-red plumage" class="w-full h-full object-cover" src="/red-kite-flight-hero.jpg"/>
          </div>
          <h5 class="font-serif text-xl">{{ $t('mate.plumageTitle') }}</h5>
          <p class="text-sm text-on-surface-variant leading-relaxed">{{ $t('mate.plumageDesc') }}</p>
        </div>
      </section>

      <!-- Kite Call -->
      <div class="bg-surface-container-low rounded-xl p-8 mb-24 flex flex-col sm:flex-row items-start sm:items-center gap-8">
        <div class="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
          <span class="material-symbols-outlined text-primary text-3xl">graphic_eq</span>
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-label text-[10px] text-outline uppercase tracking-widest mb-1">{{ $t('mate.kestrelCallLabel') }}</p>
          <h4 class="font-serif text-xl text-on-surface mb-3"><span class="italic">Milvus milvus</span> {{ $t('mate.flightCallSuffix') }}</h4>
          <p class="text-xs text-on-surface-variant">
            {{ $t('mate.audioRecordingPrefix') }}
            <a href="https://xeno-canto.org/species/Milvus-milvus" target="_blank" rel="noopener" class="text-primary underline underline-offset-2 hover:opacity-70 transition-opacity">xeno-canto.org</a>
            {{ $t('mate.audioRecordingSuffix') }}
          </p>
        </div>
      </div>

      <!-- Closing -->
      <section class="max-w-3xl mx-auto text-center py-12">
        <h4 class="font-headline text-3xl mb-6 italic">{{ $t('mate.closingQuote') }}</h4>
        <div class="h-1 w-24 bg-primary/20 mx-auto rounded-full"></div>
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
