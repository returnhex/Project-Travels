<script setup>
defineProps({
  title: String,
});
</script>
<template>
  <!-- btn2 -->
  <button
    class="group relative inline-flex h-[calc(20px+8px)] lg:h-[calc(35px+8px)] 2xl:h-[calc(48px+8px)] items-center justify-center rounded-full bg-whitegap-2 px-[2px] py-1 md:px-1 md:py-1 lg:px-2 xl:px-2 md:py-1 border border-red text-red tex-sm md:text-md xl:text-[1rem] font-semibold cursor-pointer hover:text-white"
  >
    <span class="z-10 pr-8 xl:pr-12 text-sm md:text-md xl:text-lg">{{
      title
    }}</span>
    <div
      class="absolute right-1 inline-flex h-6 w-6 lg:w-8 lg:h-8 xl:h-9 xl:w-9 2xl:h-12 2xl:w-12 items-center justify-end rounded-full bg-red-500 transition-[width] group-hover:w-[calc(100%-8px)]"
    >
      <div
        class="mr-1 lg:mr-2 xl:mr-2.5 2xl:mr-3.5 flex items-center justify-center"
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-neutral-50"
        >
          <path
            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </button>
</template>
