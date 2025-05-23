<script setup lang="ts">
import packageImg1 from "@/assets/image/image1.png";
import packageImg2 from "@/assets/image/image2.png";
import packageImg3 from "@/assets/image/image3.png";
import {
  default as packageImg4,
  default as packageImg5,
  default as packageImg6,
  default as packageImg7,
  default as packageImg8,
} from "@/assets/image/image4.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "/assets/css/main.css";
import "/assets/css/package-swiper.css";
// import "/assets/css/package.css";

const images = [
  packageImg1,
  packageImg2,
  packageImg3,
  packageImg4,
  packageImg5,
  packageImg6,
  packageImg7,
  packageImg8,
];
</script>

<template>
  <div class="container mx-auto py-8 overflow-hidden">
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
        1280: { slidesPerView: 4 },
      }"
      class="px-4 md:px-6 py-8 swiper swiper--offset-small"
    >
      <SwiperSlide v-for="(img, index) in images" :key="index">
        <PackageCard :image="img" />
      </SwiperSlide>
    </Swiper>

    <div class="relative -bottom-3.5 flex items-center px-3 md:px-0 w-full h-20">
      
      <div class="ml-auto">

        <Button5 title="Explore Now"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.swiper {
  position: relative;
  overflow: visible;
}

.swiper-pagination-bullet {
  background-color: green;
  /* bottom: -60px; */
  width: 15px;
  height: 15px;
}
.swiper-pagination {
  bottom: -50px !important;
  position: absolute !important;
}
</style>
