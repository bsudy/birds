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
          <div class="md:col-span-2 bg-surface-container-low rounded-xl overflow-hidden flex min-h-[400px] group">
            <div class="flex-1 p-10 flex flex-col justify-center">
              <h3 class="font-headline text-3xl mb-4">{{ $t('hunt.uvVisionTitle') }}</h3>
              <p class="text-on-surface-variant leading-relaxed mb-6">{{ $t('hunt.uvVisionDesc') }}</p>
              <div class="flex gap-4">
                <span class="px-3 py-1 bg-primary/10 text-primary font-label text-xs uppercase tracking-widest rounded-full">{{ $t('hunt.visionTag') }}</span>
                <span class="px-3 py-1 bg-primary/10 text-primary font-label text-xs uppercase tracking-widest rounded-full">{{ $t('hunt.uvTag') }}</span>
              </div>
            </div>
            <div class="w-2/5 flex-shrink-0 overflow-hidden">
              <img
                alt="Common Kestrel portrait"
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src="/kestrel-eye-detail.jpg"
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
          </div>
          <!-- Video tile -->
          <div
            class="md:col-span-3 relative overflow-hidden rounded-xl cursor-pointer group min-h-[160px]"
            @click="showVideo = true"
          >
            <img
              src="/bf-male-kestrel-hunting-flight.jpg"
              alt=""
              class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
            />
            <div class="relative z-10 p-8 flex items-center gap-6 h-full">
              <div class="w-16 h-16 flex-shrink-0 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span class="material-symbols-outlined text-on-primary text-3xl">play_arrow</span>
              </div>
              <div>
                <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('hunt.videoLabel') }}</p>
                <h4 class="font-headline text-2xl text-primary">{{ $t('hunt.videoTitle') }}</h4>
                <p class="text-on-surface-variant text-sm mt-1">{{ $t('hunt.videoDesc') }}</p>
              </div>
            </div>
          </div>
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
            title="The Hunt — Kestrel hunting in the wild"
            src="https://www.youtube.com/embed/Hvq--9Hio1M?autoplay=1"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      </div>

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
  components: { PhaseLabel, SpecimenHero },
  data() {
    return { showVideo: false }
  }
}
</script>
