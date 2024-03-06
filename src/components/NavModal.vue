<template>
  <nav class="flex justify-between gap-2 p-2 bg-red-500 sm:flex-row sm:justify-normal">
    <div class="p-3 bg-white w-fit">brand-logo</div>
    <button onclick="dialog.showModal()" class="sm:hidden">
      <svg viewBox="0 0 100 80" width="40" height="40">
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>
    </button>
    <div class="hidden m-auto sm:block">
      <ul class="flex flex-row gap-5">
        <li class="w-full p-2 pl-4 text-xl bg-white">item</li>
        <li class="w-full p-2 pl-4 text-xl bg-white">item</li>
        <li class="w-full p-2 pl-4 text-xl bg-white">item</li>
        <li class="w-full p-2 pl-4 text-xl bg-white">item</li>
      </ul>
    </div>
  </nav>

  <dialog id="dialog" modal-mode="mega" class="w-full h-screen my-0 backdrop:bg-white">
    <ul class="flex flex-col items-center justify-center gap-5 bg-white">
      <button onclick="dialog.close()" class="flex justify-end w-full pt-3">
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </button>
      <li class="w-full p-2 pl-4 text-xl">item</li>
      <li class="w-full p-2 pl-4 text-xl">item</li>
      <li class="w-full p-2 pl-4 text-xl">item</li>
      <li class="w-full p-2 pl-4 text-xl">item</li>
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

<script setup></script>

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
