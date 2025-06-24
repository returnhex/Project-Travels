<script setup lang="ts">
import { motion } from "motion-v";
import { ref } from "vue";

const isMenuOpen = ref(false);
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
      <motion.ul
        :initial="{ scale: 0 }"
        :while-in-view="{ scale: 1 }"
        :transition="{ duration: 0.3 }"
        :class="[
          'absolute right-0 top-12 z-50 md:static',
          'bg-[#2E8942] md:bg-white',
          'flex flex-col md:flex-row',
          'gap-6 md:gap-8 lg:gap-12',
          'p-10 md:p-0 rounded-bl-xl md:rounded-[0]',
          'text-white md:text-[#1A2E46] font-medium text-[18px]',
          isMenuOpen ? 'block' : 'hidden',
          'md:flex',
        ]"
      >
        <div
          class="md:hidden absolute right-2 top-2 font-bold cursor-pointer"
          @click="isMenuOpen = !isMenuOpen"
        >
          X
        </div>
        <NuxtLink to="/" @click="isMenuOpen = !isMenuOpen">
          <li>Home</li>
        </NuxtLink>
        <NuxtLink to="/about-us" @click="isMenuOpen = !isMenuOpen">
          <li>About us</li>
        </NuxtLink>
        <NuxtLink to="/destinations" @click="isMenuOpen = !isMenuOpen">
          <li>Destinations</li>
        </NuxtLink>
        <NuxtLink to="/blogs" @click="isMenuOpen = !isMenuOpen">
          <li>Blog</li>
        </NuxtLink>
        <NuxtLink to="/contact-us" @click="isMenuOpen = !isMenuOpen">
          <li>Contact Us</li>
        </NuxtLink>
      </motion.ul>
      <NuxtLink to="/contact-us">
        <btn-3 title="Contact Us" />
      </NuxtLink>

      <!-- ham-menu -->
      <div
        class="h-5 w-5 ms:h-6 sm:w-6 md:hidden cursor-pointer"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
          License - https://fontawesome.com/license/free Copyright 2025
          Fonticons, Inc.
          <path
            d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
