<template>
  <section class="mt-32 bg-primary py-24 px-6 md:px-12 text-on-primary overflow-hidden relative">
    <div class="absolute right-0 top-0 opacity-10 pointer-events-none">
      <span class="material-symbols-outlined text-[400px]" style="font-variation-settings: 'FILL' 1;">nest_cam_outdoor</span>
    </div>
    <div class="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">
      <div class="space-y-6">
        <h3 class="font-serif text-5xl leading-tight font-bold">
          <span v-html="translations[currentLang].title"></span>
        </h3>
        <p class="text-on-primary-container text-lg max-w-lg font-light leading-relaxed">
          {{ translations[currentLang].description }}
        </p>
        <button class="bg-white text-primary px-10 py-5 rounded-lg font-bold hover:bg-primary-fixed transition-colors active:scale-95">
          {{ translations[currentLang].buttonText }}
        </button>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-primary-container/30 backdrop-blur-md p-6 rounded-xl space-y-2">
          <span class="block text-3xl font-serif font-bold">1,240+</span>
          <span class="text-xs uppercase tracking-widest font-bold opacity-60">
            {{ translations[currentLang].observations }}
          </span>
        </div>
        <div class="bg-primary-container/30 backdrop-blur-md p-6 rounded-xl space-y-2">
          <span class="block text-3xl font-serif font-bold">47</span>
          <span class="text-xs uppercase tracking-widest font-bold opacity-60">
            {{ translations[currentLang].specimens }}
          </span>
        </div>
        <div class="bg-primary-container/30 backdrop-blur-md p-6 rounded-xl space-y-2">
          <span class="block text-3xl font-serif font-bold">3,500+</span>
          <span class="text-xs uppercase tracking-widest font-bold opacity-60">
            {{ translations[currentLang].hours }}
          </span>
        </div>
        <div class="bg-primary-container/30 backdrop-blur-md p-6 rounded-xl space-y-2">
          <span class="block text-3xl font-serif font-bold">24/7</span>
          <span class="text-xs uppercase tracking-widest font-bold opacity-60">
            {{ translations[currentLang].monitoring }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SpecimenHighlight',
  props: {
    currentLang: {
      type: String,
      default: 'en'
    }
  },
  data() {
    return {
      translations: {
        en: {
          title: 'Enter the <br/><span class="italic text-primary-fixed-dim">Living Ledger</span>',
          description: 'Access real-time tracking data, high-definition nesting streams, and the complete biological history of our tagged specimens.',
          buttonText: 'Create Field Account',
          observations: 'Observations',
          specimens: 'Tagged Specimens',
          hours: 'Flight Hours',
          monitoring: 'Live Monitoring'
        },
        de: {
          title: 'Betreten Sie das <br/><span class="italic text-primary-fixed-dim">Lebende Register</span>',
          description: 'Greifen Sie auf Echtzeit-Tracking-Daten, hochauflösende Nesting-Streams und die vollständige biologische Geschichte unserer markierten Exemplare zu.',
          buttonText: 'Feld-Konto erstellen',
          observations: 'Beobachtungen',
          specimens: 'Markierte Exemplare',
          hours: 'Flugstunden',
          monitoring: 'Live-Überwachung'
        },
        hu: {
          title: 'Lépjen be az <br/><span class="italic text-primary-fixed-dim">Élő Nyilvántartásba</span>',
          description: 'Hozzáférés valós idejű követési adatokhoz, nagy felbontású fészekrakó közvetítésekhez és megjelölt példányaink teljes biológiai történetéhez.',
          buttonText: 'Terepi fiók létrehozása',
          observations: 'Megfigyelések',
          specimens: 'Megjelölt példányok',
          hours: 'Repülési órák',
          monitoring: 'Élő megfigyelés'
        }
      }
    }
  }
}
</script>