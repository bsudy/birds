<template>
  <div class="bg-background text-on-background selection:bg-primary-fixed-dim selection:text-on-primary-fixed">
    <!-- TopAppBar -->
    <header class="fixed top-0 w-full z-50 bg-[#fafaf5]/70 dark:bg-stone-900/70 backdrop-blur-xl">
      <div class="flex justify-between items-center px-6 py-4 w-full">
        <div class="flex items-center gap-2 text-[#375541] dark:text-[#4f6d58]">
          <span class="material-symbols-outlined" data-icon="language">language</span>
        </div>
        <h1 class="font-serif italic text-2xl tracking-tight text-[#375541] dark:text-[#4f6d58]">{{ t.title }}</h1>
        <div class="flex items-center">
          <LanguageSwitcher />
        </div>
      </div>
    </header>

    <main class="pt-24 pb-32 px-6 max-w-md mx-auto overflow-x-hidden">
      <!-- Hero Section -->
      <section class="relative mb-12">
        <div class="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low shadow-sm relative group">
          <img
            alt="Kestrel taking flight"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArJqhHB6WMzUzTpvSLeRtUHh9rOagN65nxNhgEyf2kLGmY2UQa6gNaF3T5FcZU0_5uSk8az2Ji4X5xZu5OkWO4JqJZ_TV8pVq5_h_FFj3OxIdQBYWxyI2DdZv6xE5RFZSAh3RUDwm1yHGV0xDOoSAl59w4tO9lYxbQRrW-8fR81u1x76QWmsO_ORF9V35-S029t26Y4Q90YEbTNTxWlAAvZbB01mDSdxAFPhASbM9dp79XwKsvDCAMSHVwT815MlzNQY5SGg_VuH-4"
          />
          <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#1a1c19]/60 to-transparent">
            <p class="text-white/80 font-label text-[10px] tracking-[0.2em] uppercase mb-1">{{ t.obsLabel }}</p>
            <h2 class="font-headline text-3xl text-white italic">Falco tinnunculus</h2>
          </div>
        </div>
        <!-- Asymmetrical Floating Note -->
        <div class="absolute -bottom-6 -right-2 bg-surface-container-lowest p-4 shadow-[0_20px_40px_rgba(26,28,25,0.06)] rounded-lg max-w-[180px] z-10">
          <p class="font-label text-[9px] uppercase tracking-tighter text-tertiary mb-1">{{ t.statusLabel }}</p>
          <p class="font-body text-xs font-bold text-on-surface">{{ t.statusText }}</p>
        </div>
      </section>

      <!-- Section 1: The Threshold -->
      <section class="mb-16">
        <div class="flex items-baseline gap-4 mb-4">
          <span class="font-headline italic text-4xl text-primary-container opacity-30">01</span>
          <h3 class="font-headline text-2xl text-on-surface leading-tight">{{ t.s1Title }}</h3>
        </div>
        <div class="pl-12">
          <p class="font-body text-on-surface-variant leading-relaxed mb-6">{{ t.s1Body }}</p>
          <!-- Field Note Card -->
          <div class="bg-surface-container-low p-5 rounded-xl">
            <div class="flex items-center gap-3 mb-3">
              <span class="material-symbols-outlined text-primary" data-icon="edit_note">edit_note</span>
              <span class="font-label text-[10px] uppercase tracking-widest font-bold text-primary">{{ t.fieldNotesLabel }}</span>
            </div>
            <p class="font-body text-sm italic text-secondary">{{ t.fieldNotesQuote }}</p>
          </div>
        </div>
      </section>

      <!-- Section 2: Mastery of the Air -->
      <section class="mb-16">
        <div class="flex items-baseline gap-4 mb-6">
          <span class="font-headline italic text-4xl text-primary-container opacity-30">02</span>
          <h3 class="font-headline text-2xl text-on-surface leading-tight">{{ t.s2Title }}</h3>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-2 bg-surface-container-lowest p-6 rounded-xl shadow-sm">
            <p class="font-body text-on-surface-variant text-sm mb-4">{{ t.s2Body }}</p>
            <button class="bg-gradient-to-br from-[#375541] to-[#4f6d58] text-white px-6 py-3 rounded-full font-label text-xs font-bold tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all w-full">
              {{ t.s2Btn }}
              <span class="material-symbols-outlined text-sm" data-icon="north_east">north_east</span>
            </button>
          </div>
          <div class="bg-surface-container-low p-4 rounded-xl">
            <p class="font-label text-[9px] uppercase tracking-widest text-tertiary mb-1">{{ t.stat1Label }}</p>
            <p class="font-headline text-2xl text-primary">0 <span class="text-xs font-body text-on-surface-variant">km/h</span></p>
            <p class="font-body text-[10px] text-on-surface-variant mt-2 leading-tight">{{ t.stat1Desc }}</p>
          </div>
          <div class="bg-surface-container-low p-4 rounded-xl">
            <p class="font-label text-[9px] uppercase tracking-widest text-tertiary mb-1">{{ t.stat2Label }}</p>
            <p class="font-headline text-2xl text-primary">2.5k <span class="text-xs font-body text-on-surface-variant">m</span></p>
            <p class="font-body text-[10px] text-on-surface-variant mt-2 leading-tight">{{ t.stat2Desc }}</p>
          </div>
        </div>
      </section>

      <!-- Section 3: The First Journey -->
      <section class="mb-12">
        <div class="flex items-baseline gap-4 mb-4">
          <span class="font-headline italic text-4xl text-primary-container opacity-30">03</span>
          <h3 class="font-headline text-2xl text-on-surface leading-tight">{{ t.s3Title }}</h3>
        </div>
        <div class="pl-12">
          <div class="relative mb-6">
            <img
              alt="Horizon"
              class="w-full h-32 object-cover rounded-lg grayscale opacity-50 contrast-125"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDNuXlVSfEfdDmsrlHD_w1FhqkTd3S1-INypIDgjexHZPp41URAglto9ks17BeGLb3MzcqzNChnvWR-5r2DWnSkHaT8wtM7u10XGzobDPmBxtX5GYggBY2BGQkZW-m5wwSdu7gmrzI_ArjJmVeFmHHQ9j7ruxuLz2YAlcLeiH9cXdsLuLYCTuzaq_15y-8RbjSfjjs8SDrW9kwcjvYHDhpReNW3hjh-rkPP4FY_tswkXi3gfDP6HnhI6-V4pxPgcrrhQSddTzN_eMV"
            />
          </div>
          <p class="font-body text-on-surface-variant leading-relaxed">{{ t.s3Body }}</p>
          <div class="mt-8">
            <a class="font-label text-xs font-bold text-primary underline underline-offset-4 decoration-primary/30 flex items-center gap-2" href="#">
              {{ t.s3Link }}
              <span class="material-symbols-outlined text-xs" data-icon="arrow_forward">arrow_forward</span>
            </a>
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
  name: 'FlightView',
  components: { LanguageSwitcher },
  data() {
    return {
      translations: {
        en: {
          title: 'Taking Flight',
          obsLabel: 'Observation #042',
          statusLabel: 'Status',
          statusText: 'First Flight Sequence Initiated',
          s1Title: 'The Threshold of the Sky',
          s1Body: "A fledgling stands at the nest\u2019s precipice, the world unfolding beneath its talons in a dizzying map of green and gold. This is the moment of instinctual tension, where the safety of the hollow meets the ancestral pull of the wind.",
          fieldNotesLabel: 'Field Notes',
          fieldNotesQuote: '\u201CThe bird does not use its wings because it is sure of the air, but because it is sure of its own strength.\u201D',
          s2Title: 'Mastery of the Air',
          s2Body: "The kestrel is a master of the \u2018hover,\u2019 a feat of aerodynamic precision that requires constant micro-adjustments of wing and tail.",
          s2Btn: 'EXPLORE FLIGHT',
          stat1Label: 'Hover Speed',
          stat1Desc: 'Static position relative to ground.',
          stat2Label: 'Max Altitude',
          stat2Desc: 'Typical soaring height during migration.',
          s3Title: 'The First Journey',
          s3Body: "By late summer, the natal territory becomes too small. Guided by celestial cues and the changing thermal currents, the young kestrel begins its first true migration\u2014a journey of thousands of miles across diverse biomes.",
          s3Link: 'READ ARCHIVE LOGS'
        },
        de: {
          title: 'Abflug',
          obsLabel: 'Beobachtung #042',
          statusLabel: 'Status',
          statusText: 'Erstflugsequenz eingeleitet',
          s1Title: 'Die Schwelle zum Himmel',
          s1Body: 'Ein Jungvogel steht am Abgrund des Nestes, die Welt entfaltet sich unter seinen Krallen in einer schwindelerregenden Karte aus Gr\u00FCn und Gold. Dies ist der Moment instinktiver Spannung, in dem die Sicherheit der H\u00F6hle auf den uralten Sog des Windes trifft.',
          fieldNotesLabel: 'Feldnotizen',
          fieldNotesQuote: '\u201EDer Vogel nutzt seine Fl\u00FCgel nicht, weil er sich der Luft sicher ist, sondern weil er sich seiner eigenen Kraft sicher ist.\u201C',
          s2Title: 'Meisterschaft der L\u00FCfte',
          s2Body: "Der Turmfalke ist ein Meister des \u201AR\u00FCttelns\u2018, einer aerodynamischen H\u00F6chstleistung, die st\u00E4ndige Mikro-Anpassungen von Fl\u00FCgeln und Schwanz erfordert.",
          s2Btn: 'FLUG ERKUNDEN',
          stat1Label: 'R\u00FCttel-Tempo',
          stat1Desc: 'Statische Position relativ zum Boden.',
          stat2Label: 'Max. H\u00F6he',
          stat2Desc: 'Typische Segelh\u00F6he w\u00E4hrend des Zugs.',
          s3Title: 'Die erste Reise',
          s3Body: 'Bis zum Sp\u00E4tsommer wird das Geburtsrevier zu klein. Geleitet von Himmelszeichen und wechselnden Thermiken beginnt der junge Turmfalke seinen ersten echten Zug \u2013 eine Reise \u00FCber tausende Kilometer durch vielf\u00E4ltige Biome.',
          s3Link: 'ARCHIVPROTOKOLLE LESEN'
        },
        hu: {
          title: 'Rep\u00FCl\u00E9s',
          obsLabel: 'Megfigyel\u00E9s #042',
          statusLabel: '\u00C1llapot',
          statusText: 'Els\u0151 rep\u00FCl\u00E9si sorozat elind\u00EDtva',
          s1Title: 'Az \u00E9gbolt k\u00FCsz\u00F6be',
          s1Body: 'A fi\u00F3ka a f\u00E9szek perem\u00E9n \u00E1ll, alatta a vil\u00E1g z\u00F6ld \u00E9s arany sz\u00E9d\u00EDt\u0151 t\u00E9rk\u00E9pek\u00E9nt ter\u00FCl el. Ez az \u00F6szt\u00F6n\u00F6s fesz\u00FClts\u00E9g pillanata, ahol az od\u00FA biztons\u00E1ga tal\u00E1lkozik a sz\u00E9l \u0151si vonz\u00E1s\u00E1val.',
          fieldNotesLabel: 'Terepi jegyzetek',
          fieldNotesQuote: '\u201EA mad\u00E1r nem az\u00E9rt haszn\u00E1lja a sz\u00E1rnyait, mert biztos a leveg\u0151ben, hanem mert biztos a saj\u00E1t erej\u00E9ben.\u201D',
          s2Title: 'A leveg\u0151 ural\u00E1sa',
          s2Body: 'A v\u00F6r\u00F6s v\u00E9rcse a \u201Esz\u00EDt\u00E1l\u00E1s\u201D mestere, egy olyan aerodinamikai brav\u00FAr\u00E9, amely a sz\u00E1rny \u00E9s a farok folyamatos mikromozg\u00E1s\u00E1t ig\u00E9nyli.',
          s2Btn: 'REP\u00DCL\u00C9S FELFEDEZ\u00C9SE',
          stat1Label: 'Sz\u00EDt\u00E1l\u00E1si sebess\u00E9g',
          stat1Desc: 'Statikus helyzet a talajhoz k\u00E9pest.',
          stat2Label: 'Max. magass\u00E1g',
          stat2Desc: 'Jellemz\u0151 magass\u00E1g a vonul\u00E1s sor\u00E1n.',
          s3Title: 'Az els\u0151 utaz\u00E1s',
          s3Body: 'Ny\u00E1r v\u00E9g\u00E9re a sz\u00FCl\u0151i ter\u00FClet t\u00FAl kicsiv\u00E9 v\u00E1lik. \u00C9gi jelek \u00E9s a v\u00E1ltoz\u00F3 termikek \u00E1ltal vez\u00E9relve a fiatal v\u00E9rcse megkezdi els\u0151 val\u00F3di vonul\u00E1s\u00E1t \u2013 egy t\u00F6bb ezer m\u00E9rf\u00F6ldes utat k\u00FCl\u00F6nb\u00F6z\u0151 biomokon kereszt\u00FCl.',
          s3Link: 'ARCH\u00CDV NAPL\u00D3K OLVAS\u00C1SA'
        }
      }
    }
  },
  computed: {
    currentLang() {
      return languageStore.currentLang
    },
    t() {
      return this.translations[languageStore.currentLang]
    }
  }
}
</script>

<style>
.serif-italic {
  font-family: 'Newsreader', serif;
  font-style: italic;
}
.specimen-overlap {
  margin-top: -2rem;
  margin-bottom: 2rem;
}
</style>
