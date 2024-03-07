<template>
  <nav class="bg-lime-400 sm:hidden">
    <div class="flex justify-between p-2">
      <div class="p-3 font-mono bg-white w-fit">brand-logo</div>
      <button @click="toggel" class="sm:hidden">
        <Bars3Icon class="bg-white rounded-md size-10" />
      </button>
    </div>
    <ul
      id="myUL"
      ref="myUL"
      class="absolute z-10 flex flex-col items-center w-full gap-4 p-4 h-fit bg-lime-400"
      :class="{ hidden: isOpen }"
    >
      <li class="">{{ $t('message.home') }}</li>
      <li class="">{{ $t('message.about') }}</li>
      <li class="">{{ $t('message.project') }}</li>
      <li class="">{{ $t('message.contact') }}</li>
    </ul>
  </nav>

  <nav class="hidden p-2 bg-lime-400 sm:flex">
    <div class="">
      <div class="p-3 font-mono bg-white w-fit">brand-logo</div>
    </div>
    <ul class="flex items-center gap-4 p-4 m-auto h-fit bg-lime-400">
      <li class="">{{ $t('message.home') }}</li>
      <li class="">{{ $t('message.about') }}</li>
      <li class="">{{ $t('message.project') }}</li>
      <li class="">{{ $t('message.contact') }}</li>
    </ul>
  </nav>
</template>

<script setup>
import { Bars3Icon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const isOpen = ref(true)

const toggel = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
/* @keyframes incSize {
  from {
    height: 0;
  }
  to {
    height: 100px;
  }
}

ul {
  animation: incSize 0.6s;
}  */

/* ul::backdrop {
  background-color: black;
} */
</style>
