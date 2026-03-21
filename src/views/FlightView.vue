<template>
  <div class="bg-background text-on-background selection:bg-primary-fixed-dim selection:text-on-primary-fixed">

    <main class="pb-12 px-6 max-w-7xl mx-auto">
      <!-- Hero Section -->
      <section class="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-20">
        <div class="md:col-span-7 relative group">
          <div class="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low shadow-sm relative">
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
          <!-- Asymmetric Specimen Overlay -->
          <div class="absolute -bottom-6 -right-6 md:-right-12 bg-surface-container-lowest p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-primary z-10">
            <p class="font-label text-[9px] uppercase tracking-tighter text-tertiary mb-1">{{ t.statusLabel }}</p>
            <p class="font-body text-sm font-bold text-on-surface">{{ t.statusText }}</p>
          </div>
        </div>
        <div class="md:col-span-5 md:pl-12 pb-12">
          <span class="text-primary font-label uppercase tracking-[0.3em] text-sm block mb-4">{{ t.phaseLabel }}</span>
          <h2 class="font-headline text-5xl md:text-7xl leading-tight text-on-surface mb-8">{{ t.title }}</h2>
          <div class="space-y-6 text-lg text-on-surface-variant font-light leading-relaxed">
            <p>{{ t.s1Body }}</p>
            <p class="font-headline italic text-2xl text-tertiary-container py-4 border-l-2 border-primary-container/20 pl-6">"{{ t.fieldNotesQuote }}"</p>
          </div>
        </div>
      </section>

      <!-- Bento Grid: Flight Science -->
      <section class="mb-24">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Mastery of the Air Card -->
          <div class="md:col-span-2 bg-surface-container-low rounded-xl p-10 relative overflow-hidden flex flex-col justify-between min-h-[400px]">
            <div class="relative z-10 max-w-md">
              <h3 class="font-headline text-3xl mb-4">{{ t.s2Title }}</h3>
              <p class="text-on-surface-variant leading-relaxed mb-6">{{ t.s2Body }}</p>
              <button class="bg-primary text-on-primary px-8 py-3 rounded-lg font-label text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-all">
                {{ t.s2Btn }}
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
            <h3 class="font-headline text-2xl mb-4">{{ t.fieldNotesLabel }}</h3>
            <p class="text-sm text-on-surface-variant leading-relaxed italic">{{ t.fieldNotesQuote }}</p>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="bg-surface-container-low rounded-xl p-12 mb-24">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-outline-variant/20 pb-8">
          <div>
            <h3 class="font-headline text-4xl">{{ t.s2Title }}</h3>
            <p class="text-on-surface-variant mt-2 font-label uppercase tracking-widest text-xs">{{ t.statsSubtitle }}</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">0 <span class="text-lg font-body text-on-surface-variant">km/h</span></span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">{{ t.stat1Label }}</span>
            <p class="text-sm italic">{{ t.stat1Desc }}</p>
          </div>
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">2.5k <span class="text-lg font-body text-on-surface-variant">m</span></span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">{{ t.stat2Label }}</span>
            <p class="text-sm italic">{{ t.stat2Desc }}</p>
          </div>
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">320°</span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">{{ t.stat3Label }}</span>
            <p class="text-sm italic">{{ t.stat3Desc }}</p>
          </div>
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">60 <span class="text-lg font-body text-on-surface-variant">km/h</span></span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">{{ t.stat4Label }}</span>
            <p class="text-sm italic">{{ t.stat4Desc }}</p>
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
          <h3 class="font-headline text-3xl text-primary mb-6 italic">{{ t.s3Title }}</h3>
          <p class="text-on-surface-variant leading-relaxed">{{ t.s3Body }}</p>
          <div class="mt-8">
            <a class="font-label text-xs font-bold text-primary underline underline-offset-4 decoration-primary/30 flex items-center gap-2" href="#">
              {{ t.s3Link }}
              <span class="material-symbols-outlined text-xs">arrow_forward</span>
            </a>
          </div>
        </div>
        <div class="md:col-span-4 bg-[#375541] text-white p-10 flex flex-col items-start justify-center">
          <span class="material-symbols-outlined text-4xl mb-6">lightbulb</span>
          <h4 class="font-headline text-2xl mb-4">{{ t.didYouKnow }}</h4>
          <p class="text-on-primary-container font-body text-sm leading-relaxed">{{ t.didYouKnowBody }}</p>
        </div>
      </section>

      <!-- Closing Quote -->
      <section class="bg-surface-container-low p-12 text-center max-w-4xl mx-auto rounded-xl border border-outline-variant/10">
        <h2 class="font-headline text-4xl text-primary mb-6">"{{ t.closingQuote }}"</h2>
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
import { languageStore } from '@/stores/language'

