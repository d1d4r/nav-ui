<template>
  <nav class="sticky top-0 flex flex-col w-full nav sm:flex-row">
    <div class="flex justify-between p-3">
      <div class="p-3 font-mono text-black bg-white w-fit logo">brand-logo</div>
      <label for="toggle" class="flex items-center sm:hidden">
        <input @click="toggle" type="checkbox" id="toggle" hidden v-model="isOpen" class="group" />
        <div class="flex flex-col gap-1 group">
          <div
            class="w-12 h-[0.3rem] bg-black transition-all rounded-lg"
            :class="{ 'rotate-45': !isOpen }"
          ></div>
          <div
            class="w-12 h-[0.3rem] bg-black transition-all rounded-lg"
            :class="{ hidden: !isOpen }"
          ></div>
          <div
            class="w-12 h-[0.3rem] bg-black transition-all rounded-lg"
            :class="{ '-rotate-45': !isOpen }"
          ></div>
        </div>
      </label>
    </div>

    <ul
      class="absolute sm:static animate-open-slow z-[1] grid w-full gap-4 p-2 m-auto bg-red top-[3.9rem] sm:gap-4 sm:flex-row sm:rounded-full sm:w-fit"
      :class="{ 'hidden sm:flex': isOpen }"
    >
      <div class="overflow-hidden sm:flex">
        <li class="border-b-[1px] border-black p-2 sm:border-none">
          {{ t('message.home') }}
        </li>
        <li class="border-b-[1px] border-black p-2 sm:border-none">
          {{ t('message.about') }}
        </li>
        <li class="border-b-[1px] border-black p-2 sm:border-none">
          {{ t('message.project') }}
        </li>
        <li class="border-b-[1px] border-black p-2 sm:border-none">
          {{ t('message.contact') }}
        </li>
      </div>
    </ul>

    <!-- orginal -->
    <!-- <ul
      class="flex flex-col w-full gap-4 p-2 m-auto bg-white sm:gap-4 sm:flex-row sm:rounded-full sm:w-fit"
      :class="{ 'hidden sm:flex': isOpen }"
    >
      <li class="border-b-[1px] border-black p-2 sm:border-none overflow-hidden">
        {{ t('message.home') }}
      </li>
      <li class="border-b-[1px] border-black p-2 sm:border-none overflow-hidden">
        {{ t('message.about') }}
      </li>
      <li class="border-b-[1px] border-black p-2 sm:border-none overflow-hidden">
        {{ t('message.project') }}
      </li>
      <li class="border-b-[1px] border-black p-2 sm:border-none overflow-hidden">
        {{ t('message.contact') }}
      </li>
    </ul> -->
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const isOpen = ref(true)
const { t } = useI18n()

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.nav {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.9px);
  -webkit-backdrop-filter: blur(1.9px);
  
}

@keyframes popup {
  from {
    scale: 0;
  }
  to {
    scale: 1;
  }
}
@keyframes inSize {
  0% {
    grid-template-rows: 0fr;
  }
  100% {
    grid-template-rows: 1fr;
  }
}
ul {
  /* animation: inSize 0.6s; */
  /* transition: grid-templare-rows 500ms; */
}
</style>
