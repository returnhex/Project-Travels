<script setup>
defineProps({
  title: String,
});
</script>
<template>
  <button
    class="group relative inline-flex h-14 px-4 py-[6px] md:px-8 md:py-[10px] items-center justify-center overflow-hidden bg-green text-white font-[500] text-sm md:text-xl cursor-pointer rounded-full"
  >
    <span
      class="absolute h-0 w-0 rounded-full bg-green-700 text-green transition-all duration-300 group-hover:h-56 group-hover:w-full"
    /><span class="relative">{{ title }}</span>
  </button>
  <!-- class="px-4 py-[6px] md:px-8 md:py-[10px] bg-[#2E8942] text-white rounded-full font-medium text-sm md:text-xl cursor-pointer hover:bg-green-700"
        > -->
</template>
