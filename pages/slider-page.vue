<script setup>
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
import "/assets/css/main.css";
import "/assets/css/slider-swiper.css";
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
  <div class="px-4 md:px-6 py-8">
    <slider />
    <!-- <Swiper
      :modules="[Navigation, Pagination, Keyboard]"
      :slides-per-view="4"
      :space-between="10"
      :keyboard="{ enabled: true }"
      :pagination="{ clickable: true }"
      :navigation="true"
      class="mySwiper"
    >
      <SwiperSlide
        v-for="(img, index) in images"
        :key="index"
        class="bg-white max-w-[380px] w-full rounded-xl border border-light-gray shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col items-center mx-auto px-2 py-2"
      >
        <img
          :src="img"
          alt="Package"
          class="w-[360px] sm:w-[330px] h-[326px] object-cover rounded-lg"
        />
        <div class="p-4 w-full">
          <h3 class="text-xl font-semibold text-navy leading-loose py-2">
            Asian Discovery: Temple Traditions, Tastings
          </h3>
          <div class="flex gap-2 pb-2 items-center">
            <img
              src="/assets/image/location.png"
              class="w-5 h-4"
              alt="location"
            />
            <p class="text-sm text-gray-500 mt-1">London, UK</p>
          </div>
          <div class="h-[1px] bg-[#D2D2D2]" />

          <div class="flex justify-between items-center mt-4 text-sm">
            <div class="flex gap-2">
              <img src="/assets/image/icon/clock.png" alt="clock" />
              <p class="text-dark-gray">6 Days, 5 Night</p>
            </div>
            <button
              class="font-medium text-[14px] leading-[20px] bg-red hover:bg-white text-white hover:text-red hover:border hover:border-red px-4 py-2 rounded-lg transition"
            >
              Explore Now
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper> -->
  </div>
</template>
