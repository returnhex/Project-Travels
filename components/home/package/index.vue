<script setup lang="ts">
const images = [
  "/image/image1.png",
  "/image/image2.png",
  "/image/image3.png",
  "/image/image4.png",
];
</script>

<template>
  <div class="container mx-auto py-8">
    <div class="text-center mb-10">
      <div class="flex justify-center items-center mx-auto gap-2">
        <img src="/image/Vector.png" alt="" />
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
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <PackageCard v-for="(img, index) in images" :key="index" :image="img" />
    </div>

    <div class="mt-10 w-full flex items-center justify-between px-4 md:px-8">
      <div class="flex-1 flex justify-center">
        <img src="/image/Slider.png" alt="Slider" class="h-auto max-w-full" />
      </div>

      <div class="flex justify-end">
        <button
          class="flex items-center font-semibold text-base leading-relaxed text-red border-1 border-red rounded-lg px-4 py-2 gap-2"
        >
          Explore More <img src="/image/icon/rightarrow.png" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>
