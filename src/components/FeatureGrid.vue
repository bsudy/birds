<template>
  <section class="px-6 md:px-12 max-w-7xl mx-auto mt-24">
    <div class="mb-12 space-y-2">
      <h3 class="font-serif text-4xl text-primary font-bold">
        {{ translations[currentLang].chaptersTitle }}
      </h3>
      <p class="text-on-surface-variant max-w-xl">
        {{ translations[currentLang].chaptersDesc }}
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-6 gap-6">
      <!-- Large Feature -->
      <div @click="$router.push('/hatch')" class="md:col-span-4 bg-surface-container rounded-xl p-8 flex flex-col justify-between group cursor-pointer hover:bg-surface-container-high transition-colors">
        <div class="flex justify-between items-start">
          <div class="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-white">
            <span class="material-symbols-outlined text-3xl">egg</span>
          </div>
          <span class="font-serif italic text-4xl text-primary/20 group-hover:text-primary/40 transition-colors">01</span>
        </div>
        <div class="mt-12">
          <h4 class="font-serif text-3xl font-bold text-primary mb-2">
            {{ translations[currentLang].hatchTitle }}
          </h4>
          <p class="text-on-surface-variant max-w-md">
            {{ translations[currentLang].hatchDesc }}
          </p>
        </div>
      </div>
      
      <!-- Small Feature -->
      <div @click="$router.push('/hunt')" class="md:col-span-2 bg-secondary-container rounded-xl p-8 flex flex-col justify-between group hover:opacity-90 transition-opacity cursor-pointer">
        <span class="material-symbols-outlined text-4xl text-on-secondary-container">target</span>
        <div class="mt-8">
          <h4 class="font-serif text-2xl font-bold text-on-secondary-container mb-2">
            {{ translations[currentLang].huntTitle }}
          </h4>
          <p class="text-on-secondary-fixed-variant text-sm">
            {{ translations[currentLang].huntDesc }}
          </p>
        </div>
      </div>
      
      <!-- Horizontal Feature -->
      <div @click="$router.push('/flight')" class="md:col-span-3 bg-surface-container-low rounded-xl p-8 flex items-center gap-6 group cursor-pointer hover:bg-surface-container transition-colors">
        <div class="flex-1">
          <h4 class="font-serif text-2xl font-bold text-primary mb-2">
            {{ translations[currentLang].flightTitle }}
          </h4>
          <p class="text-on-surface-variant text-sm">
            {{ translations[currentLang].flightDesc }}
          </p>
        </div>
        <span class="material-symbols-outlined text-5xl text-primary/30 group-hover:scale-110 transition-transform">flight</span>
      </div>
      
      <!-- Another Feature -->
      <div @click="$router.push('/nest')" class="md:col-span-3 bg-surface-container-highest rounded-xl p-8 flex items-center gap-6 group cursor-pointer hover:opacity-95 transition-opacity">
        <span class="material-symbols-outlined text-5xl text-primary">home_max</span>
        <div class="flex-1">
          <h4 class="font-serif text-2xl font-bold text-primary mb-2">
            {{ translations[currentLang].nestTitle }}
          </h4>
          <p class="text-on-surface-variant text-sm">
            {{ translations[currentLang].nestDesc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { languageStore } from '@/stores/language'

export default {
  name: 'FeatureGrid',
  computed: {
    currentLang() {
      return languageStore.currentLang
    }
  },
  data() {
    return {
      translations: {
        en: {
          chaptersTitle: 'The Chapters of Flight',
          chaptersDesc: 'Five stages of a singular existence, captured in high-fidelity data and living narrative.',
          hatchTitle: 'Hatch & Early Days',
          hatchDesc: 'From the first crack of the shell to the initial struggle for nourishment in the nest container.',
          huntTitle: 'The Hunt',
          huntDesc: 'Visualizing the kinetic energy of the perfect hover.',
          flightTitle: 'Flight Patterns',
          flightDesc: 'Mapping the thermal pathways used for effortless soaring.',
          nestTitle: 'The Nest Archive',
          nestDesc: 'A deep dive into high-altitude architecture and territory.'
        },
        de: {
          chaptersTitle: 'Die Kapitel des Fluges',
          chaptersDesc: 'Fünf Etappen einer einzigartigen Existenz, festgehalten in hochpräzisen Daten und lebendiger Erzählung.',
          hatchTitle: 'Schlüpfen & Frühe Tage',
          hatchDesc: 'Vom ersten Knacken der Schale bis zum ersten Kampf um Nahrung im Nest.',
          huntTitle: 'Die Jagd',
          huntDesc: 'Visualisierung der kinetischen Energie des perfekten Rüttelflugs.',
          flightTitle: 'Flugmuster',
          flightDesc: 'Kartierung der thermischen Wege für müheloses Gleiten.',
          nestTitle: 'Das Nest-Archiv',
          nestDesc: 'Ein tiefer Einblick in die Hochgebirgsarchitektur und Territorien.'
        },
        hu: {
          chaptersTitle: 'A repülés fejezetei',
          chaptersDesc: 'Egy egyedülálló létezés öt szakasza, nagy hűségű adatokban és élő narratívában rögzítve.',
          hatchTitle: 'Kikelés és az első napok',
          hatchDesc: 'A tojáshéj első repedésétől a táplálékért folytatott kezdeti küzdelemig a fészekben.',
          huntTitle: 'A vadászat',
          huntDesc: 'A tökéletes lebegés kinetikus energiájának vizualizálása.',
          flightTitle: 'Repülési minták',
          flightDesc: 'A megerőltetés nélküli szárnyaláshoz használt termikus utak feltérképezése.',
          nestTitle: 'A fészekarchívum',
          nestDesc: 'Mélymerülés a magaslati építészetbe és a területbe.'
        }
      }
    }
  }
}
</script>