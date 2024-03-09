<template>
  <NavDrop />

  <NavModal />
  <ModalMenu />
  <NavGlass />
  <HeroSection />
</template>

<script setup>
import { RouterView } from 'vue-router'
import ModalMenu from './components/ModalMenu.vue'
import NavModal from './components/NavModal.vue'
import NavDrop from './components/NavDrop.vue'
import NavGlass from './components/NavGlass.vue'
import HeroSection from '@/components/HeroSection.vue'
</script>
<style scoped></style>
