<script setup lang="ts">

import { ref } from 'vue'

const isMenuOpen = ref(false)

</script>
<template>
  <div class="max-w-[1440px] mx-auto py-2 md:py-5">
    <div
      class="flex justify-between items-center px-4 md:px-3 xl:px-2 2xl:px-3"
    >
      <NuxtLink to="/">
        <img
          src="/logo.svg"
          class="w-[60px] h-[40px] md:w-[80px] md:h-[50px] cursor-pointer"
        />
      </NuxtLink>
      <ul
        :class="[
        'absolute right-0 top-12 z-50 md:static',
        'bg-[#2E8942] md:bg-white',
        'flex flex-col md:flex-row',
        'gap-6 md:gap-8 lg:gap-12',
        'p-10 md:p-0 rounded-bl-xl md:rounded-[0]',
        'text-white md:text-[#1A2E46] font-medium text-[18px]',
        isMenuOpen ? 'block' : 'hidden',
        'md:flex'
      ]"
      >
        <div @click="isMenuOpen = !isMenuOpen" class="absolute right-2 top-2 font-bold cursor-pointer">X</div>
        <NuxtLink to="/">
          <li>Home</li>
        </NuxtLink>
        <NuxtLink to="/about-us">
          <li>About us</li>
        </NuxtLink>
        <NuxtLink to="#destination">
          <li>Destinations</li>
        </NuxtLink>
        <NuxtLink to="/blogs">
          <li>Blog</li>
        </NuxtLink>
        <NuxtLink to="/contact-us">
          <li>Contact Us</li>
        </NuxtLink>
      </ul>
      <button
        class="hidden md:flex justify-between text-white gap-[3px] sm:gap-[5px] md:gap-[10px] items-center px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-xl bg-red hover:bg-red-600 cursor-pointer"
      >
        <p class="text-sm md:text-[1rem]">Contact Us</p>
        <img src="/arrowRight.svg" class="h-3 w-3 md:h-6 md:w-6" />
      </button>

      <!-- ham-menu -->
       <div
        @click="isMenuOpen = !isMenuOpen"
        class="h-5 w-5 ms:h-6 sm:w-6 md:hidden cursor-pointer">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.<path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
    </svg>
   </div>
    </div>
  </div>
</template>
