<template>
  <dialog id="dialog" class="w-full h-screen my-0 bg-orange backdrop:bg-orange backdrop:animate-pop-up animate-pop-up">
    <ul class="flex flex-col items-center justify-center gap-5 text-black bg-orange">
      <button onclick="dialog.close()" class="flex justify-end w-full pt-3">
        <XMarkIcon class="p-1 text-black bg-white rounded-md size-10" />
      </button>
      <li class="w-full p-2 pl-4 text-xl">{{ t('message.home') }}</li>
      <li class="w-full p-2 pl-4 text-xl">{{ t('message.about') }}</li>
      <li class="w-full p-2 pl-4 text-xl">{{ t('message.project') }}</li>
      <li class="w-full p-2 pl-4 text-xl">{{ t('message.contact') }}</li>
    </ul>
    <br />
    <br />
    <br />
    <div class="flex justify-center w-full h-20 pl-4 text-black border border-black">
      <ul class="flex items-center gap-5">
        <li>insta</li>
        <li>fb</li>
        <li>X</li>
      </ul>
    </div>
  </dialog>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* #dialog {
  animation: fadeIn 0.6s; 
  -webkit-animation: fadeIn 0.6s;
  -moz-animation: fadeIn 0.6s;
  -ms-animation: fadeIn 0.6s;
  -o-animation: fadeIn 0.6s;
} */
</style>
