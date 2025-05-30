<script setup>
import blogImg1 from "@/assets/image/blog1.png";
import blogImg2 from "@/assets/image/blog2.png";
import blogImg3 from "@/assets/image/blog3.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import Button2 from "./Button2.vue";
// import "/assets/css/package-swiper.css";
const cards = [
  {
    image: blogImg1,
    date: "December 4, 2024",
    title: "The Surfing Man Will Blow Your Mind",
    description:
      "Keeping the structure clear and focusing on what makes special, travelers.",
  },
  {
    image: blogImg2,
    date: "December 4, 2024",
    title: "The Surfing Man Will Blow Your Mind",
    description:
      "Keeping the structure clear and focusing on what makes special, travelers.",
  },
  {
    image: blogImg3,
    date: "December 4, 2024",
    title: "The Surfing Man Will Blow Your Mind",
    description:
      "Keeping the structure clear and focusing on what makes special, travelers.",
  },
  {
    image: blogImg1,
    date: "December 4, 2024",
    title: "The Surfing Man Will Blow Your Mind",
    description:
      "Keeping the structure clear and focusing on what makes special, travelers.",
  },
  {
    image: blogImg2,
    date: "December 4, 2024",
    title: "The Surfing Man Will Blow Your Mind",
    description:
      "Keeping the structure clear and focusing on what makes special, travelers.",
  },
];
</script>

<template>
  <section class="bg-[url('/assets/image/blogbg.png')]">
    <div class="text-center mb-10 container mx-auto px-4 py-40 overflow-hidden">
      <div class="flex justify-center items-center mx-auto gap-2">
        <img src="/assets/image/Vector.png" alt="" />
        <p class="text-green font-semibold leading-[32px] text-lg md:text-xl">Our Blogs</p>
      </div>
      <h2
        class="text-xl md:text-2xl xl:text-2xl 2xl:text-5xl leading-[50px] xl:leading-[64px]
        text-dark-gray font-bold pb-8"
      >
        Our Latest Blog
      </h2>

      <Swiper
        :modules="[Navigation, Pagination, Keyboard, Autoplay]"
        :slides-per-view="1"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :loop="true"
        :space-between="20"
        :keyboard="{ enabled: true }"
        :pagination="{ clickable: true }"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }"
        class="px-4 sm:px-12 xl:px-0 swiper swiper--offset-large"
      >
        <SwiperSlide
          v-for="(card, index) in cards"
          :key="index"
          class="flex justify-center"
        >
          <div
            class="relative flex flex-col items-center mx-auto w-full h-[350px] md:h-[450px] 2xl:h-[624px]"
          >
            <!-- Main Image -->
            <img
              :src="card.image"
              alt="Blog Image"
              class="w-full h-auto rounded-lg object-cover"
            />

            <!-- Content Card -->
            <div
              class="bg-[#F8F8F8] max-w-[90%] md:h-[300px] lg:h-[275px] rounded-lg px-6 py-2 absolute -bottom-20 shadow-2xl overflow-visible"
            >
              <!-- Top Row -->
              <div class="flex justify-between items-center mb-3">
                <div class="flex items-center space-x-2 text-sm text-gray">
                  <img
                    src="/assets/image/icon/calendericon.png"
                    alt=""
                    class="h-4 max-w-6"
                  />
                  <p
                    class="font-medium text-base leading-relaxed text-dark-gray"
                  >
                    {{ card.date }}
                  </p>
                </div>
                <button
                  class="font-[500] text-base leading-relaxed text-dark-gray px-4 py-2 bg-[#DDDDDD] rounded-2xl"
                >
                  Travel
                </button>
              </div>

              <!-- Title -->
              <h1
                class="font-semibold text-lg sm:text-xl leading-[32px] py-2 sm:py-4 text-start"
              >
                {{ card.title }}
              </h1>

              <!-- Description -->
              <p
                class="font-medium text-base text-dark-gray leading-relaxed pb-2 text-start"
              >
                {{ card.description }}
              </p>

              <!-- Bottom Row -->
              <div
                class="flex flex-col gap-2 sm:flex-row justify-between items-center"
              >
                <div class="flex items-center space-x-2 text-sm text-gray-600">
                  <img
                    src="/assets/image/icon/admin.png"
                    alt="admin"
                    class="h-4 max-w-7"
                  />
                  <p class="font-medium text-base text-dark-gray">Admin</p>
                </div>
                <!-- <button
                  class="flex items-center font-semibold text-base text-red border border-red rounded-lg px-2 md:px-4 py-2 gap-2 hover:shadow-lg"
                >
                  More Details
                  <img
                    src="/assets/image/icon/rightarrow.png"
                    alt="arrow"
                    class="max-w-4 h-4"
                  />
                </button> -->
                <NuxtLink to="/blogs">
                  <Button7 title="More Details" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div
        class="relative -bottom-30 flex items-center px-3 md:px-0 w-full h-20"
      >
        <div class="ml-auto">
          <Button5 title="Explore Now" />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.swiper {
  position: relative;
  overflow: visible;
}
.swiper-pagination-bullet-active {
  background-color: green !important;
  width: 8px;
  height: 8px;
  position: relative;
  top: -10px;
}

.swiper--offset-large .swiper-pagination {
  bottom: -150px !important;
  position: absolute !important;
}
@media (min-width: 768px) {
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
  }
}

@media (min-width: 1024px) {
  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
  }
}
</style>
