<script setup>
import { motion } from 'motion-v'
defineProps({
  image: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <motion.div
    :while-hover="{scale: 1.02}"
    class="bg-white w-full rounded-xl border border-light-gray shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col items-center mx-auto px-2 py-2"
  >
    <!-- Package Image -->
    <img
      :src="image"
      alt="Package"
      class="w-full sm:w-[330px] xl:w-full h-[326px] object-cover rounded-lg"
    />
    <div class="p-4">
      <h3 class="text-xl font-semibold text-navy leading-loose py-2">
        Asian Discovery: Temple Traditions, Tastings
      </h3>
      <div class="flex gap-2 pb-2 items-center">
        <img src="/assets/image/location.png" class="w-5 h-4" alt="" />
        <p class="text-sm text-gray-500 mt-1">London, UK</p>
      </div>
      <div class="h-[1px] bg-[#D2D2D2]" />

      <div class="flex justify-between items-center mt-4 text-sm">
        <div class="flex gap-2">
          <img src="/assets/image/icon/clock.png" class="w-6 h-6" alt="" />
          <p class="text-dark-gray">6 Days, 5 Night</p>
        </div>
        <NuxtLink
          to="/destination"
          class="font-500 text-[14px] leading-[20px] bg-red hover:bg-white text-white hover:text-red hover:border-red hover:border-1 px-2 2xl:px-4 py-2 rounded-lg cursor-pointer"
        >
          Explore Now
        </NuxtLink>
      </div>
    </div>
  </motion.div>
</template>
