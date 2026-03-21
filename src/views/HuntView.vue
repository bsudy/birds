<template>
  <div class="font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
    <!-- TopAppBar -->
    <header class="fixed top-0 w-full z-50 bg-[#fafaf5]/70 dark:bg-zinc-900/70 backdrop-blur-xl">
      <div class="flex items-center justify-between px-6 py-4 w-full">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-[#375541] dark:text-[#8ba891]">nest_cam_outdoor</span>
          <h1 class="font-serif font-bold text-xl Newsreader text-[#375541] dark:text-[#8ba891] tracking-tight italic">Common Kestrel: The Living Archive</h1>
        </div>
        <div class="flex items-center gap-4 md:gap-8">
          <nav class="hidden md:flex gap-8 items-center">
            <router-link to="/hatch" class="text-[#375541]/60 font-label uppercase tracking-widest text-xs hover:opacity-80 transition-opacity">Hatch</router-link>
            <router-link to="/nest" class="text-[#375541]/60 font-label uppercase tracking-widest text-xs hover:opacity-80 transition-opacity">Nest</router-link>
            <router-link to="/hunt" class="text-[#375541] font-label font-bold uppercase tracking-widest text-xs transition-opacity border-b-2 border-primary">Hunt</router-link>
            <router-link to="/flight" class="text-[#375541]/60 font-label uppercase tracking-widest text-xs hover:opacity-80 transition-opacity">Flight</router-link>
            <router-link to="/mate" class="text-[#375541]/60 font-label uppercase tracking-widest text-xs hover:opacity-80 transition-opacity">Mate</router-link>
          </nav>
          <!-- Language Selector Component -->
          <LanguageSwitcher />
        </div>
      </div>
    </header>

    <main class="pt-24 pb-32 px-6 max-w-7xl mx-auto">
      <!-- Hero Section: The Hunt in Motion -->
      <section class="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-20">
        <div class="md:col-span-7 relative group">
          <div class="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low">
            <img
              alt="Kestrel hovering"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAntprma9npKZpkbOKspRvR9M4JBLWGlDKPWDkeC9FW3J4JhzpyEDini0RW0o7xNd4O2ys2s7zCGE30FmeSLJW_MP87LxPkJ2vlzGF7HA1MxXL8amnk0-U-Vg5Tfd5VTaOy5vBJMnYvzpNQLpEme9KbMWO4oDQTDeMvLC3m1JfVVVdUyVqo9f6Lyoc59i9wkpKfnhy3SLgSzpRZMFqd2qBU85U_2bsFIFkU-W3iyMgEjoHY9qNnRYlR1d1Dgx5HTuKWmioii1T49zA"
            />
          </div>
          <!-- Asymmetric Specimen Overlay -->
          <div class="absolute -bottom-6 -right-6 md:-right-12 bg-surface-container-lowest p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-primary">
            <p class="font-headline italic text-2xl text-primary mb-2">Falco tinnunculus</p>
            <p class="text-sm text-on-surface-variant leading-relaxed">
              A master of the wind, the kestrel remains perfectly still in the air, its head locked on a single point in the grass below.
            </p>
          </div>
        </div>
        <div class="md:col-span-5 md:pl-12 pb-12">
          <span class="text-primary font-label uppercase tracking-[0.3em] text-sm block mb-4">Stage IV</span>
          <h2 class="font-headline text-5xl md:text-7xl leading-tight text-on-surface mb-8">
            Hunting &amp; Survival <br/>
            <span class="text-3xl md:text-4xl text-on-surface-variant font-light opacity-60">Jagd &amp; Überleben (DE)</span><br/>
            <span class="text-3xl md:text-4xl text-on-surface-variant font-light opacity-60">Vadászat és túlélés (HU)</span>
          </h2>
          <div class="space-y-6 text-lg text-on-surface-variant font-light leading-relaxed">
            <p>To survive in the open landscape, the kestrel has evolved a specialized technique known as <span class="text-primary font-semibold italic">windhovering</span>.</p>
            <p>By flapping its wings and fanning its tail against the wind, it creates a stationary platform in mid-air, scanning the terrain for the slightest movement of voles or beetles.</p>
          </div>
        </div>
      </section>

      <!-- Bento Grid: The Scientific Anatomy -->
      <section class="mb-24">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Eye Specimen Card -->
          <div class="md:col-span-2 bg-surface-container-low rounded-xl p-10 relative overflow-hidden flex flex-col justify-between min-h-[400px]">
            <div class="relative z-10 max-w-md">
              <h3 class="font-headline text-3xl mb-4">
                Ultraviolet Vision <br/>
                <span class="text-xl text-on-surface-variant italic">Ultraviolette Sicht / Ultraibolya látás</span>
              </h3>
              <p class="text-on-surface-variant leading-relaxed mb-6">
                The kestrel's eyes are not merely sharp; they can see into the ultraviolet spectrum. This allows them to track the urine trails of voles, which glow under UV light, leading the predator straight to its prey.
              </p>
              <div class="flex gap-4">
                <span class="px-3 py-1 bg-primary/10 text-primary font-label text-xs uppercase tracking-widest rounded-full">Vision x8</span>
                <span class="px-3 py-1 bg-primary/10 text-primary font-label text-xs uppercase tracking-widest rounded-full">UV Tracking</span>
              </div>
            </div>
            <!-- Overlapping Illustration Placeholder -->
            <div class="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
              <img
                alt="Kestrel eye detail"
                class="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9vRkuXoJ78ZJ10Dh0WUEU68jJb6X62F9iTS7B6mmDGlfu4M2Qtp05D5Kogri3NucTyX2jcrSMWPb2JvQNr7pquaHH8c6eqDTpEO_1EolpTHBnEQ86VJBh2JK7qa70sN_3v_epiYb2hYV26uwMcAqE6iU6SSM6bGnPThuSJ1DAe_P_5TorqfW4PRc3TBfLlcKhRv8Qv_uwGCbBX0PtFOqvL-2WNGdbko4qCsRcT2HAgPq74f4-FkUjrn2MIxSZYI_lsak0JLd-6a9O"
              />
            </div>
          </div>
          <!-- The Talons: Precision Instrument -->
          <div class="bg-surface-container-highest rounded-xl p-8 flex flex-col">
            <div class="mb-8">
              <span class="material-symbols-outlined text-4xl text-primary">precision_manufacturing</span>
            </div>
            <h3 class="font-headline text-2xl mb-4">
              Powerful Talons <br/>
              <span class="text-lg text-on-surface-variant italic">Mächtige Krallen / Erős karmok</span>
            </h3>
            <p class="text-sm text-on-surface-variant leading-relaxed">
              Once the target is acquired, the kestrel drops in a controlled 'stoop'. The impact is followed by a swift grasp of its needle-sharp yellow talons, designed for immediate incapacitation.
            </p>
            <div class="mt-auto pt-8">
              <img
                alt="Bird claws"
                class="rounded-lg grayscale mix-blend-multiply opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsR-SiS-7zHSn_5V8wmWE8xWL8Q065IVjssp8iNF9lxNwdeD0bPfOekCTCMFOwrLxSbMG-bQmFca1C169ROt_yBKRadSMDNshnbwl66AU53_yN4GUJJq3QRxrne75-_QUQ1IXPO8l9sx7F6ybz8Zvc8_vihd-jYUuVv1qHvSRz4XxBe20rEqmShgE9C9kRIN0Iv5OE_6MHg8pyQgs47t_jaPX34dSLKZp9XR0s7Jn_belBr0U3-OrDXiAP-mmiVsD71dsX0VgVgh8t"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- The Diet Table: Field Notes -->
      <section class="bg-surface-container-low rounded-xl p-12 mb-24">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-outline-variant/20 pb-8">
          <div>
            <h3 class="font-headline text-4xl">
              The Hunter's Diet <br/>
              <span class="text-2xl text-on-surface-variant font-light">Die Nahrung des Jägers / A vadász étrendje</span>
            </h3>
            <p class="text-on-surface-variant mt-2 font-label uppercase tracking-widest text-xs">Analysis of field samples and pellets</p>
          </div>
          <div class="mt-4 md:mt-0">
            <button class="bg-primary text-on-primary px-8 py-3 font-label text-sm uppercase tracking-widest flex items-center gap-2 rounded-lg hover:shadow-lg transition-all">
              <span>View Data Logs</span>
              <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">75%</span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">Field Voles</span>
            <p class="text-sm italic">The primary energy source for breeding pairs.</p>
          </div>
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">12%</span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">Common Beetles</span>
            <p class="text-sm italic">Crucial during insect swarms in late summer.</p>
          </div>
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">8%</span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">Small Birds</span>
            <p class="text-sm italic">Starlings and sparrows taken on the wing.</p>
          </div>
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">5%</span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">Others</span>
            <p class="text-sm italic">Lizards, earthworms, and occasional frogs.</p>
          </div>
        </div>
      </section>

      <!-- Educational CTA -->
      <section class="max-w-3xl mx-auto text-center py-12">
        <h4 class="font-headline text-3xl mb-6 italic">"A kestrel needs the equivalent of 4-8 voles a day to survive, requiring hours of focused hovering."</h4>
        <div class="h-1 w-24 bg-primary/20 mx-auto rounded-full"></div>
      </section>
    </main>

    <!-- BottomNavBar -->
    <nav class="md:hidden fixed bottom-0 w-full z-50 pb-safe bg-[#fafaf5]/70 dark:bg-zinc-900/70 backdrop-blur-xl">
      <div class="flex justify-around items-center w-full px-4 py-3">
        <router-link to="/hatch" class="flex flex-col items-center justify-center text-[#375541]/60 dark:text-zinc-400">
          <span class="material-symbols-outlined mb-1">egg</span>
          <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope">Hatch</span>
        </router-link>
        <router-link to="/nest" class="flex flex-col items-center justify-center text-[#375541]/60 dark:text-zinc-400">
          <span class="material-symbols-outlined mb-1">home_max</span>
          <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope">Nest</span>
        </router-link>
        <router-link to="/hunt" class="flex flex-col items-center justify-center bg-[#4f6d58] text-white rounded-full px-4 py-1 scale-110 duration-300 ease-in-out">
          <span class="material-symbols-outlined mb-1">target</span>
          <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope">Hunt</span>
        </router-link>
        <router-link to="/flight" class="flex flex-col items-center justify-center text-[#375541]/60 dark:text-zinc-400">
          <span class="material-symbols-outlined mb-1">flight</span>
          <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope">Flight</span>
        </router-link>
        <router-link to="/mate" class="flex flex-col items-center justify-center text-[#375541]/60 dark:text-zinc-400">
          <span class="material-symbols-outlined mb-1">favorite</span>
          <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope">Mate</span>
        </router-link>
      </div>
    </nav>

    <!-- Floating Action Button: Quick Observe -->
    <div class="fixed bottom-24 right-6 md:bottom-12 md:right-12 z-40 hidden md:block">
      <button class="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_20px_40px_rgba(26,28,25,0.06)] hover:scale-105 transition-transform">
        <span class="material-symbols-outlined text-3xl">visibility</span>
      </button>
    </div>
  </div>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { languageStore } from '@/stores/language'

export default {
  name: 'HuntView',
  components: { LanguageSwitcher },
  computed: {
    currentLang() {
      return languageStore.currentLang
    }
  }
}
</script>

<style>
.perspective-card {
  perspective: 1000px;
}

.bg-glass {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
</style>
