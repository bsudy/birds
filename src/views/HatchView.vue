<template>
  <div class="font-body text-on-surface antialiased overflow-x-hidden">

    <main class="pb-12 px-6 md:px-12 max-w-7xl mx-auto">
      <!-- Hero Section: The Specimen -->
      <section class="relative min-h-[618px] flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
        <div class="w-full md:w-1/2 order-2 md:order-1">
          <PhaseLabel>{{ $t('hatch.phaseLabel') }}</PhaseLabel>
          <h2 class="font-headline text-5xl md:text-7xl text-primary leading-tight mb-8" v-html="$t('hatch.heroTitle')"></h2>
          <div class="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-md">
            <p>{{ $t('hatch.heroDesc') }}</p>
          </div>
          <div class="flex items-center gap-4">
            <button class="bg-primary text-on-primary px-8 py-3 rounded shadow-lg flex items-center gap-2 hover:opacity-90 transition-all">
              {{ $t('hatch.observeCycle') }}
              <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </button>
            <button class="text-primary font-bold underline underline-offset-4 decoration-primary_fixed_dim hover:opacity-80">
              {{ $t('hatch.fieldNotes') }}
            </button>
          </div>
        </div>
        <div class="w-full md:w-1/2 order-1 md:order-2 relative flex justify-center items-center">
          <div class="relative w-full aspect-square bg-surface-container-low rounded-full flex items-center justify-center p-12 overflow-visible">
            <div class="absolute inset-0 border-2 border-dashed border-outline-variant/30 rounded-full animate-spin-slow"></div>
            <img alt="Cracked kestrel egg with chick emerging" class="specimen-image w-full h-full object-contain relative z-10 transform -rotate-12 scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFoqVEwtPAwahbWJBnG9rR35dg0iJiJa7CTT34zCRqU_v4s7DuYgl-gr2NXDEgPEs1KEnR81weLuF5aTnivCKHyrYyVDgAxkTl3bWBNI2VMtccMkzNFUuKvPCwNxKK53Aoqknms_KO_mg16gu8Qfj182REDrfn7yVv4Vf-gQl-1L-nyVmBd1yjSZbgiPYn36YkGpqhaENj0-FPZtIgaUP9rcUzdtNtin3IiKbjCfR95D3r_o9wvH45UQPnIIWRDwPuxzVNLL62Ww9e"/>
            <div class="absolute top-0 right-0 bg-surface-container-lowest p-4 shadow-xl rounded-lg z-20 max-w-[150px]">
              <p class="font-label text-[10px] text-outline uppercase mb-1">
                {{ $t('hatch.incubationLabel') }}
              </p>
              <p class="font-headline text-2xl text-primary">
                {{ $t('hatch.incubationValue') }}
              </p>
            </div>
            <div class="absolute bottom-10 -left-10 bg-surface-container-lowest p-4 shadow-xl rounded-lg z-20 max-w-[150px]">
              <p class="font-label text-[10px] text-outline uppercase mb-1">
                {{ $t('hatch.successRateLabel') }}
              </p>
              <p class="font-headline text-2xl text-tertiary">84%</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Detailed Content: Bento Grid Style -->
      <section class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
        <div class="md:col-span-8 bg-surface-container-low p-10 flex flex-col justify-end min-h-[400px]">
          <h3 class="font-headline text-3xl text-primary mb-6 italic">
            {{ $t('hatch.struggleTitle') }}
          </h3>
          <div class="columns-1 md:columns-2 gap-8 text-on-surface-variant leading-relaxed">
            <p class="mb-4">{{ $t('hatch.struggleP1') }}</p>
            <p>{{ $t('hatch.struggleP2') }}</p>
          </div>
        </div>
        <div class="md:col-span-4 bg-[#375541] text-white p-10 flex flex-col items-start justify-center">
          <span class="material-symbols-outlined text-4xl mb-6" data-icon="lightbulb">lightbulb</span>
          <h4 class="font-headline text-2xl mb-4">
            {{ $t('hatch.didYouKnow') }}
          </h4>
          <div class="text-on-primary-container font-body text-sm leading-relaxed">
            <p>{{ $t('hatch.didYouKnowBody') }}</p>
          </div>
        </div>
        <div class="md:col-span-4 bg-secondary-container text-on-secondary-container p-8">
          <h4 class="font-label text-xs uppercase tracking-tighter mb-4 opacity-70">
            {{ $t('hatch.primaryNutrients') }}
          </h4>
          <div class="flex items-end justify-between">
            <div>
              <p class="font-headline text-4xl">
                {{ $t('hatch.yolkSac') }}
              </p>
              <p class="text-xs mt-1 opacity-70 italic">
                {{ $t('hatch.yolkSacDesc') }}
              </p>
            </div>
            <span class="material-symbols-outlined text-5xl opacity-40" data-icon="egg_alt">egg_alt</span>
          </div>
        </div>
        <div class="md:col-span-8 bg-surface-container-high p-8 flex items-center gap-8">
          <div class="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden">
            <img alt="Close up of a chick" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPafqwrPEbz4ChdQ-MuP5ULi5J7fOq_UcRtI7xG5R1oWFgg88Gg9fxsFItjdKv9UPtO4JzW1tklj1ZSbgHVyOMh2ygoqR9YFrpfrmpIIjIbp5zHiGZR-kk4uTPiW6oyw6SzSKI6xS7N3-05cJ0IkaxXayi_L6QkVPu7sv-m3hDUovOwfqmpKYyhEpj4uGGoANvD4wvSh4bSxEND0VqLim8pqmR9YLqQYZ7MRTF85S6mVzowlZLqonTeX4ToXn1jxOh3Eu4Bnm9xoJt"/>
          </div>
          <div>
            <h4 class="font-headline text-2xl text-primary">
              {{ $t('hatch.protoptileDown') }}
            </h4>
            <p class="text-on-surface-variant text-sm mt-1">
              {{ $t('hatch.protoptileDownDesc') }}
            </p>
          </div>
        </div>
      </section>

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
          <span class="material-symbols-outlined text-primary" data-icon="eco">eco</span>
          <div class="w-12 h-1 border-b-2 border-primary"></div>
        </div>
      </section>
    </main>

  </div>
</template>

<script>
import PhaseLabel from '@/components/PhaseLabel.vue'
export default {
  name: 'HatchView',
  components: { PhaseLabel }
}
</script>

<style>
.specimen-image {
  filter: drop-shadow(0 10px 15px rgba(55, 85, 65, 0.1));
}

[data-lang]:not(.active-lang) {
  display: none;
}
</style>
