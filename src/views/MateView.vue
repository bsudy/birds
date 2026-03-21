<template>
  <div class="bg-background text-on-surface min-h-screen selection:bg-primary-fixed">
    <!-- TopAppBar -->
    <header class="fixed top-0 w-full z-50 bg-[#fafaf5]/70 dark:bg-zinc-900/70 backdrop-blur-xl">
      <div class="flex items-center justify-between px-6 py-4 w-full">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-[#375541] dark:text-[#8ba891]">nest_cam_outdoor</span>
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
          <LanguageSwitcher />
        </div>
      </div>
    </header>
    <main class="pt-24 pb-32 px-6 max-w-7xl mx-auto">
      <!-- Hero Section -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
        <div class="lg:col-span-7 relative">
          <div class="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden shadow-sm relative">
            <img alt="Two kestrels on a high branch" class="w-full h-full object-cover grayscale-[20%] sepia-[10%] opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyR3mTM15DcOg0P-faAuWrTrqhufqUbX_9lqh9smv0Y5X3SQNFirS2qcdRbzySXkLhDgxMLGcylhEqe7HvfU4nwQhe3-KJ9UbrF3OllTfbEsGGd86OGiGcbVVJ1p9zeWxGMEAczbI1-9GCEGZYV7E-1edD7FM-LLfzA693pV8W3oOGwt9DPNSD2f6268qWy8sgHLUUwjzKxiy3mjPfQJgW81xedv_lwj8HqiLLnw3eOOjtwzJ9KqA5yWuC-kW9J0Q0H4xm98LsgQIW"/>
            <!-- Overlapping Specimen Component -->
            <div class="absolute -bottom-6 -right-6 w-48 h-48 bg-surface-container-lowest p-4 shadow-xl rotate-3 border border-outline-variant/20 hidden md:block">
              <img alt="Kestrel eggs in nest" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJwjUnX6oUEzB9gCAaugasQ8y3i3RVKqke1nIlft3sFpG4UYO8J-7H9om0UKdkX7ZJFtd8-Hzr_8pTahoH31Mwh_m5UvAZQ8fiA6u1J527f1rp2XbN3P-V7Y1Kt5gLymlTHR2hJX3nRz1BM3rmLU7A3Z4N1CWlcbVpflmLk4m1yheHB0JVzX5vq3fG5HSy837ZUQky-J9jQchESc_BqB8VQundgjtolH4dmGHSNZJt01pGBzELwbMCej7Fw--M9fdtMxA-xKwy8BVG"/>
              <p class="mt-2 font-serif italic text-xs text-primary">{{ t.plateCaption }}</p>
            </div>
          </div>
        </div>
        <div class="lg:col-span-5 mb-12">
          <span class="font-sans text-[10px] tracking-[0.2em] uppercase text-primary mb-4 block font-bold">{{ t.chapterLabel }}</span>
          <h2 class="font-serif text-5xl md:text-7xl leading-[1.1] text-on-surface mb-8">
            {{ t.heroTitleLine1 }} <br/><span class="italic text-primary">{{ t.heroTitleLine2 }}</span>
          </h2>
          <p class="font-body text-lg text-on-surface-variant leading-relaxed max-w-md">{{ t.heroDesc }}</p>
        </div>
      </section>

      <!-- Bento Grid: Lifecycle Details -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <!-- The Selection Card -->
        <div class="md:col-span-2 bg-surface-container-low p-10 rounded-xl relative overflow-hidden flex flex-col justify-end min-h-[400px]">
          <div class="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <span class="material-symbols-outlined text-[200px]">favorite</span>
          </div>
          <h3 class="font-serif text-3xl mb-4">{{ t.selectionTitle }}</h3>
          <p class="text-on-surface-variant font-body leading-relaxed max-w-xl">{{ t.selectionDesc }}</p>
          <div class="mt-8 flex gap-4">
            <button class="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-3 rounded-[0.25rem] font-sans font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all">{{ t.recordSighting }}</button>
            <button class="text-primary border-b border-primary/30 py-3 font-sans font-bold text-xs uppercase tracking-widest">{{ t.fieldManual }}</button>
          </div>
        </div>
        <!-- Eggs Card -->
        <div class="bg-secondary-container p-10 rounded-xl flex flex-col items-center justify-center text-center">
          <div class="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center mb-6 shadow-sm">
            <span class="material-symbols-outlined text-on-secondary-container" style="font-variation-settings: 'FILL' 1;">egg</span>
          </div>
          <h4 class="font-serif text-2xl text-on-secondary-container mb-1">{{ t.eggsTitle }}</h4>
          <p class="text-on-secondary-container/80 text-sm font-body">{{ t.eggsDesc }}</p>
        </div>
      </div>

      <!-- Asymmetric Content Block -->
      <section class="flex flex-col md:flex-row gap-16 items-start">
        <div class="md:w-1/3">
          <div class="sticky top-32">
            <h3 class="font-serif text-4xl mb-4">{{ t.archiveTitle }}</h3>
            <p class="font-body text-on-surface-variant mb-8">{{ t.archiveDesc }}</p>
            <div class="p-6 bg-surface-container-high rounded-lg border-l-4 border-primary">
              <p class="italic font-serif text-lg text-primary">"{{ t.quote }}"</p>
              <p class="mt-2 font-sans text-[10px] uppercase tracking-wider">— Dr. Elias Thorne, 1924</p>
            </div>
          </div>
        </div>
        <div class="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div class="space-y-4">
            <div class="h-64 bg-surface-container-low rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img alt="Feather detail" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANbEoErhVK8vY1cuTe_ahuRCZ7eeAtibC5Gb_uXytEb7in2gENskpxKDIpC2YQu7JwotCS2fsdRrFKhoRQ6R7755SX-8oldmTZF6Hi2VKdCGzPcxzuGJ7tKIUnxo7UCL_2X1tehMXA2fLYO7Peme6QkZlwfqlr55BvO2TyR8BrciXBw9JE6Eo_WNYdt7NzreGdwzfx7AnQz1dF2Gqy-JPR02Mmhuzu6P1CYHSyCvhxI5l-TXaZ-zIg5mcQtKlnx-t4LlUKkgWEjRzT"/>
            </div>
            <h5 class="font-serif text-xl">{{ t.plumageTitle }}</h5>
            <p class="text-sm text-on-surface-variant leading-relaxed">{{ t.plumageDesc }}</p>
          </div>
          <div class="space-y-4 mt-12">
            <div class="h-64 bg-surface-container-low rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img alt="Ancient tree hollow" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0VdzSnDgajSW5H4T7GiFgpXBdBNwmhQSIAJoUFtr2WfAGw7vJAqpVNCDMZdJrE_vtQkRnSo8tuLVpkgkaEaXxP3RznYDiOQL9M0BKhinniHqUE1Sy1FqQt7kzIenYmEcB6HtooZrbMRfBneWrsK6gIm54-F7ISEjvKyLHqkj2vqGORr0ZDmcBmUzLi1fyZ8FDPglcCQeR8hRPZAAPbnlkrlP0oCadNaqqk27iJGo9NvPgJcKPU_6bojLLMW_terAYtUxT9TkiiiNf"/>
            </div>
            <h5 class="font-serif text-xl">{{ t.sanctuaryTitle }}</h5>
            <p class="text-sm text-on-surface-variant leading-relaxed">{{ t.sanctuaryDesc }}</p>
          </div>
        </div>
      </section>
    </main>

  </div>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { languageStore } from '@/stores/language'

export default {
  name: 'MateView',
  components: { LanguageSwitcher },
  computed: {
    currentLang() {
      return languageStore.currentLang
    },
    t() {
      return this.translations[this.currentLang]
    }
  },
  data() {
    return {
      translations: {
        en: {
          chapterLabel: 'The Final Chapter',
          heroTitleLine1: 'Courtship &',
          heroTitleLine2: 'Continuity',
          heroDesc: 'The journey of the Common Kestrel finds its resolution not in solitude, but in the collaborative dance of survival. As winter fades, the sky becomes a theater for aerial displays—high-speed chases and food offerings that cement the bond between pair.',
          plateCaption: 'Plate IV: The Clutch',
          selectionTitle: 'The Selection',
          selectionDesc: 'Unlike many birds of prey, the Kestrel does not build its own nest. Instead, they find sanctuary in the abandoned homes of crows or the hollows of ancient trees. This selection is a critical moment of legacy—a choice of security for the generation yet to hatch.',
          recordSighting: 'Record Sighting',
          fieldManual: 'Field Manual',
          eggsTitle: '3-6 Eggs',
          eggsDesc: 'The standard clutch size, laid in late April, ensuring the survival of the species.',
          archiveTitle: 'A Living Archive',
          archiveDesc: 'The Common Kestrel remains a sentinel of our changing landscapes. This archive serves to document their grace, their struggle, and their unwavering resilience.',
          quote: 'In the presence of the kestrel, one sees the ancient world still breathing in the modern sky.',
          plumageTitle: 'The Plumage',
          plumageDesc: "During courtship, the brightness of the male's plumage serves as a primary signal of health and vitality.",
          sanctuaryTitle: 'The Sanctuary',
          sanctuaryDesc: 'A nest is more than a shelter; it is a point of origin where the cycle begins anew every spring.'
        },
        de: {
          chapterLabel: 'Das letzte Kapitel',
          heroTitleLine1: 'Balz &',
          heroTitleLine2: 'Kontinuität',
          heroDesc: 'Die Reise des Turmfalken findet ihre Auflösung nicht in der Einsamkeit, sondern im gemeinsamen Tanz des Überlebens. Wenn der Winter verblasst, wird der Himmel zum Theater für Flugvorführungen – Hochgeschwindigkeitsjagden und Futterangebote, die die Bindung zwischen dem Paar festigen.',
          plateCaption: 'Tafel IV: Das Gelege',
          selectionTitle: 'Die Auswahl',
          selectionDesc: 'Im Gegensatz zu vielen Greifvögeln baut der Turmfalke kein eigenes Nest. Stattdessen findet er Zuflucht in den verlassenen Nestern von Krähen oder den Höhlen alter Bäume. Diese Auswahl ist ein entscheidender Moment des Vermächtnisses – eine Wahl der Sicherheit für die noch ungeschlüpfte Generation.',
          recordSighting: 'Sichtung melden',
          fieldManual: 'Feldhandbuch',
          eggsTitle: '3-6 Eier',
          eggsDesc: 'Die übliche Gelegegröße, gelegt Ende April, um das Überleben der Art zu sichern.',
          archiveTitle: 'Ein lebendiges Archiv',
          archiveDesc: 'Der Turmfalke bleibt ein Wächter unserer sich verändernden Landschaften. Dieses Archiv dient dazu, ihre Anmut, ihren Kampf und ihre unerschütterliche Widerstandsfähigkeit zu dokumentieren.',
          quote: 'In der Gegenwart des Turmfalken sieht man die alte Welt noch im modernen Himmel atmen.',
          plumageTitle: 'Das Gefieder',
          plumageDesc: 'Während der Balz dient die Helligkeit des männlichen Gefieders als primäres Signal für Gesundheit und Vitalität.',
          sanctuaryTitle: 'Das Heiligtum',
          sanctuaryDesc: 'Ein Nest ist mehr als ein Unterschlupf; es ist ein Ursprungsort, an dem der Kreislauf jeden Frühling von neuem beginnt.'
        },
        hu: {
          chapterLabel: 'Az utolsó fejezet',
          heroTitleLine1: 'Udvarlás és',
          heroTitleLine2: 'folytonosság',
          heroDesc: 'A vércse útja nem a magányban, hanem a túlélés közös táncában leli megoldását. Ahogy a tél elhalványul, az égbolt a légi bemutatók színházává válik – nagysebességű üldözések és táplálékajándékok, amelyek megszilárdítják a pár közötti köteléket.',
          plateCaption: 'IV. tábla: A fészekalja',
          selectionTitle: 'A választás',
          selectionDesc: 'Sok ragadozó madártól eltérően a vércse nem épít saját fészket. Ehelyett a varjak elhagyott otthonaiban vagy öreg fák odvaiban talál menedéket. Ez a választás az örökség kritikus pillanata – a biztonság választása a még ki nem kelt nemzedék számára.',
          recordSighting: 'Észlelés rögzítése',
          fieldManual: 'Terepi kézikönyv',
          eggsTitle: '3-6 tojás',
          eggsDesc: 'A szokásos fészekalj méret, amelyet április végén raknak le, biztosítva a faj fennmaradását.',
          archiveTitle: 'Egy élő archívum',
          archiveDesc: 'A vércse változó tájaink őrszeme marad. Ez az archívum kecsességük, küzdelmük és rendíthetetlen rugalmasságuk dokumentálására szolgál.',
          quote: 'A vércse jelenlétében az ember látja, hogy az ősi világ még mindig lélegzik a modern égbolton.',
          plumageTitle: 'A tollazat',
          plumageDesc: 'Az udvarlás során a hím tollazatának fényessége az egészség és életerő elsődleges jelzéseként szolgál.',
          sanctuaryTitle: 'A szentély',
          sanctuaryDesc: 'A fészek több, mint menedék; ez az a kiindulópont, ahol a körforgás minden tavasszal újrakezdődik.'
        }
      }
    }
  }
}
</script>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>