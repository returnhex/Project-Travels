<script setup>
// import slideImg2 from "@/assets/image/destination/overviewBg.png";
import slideImg1 from "@/assets/image/package1.jpg";
import slideImg2 from "@/assets/image/package2.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "/assets/css/main.css";
import "/assets/css/package-swiper.css";
const images = [slideImg1, slideImg2];
</script>

<template>
  <section class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
    <!-- Header Image -->
    <div class="relative overflow-hidden">
      <Swiper
        :modules="[Navigation, Pagination, Keyboard, Autoplay]"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :loop="true"
        :slides-per-view="1"
        :space-between="20"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true,
        }"
        :navigation="{
          nextEl: '.swiper-prev ',
          prevEl: '.swiper-next',
        }"
        :keyboard="{ enabled: true }"
        class="w-full px-4 md:px-6 py-8"
      >
        <SwiperSlide v-for="(slide, index) in images" :key="index">
          <div class="relative">
            <img
              :src="slide"
              alt=""
              class="w-full min-h-[610px] sm:min-h-[300px] md:min-h-[400px] lg:max-h-[450px] rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <div
          class="flex justify-center items-center max-w-[220px] relative -top-11 mx-auto z-50 bg-white rounded-lg px-4 py-4 gap-2"
        >
          <img
            src="/assets/image/leftarrowred.png"
            class="swiper-prev custom-prev"
            alt=""
            loading="lazy"
          />
          <img
            src="/assets/image/rightarrow.png"
            class="swiper-next custom-next"
            alt=""
            loading="lazy"
          />
        </div>
      </Swiper>
    </div>
    <div class="max-w-7xl mx-auto px-4 py-10">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Main Content -->
        <div class="lg:w-8/12 w-full space-y-8">
          <!-- Overview -->
          <section>
            <h1
              class="text-2xl md:text-3xl font-[700] text-dark-gray leading-relaxed pb-4"
            >
              Overview
            </h1>
            <p
              class="text-base md:text-lg text-gray leading-relaxed font-[400] mt-2"
            >
              Discover unforgettable moments as you journey through breathtaking
              landscapes, vibrant cultures, and unique local experiences. Our
              packages are crafted to balance adventure and comfort, offering
              you the perfect blend of exploration and relaxation. Whether
              you're wandering through ancient cities, enjoying serene nature
              escapes, or immersing yourself in local traditions, each
              experience is designed to leave a lasting impression. With expert
              planning and seamless service, your only job is to enjoy the
              journey — we’ll handle the rest.
            </p>
          </section>

          <!-- Tour Destinations -->
          <section>
            <h1
              class="text-2xl md:text-3xl font-[700] text-dark-gray leading-relaxed pb-4"
            >
              Tour Packages
            </h1>
            <p
              class="text-base md:text-lg text-gray font-[400] leading-relaxed mt-2"
            >
              Picture a journey that blends adventure, culture, and serenity —
              that’s the essence of our Tour Packages. These aren’t just trips;
              they’re carefully crafted experiences designed to ignite your
              wanderlust. From the snow-capped peaks of the Himalayas to the
              sun-kissed shores of the Maldives, every destination promises
              something unforgettable. What makes our packages special is the
              seamless blend of comfort and exploration. Whether you’re trekking
              through ancient trails, savoring local cuisine in hidden
              alleyways, or relaxing in luxury stays with breathtaking views —
              each moment is curated for magic. We believe travel should not
              just be seen, but felt. That’s why our tours are led by passionate
              guides, filled with hidden gems, and built for memories that last
              a lifetime. Whether you crave adventure, romance, or peace, our
              tour packages are your gateway to the extraordinary. Once you
              experience the world this way, you’ll never travel the same again.
            </p>

            <img
              src="/assets/image/package3.jpg"
              alt="Tour"
              class="w-full h-auto mt-4 rounded-lg object-cover"
              loading="lazy"
            />
          </section>

          <!-- Included/Excluded -->
          <section>
            <h2
              class="text-2xl font-[700] text-dark-gray pb-2 border-b border-gray-200"
            >
              Included/Excluded
            </h2>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-gray-700 text-base"
            >
              <ul class="space-y-2">
                <li class="flex gap-3">
                  <img
                    src="/assets/image/icon/right.png"
                    class="h-6 w-6"
                    alt=""
                    loading="lazy"
                  />
                  Specialized Bilingual Guide
                </li>
                <li class="flex gap-3">
                  <img
                    src="/assets/image/icon/right.png"
                    class="h-6 w-6"
                    alt=""
                    loading="lazy"
                  />
                  Private Transport
                </li>
                <li class="flex gap-3">
                  <img
                    src="/assets/image/icon/right.png"
                    class="h-6 w-6"
                    alt=""
                    loading="lazy"
                  />
                  Entrance Fees, Snacks, and Mineral Water
                </li>
                <li class="flex gap-3">
                  <img
                    src="/assets/image/icon/right.png"
                    class="h-6 w-6"
                    alt=""
                    loading="lazy"
                  />
                  Excursion Between Sylhet and Bichnakandi
                </li>
              </ul>
              <ul class="space-y-2">
                <li class="flex gap-3">
                  <img
                    src="/assets/image/icon/cross.png"
                    class="h-6 w-6"
                    alt=""
                    loading="lazy"
                  />
                  Additional Services
                </li>
                <li class="flex gap-3">
                  <img
                    src="/assets/image/icon/cross.png"
                    class="h-6 w-6"
                    alt=""
                    loading="lazy"
                  />
                  Insurance
                </li>
                <li class="flex gap-3">
                  <img
                    src="/assets/image/icon/cross.png"
                    class="h-6 w-6"
                    alt=""
                    loading="lazy"
                  />
                  Personal expenses
                </li>
                <li class="flex gap-3">
                  <img
                    src="/assets/image/icon/cross.png"
                    class="h-6 w-6"
                    alt=""
                    loading="lazy"
                  />
                  Personal medicines
                </li>
              </ul>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="lg:w-4/12 w-full space-y-8">
          <div
            class="bg-white rounded-lg shadow-md border-1 border-gray-100 p-6 py-10 space-y-8"
          >
            <h3 class="text-xl leading-loose font-[700] text-green">
              Some Information
            </h3>
            <ul class="space-y-4 text-gray-700 text-sm">
              <li
                class="flex items-start justify-between border-b border-gray-200 pb-3"
              >
                <div class="flex gap-2 items-center">
                  <img
                    src="/assets/image/icon/rightSign.png"
                    alt=""
                    class="w-4 h-4"
                    loading="lazy"
                  />
                  <span class="font-medium">Country:</span>
                </div>
                <p class="font-semibold">Bangladesh</p>
              </li>
              <li
                class="flex items-start justify-between border-b border-gray-200 pb-3"
              >
                <div class="flex gap-2 items-center">
                  <img
                    src="/assets/image/icon/rightSign.png"
                    alt=""
                    class="w-4 h-4"
                    loading="lazy"
                  />
                  <span class="font-medium">Visa Requirements:</span>
                </div>
                <p class="font-semibold">Yes</p>
              </li>
              <li
                class="flex items-start justify-between border-b border-gray-200 pb-3"
              >
                <div class="flex gap-2 items-center">
                  <img
                    src="/assets/image/icon/rightSign.png"
                    alt=""
                    class="w-4 h-4"
                    loading="lazy"
                  />
                  <span class="font-medium">Time:</span>
                </div>
                <p class="font-semibold">2 Days, One Night</p>
              </li>
              <li
                class="flex items-start justify-between border-b border-gray-200 pb-3"
              >
                <div class="flex gap-2 items-center">
                  <img
                    src="/assets/image/icon/rightSign.png"
                    alt=""
                    class="w-4 h-4"
                    loading="lazy"
                  />
                  <span class="font-medium">Language:</span>
                </div>
                <p class="font-semibold">Bangla</p>
              </li>
            </ul>
          </div>
          <div
            class="py-6 px-3 space-y-4 border border-gray-200 shadow-md rounded-lg"
          >
            <h3
              class="text-xl font-[700] leading-loose text-green border-b border-gray-200 pb-3"
            >
              Location
            </h3>
            <div class="h-[400px] w-full rounded-3xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344262.5602632301!2d91.61807996100777!3d22.346439620194765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1747750566726!5m2!1sen!2sbd"
                width="600"
                height="450"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
