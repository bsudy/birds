<template>
  <div class="min-h-screen bg-background text-on-surface p-8">
    <router-link :to="'/' + $route.params.bird + '/'" class="inline-flex items-center gap-2 text-primary hover:opacity-80 mb-8">
      <span class="material-symbols-outlined">arrow_back</span>
      {{ $t('journey.backToHome') }}
    </router-link>
    <h1 class="font-serif text-5xl text-primary font-bold mb-4">{{ $t('journey.pageTitle') }}</h1>
    <p class="text-on-surface-variant text-lg">{{ $t('journey.pageDesc') }}</p>
    <div class="mt-12 grid gap-6">
      <router-link
        v-for="section in computedSections"
        :key="section.path"
        :to="section.path"
        class="bg-surface-container-low p-6 rounded-xl hover:bg-surface-container transition-colors"
      >
        <h2 class="font-serif text-2xl text-primary font-bold mb-2">{{ $t(section.titleKey) }}</h2>
        <p class="text-on-surface-variant">{{ $t(section.descKey) }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JourneyView',
  data() {
    return {
      sections: [
        { subPath: 'hatch', titleKey: 'journey.hatchTitle', descKey: 'journey.hatchDesc' },
        { subPath: 'growth', titleKey: 'journey.growthTitle', descKey: 'journey.growthDesc' },
        { subPath: 'flight', titleKey: 'journey.flightTitle', descKey: 'journey.flightDesc' },
        { subPath: 'hunt', titleKey: 'journey.huntTitle', descKey: 'journey.huntDesc' },
        { subPath: 'mate', titleKey: 'journey.mateTitle', descKey: 'journey.mateDesc' },
        { subPath: 'nest', titleKey: 'journey.nestTitle', descKey: 'journey.nestDesc' }
      ]
    }
  },
  computed: {
    computedSections() {
      const bird = this.$route.params.bird
      return this.sections.map(s => ({
        ...s,
        path: '/' + bird + '/' + s.subPath
      }))
    }
  }
}
</script>
