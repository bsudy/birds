import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { birds, birdSlugs } from '@/birds'

export function useBird() {
  const route = useRoute()

  const currentBirdSlug = computed(() => route.params.bird || 'common-kestrel')
  const bird = computed(() => birds[currentBirdSlug.value])
  const isValidBird = (slug) => birdSlugs.includes(slug)

  return { currentBirdSlug, bird, isValidBird, birds, birdSlugs }
}
