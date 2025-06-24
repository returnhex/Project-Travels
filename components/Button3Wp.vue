<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <!-- btn3 -->
  <div>
    <button
      class="group relative inline-flex gap-1 h-9 xl:h-11 2xl:h-12 items-center justify-center rounded-md bg-red hover:bg-red-600 px-3 lg:px-4 xl:px-5 2xl:px-6 font-medium text-white cursor-pointer text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]"
    >
      <span>{{ title }}</span>
      <div
        class="ml-1 mt-1 rotate-12 transition-all duration-200 group-hover:rotate-0"
      >
        <Icon name="formkit:whatsapp" size="20"
       />
      </div>
    </button>
  </div>
</template>
