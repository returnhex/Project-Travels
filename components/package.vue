<script setup lang="ts">
import packageImg1 from "@/assets/image/image1.png";
import packageImg2 from "@/assets/image/image2.png";
import packageImg3 from "@/assets/image/image3.png";
import packageImg4 from "@/assets/image/image4.png";

const images = [packageImg1, packageImg2, packageImg3, packageImg4];
</script>

<template>
  <div class="container mx-auto py-8">
    <div class="text-center mb-10">
      <div class="flex justify-center items-center mx-auto gap-2">
        <img src="/assets/image/Vector.png" alt="" />
        <p class="text-green font-semibold leading-[32px] text-xl">
          Package Bundles
        </p>
      </div>
      <h2
        class="text-2xl md:text-3xl leading-[64px] text-dark-gray font-bold mt-2"
      >
        Our Package Bundles
      </h2>
      <p
        class="text-gray font-medium text-base leading-relaxed mt-2 max-w-2xl mx-auto px-4 md:px-0"
      >
        The statement implies a willingness to help someone escape their daily
        routine by taking care of their travel plans. It suggests a travel
        agency or similar service.
      </p>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 xl:gap-6 px-4 md:px-6 xl:px-6 py-8"
    >
      <package-card v-for="(img, index) in images" :key="index" :image="img" />
    </div>

    <div class="relative flex items-center px-3 md:px-0 w-full h-20">
      <div class="absolute left-1/2 transform -translate-x-1/2 flex gap-1">
        <div class="w-2 h-2 md:w-3 md:h-3 bg-[#2E8942] rounded-full" />
        <div class="w-2 h-2 md:w-3 md:h-3 bg-[#BDBDBD] rounded-full" />
        <div class="w-2 h-2 md:w-3 md:h-3 bg-[#BDBDBD] rounded-full" />
        <div class="w-2 h-2 md:w-3 md:h-3 bg-[#BDBDBD] rounded-full" />
      </div>

      <button
        class="ml-auto flex items-center gap-1 md:gap-2 px-3 py-2 md:px-6 md:py-3 rounded-lg border border-red text-red text-sm mg:text-[1rem] font-semibold cursor-pointer hover:shadow-lg"
      >
        Explore Now <img src="/red-arrow.svg" />
      </button>
    </div>
  </div>
</template>
