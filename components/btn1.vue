<script setup>
defineProps({
  title: String,
});
</script>
<template>
  <!-- btn1 -->
  <div>
    <!-- <button
      class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-red-700 px-6 font-medium text-neutral-50"
    >
      <span
        class="absolute h-56 w-32 rounded-full bg-red transition-all duration-300 group-hover:h-0 group-hover:w-0"
      /><span class="relative">{{ title }}</span>
    </button> -->

   

    <button
      class="group relative px-4 py-[6px] md:px-8 md:py-[10px] inline-flex h-14 items-center justify-center overflow-hidden border border-green-600 bg-green-50 font-medium rounded-full"
    >
      <div
        class="inline-flex h-12 translate-y-0 items-center justify-center transition duration-500 group-hover:-translate-y-[150%] text-[#2E8942] rounded-full font-medium text-sm md:text-xl cursor-pointer"
      >
        {{ title }}
      </div>
      <div
        class="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center rounded-full font-medium text-sm md:text-xl cursor-pointer text-neutral-50 transition duration-500 group-hover:translate-y-0"
      >
        <span
          class="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-green-700 transition duration-500 group-hover:translate-y-0 group-hover:scale-170"
        /><span class="z-10">{{ title }}</span>
      </div>
    </button>
  </div>
</template>
