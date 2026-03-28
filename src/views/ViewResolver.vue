<template>
  <component :is="currentView" v-if="currentView" :key="viewKey" />
</template>

<script>
import { defineAsyncComponent, shallowRef, watch, computed } from 'vue'
import { useRoute } from 'vue-router'

const viewModules = import.meta.glob([
  './common-kestrel/*.vue',
  './red-kite/*.vue'
])

function resolveView(bird, viewName) {
  const path = `./${bird}/${viewName}.vue`
  if (viewModules[path]) {
    return defineAsyncComponent(viewModules[path])
  }
  const fallback = `./common-kestrel/${viewName}.vue`
  if (viewModules[fallback]) {
    return defineAsyncComponent(viewModules[fallback])
  }
  return null
}

export default {
  name: 'ViewResolver',
  props: {
    viewName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    const currentView = shallowRef(null)

    const viewKey = computed(() => `${route.params.bird}-${route.name}`)

    watch(
      () => [route.params.bird, route.name],
      ([bird]) => {
        currentView.value = resolveView(bird, props.viewName)
      },
      { immediate: true }
    )

    return { currentView, viewKey }
  }
}
</script>
