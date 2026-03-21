<template>
  <div class="font-body text-on-surface selection:bg-primary-fixed-dim selection:text-on-primary-fixed">
    <!-- TopAppBar -->
    <header class="fixed top-0 w-full z-50 bg-[#fafaf5]/70 dark:bg-zinc-900/70 backdrop-blur-xl flex items-center justify-between px-6 py-4">
      <div class="flex items-center gap-3">
        <span class="material-symbols-outlined text-[#375541] dark:text-[#8ba891]">nest_cam_outdoor</span>
        <h1 class="font-serif font-bold text-xl Newsreader text-[#375541] dark:text-[#8ba891] tracking-tight italic">Common Kestrel: The Living Archive</h1>
      </div>
      <div class="flex items-center gap-4">
        <div class="hidden md:flex gap-8 items-center mr-4">
          <router-link to="/" class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope text-[#375541] dark:text-[#8ba891] hover:opacity-80 transition-opacity">Archive</router-link>
          <router-link to="/" class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope text-zinc-500 hover:opacity-80 transition-opacity">Field Notes</router-link>
          <router-link to="/" class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope text-zinc-500 hover:opacity-80 transition-opacity">Observation Map</router-link>
        </div>
        <!-- Language Selector - Pill Shape -->
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
    </header>

    <main class="pt-24 pb-32 px-6 max-w-7xl mx-auto">
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
            {{ t.titleLine1 }} <br/>
            <span class="italic">{{ t.titleLine2 }}</span>
            <span class="block text-2xl font-light mt-2 opacity-60">{{ t.subtitle }}</span>
          </h2>

          <div class="space-y-6 text-on-surface-variant leading-relaxed text-lg">
            <p>{{ t.introParagraph }}</p>
            <p class="font-headline italic text-2xl text-tertiary-container py-4 border-l-2 border-primary-container/20 pl-6">"{{ t.quote }}"</p>
            <p>{{ t.secondParagraph }}</p>
          </div>

          <div class="mt-12 flex gap-4">
            <button class="bg-primary text-on-primary px-8 py-4 rounded shadow-sm flex items-center gap-2 hover:opacity-90 transition-all active:scale-95">
              <span class="material-symbols-outlined">menu_book</span>
              <span>{{ t.viewFieldData }}</span>
            </button>
            <button class="bg-secondary-container text-on-secondary-container px-8 py-4 rounded flex items-center gap-2 hover:opacity-90 transition-all">
              <span class="material-symbols-outlined">volume_up</span>
              <span>{{ t.calls }}</span>
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
              <h3 class="font-label uppercase tracking-widest text-xs text-primary mb-4">{{ t.observationLog }}</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-end border-b border-outline-variant/20 pb-2">
                  <span class="text-xs font-bold uppercase tracking-tighter">{{ t.preyFrequency }}</span>
                  <span class="font-headline italic text-xl">4-6 / hr</span>
                </div>
                <div class="flex justify-between items-end border-b border-outline-variant/20 pb-2">
                  <span class="text-xs font-bold uppercase tracking-tighter">{{ t.growthRate }}</span>
                  <span class="font-headline italic text-xl">14.2g / daily</span>
                </div>
                <div class="flex justify-between items-end border-b border-outline-variant/20 pb-2">
                  <span class="text-xs font-bold uppercase tracking-tighter">{{ t.plumageType }}</span>
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
                  {{ t.detailCardTitle }}
                </h4>
                <p class="text-sm text-on-surface-variant">{{ t.detailCardBody }}</p>
              </div>
            </div>
          </div>

          <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>

      <!-- Secondary Content Section: Bento Grid Visuals -->
      <section class="mt-32">
        <h3 class="font-headline text-3xl text-primary mb-12 italic">{{ t.visualDocumentation }}</h3>
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
            <p class="font-headline italic text-lg leading-snug">"{{ t.bentoQuote }}"</p>
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
              <h5 class="font-bold text-sm uppercase mb-2">{{ t.dietTitle }}</h5>
              <p class="text-sm opacity-80">{{ t.dietBody }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- BottomNavBar -->
    <nav class="fixed bottom-0 w-full z-50 pb-safe bg-[#fafaf5]/70 dark:bg-zinc-900/70 backdrop-blur-xl flex justify-around items-center px-4 py-3">
      <router-link to="/hatch" class="flex flex-col items-center justify-center text-[#375541]/60 dark:text-zinc-400 hover:text-[#375541] dark:hover:text-white transition-colors cursor-pointer group">
        <span class="material-symbols-outlined scale-110 duration-300 ease-in-out group-hover:scale-125">egg</span>
        <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope mt-1">Hatch</span>
      </router-link>
      <router-link to="/nest" class="flex flex-col items-center justify-center bg-[#4f6d58] text-white rounded-full px-4 py-1 scale-110 duration-300 ease-in-out cursor-pointer">
        <span class="material-symbols-outlined">home_max</span>
        <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope mt-1">Nest</span>
      </router-link>
      <router-link to="/hunt" class="flex flex-col items-center justify-center text-[#375541]/60 dark:text-zinc-400 hover:text-[#375541] dark:hover:text-white transition-colors cursor-pointer group">
        <span class="material-symbols-outlined scale-110 duration-300 ease-in-out group-hover:scale-125">target</span>
        <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope mt-1">Hunt</span>
      </router-link>
      <router-link to="/flight" class="flex flex-col items-center justify-center text-[#375541]/60 dark:text-zinc-400 hover:text-[#375541] dark:hover:text-white transition-colors cursor-pointer group">
        <span class="material-symbols-outlined scale-110 duration-300 ease-in-out group-hover:scale-125">flight</span>
        <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope mt-1">Flight</span>
      </router-link>
      <router-link to="/mate" class="flex flex-col items-center justify-center text-[#375541]/60 dark:text-zinc-400 hover:text-[#375541] dark:hover:text-white transition-colors cursor-pointer group">
        <span class="material-symbols-outlined scale-110 duration-300 ease-in-out group-hover:scale-125">favorite</span>
        <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope mt-1">Mate</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'GrowthView',
  data() {
    return {
      currentLang: 'en',
      translations: {
        titleLine1: {
          en: 'Growth &',
          de: 'Wachstum &',
          hu: 'Növekedés és'
        },
        titleLine2: {
          en: 'Feeding',
          de: 'Fütterung',
          hu: 'Táplálkozás'
        },
        subtitle: {
          en: 'Growth and feeding',
          de: 'Wachstum und Fütterung',
          hu: 'Növekedés és táplálkozás'
        },
        introParagraph: {
          en: 'Following the delicate hatch, the nest becomes a site of frantic energy. The Falco tinnunculus nestlings undergo a metamorphic transformation, their weight increasing nearly tenfold within the first fortnight.',
          de: 'Nach dem zarten Schlupf wird das Nest zu einem Ort hektischer Energie. Die Turmfalkenküken (Falco tinnunculus) durchlaufen eine metamorphische Transformation, wobei sich ihr Gewicht innerhalb der ersten zwei Wochen fast verzehnfacht.',
          hu: 'A kényes kelést követően a fészek a lázas energia helyszínévé válik. A Falco tinnunculus fiókák metamorf átalakuláson mennek keresztül, súlyuk az első két hétben csaknem tízszeresére nő.'
        },
        quote: {
          en: 'The primary parent maintains a constant vigil, shredding high-protein prey into manageable portions for the ever-gaping beaks.',
          de: 'Der Hauptelternteil wacht ständig, zerkleinert proteinreiche Beute in handliche Portionen für die ständig klaffenden Schnäbel.',
          hu: 'Az elsődleges szülő folyamatos virrasztást tart, a fehérjedús zsákmányt kezelhető darabokra aprítva a folyton tátongó csőrök számára.'
        },
        secondParagraph: {
          en: 'As the soft down is replaced by sturdy juvenile plumage, the fledglings begin to exercise their pectoral muscles. They stand at the rim of the nest, peering into the abyss, instinctively sensing the call of the first flight.',
          de: 'Wenn das weiche Daunenkleid durch kräftiges Jugendgefieder ersetzt wird, beginnen die Jungvögel ihre Brustmuskeln zu trainieren. Sie stehen am Rand des Nestes, blicken in den Abgrund und spüren instinktiv den Ruf des ersten Fluges.',
          hu: 'Ahogy a puha pehelytollazatot erős fiatalkori tollazat váltja fel, a fiókák elkezdik edzeni mellizomzatukat. A fészek szélén állnak, a mélybe tekintenek, ösztönösen megérezve az első repülés hívását.'
        },
        viewFieldData: {
          en: 'View Field Data',
          de: 'Felddaten ansehen',
          hu: 'Terepadatok megtekintése'
        },
        calls: {
          en: 'Calls',
          de: 'Rufe',
          hu: 'Hívások'
        },
        observationLog: {
          en: 'Observation Log #772',
          de: 'Beobachtungsprotokoll #772',
          hu: 'Megfigyelési napló #772'
        },
        preyFrequency: {
          en: 'Prey Frequency',
          de: 'Beutefrequenz',
          hu: 'Zsákmány gyakorisága'
        },
        growthRate: {
          en: 'Growth Rate',
          de: 'Wachstumsrate',
          hu: 'Növekedési ütem'
        },
        plumageType: {
          en: 'Plumage Type',
          de: 'Gefiedertyp',
          hu: 'Tollazat típusa'
        },
        detailCardTitle: {
          en: 'The First Wing Beat',
          de: 'Der erste Flügelschlag',
          hu: 'Az első szárnycsapás'
        },
        detailCardBody: {
          en: 'The rapid growth phase is essential for flight muscle density. Lack of feeding during this 20-day window can lead to permanent flight disabilities.',
          de: 'Die schnelle Wachstumsphase ist entscheidend für die Flugmuskeldichte. Fehlende Fütterung während dieses 20-Tage-Fensters kann zu dauerhaften Flugbehinderungen führen.',
          hu: 'A gyors növekedési fázis elengedhetetlen a repülőizomzat sűrűségéhez. Az etetés hiánya ebben a 20 napos időszakban tartós repülési fogyatékosságokhoz vezethet.'
        },
        visualDocumentation: {
          en: 'Visual Documentation',
          de: 'Visuelle Dokumentation',
          hu: 'Vizuális dokumentáció'
        },
        bentoQuote: {
          en: 'The gaze becomes sharp, tracking insects through the air from the safety of the nest.',
          de: 'Der Blick wird scharf und verfolgt Insekten durch die Luft aus der Sicherheit des Nestes.',
          hu: 'A tekintet élessé válik, a fészek biztonságából követi a rovarokat a levegőben.'
        },
        dietTitle: {
          en: 'Primary Diet',
          de: 'Hauptnahrung',
          hu: 'Elsődleges étrend'
        },
        dietBody: {
          en: 'During this phase, field voles and lizards comprise 85% of the caloric intake for the brood.',
          de: 'In dieser Phase machen Feldmäuse und Eidechsen 85% der Kalorienaufnahme der Brut aus.',
          hu: 'Ebben a fázisban a mezei pockok és gyíkok teszik ki a költés kalóriabevételének 85%-át.'
        }
      }
    }
  },
  computed: {
    t() {
      const result = {}
      for (const key in this.translations) {
        result[key] = this.translations[key][this.currentLang]
      }
      return result
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
.specimen-overlap {
  margin-top: -4rem;
}
</style>
