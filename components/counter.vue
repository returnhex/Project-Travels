<script setup>
import icon1 from "@/assets/image/icon/SafetyIcon1.png";
import icon2 from "@/assets/image/icon/SafetyIcon2.png";
import icon3 from "@/assets/image/icon/SafetyIcon3.png";
import icon4 from "@/assets/image/icon/SafetyIcon4.png";
const stats = [
  {
    icon: icon1, // Replace with your icons
    value: "76K+",
    label: "Satisfied Customer",
    bg: "bg-[#FBFBFB]",
  },
  {
    icon: icon2,
    value: "14K+",
    label: "Active Members",
    bg: "bg-[#EDEDED]",
  },
  {
    icon: icon3,
    value: "1K+",
    label: "Travels Destination",
    bg: "bg-[#FBFBFB]",
  },
  {
    icon: icon4,
    value: "35+",
    label: "Travel Guides",
    bg: "bg-[#EDEDED]",
  },
];
</script>

<template>
  <section
    class="bg-[url('/assets/image/counterbg.png')] py-16 px-4 md:px-12 bg-cover bg-no-repeat w-screen"
  >
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
    >
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="rounded-lg p-6 text-center shadow-md"
        :class="stat.bg"
      >
        <div class="flex justify-center items-center mb-2">
          <img :src="stat.icon" alt="icon" class="h-[64px] w-[64px]" />
        </div>
        <h3 class="text-3xl font-bold text-black leading-[64px]">
          {{ stat.value }}
        </h3>
        <p class="text-[20px] font-medium text-[#383838] leading-[30px] mt-1">
          {{ stat.label }}
        </p>
      </div>
    </div>
  </section>
</template>
