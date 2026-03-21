<template>
  <div class="bg-background text-on-surface min-h-screen selection:bg-primary-fixed">
    <!-- TopAppBar -->
    <header class="fixed top-0 w-full z-50 bg-[#fafaf5]/70 dark:bg-zinc-900/70 backdrop-blur-xl">
      <div class="flex items-center justify-between px-6 py-4 w-full">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-[#375541] dark:text-[#8ba891]" data-icon="nest_cam_pigeon">nest_cam_outdoor</span>
          <h1 class="font-serif font-bold text-xl Newsreader text-[#375541] dark:text-[#8ba891] tracking-tight italic">Common Kestrel: The Living Archive</h1>
        </div>
        <div class="flex gap-4 items-center">
          <div class="hidden md:flex gap-8 items-center font-sans font-medium text-[12px] tracking-widest uppercase text-zinc-500 mr-4">
            <router-link to="/hatch" class="hover:opacity-80 transition-opacity cursor-pointer">Hatch</router-link>
            <router-link to="/nest" class="hover:opacity-80 transition-opacity cursor-pointer">Nest</router-link>
            <router-link to="/hunt" class="hover:opacity-80 transition-opacity cursor-pointer">Hunt</router-link>
            <router-link to="/flight" class="hover:opacity-80 transition-opacity cursor-pointer">Flight</router-link>
            <span class="text-[#375541] dark:text-[#8ba891] font-bold">Mate</span>
          </div>
          <!-- Language Selector Component -->
          <div class="flex items-center bg-surface-container rounded-full px-2 py-1">
            <button
              @click="switchLang('en')"
              :class="currentLang === 'en' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-high'"
              class="px-3 py-1 rounded-full text-[10px] font-bold transition-all"
            >EN</button>
            <button
              @click="switchLang('de')"
              :class="currentLang === 'de' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-high'"
              class="px-3 py-1 rounded-full text-[10px] font-bold transition-all"
            >DE</button>
            <button
              @click="switchLang('hu')"
              :class="currentLang === 'hu' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-high'"
              class="px-3 py-1 rounded-full text-[10px] font-bold transition-all"
            >HU</button>
          </div>
        </div>
      </div>
    </header>
    <main class="pt-24 pb-32 px-6 max-w-7xl mx-auto">
      <!-- Hero Section: Asymmetrical Editorial Layout -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
        <div class="lg:col-span-7 relative">
          <div class="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden shadow-sm relative">
            <img alt="Two kestrels on a high branch" class="w-full h-full object-cover grayscale-[20%] sepia-[10%] opacity-90" data-alt="Two kestrels perched together on a rustic branch" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyR3mTM15DcOg0P-faAuWrTrqhufqUbX_9lqh9smv0Y5X3SQNFirS2qcdRbzySXkLhDgxMLGcylhEqe7HvfU4nwQhe3-KJ9UbrF3OllTfbEsGGd86OGiGcbVVJ1p9zeWxGMEAczbI1-9GCEGZYV7E-1edD7FM-LLfzA693pV8W3oOGwt9DPNSD2f6268qWy8sgHLUUwjzKxiy3mjPfQJgW81xedv_lwj8HqiLLnw3eOOjtwzJ9KqA5yWuC-kW9J0Q0H4xm98LsgQIW"/>
            <!-- Overlapping Specimen Component -->
            <div class="absolute -bottom-6 -right-6 w-48 h-48 bg-surface-container-lowest p-4 shadow-xl rotate-3 border border-outline-variant/20 hidden md:block">
              <img alt="Kestrel eggs in nest" class="w-full h-full object-cover" data-alt="Close up of small spotted bird eggs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJwjUnX6oUEzB9gCAaugasQ8y3i3RVKqke1nIlft3sFpG4UYO8J-7H9om0UKdkX7ZJFtd8-Hzr_8pTahoH31Mwh_m5UvAZQ8fiA6u1J527f1rp2XbN3P-V7Y1Kt5gLymlTHR2hJX3nRz1BM3rmLU7A3Z4N1CWlcbVpflmLk4m1yheHB0JVzX5vq3fG5HSy837ZUQky-J9jQchESc_BqB8VQundgjtolH4dmGHSNZJt01pGBzELwbMCej7Fw--M9fdtMxA-xKwy8BVG"/>
              <p class="mt-2 font-serif italic text-xs text-primary">Plate IV: The Clutch</p>
            </div>
          </div>
        </div>
        <div class="lg:col-span-5 mb-12">
          <span class="font-sans text-[10px] tracking-[0.2em] uppercase text-primary mb-4 block font-bold">The Final Chapter</span>
          <!-- Translated Titles -->
          <h2 class="font-serif text-5xl md:text-7xl leading-[1.1] text-on-surface mb-8">
            Courtship &amp; <br/><span class="italic text-primary">Continuity</span>
            <div class="text-sm mt-4 font-sans font-normal normal-case opacity-60">
              DE: Balz &amp; Kontinuität <br/>
              HU: Udvarlás és folytonosság
            </div>
          </h2>
          <p class="font-body text-lg text-on-surface-variant leading-relaxed max-w-md">
            The journey of the Common Kestrel finds its resolution not in solitude, but in the collaborative dance of survival. As winter fades, the sky becomes a theater for aerial displays—high-speed chases and food offerings that cement the bond between pair.
          </p>
        </div>
      </section>
      <!-- Bento Grid: Lifecycle Details -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <!-- Glassmorphic Card -->
        <div class="md:col-span-2 bg-surface-container-low p-10 rounded-xl relative overflow-hidden flex flex-col justify-end min-h-[400px]">
          <div class="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <span class="material-symbols-outlined text-[200px]" data-icon="favorite">favorite</span>
          </div>
          <!-- Translated: The Selection -->
          <h3 class="font-serif text-3xl mb-1">The Selection</h3>
          <div class="text-xs font-sans text-primary mb-4 uppercase tracking-tighter opacity-70">DE: Die Auswahl &bull; HU: A választás</div>
          <p class="text-on-surface-variant font-body leading-relaxed max-w-xl">
            Unlike many birds of prey, the Kestrel does not build its own nest. Instead, they find sanctuary in the abandoned homes of crows or the hollows of ancient trees. This selection is a critical moment of legacy—a choice of security for the generation yet to hatch.
          </p>
          <div class="mt-8 flex gap-4">
            <button class="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-3 rounded-[0.25rem] font-sans font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all">Record Sighting</button>
            <button class="text-primary border-b border-primary/30 py-3 font-sans font-bold text-xs uppercase tracking-widest">Field Manual</button>
          </div>
        </div>
        <div class="bg-secondary-container p-10 rounded-xl flex flex-col items-center justify-center text-center">
          <div class="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center mb-6 shadow-sm">
            <span class="material-symbols-outlined text-on-secondary-container" data-icon="egg" style="font-variation-settings: 'FILL' 1;">egg</span>
          </div>
          <!-- Translated: 3-6 Eggs -->
          <h4 class="font-serif text-2xl text-on-secondary-container mb-1">3-6 Eggs</h4>
          <div class="text-[10px] font-sans text-on-secondary-container/60 mb-2 uppercase tracking-widest">DE: 3-6 Eier &bull; HU: 3-6 tojás</div>
          <p class="text-on-secondary-container/80 text-sm font-body">The standard clutch size, laid in late April, ensuring the survival of the species.</p>
        </div>
      </div>
      <!-- Asymmetric Content Block -->
      <section class="flex flex-col md:flex-row gap-16 items-start">
        <div class="md:w-1/3">
          <div class="sticky top-32">
            <!-- Translated: A Living Archive -->
            <h3 class="font-serif text-4xl mb-1">A Living Archive</h3>
            <div class="text-xs font-sans text-primary mb-6 uppercase tracking-widest opacity-70">DE: Ein lebendiges Archiv &bull; HU: Egy élő archívum</div>
            <p class="font-body text-on-surface-variant mb-8">
              The Common Kestrel remains a sentinel of our changing landscapes. This archive serves to document their grace, their struggle, and their unwavering resilience.
            </p>
            <div class="p-6 bg-surface-container-high rounded-lg border-l-4 border-primary">
              <p class="italic font-serif text-lg text-primary">"In the presence of the kestrel, one sees the ancient world still breathing in the modern sky."</p>
              <p class="mt-2 font-sans text-[10px] uppercase tracking-wider">— Dr. Elias Thorne, 1924</p>
            </div>
          </div>
        </div>
        <div class="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div class="space-y-4">
            <div class="h-64 bg-surface-container-low rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img alt="Feather detail" class="w-full h-full object-cover" data-alt="Microscopic detail of bird feathers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANbEoErhVK8vY1cuTe_ahuRCZ7eeAtibC5Gb_uXytEb7in2gENskpxKDIpC2YQu7JwotCS2fsdRrFKhoRQ6R7755SX-8oldmTZF6Hi2VKdCGzPcxzuGJ7tKIUnxo7UCL_2X1tehMXA2fLYO7Peme6QkZlwfqlr55BvO2TyR8BrciXBw9JE6Eo_WNYdt7NzreGdwzfx7AnQz1dF2Gqy-JPR02Mmhuzu6P1CYHSyCvhxI5l-TXaZ-zIg5mcQtKlnx-t4LlUKkgWEjRzT"/>
            </div>
            <!-- Translated: The Plumage -->
            <h5 class="font-serif text-xl mb-1">The Plumage</h5>
            <div class="text-[10px] font-sans text-primary uppercase tracking-widest opacity-70">DE: Das Gefieder &bull; HU: A tollazat</div>
            <p class="text-sm text-on-surface-variant leading-relaxed">During courtship, the brightness of the male's plumage serves as a primary signal of health and vitality.</p>
          </div>
          <div class="space-y-4 mt-12">
            <div class="h-64 bg-surface-container-low rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img alt="Ancient tree hollow" class="w-full h-full object-cover" data-alt="Close up of a hollow in an old oak tree" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0VdzSnDgajSW5H4T7GiFgpXBdBNwmhQSIAJoUFtr2WfAGw7vJAqpVNCDMZdJrE_vtQkRnSo8tuLVpkgkaEaXxP3RznYDiOQL9M0BKhinniHqUE1Sy1FqQt7kzIenYmEcB6HtooZrbMRfBneWrsK6gIm54-F7ISEjvKyLHqkj2vqGORr0ZDmcBmUzLi1fyZ8FDPglcCQeR8hRPZAAPbnlkrlP0oCadNaqqk27iJGo9NvPgJcKPU_6bojLLMW_terAYtUxT9TkiiiNf"/>
            </div>
            <!-- Translated: The Sanctuary -->
            <h5 class="font-serif text-xl mb-1">The Sanctuary</h5>
            <div class="text-[10px] font-sans text-primary uppercase tracking-widest opacity-70">DE: Das Heiligtum &bull; HU: A szentély</div>
            <p class="text-sm text-on-surface-variant leading-relaxed">A nest is more than a shelter; it is a point of origin where the cycle begins anew every spring.</p>
          </div>
        </div>
      </section>
    </main>
    <!-- BottomNavBar -->
    <nav class="fixed bottom-0 w-full z-50 pb-safe bg-[#fafaf5]/70 dark:bg-zinc-900/70 backdrop-blur-xl md:hidden">
      <div class="flex justify-around items-center w-full px-4 py-3">
        <router-link to="/hatch" class="flex flex-col items-center justify-center text-[#375541]/60 dark:text-zinc-400 group cursor-pointer">
          <span class="material-symbols-outlined transition-transform duration-300 group-hover:scale-110" data-icon="egg">egg</span>
          <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope mt-1">Hatch</span>
        </router-link>
        <router-link to="/nest" class="flex flex-col items-center justify-center text-[#375541]/60 dark:text-zinc-400 group cursor-pointer">
          <span class="material-symbols-outlined transition-transform duration-300 group-hover:scale-110" data-icon="home_max">home_max</span>
          <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope mt-1">Nest</span>
        </router-link>
        <router-link to="/hunt" class="flex flex-col items-center justify-center text-[#375541]/60 dark:text-zinc-400 group cursor-pointer">
          <span class="material-symbols-outlined transition-transform duration-300 group-hover:scale-110" data-icon="target">target</span>
          <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope mt-1">Hunt</span>
        </router-link>
        <router-link to="/flight" class="flex flex-col items-center justify-center text-[#375541]/60 dark:text-zinc-400 group cursor-pointer">
          <span class="material-symbols-outlined transition-transform duration-300 group-hover:scale-110" data-icon="Wings">flight</span>
          <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope mt-1">Flight</span>
        </router-link>
        <!-- Active State -->
        <router-link to="/mate" class="flex flex-col items-center justify-center bg-[#4f6d58] text-white rounded-full px-4 py-1 scale-110 duration-300 ease-in-out cursor-pointer">
          <span class="material-symbols-outlined" data-icon="favorite" style="font-variation-settings: 'FILL' 1;">favorite</span>
          <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope mt-0.5">Mate</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MateView',
  data() {
    return {
      currentLang: 'en',
      languages: ['en', 'de', 'hu']
    }
  },
  methods: {
    switchLang(lang) {
      this.currentLang = lang
    }
  }
}
</script>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
