<script setup lang="ts">
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { testimonials } from "../constant/index";
</script>

<template>
  <section class="px-4 md:px-12 py-16 max-w-[1440px] mx-auto overflow-hidden">
    <!-- Fixed Header Section -->
    <div class="mb-8 lg:mb-12 flex flex-col justify-center">
      <div class="flex justify-center items-center gap-2">
        <NuxtImg
          src="image/Vector.png"
          alt="Testimonial icon"
          width="20"
          height="20"
        />
        <p
          class="text-green font-semibold text-lg md:text-xl leading-[32px] mb-1"
        >
          Testimonial
        </p>
      </div>
      <h2
        class="text-xl md:text-2xl xl:text-2xl 2xl:text-5xl leading-[50px] xl:leading-[64px] text-dark-gray font-bold mb-2 text-center"
      >
        Experiences Shared By Our Customers
      </h2>
      <p
        class="text-gray text-lg leading-relaxed font-medium mb-6 max-w-xl mx-auto text-center"
      >
        The statement implies a willingness to help someone escape their daily
        routine by taking care of their travel plans. It suggests a travel
        agency or similar service.
      </p>
    </div>

    <div class="w-full overflow-hidden">
      <!-- Swiper with Responsive Breakpoints -->
      <ClientOnly>
        <Swiper
        :modules="[Navigation, Pagination, Keyboard, Autoplay]"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :loop="true"
        :slides-per-view="1"
        :space-between="10"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true,
        }"
        :navigation="{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }"
        :keyboard="{ enabled: true }"
        class=""
      >
        <SwiperSlide
          v-for="(testimonial, idx) in testimonials"
          :key="idx"
          class="overflow-hidden"
        >
          <div
            class="flex flex-col xl:flex-row gap-4 justify-center items-center overflow-hidden"
          >
            <!-- Image Section -->
            <div
              class="flex-1 w-[300px] sm:w-[350px] md:w-[464px] h-[350px] xl:h-[608px] flex justify-center relative"
            >
              <NuxtImg
                :src="testimonial.image"
                :alt="`Photos of ${testimonial.name}`"
                class="object-cover z-50 h-full w-full rounded-full"
              />
            </div>

            <!-- Content Section -->
            <div class="px-2 flex justify-center">
              <div
                class="bg-[#F2F4F7] p-4 md:p-6 rounded-lg border-l-3 border-green max-w-[500px] lg:max-w-[550px] xl:max-w-[756px] h-auto mx-auto lg:mx-0"
              >
                <p
                  class="text-black font-medium text-sm md:text-base xl:text-lg 2xl:text-xl leading-[28px] md:leading-[32px] mb-2 md:mb-4 text-start line-clamp-4"
                >
                  {{ testimonial.quote }}
                </p>
                <div>
                  <div
                    class="flex items-center text-[#F4A004] text-base md:text-lg mb-2 gap-1"
                  >
                    <span v-for="n in 5" :key="n">★</span>
                  </div>
                  <p
                    class="font-semibold text-black text-base md:text-xl leading-[28px] md:leading-[32px] text-start"
                  >
                    {{ testimonial.name }}
                  </p>
                  <p
                    class="font-medium text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] text-black text-start"
                  >
                    {{ testimonial.role }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div class="flex gap-2 justify-end ml-auto mr-0">
          <img
            src="/image/leftarrowred.png"
            class="swiper-next cursor-pointer w-8 h-8 md:w-10 md:h-10 hover:opacity-80 transition-opacity"
            alt="Previous"
          />
          <img
            src="/image/rightarrow.png"
            class="swiper-prev cursor-pointer w-8 h-8 md:w-10 md:h-10 hover:opacity-80 transition-opacity"
            alt="Next"
          />
        </div>
      </Swiper>
      </ClientOnly>
    </div>
  </section>
</template>
