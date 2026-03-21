<template>
  <div class="min-h-screen pb-20">
    <router-view />
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from '@/components/BottomNav.vue'

export default {
  name: 'App',
  components: { BottomNav }
}
</script>

<style>
@import './assets/styles/global.css';
</style>