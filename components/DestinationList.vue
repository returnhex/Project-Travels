<template>
  <section
    id="destination"
    class="relative bg-cover bg-center w-full h-auto py-3 md:py-10 lg:py-16 flex flex-col justify-center items-center overflow-hidden"
    style="background-image: url('/destination.png')"
  >
    <div
      class="container mx-auto px-4 flex flex-col justify-center items-center gap-5 md:gap-10 overflow-hidden"
    >
      <div class="flex gap-5 md:gap-10 flex-col items-center justify-center">
        <p class="text-[#2E8942] font-semibold text-xl md:text-2xl flex gap-3">
          <img src="/double-arrow.svg" /> Destination List
        </p>
        <h2 class="text-2xl lg:text-3xl text-center font-bold text-[#3C3C3C]">
          Uncover Hidden Gems Around World
        </h2>
      </div>

      <div class="flex justify-center gap-4 mb-7 md:mb-10">
        <Button1 title="Domestic" />
        <Button4 title="International" />
      </div>
      <section
        class="w-full px-4 md:px-6 lg:px-12 overflow-hidden swiper swiper--offset-tosmall"
      >
        <Swiper
          :modules="[Navigation, Pagination, Keyboard, Autoplay]"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :loop="true"
          :slides-per-view="1"
          :space-between="20"
          :keyboard="{ enabled: true }"
          :pagination="{ clickable: true }"
          :breakpoints="{
            480: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 1, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 28 },
            1024: { slidesPerView: 2, spaceBetween: 80 },
            1280: { slidesPerView: 3, spaceBetween: 52 },
            1536: { slidesPerView: 3, spaceBetween: 80 },
          }"
          class="w-full py-4"
        >
          <SwiperSlide
            v-for="(place, i) in places"
            :key="i"
            class="flex justify-center items-center rounded-full"
          >
            <div class="flex-shrink-0 w-full max-w-[464px]">
              <div
                class="rounded-full h-[608px] w-full max-w-[464px] p-5 md:p-7 lg:p-10 bg-cover bg-center relative overflow-hidden"
                :style="{ backgroundImage: `url(${place.image})` }"
              >
                <div
                  class="absolute flex flex-col items-center justify-center bottom-5 left-5 right-5 md:bottom-7 md:left-7 md:right-7 xl:bottom-10 xl:left-10 xl:right-10 h-[250px] md:h-[304px] px-3 py-3 md:px-6 md:py-6 bg-white rounded-b-full text-center"
                >
                  <div
                    class="absolute -top-7 px-3 py-1 md:px-6 md:py-3 bg-white w-[162px] h-[48px] flex items-center justify-center gap-2 rounded-lg"
                  >
                    <img
                      src="/location.svg"
                      class="max-w-5 md:max-w-6 max-h-6"
                    />
                    <p
                      class="font-semibold text-sm md:text-[1rem] text-[#383838]"
                    >
                      36 Listing
                    </p>
                  </div>
                  <div class="flex flex-col gap-3 justify-center items-center">
                    <p class="text-[#2E8942] text-sm md:text-[1rem] font-bold">
                      Place In
                    </p>
                    <h3
                      class="text-[1rem] md:text-[2rem] font-bold text-[#383838]"
                    >
                      {{ place.name }}
                    </h3>
                    <p
                      class="text-[#383838] text-sm md:text-[1rem] font-medium"
                    >
                      Explore World & Get Relax
                    </p>

                    <NuxtLink to="/destinations">
                      <Button2 title="Explore Now" />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <div
        class="relative -bottom-3.5 flex items-center px-3 md:px-0 w-full h-20"
      >
        <NuxtLink to="/destinations" class="ml-auto">
          <Button5 title="Explore More" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { japan, spain, thailand } from "~/assests/DestinationList";
import "~/assets/css/package-swiper.css";

const places = [
  {
    name: "Japan",
    image: japan,
  },
  {
    name: "Thailand",
    image: thailand,
  },
  {
    name: "Spain",
    image: spain,
  },
  {
    name: "Japan",
    image: japan,
  },
  {
    name: "Thailand",
    image: thailand,
  },
  {
    name: "Spain",
    image: spain,
  },
];
</script>
<style scoped>
.swiper {
  position: relative;
  overflow: visible;
}
</style>
