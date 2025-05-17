<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="bg-white w-[320px] sm:w-[340px] h-[541px] rounded-lg border-[1px] border-light-gray shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col items-center mx-auto py-2 px-2"
  >
    <img
      :src="image"
      alt="Package"
      class="w-[316px] h-[326px] object-cover rounded-lg"
    />
    <div class="p-4">
      <h3 class="text-xl font-semibold text-navy leading-loose py-2">
        Asian Discovery: Temple Traditions, Tastings
      </h3>
      <div class="flex gap-2 pb-2">
        <img src="/assets/image/location.png" alt="" />
        <p class="text-sm text-gray-500 mt-1">London, UK</p>
      </div>
      <div class="h-[1px] bg-[#D2D2D2]" />

      <div class="flex justify-between items-center mt-4 text-sm">
        <div class="flex gap-2">
          <img src="/assets/image/clock.png" alt="" />
          <p class="text-dark-gray">6 Days, 5 Night</p>
        </div>
        <button
          class="font-semibold text-[14px] leading-[20px] bg-red text-white px-4 py-2 rounded-lg"
        >
          Explore Now
        </button>
      </div>
    </div>
  </div>
</template>
