<template>
  <div class="font-body text-on-surface selection:bg-primary-fixed-dim selection:text-on-primary-fixed">

    <main class="pb-12 px-6 max-w-7xl mx-auto">
      <!-- Breadcrumb / Stage Indicator -->
      <div class="mb-12 flex items-baseline gap-4">
        <span class="text-primary font-headline italic text-4xl">02</span>
        <div class="h-px bg-outline-variant/20 flex-grow"></div>
        <span class="font-label uppercase tracking-[0.2em] text-[10px] text-outline">Phase: Development</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <!-- Left Column: Narrative Content -->
        <div class="lg:col-span-5 flex flex-col justify-center">
          <h2 class="font-headline text-5xl md:text-7xl text-primary leading-tight mb-8">
            {{ $t('growth.titleLine1') }} <br/>
            <span class="italic">{{ $t('growth.titleLine2') }}</span>
            <span class="block text-2xl font-light mt-2 opacity-60">{{ $t('growth.subtitle') }}</span>
          </h2>

          <div class="space-y-6 text-on-surface-variant leading-relaxed text-lg">
            <p>{{ $t('growth.introParagraph') }}</p>
            <p class="font-headline italic text-2xl text-tertiary-container py-4 border-l-2 border-primary-container/20 pl-6">"{{ $t('growth.quote') }}"</p>
            <p>{{ $t('growth.secondParagraph') }}</p>
          </div>

          <div class="mt-12 flex gap-4">
            <button class="bg-primary text-on-primary px-8 py-4 rounded shadow-sm flex items-center gap-2 hover:opacity-90 transition-all active:scale-95">
              <span class="material-symbols-outlined">menu_book</span>
              <span>{{ $t('growth.viewFieldData') }}</span>
            </button>
            <button class="bg-secondary-container text-on-secondary-container px-8 py-4 rounded flex items-center gap-2 hover:opacity-90 transition-all">
              <span class="material-symbols-outlined">volume_up</span>
              <span>{{ $t('growth.calls') }}</span>
            </button>
          </div>
        </div>

        <!-- Right Column: Specimen Illustrations -->
        <div class="lg:col-span-7 relative">
          <div class="bg-surface-container-low p-8 md:p-12 relative overflow-visible">
            <div class="absolute -top-12 -right-8 w-64 h-64 md:w-80 md:h-80 bg-surface-container-highest rounded-full flex items-center justify-center shadow-xl rotate-3">
              <img
                alt="Feeding parental kestrel and chick"
                class="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGWoDM3kU8o1uZTdtlKlodWCS3BrXxvP8vtPr0SV9tWxod70BjyeE49Co5cd2gN6Sx2wKt1uY5Dh9b5aLAJHWqGDQMdFpgGs-y6DjZz_zv7WYmssOl-Bhg9bcJETP_OvKQPDCBtnyN-4G9jyYjuC8mqyBzvA8bzJHhOhFA3s8dnQMZBxm0J_SHCNHeufHdk4CT8FDDHQ96E4z3wnYAY70RPz5clUkNpiDbMIUGCo_VCTvsrk9xJBVWqJQQPkrHfi8E8QQK9hdDpGfe"
              />
            </div>
            <div class="pt-32 md:pt-16 max-w-md">
              <h3 class="font-label uppercase tracking-widest text-xs text-primary mb-4">{{ $t('growth.observationLog') }}</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-end border-b border-outline-variant/20 pb-2">
                  <span class="text-xs font-bold uppercase tracking-tighter">{{ $t('growth.preyFrequency') }}</span>
                  <span class="font-headline italic text-xl">4-6 / hr</span>
                </div>
                <div class="flex justify-between items-end border-b border-outline-variant/20 pb-2">
                  <span class="text-xs font-bold uppercase tracking-tighter">{{ $t('growth.growthRate') }}</span>
                  <span class="font-headline italic text-xl">14.2g / daily</span>
                </div>
                <div class="flex justify-between items-end border-b border-outline-variant/20 pb-2">
                  <span class="text-xs font-bold uppercase tracking-tighter">{{ $t('growth.plumageType') }}</span>
                  <span class="font-headline italic text-xl">Pre-juvenal</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating Detail Card (Asymmetry) -->
          <div class="mt-8 ml-auto max-w-sm bg-surface-container-lowest p-6 shadow-sm relative z-10 -mr-4 border-l-4 border-tertiary">
            <div class="flex items-start gap-4">
              <span class="material-symbols-outlined text-tertiary mt-1">info</span>
              <div>
                <h4 class="font-bold text-sm mb-1 uppercase tracking-tight">
                  {{ $t('growth.detailCardTitle') }}
                </h4>
                <p class="text-sm text-on-surface-variant">{{ $t('growth.detailCardBody') }}</p>
              </div>
            </div>
          </div>

          <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>

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
export default {
  name: 'GrowthView'
}
</script>

<style>
.specimen-overlap {
  margin-top: -4rem;
}
</style>
