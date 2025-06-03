<script setup lang="ts">
import { motion } from "motion-v";

defineProps({
  title: String,
  buttonText: String,
});

const aboutBdGioConstants = [
  "Trusted, Local Travel Experts",
  "Flexible, Hassle-Free Bookings",
  "Real-Timing Itinerary Updates",
];
</script>
<template>
  <section
    class="container mx-auto overflow-hidden flex flex-col md:flex-row items-center justify-center gap-4 px-4 lg:gap-10 py-16 lg:py-20"
  >
    <!-- Left Image Section -->
    <motion.div
      :initial="{ x: -100 }"
      :while-in-view="{ x: 0 }"
      :transition="{ ease: 'easeOut', duration: 1 }"
      class="relative w-full md:w-1/2 flex justify-center"
    >
      <div class="relative">
        <img
          src="/travelCase.png"
          alt="Travel Illustration"
          class="rounded-[40px] object-cover h-full w-full"
          loading="lazy"
        />
        <img
          class="absolute bottom-12 -left-0 -z-10 h-[100px] w-[144px]"
          src="/dot-dot.svg"
          loading="lazy"
        />
      </div>
    </motion.div>

    <!-- Right Text Section -->
    <motion.div
      :initial="{ x: 100 }"
      :while-in-view="{ x: 0 }"
      :transition="{ ease: 'easeOut', duration: 1 }"
      class="w-full md:w-1/2 space-y-3 2xl:space-y-5 flex flex-col gap-3 xl:gap-4 2xl:gap-5"
    >
      <div>
        <div class="flex items-center justify-start gap-3 m-0">
          <img
            src="/double-arrow.svg"
            class="h-5 w-5 md:h-8 md:w-8"
            loading="lazy"
          />
          <p
            class="text-[#2E8942] text-[1rem] lg:text-lg xl:text-xl 2xl:text-2xl font-semibold m-0"
          >
            {{ title }}
          </p>
        </div>
        <h2
          class="text-xl md:text-2xl xl:text-2xl 2xl:text-5xl text-[#3C3C3C] font-bold leading-9 xl:leading-12 2xl:leading-16 flex items-center justify-start sm:justify-start m-0"
        >
          Don't just imagine it, make it happen. Travel
        </h2>
      </div>
      <p class="text-[#3C3C3C] text-sm xl:text-[1rem] font-medium m-0">
        The statement implies a willingness to help someone escape their daily
        routine by taking care of their travel plans. It suggests a travel
        agency or similar service.
      </p>

      <div
        class="bg-gray-100 p-2 lg:p-3 xl:p-4 2xl:p-6 rounded-[16px] xl:rounded-[18px] border border-l-4 border-l-[#2E8942] m-0"
      >
        <p class="text-sm xl:text-lg 2xl:text-2xl font-medium">
          The statement implies a willingness to help someone escape their daily
          routine by taking care of their travel plans.
        </p>
      </div>

      <ul class="flex flex-col gap-1 md:gap-3 lg:gap-4">
        <li
          v-for="title in aboutBdGioConstants"
          class="flex items-center gap-1 md:gap-2 lg:gap-3"
        >
          <img
            src="/approved.svg"
            class="w-4 h-4 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8"
            loading="lazy"
          />
          <span
            class="text-[#383838] text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-semibold"
          >
            {{ title }}
          </span>
        </li>
      </ul>

      <div v-if="buttonText" class="flex items-center gap-4">
        <Button3 title="More About Us" />

        <!-- Avatars -->
        <div class="">
          <img
            src="/avatars.png"
            class="w-[140px] h-[40px] lg:w-[180px] lg:h-[48px] rounded-full border-2 border-white"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  </section>
</template>
