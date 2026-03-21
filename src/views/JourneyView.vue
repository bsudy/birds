<template>
  <div class="min-h-screen bg-background text-on-surface p-8">
    <router-link to="/" class="inline-flex items-center gap-2 text-primary hover:opacity-80 mb-8">
      <span class="material-symbols-outlined">arrow_back</span>
      Back to Home
    </router-link>
    <h1 class="font-serif text-5xl text-primary font-bold mb-4">Begin Your Journey</h1>
    <p class="text-on-surface-variant text-lg">Explore the complete lifecycle of the Common Kestrel.</p>
    <div class="mt-12 grid gap-6">
      <router-link 
        v-for="section in sections" 
        :key="section.path"
        :to="section.path"
        class="bg-surface-container-low p-6 rounded-xl hover:bg-surface-container transition-colors"
      >
        <h2 class="font-serif text-2xl text-primary font-bold mb-2">{{ section.title }}</h2>
        <p class="text-on-surface-variant">{{ section.description }}</p>
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
        {
          path: '/hatch',
          title: 'Hatch & Early Days',
          description: 'From the first crack of the shell to initial struggles'
        },
        {
          path: '/growth',
          title: 'Growth & Development',
          description: 'The journey from fledgling to independence'
        },
        {
          path: '/flight',
          title: 'Flight Patterns',
          description: 'Mapping thermal pathways for effortless soaring'
        },
        {
          path: '/hunt',
          title: 'The Hunt',
          description: 'Visualizing the kinetic energy of the perfect hover'
        },
        {
          path: '/mate',
          title: 'Mating & Courtship',
          description: 'The intricate dance of kestrel courtship'
        },
        {
          path: '/nest',
          title: 'The Nest Archive',
          description: 'High-altitude architecture and territory'
        }
      ]
    }
  }
}
</script>