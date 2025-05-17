<script setup>
const cards = [
  {
    image: "/image/blog1.png",
    date: "December 4, 2024",
    title: "The Surfing Man Will Blow Your Mind",
    description:
      "Keeping the structure clear and focusing on what makes special, travelers.",
  },
  {
    image: "/image/blog2.png",
    date: "December 4, 2024",
    title: "The Surfing Man Will Blow Your Mind",
    description:
      "Keeping the structure clear and focusing on what makes special, travelers.",
  },
  {
    image: "/image/blog3.png",
    date: "December 4, 2024",
    title: "The Surfing Man Will Blow Your Mind",
    description:
      "Keeping the structure clear and focusing on what makes special, travelers.",
  },
];
</script>

<template>
  <section class="bg-[url('/image/blogbg.png')]">
    <div class="text-center mb-10 container mx-auto px-4 py-20">
      <div class="flex justify-center items-center mx-auto gap-2">
        <img src="/image/Vector.png" alt="" />
        <p class="text-green font-semibold leading-[32px] text-xl">Our Blogs</p>
      </div>
      <h2 class="text-3xl leading-[64px] text-gray font-bold mt-2">
        Our Latest Blog
      </h2>

      <div
        class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto items-center justify-center py-8 gap-12 sm:gap-20 xl:gap-16"
      >
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="relative flex flex-col items-center mx-auto w-[464px] xl:w-[430px] 2xl:w-[464px] h-[624px]"
        >
          <!-- Main Image -->
          <img
            :src="card.image"
            alt="Blog Image"
            class="w-full h-auto rounded-lg object-cover"
          />

          <!-- Content Card -->
          <div
            class="bg-[#F8F8F8] w-[400px] h-[272px] rounded-lg p-6 absolute -bottom-4"
          >
            <!-- Top Row -->
            <div class="flex justify-between items-center mb-3">
              <div class="flex items-center space-x-2 text-sm text-gray-600">
                <img src="/image/calendericon.png" alt="" class="h-4 w-4" />
                <p class="font-medium text-base leading-relaxed text-dark-gray">
                  {{ card.date }}
                </p>
              </div>
              <img src="/image/travelbtn.png" alt="Travel Icon" class="" />
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
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-2 text-sm text-gray-600">
                <img src="/image/admin.png" alt="" class="h-4 w-4" />
                <p class="font-medium text-base leading-relaxed text-dark-gray">
                  By Admin
                </p>
              </div>
              <button
                class="flex items-center font-semibold text-base leading-relaxed text-red border-1 border-red rounded-lg px-4 py-2 gap-2"
              >
                More Details <img src="/image/icon/rightarrow.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 w-full flex items-center justify-between px-4 md:px-8">
        <div class="flex-1 flex justify-center">
          <img src="/image/Slider.png" alt="Slider" class="h-auto max-w-full" />
        </div>

        <div class="flex justify-end">
          <button
            class="flex items-center font-semibold text-base leading-relaxed text-red border-1 border-red rounded-lg px-4 py-2 gap-2"
          >
            Explore More <img src="/image/icon/rightarrow.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
