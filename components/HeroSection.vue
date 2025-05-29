<script setup lang="ts">
import { motion } from "motion-v";
</script>

<template>
  <!-- h-[350px] sm:h-[500px] md:h-[720px] lg:h-[820px] -->
  <section
    class="relative w-full mx-auto
    h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[82vh] xl:h-[92vh]  
    bg-cover bg-center"
    style="background-image: url('/heroBg.png')"
  >
    <div
      class="absolute inset-0 bg-linear-to-r from-[#002D0A] to-[#040404]/0"
    />

    <motion.div
      :initial="{ opacity: 0 }"
      :while-in-view="{ opacity: 1 }"
      :transition="{ ease: 'easeOut', duration: 2 }"
      class="relative max-w-[1440px] mx-auto z-10 flex items-center justify-center 2xl:justify-start h-full"
    >
      <div
        class="max-w-[1000px] px-4 lg:px-4 flex flex-col items-start justify-start text-white gap-0 sm:gap-4 md:gap-5 xl:gap-8 2xl:gap-10"
      >
        <p class="text-sm md:text-lg lg:text-[20px] xl:text-[24px] font-bold mb-2 sm:mb-0">
          Making Travel Easy
        </p>
        <h1
          class="text-xl sm:text-2xl md:text-[30px] lg:text-[36px] xl:text-5xl 2xl:text-6xl font-bold mb-4 sm:mb-0"
        >
          Don't just imagine it, make it happen.
          <span class="text-white">Travel</span>
        </h1>
        <p class="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-medium mb-6">
          Thinking of taking a break from every day's life? Don't worry, we take
          care of your trip. Thinking of taking a break from every day's life?
          Don't worry, we take care of your trip.
        </p>
        <NuxtLink to="/contact-us">
          <Button3 title="Contact Us" />
        </NuxtLink>
      </div>
    </motion.div>
  </section>
</template>
