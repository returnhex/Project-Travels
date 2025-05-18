<script setup lang="ts">
</script>
<template>
  <div class="max-w-[1440px] mx-auto py-5">
    <div class="flex justify-between items-center px-4 md:px-3 xl:px-2 2xl:px-3">
      <NuxtLink to="/">
          <img src="/logo.svg" class="w-[60px] h-[40px] md:w-[80px] md:h-[50px] cursor-pointer"/>
      </NuxtLink>
      <ul class="hidden md:flex gap-6 md:gap-8 lg:gap-12 text-[#1A2E46] font-medium text-[18px]">
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
        class="flex justify-between text-white gap-[10px] items-center px-3 py-1 md:px-4 md:py-2  lg:px-6 lg:py-3 rounded-xl bg-[#EC1E24]"
      >
        <p class="text-sm md:text-[1rem]">Contact Us</p>
        <img src="/arrowRight.svg" class="h-3 w-3 md:h-6 md:w-6"/>
      </button>
    </div>
  </div>
</template>
