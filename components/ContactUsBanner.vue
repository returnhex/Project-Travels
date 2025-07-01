<script setup lang="ts">
import { motion } from "motion-v";
defineProps({
  title: String,
  subTitle: String,
  moreTitle: String,
});
</script>

<template>
  <div class="pt-20">
    <section
      class="relative w-full grid place-items-center mx-auto h-[300px] md:h-[382px] bg-cover bg-center"
      style="background-image: url('/ocean.png')"
    >
      <div class="absolute inset-0 bg-[#0D4E1B] opacity-50" />
      <motion.div
        :initial="{ opacity: 0 }"
        :while-in-view="{ opacity: 1 }"
        :transition="{ duration: 2 }"
        class="relative z-10 max-w-[952px] flex flex-col items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-white"
      >
        <h1 class="text:xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
          <span class="typewriter">
            {{ title }}
          </span>
        </h1>
        <div class="flex gap-1 items-center justify-center">
          <NuxtImg
            src="image/home-icon.svg"
            class="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]"
            alt="home-icon"
          />
          <NuxtLink
            to="/"
            class="font-medium text-sm md:text-md lg:text-lg xl:text-xl"
            >Home</NuxtLink
          >
          <NuxtImg
            src="image/right-arrow-white.svg"
            class="w-[28px] h-[28px] md:w-[38px] md:h-[38px]"
            alt="right-arrow"
          />
          <NuxtLink
            :to="$route.path"
            class="font-medium text-sm md:text-md lg:text-lg xl:text-xl"
          >
            {{ subTitle }}
          </NuxtLink>
          <NuxtImg
            v-if="moreTitle"
            src="image/right-arrow-white.svg"
            class="w-[28px] h-[28px] md:w-[38px] md:h-[38px]"
            alt="right-arrow"
          />
          <NuxtLink
            v-if="moreTitle"
            :to="$route.path"
            class="font-medium text-sm md:text-md lg:text-lg xl:text-xl"
          >
            {{ moreTitle }}
          </NuxtLink>
        </div>
      </motion.div>
    </section>
  </div>
</template>
<style>
.typewriter {
  /* border-right: 2px solid white; */
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  animation: typing 2.5s steps(30, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}
</style>
