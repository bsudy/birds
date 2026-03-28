<template>
  <div class="font-body text-on-surface selection:bg-primary-fixed-dim selection:text-on-primary-fixed">

    <main class="pb-12 px-6 max-w-7xl mx-auto">
      <!-- Hero Section -->
      <SpecimenHero image-src="/red-kite-growth-1.jpg" image-alt="Young Red Kite developing plumage">
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
          <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('growth.infoBox1.label') }}</p>
          <p class="font-headline text-2xl text-primary">{{ $t('growth.infoBox1.value') }}</p>
        </template>
        <template #stat-bottom>
          <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('growth.infoBox2.label') }}</p>
          <p class="font-headline text-2xl text-tertiary">{{ $t('growth.infoBox2.value') }}</p>
        </template>
      </SpecimenHero>

      <!-- Plumage Maturation -->
      <section class="mt-24 mb-24">
        <h3 class="font-headline text-3xl text-primary mb-8 italic">{{ $t('growth.plumageTitle') }}</h3>
        <p class="text-on-surface-variant leading-relaxed max-w-3xl mb-12">{{ $t('growth.plumageDesc') }}</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-surface-container-low p-8 border-l-4 border-primary">
            <p class="font-label text-xs uppercase tracking-widest text-outline mb-2">Day 10</p>
            <p class="font-headline text-lg">{{ $t('growth.plumageDay10') }}</p>
          </div>
          <div class="bg-surface-container-low p-8 border-l-4 border-secondary">
            <p class="font-label text-xs uppercase tracking-widest text-outline mb-2">Day 25</p>
            <p class="font-headline text-lg">{{ $t('growth.plumageDay25') }}</p>
          </div>
          <div class="bg-surface-container-low p-8 border-l-4 border-tertiary">
            <p class="font-label text-xs uppercase tracking-widest text-outline mb-2">Day 45</p>
            <p class="font-headline text-lg">{{ $t('growth.plumageDay45') }}</p>
          </div>
        </div>
      </section>

      <!-- Visual Documentation Bento Grid -->
      <section class="mb-24">
        <h3 class="font-headline text-3xl text-primary mb-12 italic">{{ $t('growth.visualDocumentation') }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          <div class="md:col-span-2 bg-surface-container-high rounded overflow-hidden group">
            <img
              alt="Young Red Kite fledgling"
              class="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              src="/red-kite-growth-1.jpg"
            />
          </div>
          <div class="bg-surface-container-low rounded p-6 flex flex-col justify-end relative overflow-hidden">
            <span class="material-symbols-outlined absolute top-4 right-4 text-primary/20 scale-150">egg_alt</span>
            <span class="text-[10px] font-bold uppercase tracking-widest text-outline mb-1">{{ $t('growth.developmentLabel') }}</span>
            <h5 class="font-headline text-xl">{{ $t('growth.postHatchDay5') }}</h5>
          </div>
          <div class="bg-tertiary-container text-on-tertiary-container rounded p-6 flex flex-col justify-center">
            <p class="font-headline italic text-lg leading-snug">"{{ $t('growth.bentoQuote') }}"</p>
          </div>

          <div class="md:col-span-2 rounded overflow-hidden group">
            <img
              alt="Red Kite fledglings developing plumage"
              class="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              src="/red-kite-growth-2.jpg"
            />
          </div>
          <div class="md:col-span-2 bg-surface-container-lowest rounded p-8 border border-outline-variant/10 flex flex-col justify-center">
            <h5 class="font-bold text-sm uppercase mb-2">{{ $t('growth.dietTitle') }}</h5>
            <p class="text-sm opacity-80">{{ $t('growth.dietBody') }}</p>
          </div>
        </div>
      </section>

      <!-- Diet Composition -->
      <section class="bg-surface-container-low rounded-xl p-12 mb-24">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-outline-variant/20 pb-8">
          <div>
            <h3 class="font-headline text-4xl">{{ $t('growth.dietTitle') }}</h3>
            <p class="text-on-surface-variant mt-2 font-label uppercase tracking-widest text-xs">{{ $t('growth.subtitle') }}</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">{{ $t('growth.dietSmallMammalsValue') }}</span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">{{ $t('growth.dietSmallMammalsLabel') }}</span>
          </div>
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">{{ $t('growth.dietInvertebratesValue') }}</span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">{{ $t('growth.dietInvertebratesLabel') }}</span>
          </div>
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">{{ $t('growth.dietCarrionValue') }}</span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">{{ $t('growth.dietCarrionLabel') }}</span>
          </div>
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">{{ $t('growth.dietSmallBirdsValue') }}</span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">{{ $t('growth.dietSmallBirdsLabel') }}</span>
          </div>
        </div>
      </section>

      <!-- Video: Feeding the Chicks -->
      <section class="mb-24">
        <div
          class="relative overflow-hidden rounded-xl cursor-pointer group min-h-[200px]"
          @click="showVideo = true"
        >
          <img
            src="/red-kite-growth-2.jpg"
            alt=""
            class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
          />
          <div class="relative z-10 p-8 flex items-center gap-6 h-full">
            <div class="w-16 h-16 flex-shrink-0 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span class="material-symbols-outlined text-on-primary text-3xl">play_arrow</span>
            </div>
            <div>
              <p class="font-label text-[10px] text-outline uppercase mb-1">{{ $t('growth.videoLabel') }}</p>
              <h4 class="font-headline text-2xl text-primary">{{ $t('growth.videoTitle') }}</h4>
              <p class="text-on-surface-variant text-sm mt-1">{{ $t('growth.videoDesc') }}</p>
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
            title="Red Kite feeding chicks"
            src="https://www.youtube.com/embed/pZMeUwalq6o?autoplay=1"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <!-- Provisioning Behavior -->
      <section class="mb-24 max-w-4xl">
        <h3 class="font-headline text-3xl text-primary mb-8 italic">{{ $t('growth.provisioningTitle') }}</h3>
        <div class="columns-1 md:columns-2 gap-8 text-on-surface-variant leading-relaxed">
          <p class="mb-4">{{ $t('growth.provisioningP1') }}</p>
          <p>{{ $t('growth.provisioningP2') }}</p>
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
  components: { PhaseLabel, SpecimenHero },
  data() {
    return { showVideo: false }
  }
}
</script>
