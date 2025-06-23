<script setup lang="ts">
import { motion } from "motion-v";

defineProps({
  topImg: String,
  cardIcon: String,
  cardTitle: String,
  cardDesc: String,
});

const hoveredPart = ref<null | "icon" | "title" | "desc">(null);
</script>

<template>
  <section class="relative container md:h-[870px] mx-auto">
    <motion.div
      :initial="{ x: 100 }"
      :while-in-view="{ x: 0 }"
      :transition="{ duration: 1 }"
      class="relative flex flex-col gap-5 w-full h-full px-3 2xl:px-0"
    >
      <div
        class="block md:absolute left-0 -z-10 md:px-3 2xl:px-0 w-full lg:w-[70%] xl:w-[72%] 2xl:w-[100%]"
      >
        <img class="rounded-3xl" loading="lazy" :src="topImg" alt="our-mission"/>
      </div>
      <div
        class="block md:absolute bottom-0 right-3 z-10 w-full mr-10 md:mr-0 md:w-[400px] xl:w-[600px] 2xl:w-[706px] px-6 xl:px-8 2xl:px-14 py-6 md:py-8 xl:py-12 2xl:py-20 bg-[#F2F2F2] rounded-3xl"
      >
        <div
          class="w-full h-auto flex flex-col items-start gap-1 md:gap-2 xl:gap-5 2xl:gap-10"
        >
          <div
            :class="{
              'blur-sm opacity-50': hoveredPart && hoveredPart !== 'icon',
            }"
            @mouseenter="hoveredPart = 'icon'"
            @mouseleave="hoveredPart = null"
          >
            <img
              :src="cardIcon"
              class="h-[50px] w-[50px] xl:h-[80px] xl:w-[80px] 2xl:h-[150px] 2xl:w-[150px] cursor-pointer"
              loading="lazy"
              alt="mission-logo"
            />
          </div>

          <div
            :class="{
              'blur-sm opacity-50': hoveredPart && hoveredPart !== 'title',
            }"
            @mouseenter="hoveredPart = 'title'"
            @mouseleave="hoveredPart = null"
          >
            <h1
              class="font-bold text-xl md:text-2xl xl:text-3xl 2xl:text-5xl text-[#3C3C3C] cursor-pointer"
            >
              {{ cardTitle }}
            </h1>
          </div>

          <!-- Description Section -->
          <div
            :class="{
              'blur-sm opacity-50': hoveredPart && hoveredPart !== 'desc',
            }"
            @mouseenter="hoveredPart = 'desc'"
            @mouseleave="hoveredPart = null"
          >
            <p
              class="font-medium text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] text-[#3C3C3C] cursor-pointer"
            >
              {{ cardDesc }}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
</template>
