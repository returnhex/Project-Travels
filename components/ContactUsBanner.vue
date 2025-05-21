<script setup lang="ts">
defineProps({
  title: String,
  subTitle: String,
});
</script>

<template>
  <section
    class="relative w-full grid place-items-center mx-auto h-[300px] md:h-[382px] bg-cover bg-center"
    style="background-image: url('/ocean.png')"
  >
    <div class="absolute inset-0 bg-[#0D4E1B] opacity-50" />
    <div
      class="relative z-10 max-w-[952px] flex flex-col items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-white"
    >
      <h1 class="text-2xl md:text-3xl lg:text-5xl font-bold">{{ title }}</h1>
      <div class="flex gap-1 items-center justify-center">
        <img
          src="/home-icon.svg"
          class="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]"
        />
        <NuxtLink
          to="/"
          class="font-medium text-sm md:text-md lg:text-lg xl:text-xl"
          >Home</NuxtLink
        >
        <img
          src="/right-arrow-white.svg"
          class="w-[28px] h-[28px] md:w-[38px] md:h-[38px]"
        />
        <NuxtLink
          :to="$route.path"
          class="font-medium text-sm md:text-md lg:text-lg xl:text-xl"
        >
          {{ subTitle }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
