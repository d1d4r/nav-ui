<template>
  <nav class="flex justify-between gap-2 p-2 bg-red-500 sm:flex-row sm:justify-normal">
    <div class="p-3 font-mono bg-white w-fit">brand-logo</div>
    <div class="flex items-center justify-center space-x-1">
      <button onclick="dialog.showModal()" class="sm:hidden">
        <Bars3Icon class="p-1 text-black bg-white rounded-md size-10" />
      </button>
      <button
        class="relative flex flex-row items-center justify-center gap-2 p-2 overflow-hidden transition-all duration-200 bg-white border rounded-lg group focus:overflow-visible w-max h-max border-zinc-200"
      >
        <LanguageIcon class="text-black bg-white rounded-md size-6" />
        <div
          class="absolute flex flex-col gap-2 p-2 bg-white border rounded-lg shadow-lg left-[-2rem] w-fit top-11 h-max border-zinc-200"
        >
          <p>
            <label for="kurd">kurdish<input id="kurd" type="radio" /></label>
          </p>
          <p>
            <label for="">kurdish<input type="radio" /></label>
          </p>
          <p>
            <label for="">kurdish<input type="radio" /></label>
          </p>
        </div>
      </button>
    </div>
    <div class="hidden m-auto sm:block">
      <ul class="flex flex-row gap-5">
        <li class="w-full p-2 pl-4 text-xl bg-white">{{ $t('message.home') }}</li>
        <li class="w-full p-2 pl-4 text-xl bg-white">{{ $t('message.about') }}</li>
        <li class="w-full p-2 pl-4 text-xl bg-white">{{ $t('message.project') }}</li>
        <li class="w-full p-2 pl-4 text-xl bg-white">{{ $t('message.contact') }}</li>
      </ul>
    </div>
  </nav>

  <dialog id="dialog" class="w-full h-screen my-0 backdrop:bg-white">
    <ul class="flex flex-col items-center justify-center gap-5 bg-white">
      <button onclick="dialog.close()" class="flex justify-end w-full pt-3">
        <XMarkIcon class="p-1 text-black bg-white rounded-md size-10" />
      </button>
      <li class="w-full p-2 pl-4 text-xl">{{ $t('message.home') }}</li>
      <li class="w-full p-2 pl-4 text-xl">{{ $t('message.about') }}</li>
      <li class="w-full p-2 pl-4 text-xl">{{ $t('message.project') }}</li>
      <li class="w-full p-2 pl-4 text-xl">{{ $t('message.contact') }}</li>
    </ul>
    <br />
    <br />
    <br />
    <div class="flex justify-center w-full h-20 pl-4 border">
      <ul class="flex items-center gap-5">
        <li>insta</li>
        <li>fb</li>
        <li>X</li>
      </ul>
    </div>
  </dialog>
</template>

<script setup>
import { XMarkIcon, Bars3Icon, LanguageIcon } from '@heroicons/vue/24/outline'
</script>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

#dialog {
  animation: fadeIn 0.6s; /* Add "s" for seconds unit */
  -webkit-animation: fadeIn 0.6s;
  -moz-animation: fadeIn 0.6s;
  -ms-animation: fadeIn 0.6s;
  -o-animation: fadeIn 0.6s;
}
</style>
