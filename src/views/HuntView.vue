<template>
  <div class="font-body selection:bg-primary-fixed selection:text-on-primary-fixed">

    <main class="pb-12 px-6 max-w-7xl mx-auto">
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
            <p class="text-sm text-on-surface-variant leading-relaxed">{{ t.specimenDesc }}</p>
          </div>
        </div>
        <div class="md:col-span-5 md:pl-12 pb-12">
          <span class="text-primary font-label uppercase tracking-[0.3em] text-sm block mb-4">{{ t.stageLabel }}</span>
          <h2 class="font-headline text-5xl md:text-7xl leading-tight text-on-surface mb-8">{{ t.heroTitle }}</h2>
          <div class="space-y-6 text-lg text-on-surface-variant font-light leading-relaxed">
            <p v-html="t.heroParagraph1"></p>
            <p>{{ t.heroParagraph2 }}</p>
          </div>
        </div>
      </section>

      <!-- Bento Grid: The Scientific Anatomy -->
      <section class="mb-24">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Eye Specimen Card -->
          <div class="md:col-span-2 bg-surface-container-low rounded-xl p-10 relative overflow-hidden flex flex-col justify-between min-h-[400px]">
            <div class="relative z-10 max-w-md">
              <h3 class="font-headline text-3xl mb-4">{{ t.uvVisionTitle }}</h3>
              <p class="text-on-surface-variant leading-relaxed mb-6">{{ t.uvVisionDesc }}</p>
              <div class="flex gap-4">
                <span class="px-3 py-1 bg-primary/10 text-primary font-label text-xs uppercase tracking-widest rounded-full">{{ t.visionTag }}</span>
                <span class="px-3 py-1 bg-primary/10 text-primary font-label text-xs uppercase tracking-widest rounded-full">{{ t.uvTag }}</span>
              </div>
            </div>
            <div class="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
              <img
                alt="Kestrel eye detail"
                class="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9vRkuXoJ78ZJ10Dh0WUEU68jJb6X62F9iTS7B6mmDGlfu4M2Qtp05D5Kogri3NucTyX2jcrSMWPb2JvQNr7pquaHH8c6eqDTpEO_1EolpTHBnEQ86VJBh2JK7qa70sN_3v_epiYb2hYV26uwMcAqE6iU6SSM6bGnPThuSJ1DAe_P_5TorqfW4PRc3TBfLlcKhRv8Qv_uwGCbBX0PtFOqvL-2WNGdbko4qCsRcT2HAgPq74f4-FkUjrn2MIxSZYI_lsak0JLd-6a9O"
              />
            </div>
          </div>
          <!-- The Talons -->
          <div class="bg-surface-container-highest rounded-xl p-8 flex flex-col">
            <div class="mb-8">
              <span class="material-symbols-outlined text-4xl text-primary">precision_manufacturing</span>
            </div>
            <h3 class="font-headline text-2xl mb-4">{{ t.talonsTitle }}</h3>
            <p class="text-sm text-on-surface-variant leading-relaxed">{{ t.talonsDesc }}</p>
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

      <!-- The Diet Table -->
      <section class="bg-surface-container-low rounded-xl p-12 mb-24">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-outline-variant/20 pb-8">
          <div>
            <h3 class="font-headline text-4xl">{{ t.dietTitle }}</h3>
            <p class="text-on-surface-variant mt-2 font-label uppercase tracking-widest text-xs">{{ t.dietSubtitle }}</p>
          </div>
          <div class="mt-4 md:mt-0">
            <button class="bg-primary text-on-primary px-8 py-3 font-label text-sm uppercase tracking-widest flex items-center gap-2 rounded-lg hover:shadow-lg transition-all">
              <span>{{ t.viewDataLogs }}</span>
              <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">75%</span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">{{ t.volesLabel }}</span>
            <p class="text-sm italic">{{ t.volesDesc }}</p>
          </div>
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">12%</span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">{{ t.beetlesLabel }}</span>
            <p class="text-sm italic">{{ t.beetlesDesc }}</p>
          </div>
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">8%</span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">{{ t.birdsLabel }}</span>
            <p class="text-sm italic">{{ t.birdsDesc }}</p>
          </div>
          <div class="space-y-2">
            <span class="block text-4xl font-headline text-primary">5%</span>
            <span class="block font-label text-xs uppercase tracking-widest text-on-surface-variant">{{ t.othersLabel }}</span>
            <p class="text-sm italic">{{ t.othersDesc }}</p>
          </div>
        </div>
      </section>

      <!-- Educational CTA -->
      <section class="max-w-3xl mx-auto text-center py-12">
        <h4 class="font-headline text-3xl mb-6 italic">"{{ t.closingQuote }}"</h4>
        <div class="h-1 w-24 bg-primary/20 mx-auto rounded-full"></div>
      </section>
    </main>


    <!-- Floating Action Button -->
    <div class="fixed bottom-24 right-6 md:bottom-12 md:right-12 z-40 hidden md:block">
      <button class="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_20px_40px_rgba(26,28,25,0.06)] hover:scale-105 transition-transform">
        <span class="material-symbols-outlined text-3xl">visibility</span>
      </button>
    </div>
  </div>