export default {
  name: 'FlightView',
  data() {
    return {
      translations: {
        en: {
          title: 'Taking Flight',
          phaseLabel: 'Stage III',
          obsLabel: 'Observation #042',
          statusLabel: 'Status',
          statusText: 'First Flight Sequence Initiated',
          s1Body: "A fledgling stands at the nest\u2019s precipice, the world unfolding beneath its talons in a dizzying map of green and gold. This is the moment of instinctual tension, where the safety of the hollow meets the ancestral pull of the wind.",
          fieldNotesLabel: 'Field Notes',
          fieldNotesQuote: 'The bird does not use its wings because it is sure of the air, but because it is sure of its own strength.',
          s2Title: 'Mastery of the Air',
          s2Body: "The kestrel is a master of the \u2018hover,\u2019 a feat of aerodynamic precision that requires constant micro-adjustments of wing and tail.",
          s2Btn: 'Explore Flight',
          statsSubtitle: 'Aerodynamic performance data',
          stat1Label: 'Hover Speed',
          stat1Desc: 'Static position relative to ground.',
          stat2Label: 'Max Altitude',
          stat2Desc: 'Typical soaring height during migration.',
          stat3Label: 'Visual Field',
          stat3Desc: 'Near-complete panoramic vision.',
          stat4Label: 'Dive Speed',
          stat4Desc: 'Maximum speed during controlled stoop.',
          s3Title: 'The First Journey',
          s3Body: "By late summer, the natal territory becomes too small. Guided by celestial cues and the changing thermal currents, the young kestrel begins its first true migration\u2014a journey of thousands of miles across diverse biomes.",
          s3Link: 'Read Archive Logs',
          didYouKnow: 'Did You Know?',
          didYouKnowBody: 'Kestrels can detect magnetic fields using specialized cells in their beaks, helping them navigate across vast distances during migration.',
          closingQuote: 'The breaking of stillness is not the end of rest, but the violent beginning of a flight that will span continents.'
        },
        de: {
          title: 'Abflug',
          phaseLabel: 'Phase III',
          obsLabel: 'Beobachtung #042',
          statusLabel: 'Status',
          statusText: 'Erstflugsequenz eingeleitet',
          s1Body: 'Ein Jungvogel steht am Abgrund des Nestes, die Welt entfaltet sich unter seinen Krallen in einer schwindelerregenden Karte aus Gr\u00FCn und Gold. Dies ist der Moment instinktiver Spannung, in dem die Sicherheit der H\u00F6hle auf den uralten Sog des Windes trifft.',
          fieldNotesLabel: 'Feldnotizen',
          fieldNotesQuote: 'Der Vogel nutzt seine Fl\u00FCgel nicht, weil er sich der Luft sicher ist, sondern weil er sich seiner eigenen Kraft sicher ist.',
          s2Title: 'Meisterschaft der L\u00FCfte',
          s2Body: 'Der Turmfalke ist ein Meister des \u201AR\u00FCttelns\u2018, einer aerodynamischen H\u00F6chstleistung, die st\u00E4ndige Mikro-Anpassungen von Fl\u00FCgeln und Schwanz erfordert.',
          s2Btn: 'Flug erkunden',
          statsSubtitle: 'Aerodynamische Leistungsdaten',
          stat1Label: 'R\u00FCttel-Tempo',
          stat1Desc: 'Statische Position relativ zum Boden.',
          stat2Label: 'Max. H\u00F6he',
          stat2Desc: 'Typische Segelh\u00F6he w\u00E4hrend des Zugs.',
          stat3Label: 'Sichtfeld',
          stat3Desc: 'Nahezu vollst\u00E4ndiges Panoramasehen.',
          stat4Label: 'Sturzgeschwindigkeit',
          stat4Desc: 'Maximale Geschwindigkeit im kontrollierten Sturzflug.',
          s3Title: 'Die erste Reise',
          s3Body: 'Bis zum Sp\u00E4tsommer wird das Geburtsrevier zu klein. Geleitet von Himmelszeichen und wechselnden Thermiken beginnt der junge Turmfalke seinen ersten echten Zug \u2013 eine Reise \u00FCber tausende Kilometer durch vielf\u00E4ltige Biome.',
          s3Link: 'Archivprotokolle lesen',
          didYouKnow: 'Wussten Sie schon?',
          didYouKnowBody: 'Turmfalken k\u00F6nnen Magnetfelder mithilfe spezialisierter Zellen in ihrem Schnabel erkennen, was ihnen hilft, w\u00E4hrend der Migration \u00FCber weite Entfernungen zu navigieren.',
          closingQuote: 'Das Brechen der Stille ist nicht das Ende der Ruhe, sondern der gewaltige Beginn eines Fluges, der Kontinente umspannen wird.'
        },
        hu: {
          title: 'Rep\u00FCl\u00E9s',
          phaseLabel: 'III. szakasz',
          obsLabel: 'Megfigyel\u00E9s #042',
          statusLabel: '\u00C1llapot',
          statusText: 'Els\u0151 rep\u00FCl\u00E9si sorozat elind\u00EDtva',
          s1Body: 'A fi\u00F3ka a f\u00E9szek perem\u00E9n \u00E1ll, alatta a vil\u00E1g z\u00F6ld \u00E9s arany sz\u00E9d\u00EDt\u0151 t\u00E9rk\u00E9pek\u00E9nt ter\u00FCl el. Ez az \u00F6szt\u00F6n\u00F6s fesz\u00FClts\u00E9g pillanata, ahol az od\u00FA biztons\u00E1ga tal\u00E1lkozik a sz\u00E9l \u0151si vonz\u00E1s\u00E1val.',
          fieldNotesLabel: 'Terepi jegyzetek',
          fieldNotesQuote: 'A mad\u00E1r nem az\u00E9rt haszn\u00E1lja a sz\u00E1rnyait, mert biztos a leveg\u0151ben, hanem mert biztos a saj\u00E1t erej\u00E9ben.',
          s2Title: 'A leveg\u0151 ural\u00E1sa',
          s2Body: 'A v\u00F6r\u00F6s v\u00E9rcse a \u201Esz\u00EDt\u00E1l\u00E1s\u201D mestere, egy olyan aerodinamikai brav\u00FAr\u00E9, amely a sz\u00E1rny \u00E9s a farok folyamatos mikromozg\u00E1s\u00E1t ig\u00E9nyli.',
          s2Btn: 'Rep\u00FCl\u00E9s felfedez\u00E9se',
          statsSubtitle: 'Aerodinamikai teljes\u00EDtm\u00E9nyadatok',
          stat1Label: 'Sz\u00EDt\u00E1l\u00E1si sebess\u00E9g',
          stat1Desc: 'Statikus helyzet a talajhoz k\u00E9pest.',
          stat2Label: 'Max. magass\u00E1g',
          stat2Desc: 'Jellemz\u0151 magass\u00E1g a vonul\u00E1s sor\u00E1n.',
          stat3Label: 'L\u00E1t\u00F3mez\u0151',
          stat3Desc: 'Csaknem teljes k\u00F6rpanor\u00E1m\u00E1s l\u00E1t\u00E1s.',
          stat4Label: 'Zuhanási sebess\u00E9g',
          stat4Desc: 'Maxim\u00E1lis sebess\u00E9g kontroll\u00E1lt zuhanásn\u00E1l.',
          s3Title: 'Az els\u0151 utaz\u00E1s',
          s3Body: 'Ny\u00E1r v\u00E9g\u00E9re a sz\u00FCl\u0151i ter\u00FClet t\u00FAl kicsiv\u00E9 v\u00E1lik. \u00C9gi jelek \u00E9s a v\u00E1ltoz\u00F3 termikek \u00E1ltal vez\u00E9relve a fiatal v\u00E9rcse megkezdi els\u0151 val\u00F3di vonul\u00E1s\u00E1t \u2013 egy t\u00F6bb ezer m\u00E9rf\u00F6ldes utat k\u00FCl\u00F6nb\u00F6z\u0151 biomokon kereszt\u00FCl.',
          s3Link: 'Arch\u00EDv napl\u00F3k olvas\u00E1sa',
          didYouKnow: 'Tudtad?',
          didYouKnowBody: 'A v\u00E9rcs\u00E9k k\u00E9pesek a m\u00E1gneses mez\u0151ket \u00E9rz\u00E9kelni a cs\u0151r\u00FCkben l\u00E9v\u0151 specializ\u00E1lt sejtek seg\u00EDts\u00E9g\u00E9vel, ami seg\u00EDti \u0151ket a vonul\u00E1s sor\u00E1n a hatalmas t\u00E1vols\u00E1gokon val\u00F3 navig\u00E1l\u00E1sban.',
          closingQuote: 'A mozdulatlanság megtörése nem a pihenés vége, hanem egy kontinenseket átívelő repülés viharos kezdete.'
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
