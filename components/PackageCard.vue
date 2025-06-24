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
    class="bg-white w-full max-w-[342px] rounded-xl border border-light-gray shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col items-center mx-auto px-2 py-2"
  >
    <!-- Package Image -->
    <NuxtImg
      :src="image"
      alt="Package"
      class="w-[360px] sm:w-[330px] max-h-[250px] md:h-[326px] object-cover rounded-lg"
      width="200"
      height="200"
    />
    <div class="p-4">
      <h3 class="text-xl font-semibold text-navy leading-loose py-2">
        Asian Discovery: Temple Traditions, Tastings
      </h3>
      <div class="flex gap-2 pb-2 items-center">
        <NuxtImg
          src="/icon/map.png"
          class="max-w-6 h-6 object-contain"
          alt=""
          loading="lazy"
        />
        <p class="text-sm text-gray-500 mt-1">London, UK</p>
      </div>
      <div class="h-[1px] bg-[#D2D2D2]" />

      <div class="flex justify-between items-center mt-4 text-sm">
        <div class="flex gap-2">
          <NuxtImg
            src="/icon/clock.png"
            class="max-w-6 h-6 object-contain"
            alt=""
            loading="lazy"
          />
          <p class="text-dark-gray">6 Days, 5 Night</p>
        </div>
        <!-- <button
          class="font-medium text-[14px] leading-[20px] bg-red hover:bg-white text-white hover:text-red hover:border-red hover:border-1 px-4 py-2 rounded-lg cursor-pointer"
        >
          Explore Now
        </button> -->
        <NuxtLink to="/package">
          <Button6 title=" Explore Now" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
