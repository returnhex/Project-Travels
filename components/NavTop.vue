<script setup lang="ts"></script>

<template>
  <div class="bg-[#2E8942]">
    <div
      class="max-w-[1740px] mx-auto text-[#FFFFFF] flex items-center justify-between sm:px-3 md:px-5 py-3"
    >
      <div class="flex gap-1 items-center justify-between">
        <img src="/email.svg" class="w-6 h-6"/>
        <span class="text-sm md:text-[1rem] font-semibold">info@bdigo.com</span>
      </div>
      <p class="font-medium text-[1.1rem] hidden lg:block">
        50% Off Your Next Trip. Hurry Up For your new Tour! Book Your Tour
      </p>
      <div class="flex gap-4 items-center">
        <button class="border-[0.5px] rounded-full hidden sm:flex gap-1 px-3 py-1">
          <p class="text-sm">Language</p>
          <img src="/Arrow.svg" />
        </button>
        <div class="">
          <button class="text-sm flex gap-1">
            <p>Sign in / Register</p>
            <img src="/Arrow.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
