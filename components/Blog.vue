<script setup>
import blogImg1 from "@/assets/image/blog1.png";
import blogImg2 from "@/assets/image/blog2.png";
import blogImg3 from "@/assets/image/blog3.png";
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
];
</script>

<template>
  <section class="bg-[url('/assets/image/blogbg.png')]">
    <div class="text-center mb-10 container mx-auto px-4 py-20">
      <div class="flex justify-center items-center mx-auto gap-2">
        <img src="/assets/image/Vector.png" alt="" />
        <p class="text-green font-semibold leading-[32px] text-xl">Our Blogs</p>
      </div>
      <h2 class="text-3xl leading-[64px] text-dark-gray font-bold mt-2">
        Our Latest Blog
      </h2>

      <div
        class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 mx-auto items-center justify-center py-8 gap-12 sm:gap-12 xl:gap-12 px-12 sm:px-12 xl:px-12"
      >
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="relative flex flex-col items-center mx-auto max-w-[464px] h-[624px]"
        >
          <!-- Main Image -->
          <img
            :src="card.image"
            alt="Blog Image"
            class="w-full h-auto rounded-lg object-cover"
          />

          <!-- Content Card -->
          <div
            class="bg-[#F8F8F8] sm:w-[90%] md:h-[272px] rounded-lg p-6 absolute -bottom-4"
          >
            <!-- Top Row -->
            <div class="flex justify-between items-center mb-3">
              <div class="flex items-center space-x-2 text-sm text-gray">
                <img
                  src="/assets/image/icon/calendericon.png"
                  alt=""
                  class="h-4 w-4"
                />
                <p class="font-medium text-base leading-relaxed text-dark-gray">
                  {{ card.date }}
                </p>
              </div>
              <img
                src="/assets/image/travelbtn.png"
                alt="Travel Icon"
                class=""
              />
            </div>

            <!-- Title -->
            <h1 class="font-semibold text-xl text-start leading-[32px] py-4">
              {{ card.title }}
            </h1>

            <!-- Description -->
            <p
              class="font-medium text-base text-start leading-relaxed text-dark-gray pb-2"
            >
              {{ card.description }}
            </p>

            <!-- Bottom Row -->
            <div class="flex flex-col sm:flex-row justify-between items-center">
              <div class="flex items-center space-x-2 text-sm text-gray-600">
                <img
                  src="/assets/image/icon/admin.png"
                  alt=""
                  class="h-4 w-4"
                />
                <p class="font-medium text-base leading-relaxed text-dark-gray">
                  By Admin
                </p>
              </div>
              <button
                class="flex items-center font-semibold text-base leading-relaxed text-red border-1 border-red rounded-lg px-2 md:px-4 py-2 gap-2 cursor-pointer hover:shadow-lg"
              >
                More Details
                <img
                  src="/assets/image/icon/rightarrow.png"
                  class="bg-white text-white"
                  alt=""
                />
              </button>
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
          class="ml-auto flex items-center gap-1 md:gap-2 px-2 py-2 md:px-6 md:py-3 rounded-lg border border-red text-red text-sm mg:text-[1rem] font-semibold cursor-pointer hover:shadow-lg"
        >
          Explore Now <img src="/red-arrow.svg" />
        </button>
      </div>
    </div>
  </section>
</template>
