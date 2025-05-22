<script setup lang="ts">
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const testimonials = [
  {
    quote:
      "Our family trip to the Maldives was magical! From the booking to the resort, everything was perfectly organized. The team even surprised us with a sunset dinner. Thank you for making this unforgettable!",
    rating: 5,
    name: "Sarah Karim",
    role: "Manager at Banoi LifeStyle",
  },
  {
    quote:
      "I can't recommend them enough! Our European tour was flawless—from charming hotels to expert guides. Every detail was handled with care. We made memories that will last a lifetime.",
    rating: 5,
    name: "John Doe",
    role: "CEO at Wanderlust Inc.",
  },
  {
    quote:
      "Amazing experience! The safari trip exceeded all expectations. Wildlife sightings, luxury tents, and incredible guides—an adventure we’ll never forget.",
    rating: 5,
    name: "Emily Chen",
    role: "Travel Blogger",
  },
];
</script>

<template>
  <section class="px-4 md:px-12 py-16 container mx-auto overflow-hidden">
    <div class="flex flex-col lg:flex-row gap-10 items-center">
      <!-- Left: Profile Image -->
      <div class="flex w-full lg:w-1/2 justify-center relative">
        <img
          src="/assets/image/testimonial.png"
          alt="Customer"
          class="object-cover z-50"
        />
      </div>

      <!-- Right: Testimonial Content -->
      <div class="w-full lg:w-1/2 px-4 mt-8 lg:mt-0 overflow-hidden">
        <div class="flex justify-start items-center gap-2">
          <img src="/assets/image/Vector.png" alt="" />
          <p class="text-green font-semibold text-xl leading-[32px] mb-1">
            Testimonial
          </p>
        </div>
        <h2
          class="text-xl md:text-3xl leading-xl md:leading-[64px] text-dark-gray font-bold mb-2"
        >
          Experiences Shared By Our Customers
        </h2>
        <p
          class="text-gray text-base leading-relaxed font-medium mb-6 max-w-lg"
        >
          The statement implies a willingness to help someone escape their daily
          routine by taking care of their travel plans. It suggests a travel
          agency or similar service.
        </p>
        <Swiper
          :modules="[Navigation, Pagination, Keyboard, Autoplay]"
          :autoplay="{ delay: 3000, disableOnInteraction: false}"
          :loop="true"
          :slides-per-view="1"
          :space-between="20"
          :pagination="{
            el: '.swiper-pagination',
            clickable: true,
          }"
          :navigation="{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }"
          :keyboard="{ enabled: true }"
          class="w-full px-4 md:px-6 py-8"
        >
          <SwiperSlide
            v-for="(testimonial, idx) in testimonials"
            :key="idx"
            class="bg-[#F2F4F7] p-6 rounded-lg border-l-3 border-green w-[467px]"
          >
            <p
              class="text-black font-medium text-lg md:text-xl leading-[32px] mb-4 text-start"
            >
              {{ testimonial.quote }}
            </p>
            <div>
              <div class="flex items-center text-[#F4A004] text-lg mb-2 gap-1">
                <span v-for="n in 5" :key="n">★</span>
              </div>

              <p
                class="font-semibold text-black text-lg sm:text-xl leading-[32px] text-start"
              >
                {{ testimonial.name }}
              </p>
              <p
                class="font-medium text-[20px] leading-[28px] text-black text-start"
              >
                {{ testimonial.role }}
              </p>
            </div>
          </SwiperSlide>

          <div class="flex justify-between items-center mt-6 space-x-4">
            <button
              class="flex items-center font-semibold text-base leading-relaxed text-red border-1 border-red rounded-lg px-4 py-2 gap-2 hover:shadow-lg cursor-pointer"
            >
              See All <img src="/assets/image/icon/rightarrow.png" alt="" />
            </button>
            <div class="flex">
              <img
                src="/assets/image/leftarrowred.png"
                class="swiper-next custom-next"
                alt=""
              />
              <img
                src="/assets/image/rightarrow.png"
                class="swiper-prev custom-prev"
                alt=""
              />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  </section>
</template>
