<template>
  <div class="font-body text-on-surface antialiased overflow-x-hidden">

    <main class="pb-12 px-6 md:px-12 max-w-7xl mx-auto">
      <!-- Hero Section -->
      <SpecimenHero image-src="/red-kite-nest-eggs.jpg" image-alt="Red Kite nest with eggs in tree canopy">
        <PhaseLabel>{{ $t('hatch.phaseLabel') }}</PhaseLabel>
        <h2 class="font-headline text-5xl md:text-7xl text-primary leading-tight mb-8" v-html="$t('hatch.heroTitle')"></h2>
        <div class="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-md">
          <p>{{ $t('hatch.heroDesc') }}</p>
        </div>
        <template #stat-top>
          <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('hatch.infoBox1.label') }}</p>
          <p class="font-headline text-2xl text-primary">{{ $t('hatch.infoBox1.value') }}</p>
        </template>
        <template #stat-bottom>
          <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('hatch.infoBox2.label') }}</p>
          <p class="font-headline text-2xl text-tertiary">{{ $t('hatch.infoBox2.value') }}</p>
        </template>
      </SpecimenHero>

      <!-- Incubation & Clutch Stats -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <div class="bg-surface-container-low p-8">
          <h4 class="font-label text-xs uppercase tracking-tighter mb-4 opacity-70">{{ $t('hatch.infoBox1.label') }}</h4>
          <p class="font-headline text-4xl text-primary">{{ $t('hatch.infoBox1.value') }}</p>
          <p class="text-xs mt-1 opacity-70 italic">{{ $t('hatch.incubationDesc') }}</p>
        </div>
        <div class="bg-surface-container-low p-8">
          <h4 class="font-label text-xs uppercase tracking-tighter mb-4 opacity-70">{{ $t('hatch.infoBox2.label') }}</h4>
          <p class="font-headline text-4xl text-primary">{{ $t('hatch.infoBox2.value') }}</p>
          <p class="text-xs mt-1 opacity-70 italic">{{ $t('hatch.clutchDesc') }}</p>
        </div>
        <div class="bg-primary text-on-primary p-8">
          <h4 class="font-label text-xs uppercase tracking-tighter mb-4 opacity-70">{{ $t('hatch.nestCoreTempLabel') }}</h4>
          <p class="font-headline text-4xl">{{ $t('hatch.nestCoreTemp') }}</p>
          <p class="text-xs mt-1 font-semibold">{{ $t('hatch.nestCoreTempStatus') }}</p>
          <p class="text-xs mt-1 opacity-70 italic">{{ $t('hatch.nestCoreTempDesc') }}</p>
        </div>
      </section>

      <!-- The First Seven Days -->
      <section class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
        <div class="md:col-span-8 bg-surface-container-low p-10 flex flex-col justify-end min-h-[400px]">
          <h3 class="font-headline text-3xl text-primary mb-6 italic">
            {{ $t('hatch.struggleTitle') }}
          </h3>
          <div class="columns-1 md:columns-2 gap-8 text-on-surface-variant leading-relaxed">
            <p class="mb-4">{{ $t('hatch.struggleP1') }}</p>
            <p>{{ $t('hatch.struggleP2') }}</p>
          </div>
          <!-- Stats row -->
          <div class="flex gap-8 mt-8 pt-6 border-t border-outline-variant/20">
            <div>
              <p class="font-label text-[10px] uppercase text-outline mb-1">{{ $t('hatch.downDensityLabel') }}</p>
              <p class="font-headline text-lg text-primary">{{ $t('hatch.downDensity') }}</p>
            </div>
            <div>
              <p class="font-label text-[10px] uppercase text-outline mb-1">{{ $t('hatch.growthRateLabel') }}</p>
              <p class="font-headline text-lg text-primary">{{ $t('hatch.growthRate') }}</p>
            </div>
            <div>
              <p class="font-label text-[10px] uppercase text-outline mb-1">{{ $t('hatch.firstFlightLabel') }}</p>
              <p class="font-headline text-lg text-primary">{{ $t('hatch.firstFlightEst') }}</p>
            </div>
          </div>
        </div>
        <div class="md:col-span-4 overflow-hidden relative min-h-[300px]">
          <img
            src="/red-kite-hatched-chick.jpg"
            alt="Newly hatched Red Kite chick covered in pale down"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-6">
            <h4 class="font-headline text-xl text-white mb-1">{{ $t('hatch.protoptileDown') }}</h4>
            <p class="text-white/70 text-xs leading-relaxed">{{ $t('hatch.protoptileDownDesc') }}</p>
          </div>
        </div>

        <!-- Row 2: Yolk Sac + Video + Did You Know -->
        <div class="md:col-span-4 bg-secondary-container text-on-secondary-container p-8">
          <h4 class="font-label text-xs uppercase tracking-tighter mb-4 opacity-70">
            {{ $t('hatch.primaryNutrients') }}
          </h4>
          <div class="flex items-end justify-between">
            <div>
              <p class="font-headline text-4xl">{{ $t('hatch.yolkSac') }}</p>
              <p class="text-xs mt-1 opacity-70 italic">{{ $t('hatch.yolkSacDesc') }}</p>
            </div>
            <span class="material-symbols-outlined text-5xl opacity-40">egg_alt</span>
          </div>
        </div>
        <div
          class="md:col-span-4 relative overflow-hidden cursor-pointer group min-h-[200px]"
          @click="showVideo = true"
        >
          <img
            src="/red-kite-nest-eggs.jpg"
            alt=""
            class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
          />
          <div class="relative z-10 p-8 flex flex-col items-start justify-end h-full">
            <div class="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4">
              <span class="material-symbols-outlined text-on-primary text-3xl">play_arrow</span>
            </div>
            <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('hatch.videoLabel') }}</p>
            <h4 class="font-headline text-xl text-primary">{{ $t('hatch.videoTitle') }}</h4>
          </div>
        </div>
        <div class="md:col-span-4 bg-primary text-white p-8 flex flex-col items-start justify-center">
          <span class="material-symbols-outlined text-4xl mb-6">lightbulb</span>
          <h4 class="font-headline text-2xl mb-4">{{ $t('hatch.didYouKnow') }}</h4>
          <p class="text-on-primary-container font-body text-sm leading-relaxed">{{ $t('hatch.didYouKnowBody') }}</p>
        </div>
      </section>

      <!-- Video modal -->
      <div
        v-if="showVideo"
        class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        @click.self="showVideo = false"
      >
        <div class="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
          <button
            @click="showVideo = false"
            class="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black transition-colors"
          >
            <span class="material-symbols-outlined">close</span>
          </button>
          <iframe
            class="w-full h-full"
            title="Red Kite hatching footage"
            src="https://www.youtube.com/embed/fZBAz5CCitk?autoplay=1"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <!-- Final Vision Section -->
      <section class="bg-surface-container-low p-12 text-center max-w-4xl mx-auto rounded-xl border border-outline-variant/10">
        <h2 class="font-headline text-4xl text-primary mb-6">
          {{ $t('hatch.closingTitle') }}
        </h2>
        <p class="text-on-surface-variant text-lg leading-relaxed mb-10 italic">
          {{ $t('hatch.closingQuote') }}
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
  name: 'HatchView',
  components: { PhaseLabel, SpecimenHero },
  data() {
    return { showVideo: false }
  }
}
</script>
