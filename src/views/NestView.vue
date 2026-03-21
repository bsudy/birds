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
          <router-link to="/hatch" class="text-zinc-500 font-medium transition-opacity hover:opacity-80">
            <span v-if="currentLang === 'en'">Hatch</span>
            <span v-if="currentLang === 'de'">Schlüpfen</span>
            <span v-if="currentLang === 'hu'">Kikelés</span>
          </router-link>
          <router-link to="/nest" class="text-[#375541] dark:text-[#8ba891] font-medium transition-opacity hover:opacity-80">
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
        <LanguageSwitcher />
      </div>
    </header>

    <main class="pt-24 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <!-- Hero Section -->
      <section class="relative min-h-[618px] flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
        <div class="w-full md:w-1/2 order-2 md:order-1">
          <span class="inline-block py-1 px-3 mb-6 bg-secondary-container text-on-secondary-container font-label text-[10px] uppercase tracking-widest rounded-full">
            <span v-if="currentLang === 'en'">Phase 05: Territory</span>
            <span v-if="currentLang === 'de'">Phase 05: Territorium</span>
            <span v-if="currentLang === 'hu'">05. fázis: Terület</span>
          </span>
          <h2 class="font-headline text-5xl md:text-7xl text-primary leading-tight mb-8">
            <span v-if="currentLang === 'en'">The Nest <span class="italic">Archive</span></span>
            <span v-if="currentLang === 'de'">Das Nest-<span class="italic">Archiv</span></span>
            <span v-if="currentLang === 'hu'">A fészek<span class="italic">archívum</span></span>
          </h2>
          <div class="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-md">
            <p v-if="currentLang === 'en'">The common kestrel never builds its own nest. Instead, it occupies abandoned crow nests, cliff ledges, church towers, and building recesses--repurposing the architecture of others into a cradle for the next generation.</p>
            <p v-if="currentLang === 'de'">Der Turmfalke baut nie sein eigenes Nest. Stattdessen besetzt er verlassene Krähennester, Felsvorsprünge, Kirchtürme und Gebäudenischen -- er verwandelt die Architektur anderer in eine Wiege für die nächste Generation.</p>
            <p v-if="currentLang === 'hu'">A vörös vércse soha nem épít saját fészket. Ehelyett elhagyott varjúfészkeket, sziklapárkányokat, templomtornyokat és épületmélyedéseket foglal el -- mások építményeit alakítja bölcsővé a következő generáció számára.</p>
          </div>
          <div class="flex items-center gap-4">
            <button class="bg-primary text-on-primary px-8 py-3 rounded shadow-lg flex items-center gap-2 hover:opacity-90 transition-all">
              <span v-if="currentLang === 'en'">Explore Sites</span>
              <span v-if="currentLang === 'de'">Standorte erkunden</span>
              <span v-if="currentLang === 'hu'">Helyszínek felfedezése</span>
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
            <img alt="Kestrel perched at a nesting site on a high ledge" class="nest-hero-image w-full h-full object-contain relative z-10 transform -rotate-6 scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0VdzSnDgajSW5H4T7GiFgpXBdBNwmhQSIAJoUFtr2WfAGw7vJAqpVNCDMZdJrE_vtQkRnSo8tuLVpkgkaEaXxP3RznYDiOQL9M0BKhinniHqUE1Sy1FqQt7kzIenYmEcB6HtooZrbMRfBneWrsK6gIm54-F7ISEjvKyLHqkj2vqGORr0ZDmcBmUzLi1fyZ8FDPglcCQeR8hRPZAAPbnlkrlP0oCadNaqqk27iJGo9NvPgJcKPU_6bojLLMW_terAYtUxT9TkiiiNf"/>
            <div class="absolute top-0 right-0 bg-surface-container-lowest p-4 shadow-xl rounded-lg z-20 max-w-[150px]">
              <p class="font-label text-[10px] text-outline uppercase mb-1">
                <span v-if="currentLang === 'en'">Nesting Height</span>
                <span v-if="currentLang === 'de'">Nisthöhe</span>
                <span v-if="currentLang === 'hu'">Fészkelési magasság</span>
              </p>
              <p class="font-headline text-2xl text-primary">15-30m</p>
            </div>
            <div class="absolute bottom-10 -left-10 bg-surface-container-lowest p-4 shadow-xl rounded-lg z-20 max-w-[150px]">
              <p class="font-label text-[10px] text-outline uppercase mb-1">
                <span v-if="currentLang === 'en'">Clutch Size</span>
                <span v-if="currentLang === 'de'">Gelegegröße</span>
                <span v-if="currentLang === 'hu'">Fészekalj méret</span>
              </p>
              <p class="font-headline text-2xl text-tertiary">
                <span v-if="currentLang === 'en'">4-6 Eggs</span>
                <span v-if="currentLang === 'de'">4-6 Eier</span>
                <span v-if="currentLang === 'hu'">4-6 tojás</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Detailed Content: Bento Grid Style -->
      <section class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
        <div class="md:col-span-8 bg-surface-container-low p-10 flex flex-col justify-end min-h-[400px]">
          <h3 class="font-headline text-3xl text-primary mb-6 italic">
            <span v-if="currentLang === 'en'">Borrowed Architecture</span>
            <span v-if="currentLang === 'de'">Geborgte Architektur</span>
            <span v-if="currentLang === 'hu'">Kölcsönzött építészet</span>
          </h3>
          <div class="columns-1 md:columns-2 gap-8 text-on-surface-variant leading-relaxed">
            <div v-if="currentLang === 'en'">
              <p class="mb-4">Unlike most raptors, the common kestrel constructs no nest of its own. It is an opportunistic tenant, seeking out the abandoned nests of crows, magpies, and other corvids in tall trees. Where trees are scarce, cliff faces, quarry walls, and rocky outcrops serve as natural alternatives.</p>
              <p>In the modern landscape, church towers, cathedral spires, factory ledges, and high-rise window recesses have become vital urban substitutes. The female scrapes a shallow depression in the existing substrate--whether sticks, gravel, or bare stone--and lays her clutch directly upon it.</p>
            </div>
            <div v-if="currentLang === 'de'">
              <p class="mb-4">Im Gegensatz zu den meisten Greifvögeln baut der Turmfalke kein eigenes Nest. Er ist ein opportunistischer Mieter, der verlassene Nester von Krähen, Elstern und anderen Rabenvögeln in hohen Bäumen aufsucht. Wo Bäume rar sind, dienen Felswände, Steinbruchwände und Felsvorsprünge als natürliche Alternativen.</p>
              <p>In der modernen Landschaft sind Kirchtürme, Domspitzen, Fabriksimse und Fensternischen von Hochhäusern zu wichtigen urbanen Ersatzstandorten geworden. Das Weibchen schabt eine flache Mulde in das vorhandene Substrat -- ob Stöcke, Kies oder nackter Stein -- und legt sein Gelege direkt darauf.</p>
            </div>
            <div v-if="currentLang === 'hu'">
              <p class="mb-4">A legtöbb ragadozó madárral ellentétben a vörös vércse nem épít saját fészket. Alkalmi bérlő, aki magas fákon keresi a varjak, szarkák és más varjúfélék elhagyott fészkeit. Ahol kevés a fa, sziklák, kőbányafalak és sziklás kiszögellések szolgálnak természetes alternatívaként.</p>
              <p>A modern tájban a templomtornyok, székesegyházi tornyok, gyári párkányok és magasépületek ablakmélyedései létfontosságú városi helyettesítőkké váltak. A tojó sekély mélyedést kapar a meglévő aljzatba -- legyen az ág, kavics vagy csupasz kő --, és közvetlenül arra rakja le tojásait.</p>
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
            <p v-if="currentLang === 'en'">Kestrels in urban areas have adapted remarkably to nesting on man-made structures. In many European cities, dedicated nest boxes mounted on tall buildings have become critical conservation tools, boosting urban kestrel populations by up to 40%.</p>
            <p v-if="currentLang === 'de'">Turmfalken in städtischen Gebieten haben sich bemerkenswert an das Nisten an menschlichen Bauwerken angepasst. In vielen europäischen Städten sind spezielle Nistkästen an hohen Gebäuden zu wichtigen Naturschutzinstrumenten geworden, die die städtischen Turmfalkenpopulationen um bis zu 40% steigern.</p>
            <p v-if="currentLang === 'hu'">A városi vöröscsék figyelemre méltóan alkalmazkodtak az ember alkotta építményeken való fészkeléshez. Számos európai városban a magas épületekre szerelt fészekládák kritikus természetvédelmi eszközökké váltak, amelyek akár 40%-kal is növelték a városi vércseállományt.</p>
          </div>
        </div>
        <div class="md:col-span-4 bg-secondary-container text-on-secondary-container p-8">
          <h4 class="font-label text-xs uppercase tracking-tighter mb-4 opacity-70">
            <span v-if="currentLang === 'en'">Nesting Heights</span>
            <span v-if="currentLang === 'de'">Nisthöhen</span>
            <span v-if="currentLang === 'hu'">Fészkelési magasságok</span>
          </h4>
          <div class="flex items-end justify-between">
            <div>
              <p class="font-headline text-4xl">15-30m</p>
              <p class="text-xs mt-1 opacity-70 italic">
                <span v-if="currentLang === 'en'">Typical elevation above ground</span>
                <span v-if="currentLang === 'de'">Typische Höhe über dem Boden</span>
                <span v-if="currentLang === 'hu'">Jellemző magasság a talaj felett</span>
              </p>
            </div>
            <span class="material-symbols-outlined text-5xl opacity-40" data-icon="altitude">altitude</span>
          </div>
        </div>
        <div class="md:col-span-4 bg-secondary-container text-on-secondary-container p-8">
          <h4 class="font-label text-xs uppercase tracking-tighter mb-4 opacity-70">
            <span v-if="currentLang === 'en'">Clutch Size</span>
            <span v-if="currentLang === 'de'">Gelegegröße</span>
            <span v-if="currentLang === 'hu'">Fészekalj méret</span>
          </h4>
          <div class="flex items-end justify-between">
            <div>
              <p class="font-headline text-4xl">
                <span v-if="currentLang === 'en'">4-6 Eggs</span>
                <span v-if="currentLang === 'de'">4-6 Eier</span>
                <span v-if="currentLang === 'hu'">4-6 tojás</span>
              </p>
              <p class="text-xs mt-1 opacity-70 italic">
                <span v-if="currentLang === 'en'">Laid at 2-day intervals</span>
                <span v-if="currentLang === 'de'">In 2-Tage-Intervallen gelegt</span>
                <span v-if="currentLang === 'hu'">2 napos időközönként lerakva</span>
              </p>
            </div>
            <span class="material-symbols-outlined text-5xl opacity-40" data-icon="egg_alt">egg_alt</span>
          </div>
        </div>
        <div class="md:col-span-4 bg-surface-container-high p-8 flex items-center gap-8">
          <div>
            <h4 class="font-headline text-2xl text-primary">
              <span v-if="currentLang === 'en'">Territory Defense</span>
              <span v-if="currentLang === 'de'">Revierverteidigung</span>
              <span v-if="currentLang === 'hu'">Területvédelem</span>
            </h4>
            <p class="text-on-surface-variant text-sm mt-1">
              <span v-if="currentLang === 'en'">Males fiercely defend a radius of approximately 500 meters around the nest site, engaging in aerial displays and vocal warnings to deter intruders. Persistent threats are met with steep, aggressive dive attacks.</span>
              <span v-if="currentLang === 'de'">Männchen verteidigen erbittert einen Radius von etwa 500 Metern um den Nistplatz, indem sie Flugvorführungen und akustische Warnungen einsetzen, um Eindringlinge abzuschrecken. Anhaltende Bedrohungen werden mit steilen, aggressiven Sturzangriffen beantwortet.</span>
              <span v-if="currentLang === 'hu'">A hímek hevesen védelmeznek egy körülbelül 500 méteres sugarat a fészek körül, légi bemutatókkal és hangjelzésekkel riasztva el a betolakodókat. Az állandó fenyegetésekre meredek, agresszív zuhanótámadásokkal válaszolnak.</span>
            </p>
          </div>
        </div>
      </section>

      <!-- Final Vision / Quote Section -->
      <section class="bg-surface-container-low p-12 text-center max-w-4xl mx-auto rounded-xl border border-outline-variant/10">
        <h2 class="font-headline text-4xl text-primary mb-6">
          <span v-if="currentLang === 'en'">A Fortress Without Walls</span>
          <span v-if="currentLang === 'de'">Eine Festung ohne Mauern</span>
          <span v-if="currentLang === 'hu'">Falak nélküli erőd</span>
        </h2>
        <p class="text-on-surface-variant text-lg leading-relaxed mb-10 italic">
          <span v-if="currentLang === 'en'">"The kestrel does not build--it claims. Its nest is not a construction but a declaration: that altitude, vigilance, and the wind itself are shelter enough."</span>
          <span v-if="currentLang === 'de'">"Der Turmfalke baut nicht -- er beansprucht. Sein Nest ist kein Bauwerk, sondern eine Erklärung: dass Höhe, Wachsamkeit und der Wind selbst Schutz genug sind."</span>
          <span v-if="currentLang === 'hu'">"A vércse nem épít -- igényt tart. Fészke nem építmény, hanem kijelentés: hogy a magasság, az éberség és maga a szél elegendő menedék."</span>
        </p>
        <div class="flex justify-center gap-4">
          <div class="w-12 h-1 border-b-2 border-primary"></div>
          <span class="material-symbols-outlined text-primary" data-icon="eco">eco</span>
          <div class="w-12 h-1 border-b-2 border-primary"></div>
        </div>
      </section>
    </main>

  </div>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { languageStore } from '@/stores/language'

export default {
  name: 'NestView',
  components: { LanguageSwitcher },
  computed: {
    currentLang() {
      return languageStore.currentLang
    }
  }
}
</script>

<style>
.nest-hero-image {
  filter: drop-shadow(0 10px 15px rgba(55, 85, 65, 0.1));
}

[data-lang]:not(.active-lang) {
  display: none;
}
</style>
