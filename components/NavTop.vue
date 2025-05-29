<script setup lang="ts"></script>

<template>
  <div class="bg-[#2E8942]">
    <div
      class="max-w-[1740px] mx-auto text-[#FFFFFF] flex items-center justify-between px-4 md:px-5 py-1 xl:py-2 2xl:py-3"
    >
      <div class="flex gap-1 items-center justify-between">
        <img src="/email.svg" class="w-4 h-4 xl:w-5 lx:h-5 2xl:w-6 2xl:h-6" />
        <a href="mailto:info@bdigo.com"
          ><span class=" text-[0.9rem] 2xl:text-[1.1rem] font-semibold"
            >info@bdigo.com</span
          ></a
        >
      </div>
     <div class="overflow-hidden whitespace-nowrap rounded-xl">
       <p class="font-medium 
     text-[0.9rem] 2xl:text-[1.1rem] 
      hidden lg:block animate-marquee ">
        50% Off Your Next Trip. Hurry Up For your new Tour! Book Your Tour
      </p>
     </div>
      <div class="flex gap-4 items-center">
        <button
          class="border-[0.5px] rounded-full hidden sm:flex gap-1 px-3 py-1 cursor-pointer hover:bg-green-700"
        >
          <p class="text-sm">Language</p>
          <img src="/Arrow.svg" />
        </button>
        <div class="">
          <button class="text-sm flex gap-1 cursor-pointer">
            <p>Sign in / Register</p>
            <img src="/Arrow.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 12s linear infinite;
}
</style>
