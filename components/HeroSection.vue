<script setup lang="ts">
import { motion } from "motion-v";
</script>

<template>
  <section
    class="relative w-full mx-auto h-[350px] sm:h-[500px] md:h-[720px] lg:h-[820px] bg-cover bg-center"
    style="background-image: url('/heroImage.png')"
  >
    <div
      class="absolute inset-0 bg-linear-to-r from-[#002D0A] to-[#040404] opacity-50"
    />

    <motion.div
      :initial="{ opacity: 0 }"
      :while-in-view="{ opacity: 1 }"
      :transition="{ ease: 'easeOut', duration: 2 }"
      class="relative max-w-[1440px] mx-auto z-10 flex items-center justify-start h-full"
    >
      <div
        class="max-w-[950px] px-4 lg:px-4 flex flex-col items-start justify-start text-white gap-0 sm:gap-4 md:gap-8 lg:gap-10"
      >
        <p class="text-sm sm:text-lg md:text-[24px] font-bold mb-2 sm:mb-0">
          Making Travel Easy
        </p>
        <h1
          class="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-0"
        >
          Don't just imagine it, make it happen.
          <span class="text-white">Travel</span>
        </h1>
        <p class="text-sm sm:text-[18px] font-medium mb-6">
          Thinking of taking a break from every day's life? Don't worry, we take
          care of your trip. Thinking of taking a break from every day's life?
          Don't worry, we take care of your trip.
        </p>
        <button
          class="bg-red text-white px-4 py-1 md:px-6 md:py-2 text-sm md:text-[18px] font-semibold rounded shadow-lg flex items-center gap-1 md:gap-3 hover:bg-red-600 cursor-pointer"
        >
          Contact Us
          <img src="/arrowRight.svg" class="w-4 h-4 md:w-6 md:h-6" />
        </button>
      </div>
    </motion.div>
  </section>
</template>
