<template>
  <div class="bg-background text-on-surface min-h-screen selection:bg-primary-fixed">

    <main class="pb-12 px-6 max-w-7xl mx-auto">
      <!-- Hero Section -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
        <div class="lg:col-span-7 relative">
          <div class="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden shadow-sm relative">
            <img alt="Two kestrels on a high branch" class="w-full h-full object-cover grayscale-[20%] sepia-[10%] opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyR3mTM15DcOg0P-faAuWrTrqhufqUbX_9lqh9smv0Y5X3SQNFirS2qcdRbzySXkLhDgxMLGcylhEqe7HvfU4nwQhe3-KJ9UbrF3OllTfbEsGGd86OGiGcbVVJ1p9zeWxGMEAczbI1-9GCEGZYV7E-1edD7FM-LLfzA693pV8W3oOGwt9DPNSD2f6268qWy8sgHLUUwjzKxiy3mjPfQJgW81xedv_lwj8HqiLLnw3eOOjtwzJ9KqA5yWuC-kW9J0Q0H4xm98LsgQIW"/>
            <!-- Overlapping Specimen Component -->
            <div class="absolute -bottom-6 -right-6 w-48 h-48 bg-surface-container-lowest p-4 shadow-xl rotate-3 border border-outline-variant/20 hidden md:block">
              <img alt="Kestrel eggs in nest" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJwjUnX6oUEzB9gCAaugasQ8y3i3RVKqke1nIlft3sFpG4UYO8J-7H9om0UKdkX7ZJFtd8-Hzr_8pTahoH31Mwh_m5UvAZQ8fiA6u1J527f1rp2XbN3P-V7Y1Kt5gLymlTHR2hJX3nRz1BM3rmLU7A3Z4N1CWlcbVpflmLk4m1yheHB0JVzX5vq3fG5HSy837ZUQky-J9jQchESc_BqB8VQundgjtolH4dmGHSNZJt01pGBzELwbMCej7Fw--M9fdtMxA-xKwy8BVG"/>
              <p class="mt-2 font-serif italic text-xs text-primary">{{ $t('mate.plateCaption') }}</p>
            </div>
          </div>
        </div>
        <div class="lg:col-span-5 mb-12">
          <span class="font-sans text-[10px] tracking-[0.2em] uppercase text-primary mb-4 block font-bold">{{ $t('mate.chapterLabel') }}</span>
          <h2 class="font-serif text-5xl md:text-7xl leading-[1.1] text-on-surface mb-8">
            {{ $t('mate.heroTitleLine1') }} <br/><span class="italic text-primary">{{ $t('mate.heroTitleLine2') }}</span>
          </h2>
          <p class="font-body text-lg text-on-surface-variant leading-relaxed max-w-md">{{ $t('mate.heroDesc') }}</p>
        </div>
      </section>

      <!-- Bento Grid: Lifecycle Details -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <!-- The Selection Card -->
        <div class="md:col-span-2 bg-surface-container-low p-10 rounded-xl relative overflow-hidden flex flex-col justify-end min-h-[400px]">
          <div class="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <span class="material-symbols-outlined text-[200px]">favorite</span>
          </div>
          <h3 class="font-serif text-3xl mb-4">{{ $t('mate.selectionTitle') }}</h3>
          <p class="text-on-surface-variant font-body leading-relaxed max-w-xl">{{ $t('mate.selectionDesc') }}</p>
          <div class="mt-8 flex gap-4">
            <button class="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-3 rounded-[0.25rem] font-sans font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all">{{ $t('mate.recordSighting') }}</button>
            <button class="text-primary border-b border-primary/30 py-3 font-sans font-bold text-xs uppercase tracking-widest">{{ $t('mate.fieldManual') }}</button>
          </div>
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
export default {
  name: 'MateView'
}
</script>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>