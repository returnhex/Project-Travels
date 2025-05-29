<script setup lang="ts">
import img1 from "@/assets/image/testimonial1.png";
import img2 from "@/assets/image/testimonial2.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
const testimonials = [
  {
    quote:
      "Our family trip to the Maldives was magical! From the booking to the resort, everything was perfectly organized. The team even surprised us with a sunset dinner. Thank you for making this unforgettable!",
    rating: 5,
    name: "Sarah Karim",
    role: "Manager at Banoi LifeStyle",
    image: img1,
  },
  {
    quote:
      "Booking through this travel site was the best decision we made! Our entire trip—from flights to local experiences—was seamless and thoughtfully planned. The accommodations were top-notch, and every destination felt like a dream. Truly an unforgettable journey!",
    rating: 5,
    name: "Abdul Ahad Linkon",
    role: "Travel Blogger",
    image: img2,
  },
];
</script>

<template>
  <section class="px-4 md:px-12 py-16 max-w-[1440px] mx-auto overflow-hidden">
    <!-- Fixed Header Section -->
    <div class="mb-8 lg:mb-12 flex flex-col justify-center">
      <div class="flex justify-center items-center gap-2">
        <img src="/assets/image/Vector.png" alt="Testimonial icon" >
        <p class="text-green font-semibold text-lg md:text-xl leading-[32px] mb-1">
          Testimonial
        </p>
      </div>
      <h2
        class="text-xl md:text-2xl xl:text-2xl 2xl:text-5xl leading-[50px] xl:leading-[64px] text-dark-gray font-bold mb-2 text-center"
      >
        Experiences Shared By Our Customers
      </h2>
      <p
        class="text-gray text-lg leading-relaxed font-medium mb-6 max-w-lg mx-auto text-center"
      >
        The statement implies a willingness to help someone escape their daily
        routine by taking care of their travel plans. It suggests a travel
        agency or similar service.
      </p>
    </div>

    <div class="w-full overflow-hidden">
      <!-- Swiper with Responsive Breakpoints -->
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
            class="flex flex-col xl:flex-row gap-0 md:gap-4 justify-center items-center overflow-hidden"
          >
            <!-- Image Section -->
            <div class="w-full flex justify-center relative">
              <img
                :src="testimonial.image"
                alt="Customer"
                class="object-cover z-50 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:max-w-[464px] md:max-h-[608px] rounded-full"
              >
            </div>

            <!-- Content Section -->
            <div class="w-full px-2">
              <div
                class="bg-[#F2F4F7] p-4 md:p-6 rounded-lg border-l-3 border-green max-w-[756px] h-[344px] mx-auto lg:mx-0"
              >
                <p
                  class="text-black font-medium text-base md:text-xl leading-[28px] md:leading-[32px] mb-4 text-start"
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
              src="/assets/image/leftarrowred.png"
              class="swiper-prev cursor-pointer w-8 h-8 md:w-10 md:h-10 hover:opacity-80 transition-opacity"
              alt="Previous"
            >
            <img
              src="/assets/image/rightarrow.png"
              class="swiper-next cursor-pointer w-8 h-8 md:w-10 md:h-10 hover:opacity-80 transition-opacity"
              alt="Next"
            >
          </div>
      </Swiper>
    </div>
  </section>
</template>
