<script setup>
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { cards } from "../constant/index";
</script>

<template>
  <section class="bg-[url('/image/blogbg.webp')]">
    <div
      class="text-center mb-10 container mx-auto px-4 pt-20 pb-40 overflow-hidden"
    >
      <div class="flex justify-center items-center mx-auto gap-2">
        <NuxtImg
          src="image/Vector.png"
          format="webp"
          alt="double-arrow"
          width="20"
          height="20"
        />
        <p class="text-green font-semibold leading-[32px] text-lg md:text-xl">
          Our Blogs
        </p>
      </div>
      <h2
        class="text-xl md:text-2xl xl:text-2xl 2xl:text-5xl leading-[50px] xl:leading-[64px] text-dark-gray font-bold pb-8"
      >
        Our Latest Blog
      </h2>

     <ClientOnly>
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
            <NuxtImg
              :src="card.image"
              alt="Blog Image"
              class="w-full h-auto rounded-lg object-cover"
            />

            <!-- Content Card -->
            <div
              class="bg-[#F8F8F8] max-w-[90%] md:h-[300px] lg:h-[290px] rounded-lg px-6 py-2 absolute -bottom-20 shadow-2xl overflow-visible"
            >
              <!-- Top Row -->
              <div class="flex justify-between items-center mb-3">
                <div class="flex items-center space-x-2 text-sm text-gray">
                  <NuxtImg
                    src="image/icon/calendericon.png"
                    alt="calendericon"
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
                  <NuxtImg
                    src="image/icon/admin.png"
                    alt="admin"
                    class="h-4 max-w-7"
                  />
                  <p class="font-medium text-base text-dark-gray">Admin</p>
                </div>

                <NuxtLink to="/blogs">
                  <Button7 title="More Details" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
     </ClientOnly>

      <div
        class="relative -bottom-30 flex items-center px-3 md:px-0 w-full h-20"
      >
        <NuxtLink to="/blogs" class="ml-auto">
          <Button5 title="Explore Now" />
        </NuxtLink>
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
