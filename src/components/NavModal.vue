<template>
  <nav class="flex justify-between gap-2 p-2 bg-orange sm:flex-row sm:justify-normal">
    <div class="p-3 font-mono bg-white w-fit">brand-logo</div>

    <div class="flex items-center justify-center space-x-1">
      <button onclick="dialog.showModal()" class="sm:hidden">
        <Bars3Icon class="p-1 text-black bg-white rounded-md size-10" />
      </button>

      <!-- <button class="relative group">
        <LanguageIcon class="p-1 text-black bg-white rounded-md size-10" />
        <div>
          <ul class="absolute hidden p-3 mt-1 space-y-0 bg-white border right-2 group-hover:block">
            <li>
              <button
                @click="locale = 'ku'"
                class="w-full px-4 text-black bg-white border rounded-md active:bg-gray-700"
                :class="{ 'bg-black text-white': locale === 'ku' }"
              >
                ku
              </button>
            </li>
            <li>
              <button
                @click="locale = 'en'"
                class="w-full px-4 text-black bg-white border rounded-md active:bg-gray-700"
                :class="{ 'bg-black text-white': locale === 'en' }"
              >
                eng
              </button>
            </li>
          </ul>
        </div>
      </button> -->
    </div>
    <div class="hidden m-auto sm:block">
      <ul class="flex flex-row gap-5">
        <li class="p-2 pl-4 text-xl bg-white w-fit">{{ t('message.home') }}</li>
        <li class="p-2 pl-4 text-xl bg-white w-fit">{{ t('message.about') }}</li>
        <li class="p-2 pl-4 text-xl bg-white w-fit">{{ t('message.project') }}</li>
        <li class="p-2 pl-4 text-xl bg-white w-fit">{{ t('message.contact') }}</li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { Bars3Icon, LanguageIcon } from '@heroicons/vue/24/outline'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n({ useScope: 'global' })

// const changeLanguage = (newLocale) => {
//   i18n.locale = newLocale
// }
</script>

<style>

</style>
