<script setup lang="ts">
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { destinations } from "~/constant";
import "/assets/css/main.css";
import "/assets/css/package-swiper.css";

const route = useRoute();
const key = route.query.key as string | undefined;

const id = key ? parseInt(key, 10) : NaN;

if (isNaN(id)) {
  navigateTo("/destinations");
}

const findTourById = (id: number) => {
  for (const country of destinations) {
    if (country.packages) {
      const find = country.packages.find((p) => p.id === id);
      if (find) return find;
    }
    if (country.divisions) {
      for (const div of country.divisions) {
        const find = div.packages.find((p) => p.id === id);
        if (find) return find;
      }
    }
  }
  return null;
};
const tour = findTourById(id);

const data = {
  id: tour?.id,
  title: tour?.title,
  location: tour?.location,
  duration: tour?.duration,
  images: {
    image: tour?.image,
    image2: tour?.image2,
  },
  country: tour?.country,
  overview: tour?.overview,
  tourPackages: tour?.tourPackages,
  map: tour?.map,
};

if (!tour) {
  navigateTo("/");
}
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
        <SwiperSlide v-for="(slide, index) in data.images" :key="index">
          <div class="relative">
            <img
              :src="slide"
              alt=""
              class="w-full max-h-[410px] min-h-[400px] sm:min-h-[300px] md:min-h-[400px] lg:max-h-[450px] rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <div
          class="flex justify-center items-center max-w-[150px] lg:max-w-[220px] relative -top-11 mx-auto z-50 bg-white rounded-lg px-2 py-2 lg:px-4 lg:py-4 gap-2"
        >
          <img
            src="/image/leftarrowred.png"
            class="swiper-prev custom-prev"
            alt=""
            loading="lazy"
          />
          <img
            src="/image/rightarrow.png"
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
              {{ data.overview }}
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
              {{ data.tourPackages }}
            </p>

            <img
              :src="data.images.image"
              alt="Tour"
              class="w-full h-auto max-h-[450px] lg:max-h-[550px] mt-4 rounded-lg object-cover"
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
                    src="/image/icon/right.png"
                    class="h-6 w-6"
                    alt=""
                    loading="lazy"
                  />
                  Specialized Bilingual Guide
                </li>
                <li class="flex gap-3">
                  <img
                    src="/image/icon/right.png"
                    class="h-6 w-6"
                    alt=""
                    loading="lazy"
                  />
                  Private Transport
                </li>
                <li class="flex gap-3">
                  <img
                    src="/image/icon/right.png"
                    class="h-6 w-6"
                    alt=""
                    loading="lazy"
                  />
                  Entrance Fees, Snacks, and Mineral Water
                </li>
                <li class="flex gap-3">
                  <img
                    src="/image/icon/right.png"
                    class="h-6 w-6"
                    alt=""
                    loading="lazy"
                  />
                  Excursion Between two different places
                </li>
              </ul>
              <ul class="space-y-2">
                <li class="flex gap-3">
                  <img
                    src="/image/icon/cross.png"
                    class="h-6 w-6"
                    alt=""
                    loading="lazy"
                  />
                  Additional Services
                </li>
                <li class="flex gap-3">
                  <img
                    src="/image/icon/cross.png"
                    class="h-6 w-6"
                    alt=""
                    loading="lazy"
                  />
                  Insurance
                </li>
                <li class="flex gap-3">
                  <img
                    src="/image/icon/cross.png"
                    class="h-6 w-6"
                    alt=""
                    loading="lazy"
                  />
                  Personal expenses
                </li>
                <li class="flex gap-3">
                  <img
                    src="/image/icon/cross.png"
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
                    src="/image/icon/rightSign.png"
                    alt=""
                    class="w-4 h-4"
                    loading="lazy"
                  />
                  <span class="font-medium">Country:</span>
                </div>
                <p class="font-semibold">
                  {{ data.country }}
                </p>
              </li>
              <li
                class="flex items-start justify-between border-b border-gray-200 pb-3"
              >
                <div class="flex gap-2 items-center">
                  <img
                    src="/image/icon/rightSign.png"
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
                    src="/image/icon/rightSign.png"
                    alt=""
                    class="w-4 h-4"
                    loading="lazy"
                  />
                  <span class="font-medium">Time:</span>
                </div>
                <p class="font-semibold">
                  {{ data.duration }}
                </p>
              </li>
              <li
                class="flex items-start justify-between border-b border-gray-200 pb-3"
              >
                <div class="flex gap-2 items-center">
                  <img
                    src="/image/icon/rightSign.png"
                    alt=""
                    class="w-4 h-4"
                    loading="lazy"
                  />
                  <span class="font-medium">Language:</span>
                </div>
                <p class="font-semibold">
                  {{ data.language || "N/A" }}
                </p>
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
                :src="data.map"
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
