<template>
  <section
    class="bg-white py-12 lg:py-0 px-4 container mx-auto overflow-hidden"
  >
    <div
      class="container min-h-[430px] md:min-h-[530px] lg:min-h-[630px] xl:min-h-[730px] 2xl:min-h-[830px] mx-auto flex flex-col gap-10 justify-center items-center"
    >
      <!-- Header -->
      <div
        class="flex flex-col gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 justify-center items-center"
      >
        <p
          class="text-[#2E8942] font-semibold text-lg xl:text-xl 2xl:text-2xl flex items-center gap-2"
        >
          <NuxtImg
            alt="double-arrow"
            src="/double-arrow.svg"
            loading="lazy"
            height="32"
            width="32"
          />
          Contact Us
        </p>
        <h2
          class="text-xl md:text-2xl xl:text-2xl 2xl:text-5xl font-bold text-[#3C3C3C]"
        >
          Contact Our Friendly Experts Team
        </h2>
        <p class="font-medium text-[1rem] text-[#3C3C3C]">
          The statement implies a willingness to help someone escape their daily
          routine by taking care of their travel plans. It suggests a travel
          agency or similar service
        </p>
      </div>

      <!-- Cards with Arrow Behind -->
      <div class="relative w-full flex justify-center">
        <!-- Step Cards -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 place-items-center lg:grid-cols-3 gap-3 lg:gap-4 xl:gap-6 w-full"
        >
          <motion.div
            v-for="(item, index) in contactFeatures"
            :key="index"
            :while-hover="{ scale: 1.02 }"
            class="flex flex-col cursor-pointer items-center gap-3 bg-[#F2F2F2] w-full h-full rounded-xl shadow-sm p-6 xl:p-8 2xl:p-12 hover:shadow-md transition mx-auto"
          >
            <!-- Icon -->
            <NuxtImg
              :src="item.icon"
              class="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] 2xl:w-[80px] 2xl:h-[80px] rounded-md mb-4 relative z-50"
              alt="icon"
            />

            <!-- Text Content -->
            <div
              class="flex flex-col items-center gap-1 lg:gap-2 xl:gap-3 text-center"
            >
              <h1
                class="font-bold text-lg xl:text-xl 2xl:text-2xl text-[#1A2E46]"
              >
                {{ item.title }}
              </h1>
              <p
                class="text-[#5B5B5B] text-sm xl:text-lg 2xl:text-xl font-medium"
              >
                {{ item.desc }}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { motion } from "motion-v";

import { contactFeatures } from "../constant/index";
</script>
