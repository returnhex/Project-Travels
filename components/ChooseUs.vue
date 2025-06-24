<script setup>
import { motion } from "motion-v";
import { features } from "../constant/index";
</script>

<template>
  <section class="bg-[#F2F2F2] py-6 lg:-py-8 xl:py-12 2xl:py-16 px-4">
    <div
      class="container h-auto mx-auto flex flex-col gap-10 justify-center items-center"
    >
      <div
        class="flex flex-col gap-2 sm:gap-1 lg:gap-2 xl:gap-3 2xl:gap-6 justify-center items-center"
      >
        <p class="text-[#2E8942] font-semibold text-lg md:text-xl flex mr-5">
          <NuxtImg
            src="image/double-arrow.svg"
            alt="double-arrow"
            width="30"
            height="30"
          />
          Choose Us
        </p>
        <h2
          class="text-xl md:text-2xl xl:text-2xl 2xl:text-5xl font-bold text-[#3C3C3C]"
        >
          Why choose bdgo
        </h2>
      </div>

      <div
        class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-2 mg:gap-3 lg:gap-4"
      >
        <motion.div
          v-for="(item, index) in features"
          :key="index"
          :while-hover="{ scale: 1.02 }"
          class="flex gap-3 bg-white w-full rounded-xl shadow-sm py-3 px-4 lg:p-3 xl:p-4 2xl:p-6 hover:shadow-md cursor-pointer"
        >
          <NuxtImg
            :src="item.icon"
            alt="icon"
            class="w-[40px] h-[40px] xl:w-[65px] xl:h-[65px] 2xl:w-[80px] 2xl:h-[80px] rounded-md flex items-center justify-center mb-4"
            width="600"
            height="600"
          />
          <div class="flex flex-col items-start gap-1 lg:gap-2 xl:gap-3">
            <h1
              class="font-bold text-sm lg:text-lg xl-text-xl 2xl:text-2xl text-[#1A2E46]"
            >
              {{ item.title }}
            </h1>
            <p class="text-[#5B5B5B] text-sm xl:text-lg font-medium text-left">
              {{ item.desc }}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
</template>
