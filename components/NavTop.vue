<script setup lang="ts"></script>

<template>
  <div class="bg-[#2E8942]">
    <div
      class="max-w-[1740px] mx-auto text-[#FFFFFF] flex items-center justify-between px-4 md:px-5 py-1 xl:py-2 2xl:py-3"
    >
      <div
        class="flex gap-2 md:gap-4 w-full justify-between lg:justify-start lg:w-fit"
      >
        <div class="flex gap-1 items-center justify-between">
          <NuxtImg src="/email.svg" alt="email" class="w-6 h-6" />
          <a href="mailto:info@bdigo.com"
            ><span class="text-sm md:text-[1rem] font-semibold"
              >info@bdigo.com</span
            ></a
          >
        </div>
        <div class="flex gap-1 items-center justify-between">
          <NuxtImg
            src="/icon/whatsappIcon.png"
            alt="whatsapp"
            class="w-6 h-6"
          />
          <a href="https://wa.me/8801855255342" target="_blank"
            ><span class="text-sm md:text-[1rem] font-semibold"
              >+880 1855-255 342</span
            ></a
          >
        </div>
      </div>
      <div class="overflow-hidden whitespace-nowrap rounded-xl">
        <p
          class="font-medium text-[0.9rem] 2xl:text-[1.1rem] hidden lg:block animate-marquee"
        >
          50% Off Your Next Trip. Hurry Up For your new Tour! Book Your Tour
        </p>
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
