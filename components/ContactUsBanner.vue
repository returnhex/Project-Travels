<script setup lang="ts">
defineProps({
  title: String,
})
</script>

<template>
     <section
    class="relative w-full grid place-items-center mx-auto h-[382px] bg-cover bg-center"
    style="background-image: url('/ocean.png')"
  ><div class="absolute inset-0 bg-[#0D4E1B] opacity-50"></div>
  <div class="relative z-10 max-w-[952px] flex flex-col items-center gap-6 text-white">
    <h1 class="text-2xl md:text-3xl lg:text-5xl font-bold">{{ title }}</h1>
    <div class="flex gap-1 items-center justify-center">
        <img src="/home-icon.svg" class="w-[20px] h-[20px] md:w-[28px] md:h-[28px]"/>
        <p class="font-medium text-sm md:text-lg lg:text-xl">Home</p>
        <img src="/right-arrow-white.svg" class="w-[28px] h-[28px] md:w-[38px] md:h-[38px]"/>
        <p class="font-medium text-sm md-text-lg lg:text-xl">{{ title }}</p>
    </div>
  </div>
  </section>
</template>