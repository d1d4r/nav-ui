<template>
  <NavTranslate />
  <NavModal />
  <ModalMenu />
  <NavGlass />
  <HeroSection />
</template>

<script setup>
import { RouterView } from 'vue-router'
import ModalMenu from './components/ModalMenu.vue'
import NavModal from './components/NavModal.vue'
import NavTranslate from './components/NavTranslate.vue'
import NavGlass from './components/NavGlass.vue'
import HeroSection from '@/components/HeroSection.vue'
</script>
<style scoped></style>./components/NavTranslate.vue
