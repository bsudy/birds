<template>
  <div class="font-body text-on-surface antialiased overflow-x-hidden">
    <!-- TopAppBar -->
    <header class="fixed top-0 w-full z-50 bg-[#fafaf5]/70 dark:bg-zinc-900/70 backdrop-blur-xl flex items-center justify-between px-6 py-4 no-border bg-surface-container-low shadow-none">
      <div class="flex items-center gap-3">
        <span class="material-symbols-outlined text-[#375541] dark:text-[#8ba891]" data-icon="nest_cam_pigeon">nest_cam_outdoor</span>
        <h1 class="font-serif font-bold text-xl Newsreader text-[#375541] dark:text-[#8ba891]">
          <span v-if="currentLang === 'en'">Common Kestrel: The Living Archive</span>
          <span v-if="currentLang === 'de'">Turmfalke: Das lebende Archiv</span>
          <span v-if="currentLang === 'hu'">Vörös vércse: Az élő archívum</span>
        </h1>
      </div>
      <div class="flex gap-4 md:gap-8 items-center">
        <div class="hidden md:flex gap-8 items-center">
          <router-link to="/hatch" class="text-[#375541] dark:text-[#8ba891] font-medium transition-opacity hover:opacity-80">
            <span v-if="currentLang === 'en'">Hatch</span>
            <span v-if="currentLang === 'de'">Schlüpfen</span>
            <span v-if="currentLang === 'hu'">Kikelés</span>
          </router-link>
          <router-link to="/nest" class="text-zinc-500 font-medium transition-opacity hover:opacity-80">
            <span v-if="currentLang === 'en'">Nest</span>
            <span v-if="currentLang === 'de'">Nest</span>
            <span v-if="currentLang === 'hu'">Fészek</span>
          </router-link>
          <router-link to="/hunt" class="text-zinc-500 font-medium transition-opacity hover:opacity-80">
            <span v-if="currentLang === 'en'">Hunt</span>
            <span v-if="currentLang === 'de'">Jagd</span>
            <span v-if="currentLang === 'hu'">Vadászat</span>
          </router-link>
          <router-link to="/flight" class="text-zinc-500 font-medium transition-opacity hover:opacity-80">
            <span v-if="currentLang === 'en'">Flight</span>
            <span v-if="currentLang === 'de'">Flug</span>
            <span v-if="currentLang === 'hu'">Repülés</span>
          </router-link>
        </div>
        <!-- Language Selector Component -->
        <LanguageSwitcher />
      </div>
    </header>

    <main class="pt-24 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <!-- Hero Section: The Specimen -->
      <section class="relative min-h-[618px] flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
        <div class="w-full md:w-1/2 order-2 md:order-1">
          <span class="inline-block py-1 px-3 mb-6 bg-secondary-container text-on-secondary-container font-label text-[10px] uppercase tracking-widest rounded-full">
            <span v-if="currentLang === 'en'">Phase 01: Genesis</span>
            <span v-if="currentLang === 'de'">Phase 01: Genesis</span>
            <span v-if="currentLang === 'hu'">01. fázis: Genesis</span>
          </span>
          <h2 class="font-headline text-5xl md:text-7xl text-primary leading-tight mb-8">
            <span v-if="currentLang === 'en'">The First <span class="italic">Breach</span></span>
            <span v-if="currentLang === 'de'">Der erste <span class="italic">Durchbruch</span></span>
            <span v-if="currentLang === 'hu'">Az első <span class="italic">áttörés</span></span>
          </h2>
          <div class="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-md">
            <p v-if="currentLang === 'en'">After 28 days of incubation, the silence within the nest is broken by a rhythmic tapping. The egg tooth—a temporary anatomical tool—strikes against the calcified walls of the shell.</p>
            <p v-if="currentLang === 'de'">Nach 28 Tagen Bebrütung wird die Stille im Nest durch ein rhythmisches Klopfen unterbrochen. Der Eizahn – ein temporäres anatomisches Werkzeug – schlägt gegen die kalkhaltigen Wände der Schale.</p>
            <p v-if="currentLang === 'hu'">28 napos kotlás után a fészek csendjét ritmikus kopogás töri meg. A tojásfog – egy ideiglenes anatómiai eszköz – a tojáshéj meszes falának ütközik.</p>
          </div>
          <div class="flex items-center gap-4">
            <button class="bg-primary text-on-primary px-8 py-3 rounded shadow-lg flex items-center gap-2 hover:opacity-90 transition-all">
              <span v-if="currentLang === 'en'">Observe Cycle</span>
              <span v-if="currentLang === 'de'">Zyklus beobachten</span>
              <span v-if="currentLang === 'hu'">Ciklus megfigyelése</span>
              <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </button>
            <button class="text-primary font-bold underline underline-offset-4 decoration-primary_fixed_dim hover:opacity-80">
              <span v-if="currentLang === 'en'">Field Notes</span>
              <span v-if="currentLang === 'de'">Feldnotizen</span>
              <span v-if="currentLang === 'hu'">Terepi jegyzetek</span>
            </button>
          </div>
        </div>
        <div class="w-full md:w-1/2 order-1 md:order-2 relative flex justify-center items-center">
          <div class="relative w-full aspect-square bg-surface-container-low rounded-full flex items-center justify-center p-12 overflow-visible">
            <div class="absolute inset-0 border-2 border-dashed border-outline-variant/30 rounded-full animate-spin-slow"></div>
            <img alt="Cracked kestrel egg with chick emerging" class="specimen-image w-full h-full object-contain relative z-10 transform -rotate-12 scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFoqVEwtPAwahbWJBnG9rR35dg0iJiJa7CTT34zCRqU_v4s7DuYgl-gr2NXDEgPEs1KEnR81weLuF5aTnivCKHyrYyVDgAxkTl3bWBNI2VMtccMkzNFUuKvPCwNxKK53Aoqknms_KO_mg16gu8Qfj182REDrfn7yVv4Vf-gQl-1L-nyVmBd1yjSZbgiPYn36YkGpqhaENj0-FPZtIgaUP9rcUzdtNtin3IiKbjCfR95D3r_o9wvH45UQPnIIWRDwPuxzVNLL62Ww9e"/>
            <div class="absolute top-0 right-0 bg-surface-container-lowest p-4 shadow-xl rounded-lg z-20 max-w-[150px]">
              <p class="font-label text-[10px] text-outline uppercase mb-1">
                <span v-if="currentLang === 'en'">Incubation</span>
                <span v-if="currentLang === 'de'">Inkubation</span>
                <span v-if="currentLang === 'hu'">Inkubáció</span>
              </p>
              <p class="font-headline text-2xl text-primary">
                <span v-if="currentLang === 'en'">28 Days</span>
                <span v-if="currentLang === 'de'">28 Tage</span>
                <span v-if="currentLang === 'hu'">28 nap</span>
              </p>
            </div>
            <div class="absolute bottom-10 -left-10 bg-surface-container-lowest p-4 shadow-xl rounded-lg z-20 max-w-[150px]">
              <p class="font-label text-[10px] text-outline uppercase mb-1">
                <span v-if="currentLang === 'en'">Success Rate</span>
                <span v-if="currentLang === 'de'">Erfolgsrate</span>
                <span v-if="currentLang === 'hu'">Sikerarány</span>
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
            <span v-if="currentLang === 'en'">The Struggle of Entry</span>
            <span v-if="currentLang === 'de'">Der Kampf des Eintritts</span>
            <span v-if="currentLang === 'hu'">A belépés küzdelme</span>
          </h3>
          <div class="columns-1 md:columns-2 gap-8 text-on-surface-variant leading-relaxed">
            <div v-if="currentLang === 'en'">
              <p class="mb-4">Hatching is the most exhausting trial a bird will ever face. It can take up to 24 hours from the first "pip" to full emergence. The chick must rotate its entire body within the cramped space, systematically weakening the shell's structural integrity.</p>
              <p>This exhausting process is a biological filter; only the strongest chicks emerge, ensuring the gene pool remains resilient. Once the shell gives way, the chick is damp and vulnerable, requiring the immediate warmth of its mother's brooding patch.</p>
            </div>
            <div v-if="currentLang === 'de'">
              <p class="mb-4">Das Schlüpfen ist die anstrengendste Prüfung, die ein Vogel je bestehen muss. Vom ersten Anpicken bis zum vollständigen Schlüpfen kann es bis zu 24 Stunden dauern. Das Küken muss seinen gesamten Körper auf engstem Raum drehen und so die strukturelle Integrität der Schale systematisch schwächen.</p>
              <p>Dieser anstrengende Prozess ist ein biologischer Filter; nur die stärksten Küken schlüpfen und sorgen so für die Widerstandsfähigkeit des Genpools. Sobald die Schale nachgibt, ist das Küken feucht und verletzlich und benötigt die sofortige Wärme des Brutflecks der Mutter.</p>
            </div>
            <div v-if="currentLang === 'hu'">
              <p class="mb-4">A kikelés a legfárasztóbb próbatétel, amellyel egy madár valaha is szembesül. Az első repedéstől a teljes kikelésig akár 24 óra is eltelhet. A fiókának az egész testét el kell forgatnia a szűk helyen, szisztematikusan gyengítve a tojáshéj szerkezeti integritását.</p>
              <p>Ez a kimerítő folyamat biológiai szűrőként működik; csak a legerősebb fiókák bújnak ki, biztosítva a génállomány rugalmasságát. Amint a héj enged, a fióka nedves és sebezhető, azonnal szüksége van az anya kotlófoltjának melegére.</p>
            </div>
          </div>
        </div>
        <div class="md:col-span-4 bg-[#375541] text-white p-10 flex flex-col items-start justify-center">
          <span class="material-symbols-outlined text-4xl mb-6" data-icon="lightbulb">lightbulb</span>
          <h4 class="font-headline text-2xl mb-4">
            <span v-if="currentLang === 'en'">Did You Know?</span>
            <span v-if="currentLang === 'de'">Wussten Sie schon?</span>
            <span v-if="currentLang === 'hu'">Tudtad?</span>
          </h4>
          <div class="text-on-primary-container font-body text-sm leading-relaxed">
            <p v-if="currentLang === 'en'">Kestrels practice asynchronous hatching. The eggs are laid at intervals, meaning the first-born is often significantly larger and stronger than its siblings.</p>
            <p v-if="currentLang === 'de'">Turmfalken betreiben asynchrones Schlüpfen. Die Eier werden in Zeitabständen gelegt, was bedeutet, dass das Erstgeborene oft deutlich größer und stärker ist als seine Geschwister.</p>
            <p v-if="currentLang === 'hu'">A vércsék aszinkron kikelést folytatnak. A tojásokat időközönként rakják le, ami azt jelenti, hogy az elsőszülött gyakran lényegesen nagyobb és erősebb, mint testvérei.</p>
          </div>
        </div>
        <div class="md:col-span-4 bg-secondary-container text-on-secondary-container p-8">
          <h4 class="font-label text-xs uppercase tracking-tighter mb-4 opacity-70">
            <span v-if="currentLang === 'en'">Primary Nutrients</span>
            <span v-if="currentLang === 'de'">Primäre Nährstoffe</span>
            <span v-if="currentLang === 'hu'">Elsődleges tápanyagok</span>
          </h4>
          <div class="flex items-end justify-between">
            <div>
              <p class="font-headline text-4xl">
                <span v-if="currentLang === 'en'">Yolk Sac</span>
                <span v-if="currentLang === 'de'">Dottersack</span>
                <span v-if="currentLang === 'hu'">Szikzacskó</span>
              </p>
              <p class="text-xs mt-1 opacity-70 italic">
                <span v-if="currentLang === 'en'">Absorbed prior to hatch</span>
                <span v-if="currentLang === 'de'">Vor dem Schlüpfen absorbiert</span>
                <span v-if="currentLang === 'hu'">Kikelés előtt felszívódik</span>
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
              <span v-if="currentLang === 'en'">Protoptile Down</span>
              <span v-if="currentLang === 'de'">Dunen</span>
              <span v-if="currentLang === 'hu'">Pihetoll</span>
            </h4>
            <p class="text-on-surface-variant text-sm mt-1">
              <span v-if="currentLang === 'en'">The first layer of white, fluffy feathers that provides immediate insulation against the high-altitude winds found at nesting sites.</span>
              <span v-if="currentLang === 'de'">Die erste Schicht aus weißen, flauschigen Federn, die eine sofortige Isolierung gegen die Höhenwinde an den Nistplätzen bietet.</span>
              <span v-if="currentLang === 'hu'">A fehér, bolyhos tollak első rétege, amely azonnali szigetelést biztosít a fészkelőhelyeken tapasztalható nagy magassági szelek ellen.</span>
            </p>
          </div>
        </div>
      </section>

      <!-- Final Vision Section -->
      <section class="bg-surface-container-low p-12 text-center max-w-4xl mx-auto rounded-xl border border-outline-variant/10">
        <h2 class="font-headline text-4xl text-primary mb-6">
          <span v-if="currentLang === 'en'">A Journey Commenced</span>
          <span v-if="currentLang === 'de'">Eine Reise hat begonnen</span>
          <span v-if="currentLang === 'hu'">Egy utazás vette kezdetét</span>
        </h2>
        <p class="text-on-surface-variant text-lg leading-relaxed mb-10 italic">
          <span v-if="currentLang === 'en'">"The breaking of the shell is not the end of a process, but the violent beginning of a flight that will eventually span continents."</span>
          <span v-if="currentLang === 'de'">"Das Aufbrechen der Schale ist nicht das Ende eines Prozesses, sondern der gewaltige Beginn eines Fluges, der schließlich Kontinente umspannen wird."</span>
          <span v-if="currentLang === 'hu'">"A héj áttörése nem egy folyamat vége, hanem egy olyan repülés viharos kezdete, amely végül kontinenseket ível át."</span>
        </p>
        <div class="flex justify-center gap-4">
          <div class="w-12 h-1 border-b-2 border-primary"></div>
          <span class="material-symbols-outlined text-primary" data-icon="eco">eco</span>
          <div class="w-12 h-1 border-b-2 border-primary"></div>
        </div>
      </section>
    </main>

    <!-- BottomNavBar -->
    <nav class="fixed bottom-0 w-full z-50 pb-safe bg-[#fafaf5]/70 dark:bg-zinc-900/70 backdrop-blur-xl no-border bg-surface-container-low shadow-none md:hidden">
      <div class="flex justify-around items-center w-full px-4 py-3">
        <router-link to="/hatch" class="flex flex-col items-center justify-center bg-[#4f6d58] text-white rounded-full px-4 py-1 scale-110 duration-300 ease-in-out">
          <span class="material-symbols-outlined" data-icon="egg">egg</span>
          <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope">
            <span v-if="currentLang === 'en'">Hatch</span>
            <span v-if="currentLang === 'de'">Brut</span>
            <span v-if="currentLang === 'hu'">Kikel</span>
          </span>
        </router-link>
        <router-link to="/nest" class="flex flex-col items-center justify-center text-[#375541]/60 dark:text-zinc-400 hover:text-[#375541] dark:hover:text-white transition-colors">
          <span class="material-symbols-outlined" data-icon="home_max">home_max</span>
          <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope">
            <span v-if="currentLang === 'en'">Nest</span>
            <span v-if="currentLang === 'de'">Nest</span>
            <span v-if="currentLang === 'hu'">Fészek</span>
          </span>
        </router-link>
        <router-link to="/hunt" class="flex flex-col items-center justify-center text-[#375541]/60 dark:text-zinc-400 hover:text-[#375541] dark:hover:text-white transition-colors">
          <span class="material-symbols-outlined" data-icon="target">target</span>
          <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope">
            <span v-if="currentLang === 'en'">Hunt</span>
            <span v-if="currentLang === 'de'">Jagd</span>
            <span v-if="currentLang === 'hu'">Vadász</span>
          </span>
        </router-link>
        <router-link to="/flight" class="flex flex-col items-center justify-center text-[#375541]/60 dark:text-zinc-400 hover:text-[#375541] dark:hover:text-white transition-colors">
          <span class="material-symbols-outlined" data-icon="Wings">flight</span>
          <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope">
            <span v-if="currentLang === 'en'">Flight</span>
            <span v-if="currentLang === 'de'">Flug</span>
            <span v-if="currentLang === 'hu'">Repül</span>
          </span>
        </router-link>
        <router-link to="/mate" class="flex flex-col items-center justify-center text-[#375541]/60 dark:text-zinc-400 hover:text-[#375541] dark:hover:text-white transition-colors">
          <span class="material-symbols-outlined" data-icon="favorite">favorite</span>
          <span class="font-sans font-medium text-[10px] tracking-widest uppercase Manrope">
            <span v-if="currentLang === 'en'">Mate</span>
            <span v-if="currentLang === 'de'">Paarung</span>
            <span v-if="currentLang === 'hu'">Párzás</span>
          </span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { languageStore } from '@/stores/language'

export default {
  name: 'HatchView',
  components: { LanguageSwitcher },
  computed: {
    currentLang() {
      return languageStore.currentLang
    }
  }
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
