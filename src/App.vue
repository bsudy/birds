<template>
  <div class="min-h-screen pt-16 pb-20">
    <TopNav />
    <router-view />
    <BottomNav />
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import BottomNav from '@/components/BottomNav.vue'

export default {
  name: 'App',
  components: { TopNav, BottomNav }
}
</script>

<style>
@import './assets/styles/global.css';
</style>