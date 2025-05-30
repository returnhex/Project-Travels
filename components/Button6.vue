<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <button
    class="relative z-0 font-medium text-[14px] leading-[20px] bg-red hover:bg-white text-white hover:text-red hover:border-red hover:border-1 px-3 py-2 rounded-lg cursor-pointer after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-md after:bg-red hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500"
  >
    {{ title }}
  </button>
</template>
