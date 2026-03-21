<template>
  <div class="font-body text-on-surface selection:bg-primary-fixed-dim selection:text-on-primary-fixed">

    <main class="pb-12 px-6 max-w-7xl mx-auto">
      <!-- Hero Section -->
      <SpecimenHero image-src="/bf-kestrel-in-flight.jpg" image-alt="Kestrel soaring in flight" :flip="true">
        <PhaseLabel>{{ $t('flight.phaseLabel') }}</PhaseLabel>
        <h2 class="font-headline text-5xl md:text-7xl leading-tight text-on-surface mb-8">{{ $t('flight.title') }}</h2>
        <div class="space-y-6 text-lg text-on-surface-variant font-light leading-relaxed mb-10">
          <p>{{ $t('flight.s1Body') }}</p>
          <p class="font-headline italic text-2xl text-tertiary-container py-4 border-l-2 border-primary-container/20 pl-6">"{{ $t('flight.fieldNotesQuote') }}"</p>
        </div>
        <template #stat-top>
          <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('flight.stat4Label') }}</p>
          <p class="font-headline text-2xl text-primary">60 km/h</p>
        </template>
        <template #stat-bottom>
          <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('flight.stat2Label') }}</p>
          <p class="font-headline text-2xl text-tertiary">2.5k m</p>
        </template>
      </SpecimenHero>

      <!-- Bento Grid: Flight Science -->
      <section class="mb-24">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Mastery of the Air Card -->
          <div class="md:col-span-2 bg-surface-container-low rounded-xl p-10 relative overflow-hidden flex flex-col justify-between min-h-[400px]">
            <div class="relative z-10 max-w-md">
              <h3 class="font-headline text-3xl mb-4">{{ $t('flight.s2Title') }}</h3>
              <p class="text-on-surface-variant leading-relaxed mb-6">{{ $t('flight.s2Body') }}</p>
              <button class="bg-primary text-on-primary px-8 py-3 rounded-lg font-label text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-all">
                {{ $t('flight.s2Btn') }}
                <span class="material-symbols-outlined text-sm">north_east</span>
              </button>
            </div>
            <div class="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none flex items-center justify-center">
              <span class="material-symbols-outlined text-[200px]">flight</span>
            </div>
          </div>
          <!-- Field Note Card -->
          <div class="bg-surface-container-highest rounded-xl p-8 flex flex-col">
            <div class="mb-8">
              <span class="material-symbols-outlined text-4xl text-primary">edit_note</span>
            </div>
            <h3 class="font-headline text-2xl mb-4">{{ $t('flight.fieldNotesLabel') }}</h3>
            <p class="text-sm text-on-surface-variant leading-relaxed italic">{{ $t('flight.fieldNotesQuote') }}</p>
          </div>
          <!-- Video tile -->
          <div
            class="md:col-span-3 relative overflow-hidden rounded-xl cursor-pointer group min-h-[160px]"
            @click="showVideo = true"
          >
            <img
              src="/bf-kestrel-in-flight.jpg"
              alt=""
              class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
            />
            <div class="relative z-10 p-8 flex items-center gap-6 h-full">
              <div class="w-16 h-16 flex-shrink-0 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span class="material-symbols-outlined text-on-primary text-3xl">play_arrow</span>
              </div>
              <div>
                <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('flight.videoLabel') }}</p>
                <h4 class="font-headline text-2xl text-primary">{{ $t('flight.videoTitle') }}</h4>
                <p class="text-on-surface-variant text-sm mt-1">{{ $t('flight.videoDesc') }}</p>
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
            title="The Kestrel in Flight — hovering technique in the wild"
            src="https://www.youtube.com/embed/Fl-TzO02k3E?autoplay=1"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <!-- Stats Section -->
      <section class="bg-surface-container-low rounded-xl p-12 mb-24">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-outline-variant/20 pb-8">
          <div>
            <h3 class="font-headline text-4xl">{{ $t('flight.s2Title') }}</h3>
            <p class="text-on-surface-variant mt-2 font-label uppercase tracking-widest text-xs">{{ $t('flight.statsSubtitle') }}</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">0 <span class="text-lg font-body text-on-surface-variant">km/h</span></span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">{{ $t('flight.stat1Label') }}</span>
            <p class="text-sm italic">{{ $t('flight.stat1Desc') }}</p>
          </div>
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">2.5k <span class="text-lg font-body text-on-surface-variant">m</span></span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">{{ $t('flight.stat2Label') }}</span>
            <p class="text-sm italic">{{ $t('flight.stat2Desc') }}</p>
          </div>
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">320°</span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">{{ $t('flight.stat3Label') }}</span>
            <p class="text-sm italic">{{ $t('flight.stat3Desc') }}</p>
          </div>
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">60 <span class="text-lg font-body text-on-surface-variant">km/h</span></span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">{{ $t('flight.stat4Label') }}</span>
            <p class="text-sm italic">{{ $t('flight.stat4Desc') }}</p>
          </div>
        </div>
      </section>

      <!-- The First Journey -->
      <section class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
        <div class="md:col-span-8 bg-surface-container-low p-10 flex flex-col justify-end min-h-[400px]">
          <div class="relative mb-8">
            <img
              alt="Horizon"
              class="w-full h-48 object-cover rounded-lg grayscale opacity-50 contrast-125"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDNuXlVSfEfdDmsrlHD_w1FhqkTd3S1-INypIDgjexHZPp41URAglto9ks17BeGLb3MzcqzNChnvWR-5r2DWnSkHaT8wtM7u10XGzobDPmBxtX5GYggBY2BGQkZW-m5wwSdu7gmrzI_ArjJmVeFmHHQ9j7ruxuLz2YAlcLeiH9cXdsLuLYCTuzaq_15y-8RbjSfjjs8SDrW9kwcjvYHDhpReNW3hjh-rkPP4FY_tswkXi3gfDP6HnhI6-V4pxPgcrrhQSddTzN_eMV"
            />
          </div>
          <h3 class="font-headline text-3xl text-primary mb-6 italic">{{ $t('flight.s3Title') }}</h3>
          <p class="text-on-surface-variant leading-relaxed">{{ $t('flight.s3Body') }}</p>
        </div>
        <div class="md:col-span-4 bg-[#375541] text-white p-10 flex flex-col items-start justify-center">
          <span class="material-symbols-outlined text-4xl mb-6">lightbulb</span>
          <h4 class="font-headline text-2xl mb-4">{{ $t('flight.didYouKnow') }}</h4>
          <p class="text-on-primary-container font-body text-sm leading-relaxed">{{ $t('flight.didYouKnowBody') }}</p>
        </div>
      </section>

      <!-- Closing Quote -->
      <section class="bg-surface-container-low p-12 text-center max-w-4xl mx-auto rounded-xl border border-outline-variant/10">
        <h2 class="font-headline text-4xl text-primary mb-6">"{{ $t('flight.closingQuote') }}"</h2>
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
  name: 'FlightView',
  components: { PhaseLabel, SpecimenHero },
  data() {
    return { showVideo: false }
  }
}
</script>
