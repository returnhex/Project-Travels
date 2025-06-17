<script setup lang="ts">
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "/assets/css/main.css";
import "/assets/css/package-swiper.css";
import { packageImages } from "../constant/index";
</script>

<template>
  <div class="container mx-auto py-8 overflow-hidden">
    <div class="text-center mb-10">
      <div class="flex justify-center items-center mx-auto gap-2">
        <NuxtImg src="/Vector.png" width="20" height="20" alt="vector" />
        <p class="text-green font-semibold leading-[32px] text-lg md:text-xl">
          Package Bundles
        </p>
      </div>
      <h2
        class="text-xl md:text-2xl xl:text-2xl 2xl:text-5xl leading-[50px] xl:leading-[64px] text-dark-gray font-bold"
      >
        Our Package Bundles
      </h2>
      <p
        class="text-gray font-medium text-base leading-relaxed max-w-2xl mx-auto px-4 md:px-0"
      >
        The statement implies a willingness to help someone escape their daily
        routine by taking care of their travel plans. It suggests a travel
        agency or similar service.
      </p>
    </div>

    <Swiper
      :modules="[Navigation, Pagination, Keyboard]"
      :slides-per-view="1"
      :space-between="10"
      :keyboard="{ enabled: true }"
      :pagination="{ clickable: true }"
      :breakpoints="{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }"
      class="px-4 md:px-6 py-8 swiper swiper--offset-small"
    >
      <SwiperSlide v-for="(img, index) in packageImages" :key="index">
        <PackageCard :image="img" />
      </SwiperSlide>
    </Swiper>

    <div
      class="relative -bottom-3.5 flex items-center px-3 md:px-0 w-full h-20"
    >
      <div class="ml-auto">
        <Button5 title="Explore Now" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.swiper {
  position: relative;
  overflow: visible;
}

/* .swiper-pagination-bullet {
  background-color: green;
  width: 15px;
  height: 15px;
}
.swiper-pagination {
  bottom: -50px !important;
  position: absolute !important;
} */
</style>
