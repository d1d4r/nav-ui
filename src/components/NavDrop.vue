<template>
  <nav class="relative border bg-sage sm:hidden">
    <div class="flex justify-between p-2">
      <div class="p-3 font-mono bg-white w-fit logo">brand-logo</div>
      <button @click="toggel" class="sm:hidden">
        <Bars3Icon class="bg-white rounded-md size-10 burger" :class="{ hidden: !isOpen }" />
        <XMarkIcon class="bg-white rounded-md size-10 x" :class="{ hidden: isOpen }" />
      </button>
    </div>
    <ul
      class="absolute z-20 flex flex-col items-center w-full gap-4 p-4 bg-black bg-white border h-fit animate-left-to-right text-sage"
      :class="{ hidden: isOpen }"
    >
      <li class="">{{ $t('message.home') }}</li>
      <li class="">{{ $t('message.about') }}</li>
      <li class="">{{ $t('message.project') }}</li>
      <li class="">{{ $t('message.contact') }}</li>
    </ul>
  </nav>

  <nav class="items-center hidden p-2 bg-white sm:flex bg-sage">
    <div class="">
      <div class="p-3 font-mono bg-white w-fit">brand-logo</div>
    </div>
    <ul class="flex items-center gap-5 p-4 m-auto h-fit">
      <li class="pl-4 text-xl bg-white w-fit">{{ $t('message.home') }}</li>
      <li class="pl-4 text-xl bg-white w-fit">{{ $t('message.about') }}</li>
      <li class="pl-4 text-xl bg-white w-fit">{{ $t('message.project') }}</li>
      <li class="pl-4 text-xl bg-white w-fit">{{ $t('message.contact') }}</li>
    </ul>
  </nav>
</template>

<script setup>
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const isOpen = ref(true)

const toggel = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
@keyframes incSize {
  from {
    transform: translateX(-900px);
    opacity: 0;
  }
  to {
    transform: translateX(1px);
    opacity: 1;
  }
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.burger {
  animation: show 0.9s;
}
.x {
  animation: show 0.9s;
}

.menu {
  animation: incSize 0.6s;
}
</style>
