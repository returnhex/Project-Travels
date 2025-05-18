<script setup lang="ts"></script>

<template>
  <section
    class="relative w-full mx-auto h-[820px] bg-cover bg-center"
    style="background-image: url('/heroImage.png')"
  >
    <div class="absolute inset-0 bg-black opacity-40"></div>

    <div
      class="relative max-w-[1440px] mx-auto z-10 flex items-center justify-start h-full"
    >
      <div
        class=" max-w-[950px] px-4 lg:px-4 flex flex-col items-start justify-start text-white gap-8 md:gap-12"
      > 
        <p class="text-sm sm:text-lg md:text-[24px] font-bold mb-2">Making Travel Easy</p>
        <h1 class="text-2xl ms:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] font-bold  mb-4">
          Don't just imagine it, make it happen.
          <span class="text-white">Travel</span>
        </h1>
        <p class="text-sm sm:text-[18px] font-medium mb-6">
          Thinking of taking a break from every day’s life? Don't worry, we take
          care of your trip. Thinking of taking a break from every day’s life?
          Don't worry, we take care of your trip.
        </p>
        <button
          class="bg-[#EC1E24] text-white px-6 py-2 text-sm md:text-[18px] font-semibold rounded shadow-lg flex items-center gap-3"
        >
          Contact Us <img src="/arrowRight.svg" class="w-4 h-4 md:w-6 md:h-6"/>
        </button>
      </div>
    </div>
  </section>
</template>