</template>

<script>
import { languageStore } from '@/stores/language'

export default {
  name: 'HuntView',
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
          stageLabel: 'Stage IV',
          heroTitle: 'Hunting & Survival',
          specimenDesc: 'A master of the wind, the kestrel remains perfectly still in the air, its head locked on a single point in the grass below.',
          heroParagraph1: 'To survive in the open landscape, the kestrel has evolved a specialized technique known as <span class="text-primary font-semibold italic">windhovering</span>.',
          heroParagraph2: 'By flapping its wings and fanning its tail against the wind, it creates a stationary platform in mid-air, scanning the terrain for the slightest movement of voles or beetles.',
          uvVisionTitle: 'Ultraviolet Vision',
          uvVisionDesc: "The kestrel's eyes are not merely sharp; they can see into the ultraviolet spectrum. This allows them to track the urine trails of voles, which glow under UV light, leading the predator straight to its prey.",
          visionTag: 'Vision x8',
          uvTag: 'UV Tracking',
          talonsTitle: 'Powerful Talons',
          talonsDesc: "Once the target is acquired, the kestrel drops in a controlled 'stoop'. The impact is followed by a swift grasp of its needle-sharp yellow talons, designed for immediate incapacitation.",
          dietTitle: "The Hunter's Diet",
          dietSubtitle: 'Analysis of field samples and pellets',
          viewDataLogs: 'View Data Logs',
          volesLabel: 'Field Voles',
          volesDesc: 'The primary energy source for breeding pairs.',
          beetlesLabel: 'Common Beetles',
          beetlesDesc: 'Crucial during insect swarms in late summer.',
          birdsLabel: 'Small Birds',
          birdsDesc: 'Starlings and sparrows taken on the wing.',
          othersLabel: 'Others',
          othersDesc: 'Lizards, earthworms, and occasional frogs.',
          closingQuote: 'A kestrel needs the equivalent of 4-8 voles a day to survive, requiring hours of focused hovering.'
        },
        de: {
          stageLabel: 'Phase IV',
          heroTitle: 'Jagd & Überleben',
          specimenDesc: 'Ein Meister des Windes – der Turmfalke verharrt reglos in der Luft, den Blick auf einen einzigen Punkt im Gras unter ihm gerichtet.',
          heroParagraph1: 'Um in der offenen Landschaft zu überleben, hat der Turmfalke eine spezialisierte Technik entwickelt, die als <span class="text-primary font-semibold italic">Rüttelflug</span> bekannt ist.',
          heroParagraph2: 'Indem er mit den Flügeln schlägt und seinen Schwanz gegen den Wind fächert, schafft er eine stationäre Plattform in der Luft und durchsucht das Gelände nach der geringsten Bewegung von Wühlmäusen oder Käfern.',
          uvVisionTitle: 'Ultraviolette Sicht',
          uvVisionDesc: 'Die Augen des Turmfalken sind nicht nur scharf; sie können das ultraviolette Spektrum wahrnehmen. So können sie die Urinspuren von Wühlmäusen verfolgen, die unter UV-Licht leuchten und den Räuber direkt zu seiner Beute führen.',
          visionTag: 'Sicht x8',
          uvTag: 'UV-Ortung',
          talonsTitle: 'Mächtige Krallen',
          talonsDesc: 'Sobald das Ziel erfasst ist, lässt sich der Turmfalke in einem kontrollierten Sturzflug fallen. Dem Aufprall folgt ein schneller Griff seiner nadelspitzen gelben Krallen, die für sofortige Handlungsunfähigkeit konzipiert sind.',
          dietTitle: 'Die Nahrung des Jägers',
          dietSubtitle: 'Analyse von Feldproben und Gewöllen',
          viewDataLogs: 'Datenprotokolle ansehen',
          volesLabel: 'Feldmäuse',
          volesDesc: 'Die primäre Energiequelle für Brutpaare.',
          beetlesLabel: 'Gemeine Käfer',
          beetlesDesc: 'Entscheidend während der Insektenschwärme im Spätsommer.',
          birdsLabel: 'Kleine Vögel',
          birdsDesc: 'Stare und Spatzen, im Flug gefangen.',
          othersLabel: 'Sonstiges',
          othersDesc: 'Eidechsen, Regenwürmer und gelegentlich Frösche.',
          closingQuote: 'Ein Turmfalke benötigt täglich das Äquivalent von 4-8 Wühlmäusen zum Überleben, was stundenlangen konzentrierten Rüttelflug erfordert.'
        },
        hu: {
          stageLabel: 'IV. szakasz',
          heroTitle: 'Vadászat és túlélés',
          specimenDesc: 'A szél mestere – a vércse mozdulatlanul lebeg a levegőben, tekintete egyetlen pontra szegezve az alatta lévő fűben.',
          heroParagraph1: 'A nyílt tájon való túléléshez a vércse egy speciális technikát fejlesztett ki, amelyet <span class="text-primary font-semibold italic">szitálásnak</span> neveznek.',
          heroParagraph2: 'Szárnyait csapkodva és farkát a szél ellen legyezve egy álló platformot hoz létre a levegőben, miközben a terepet pásztázza a pockok vagy bogarak legkisebb mozgása után kutatva.',
          uvVisionTitle: 'Ultraibolya látás',
          uvVisionDesc: 'A vércse szeme nemcsak éles; képes az ultraibolya spektrumba is látni. Ezáltal követni tudja a pockok vizeletnyomait, amelyek UV-fény alatt világítanak, és egyenesen a zsákmányhoz vezetik a ragadozót.',
          visionTag: 'Látás x8',
          uvTag: 'UV-követés',
          talonsTitle: 'Erős karmok',
          talonsDesc: 'Amint a célpont megvan, a vércse kontrollált zuhanásba kezd. A becsapódást a tűhegyes sárga karmok villámgyors megragadása követi, amelyek az azonnali hatástalanításra lettek tervezve.',
          dietTitle: 'A vadász étrendje',
          dietSubtitle: 'Terepminták és köpetek elemzése',
          viewDataLogs: 'Adatnaplók megtekintése',
          volesLabel: 'Mezei pockok',
          volesDesc: 'A költőpárok elsődleges energiaforrása.',
          beetlesLabel: 'Közönséges bogarak',
          beetlesDesc: 'Kulcsfontosságú a késő nyári rovarrajzás idején.',
          birdsLabel: 'Kisebb madarak',
          birdsDesc: 'Seregélyek és verebek, röptükben elkapva.',
          othersLabel: 'Egyéb',
          othersDesc: 'Gyíkok, földigiliszták és alkalmanként békák.',
          closingQuote: 'Egy vércsének napi 4-8 pocoknak megfelelő táplálékra van szüksége a túléléshez, ami órákig tartó koncentrált szitálást igényel.'
        }
      }
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