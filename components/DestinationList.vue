<template>
  <section
    id="destination"
    class="relative bg-cover bg-center w-full h-auto py-16 flex flex-col justify-center items-center"
    style="background-image: url('/destination.png')"
  >
    <div
      class="max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-5 md:gap-10"
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
        <button
          class="px-4 py-[6px] md:px-8 md:py-[10px] border border-green-600 text-[#2E8942] rounded-full font-medium text-sm md:text-xl cursor-pointer hover:bg-green-50"
        >
          Domestic
        </button>
        <button
          class="px-4 py-[6px] md:px-8 md:py-[10px] bg-[#2E8942] text-white rounded-full font-medium text-sm md:text-xl cursor-pointer hover:bg-green-700"
        >
          International
        </button>
      </div>

      <div
        class="grid grid-cols-1 place-items-center lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full"
      >
        <div
          v-for="(place, i) in places"
          :key="i"
          class="relative w-full h-[458px] lg:h-[608px] flex justify-center items-center"
        >
          <div
            class="rounded-full h-full w-[320px] 2xl:w-[464px] p-5 md:p-7 lg:p-10 bg-cover bg-center relative overflow-hidden"
            :style="{ backgroundImage: `url(${place.image})` }"
          >
            <div
              class="absolute flex flex-col items-center justify-center bottom-5 left-5 right-5 md:bottom-7 md:left-7 md:right-7 xl:bottom-10 xl:left-10 xl:right-10 h-[250px] md:h-[304px] px-3 py-3 md:px-6 md:py-6 bg-white rounded-b-full text-center"
            >
              <div
                class="absolute -top-7 px-3 py-1 md:px-6 md:py-3 bg-white w-[162px] h-[48px] flex items-center justify-center gap-2 rounded-lg"
              >
                <img src="/location.svg" />
                <p class="font-semibold text-sm md:text-[1rem] text-[#383838]">
                  36 Listing
                </p>
              </div>
              <div class="flex flex-col gap-3 justify-center items-center">
                <p class="text-[#2E8942] text-sm md:text-[1rem] font-bold">
                  Place In
                </p>
                <h3 class="text-[1rem] md:text-[2rem] font-bold text-[#383838]">
                  {{ place.name }}
                </h3>
                <p class="text-[#383838] text-sm md:text-[1rem] font-medium">
                  Explore World & Get Relax
                </p>

                <button
                  class="flex justify-center items-center gap-2 px-2 py-1 md:px-5 md:py-2 rounded-lg border border-red text-red tex-sm md:text-lg xl:text-[1rem] font-semibold cursor-pointer hover:shadow-lg"
                >
                  Explore Now <img src="/red-arrow.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative flex items-center px-3 md:px-0 w-full h-20">
        <div class="absolute left-1/2 transform -translate-x-1/2 flex gap-1">
          <div class="w-2 h-2 md:w-3 md:h-3 bg-[#2E8942] rounded-full" />
          <div class="w-2 h-2 md:w-3 md:h-3 bg-[#BDBDBD] rounded-full" />
          <div class="w-2 h-2 md:w-3 md:h-3 bg-[#BDBDBD] rounded-full" />
          <div class="w-2 h-2 md:w-3 md:h-3 bg-[#BDBDBD] rounded-full" />
        </div>

        <button
          class="ml-auto flex items-center gap-1 md:gap-2 px-3 py-2 md:px-6 md:py-3 rounded-lg border border-red text-red text-sm mg:text-[1rem] font-semibold cursor-pointer hover:shadow-lg"
        >
          Explore Now <img src="/red-arrow.svg" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { japan, spain, thailand } from "~/assests/DestinationList";

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
];
</script>
