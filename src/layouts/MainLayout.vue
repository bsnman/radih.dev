<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-surface text-ink flex flex-col">
    <NavBar />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>
