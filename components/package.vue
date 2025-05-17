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
      <h2 class="text-3xl leading-[64px] text-gray font-bold mt-2">
        Our Package Bundles
      </h2>
      <p
        class="text-gray font-medium text-base leading-relaxed mt-2 max-w-2xl mx-auto"
      >
        The statement implies a willingness to help someone escape their daily
        routine by taking care of their travel plans. It suggests a travel
        agency or similar service.
      </p>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-10"
    >
      <package-card v-for="(img, index) in images" :key="index" :image="img" />
    </div>

    <div
      class="mt-10 w-full flex flex-col md:flex-row gap-4 items-center justify-between px-4 md:px-8"
    >
      <div class="flex justify-center">
        <img
          src="/assets/image/Slider.png"
          alt="Slider"
          class="h-auto max-w-full"
        />
      </div>

      <div class="flex justify-end">
        <button
          class="flex items-center font-semibold text-base leading-relaxed text-red border-1 border-red rounded-lg px-4 py-2 gap-2"
        >
          Explore More <img src="/assets/image/icon/rightarrow.png" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>
