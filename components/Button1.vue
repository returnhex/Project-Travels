<script setup>
defineProps({
  title: String,
  btnClass: String,
});
</script>
<template>
  <!-- btn1 -->
  <div>
    <button
      :class="`group relative px-2 lg:px-4 xl:px-6 py-3 xl:py-[6px] 2xl:py-[10px] inline-flex h-10 2xl:h-14 items-center justify-center overflow-hidden border border-green-600 ${btnClass} font-medium rounded-full`"
    >
      <div
        class="inline-flex h-12 translate-y-0 items-center justify-center transition duration-500 group-hover:-translate-y-[150%] rounded-full font-medium text-sm md:text-lg xl:text-xl cursor-pointer"
      >
        {{ title }}
      </div>
      <div
        class="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center rounded-full font-medium text-sm md:text-lg xl:text-xl cursor-pointer text-neutral-50 transition duration-500 group-hover:translate-y-0"
      >
        <span
          :class="`absolute h-full w-full translate-y-full skew-y-12 scale-y-0  bg-green-700 transition duration-500 group-hover:translate-y-0 group-hover:scale-170 `"
        /><span class="z-10">{{ title }}</span>
      </div>
    </button>
  </div>
</template>
