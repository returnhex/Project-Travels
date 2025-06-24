<template>
  <section
    class="relative bg-cover bg-center w-full h-auto py-3 md:py-10 lg:py-16 flex flex-col justify-center items-center overflow-hidden"
    style="background-image: url('/destination.png')"
  >
    <div
      class="container mx-auto px-4 flex flex-col justify-center items-center gap-2 md:gap-3 xl:gap-5 2xl:gap-10 overflow-hidden"
    >
      <div
        class="flex gap-2 md:gap-3 lg:gap-5 xl:gap-7 2xl:gap-10 flex-col items-center justify-center"
      >
        <p class="text-[#2E8942] font-semibold text-lg md:text-xl flex gap-3">
          <NuxtImg
            src="image/double-arrow.svg"
            alt="double-arrow"
            width="30"
            height="30"
          />
          Destination List
        </p>
        <h2
          class="text-xl md:text-2xl xl:text-2xl 2xl:text-5xl text-center font-bold text-[#3C3C3C]"
        >
          ✈️ Travel with BdiGo – It's Always a Pleasant Journey
        </h2>
      </div>

      <div class="flex justify-center gap-4 mb-2 xl:mb-5 2xl:mb-10">
        <Button1 title="Domestic" @click="selectedCategory = 'domestic'" />
        <Button4
          title="International"
          @click="selectedCategory = 'international'"
        />
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
            v-for="(place, i) in filteredPlaces"
            :key="i"
            class="rounded-full"
          >
            <div
              class="flex-shrink-0 flex max-w-[240px] md:max-w-[270px] lg:max-w-[320px] xl:max-w-[350px] 2xl:max-w-[464px] justify-center items-center overflow-hidden mx-auto"
            >
              <div
                class="rounded-full h-[310px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[608px] w-[240px] md:min-w-[270px] lg:min-w-[320px] xl:w-[350px] 2xl:w-[464px] bg-cover bg-center relative overflow-hidden flex justify-center mx-auto"
                :style="{ backgroundImage: `url(${place.image})` }"
              >
                <div
                  class="absolute flex flex-col items-center justify-center bottom-5 w-[85%] h-[150px] md:h-[160px] xl:h-[210px] 2xl:h-[250px] px-3 py-3 md:px-6 md:py-6 bg-white rounded-b-full text-center"
                >
                  <div
                    class="absolute -top-5 md:-top-7 xl:-top-7 px-3 py-1 md:px-6 md:py-3 bg-white w-[162px] h-[30px] md:h-[40px] xl:h-[48px] flex items-center justify-center gap-2 rounded-lg"
                  >
                    <NuxtImg
                      src="image/location.svg"
                      class="max-w-5 md:max-w-6 max-h-6"
                      alt="loction"
                      width="5"
                      height="2"
                    />
                    <p
                      class="font-semibold text-sm md:text-[1rem] text-[#383838]"
                    >
                      36 Listing
                    </p>
                  </div>
                  <div
                    class="flex flex-col gap-1 lg:gap-1 xl:gap-1 2xl:gap-2 justify-center items-center"
                  >
                    <p class="text-[#2E8942] text-sm md:text-[1rem] font-[600]">
                      Place In
                    </p>
                    <h3
                      class="text-sm md:text-lg xl:text-[2rem] font-[600] text-[#383838]"
                    >
                      {{ place.name }}
                    </h3>
                    <p
                      class="text-[#383838] text-sm md:text-[1rem] font-medium"
                    >
                      Explore World & Get Relax
                    </p>

                    <NuxtLink to="/destination">
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
import { ref, computed } from "vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "~/assets/css/package-swiper.css";
import { places } from "../constant/index";

const selectedCategory = ref("all");

// Filtered list based on selected category
const filteredPlaces = computed(() => {
  if (selectedCategory.value === "all") return places;
  return places.filter((place) => place.category === selectedCategory.value);
});
</script>
<style scoped>
.swiper {
  position: relative;
  overflow: visible;
}
</style>
