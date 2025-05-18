<template>
  <section class="bg-[#F2F2F2] py-12 lg:py-16 px-6">
    <div class="max-w-[1440px] min-h-[830px] mx-auto flex flex-col gap-10 justify-center items-center">
      <div class="flex flex-col gap-10 justify-center items-center">
        <p class="text-[#2E8942] font-semibold text-2xl flex">
        <img src="/double-arrow.svg" height="32" width="32" /> Choose Us
      </p>
      <h2 class="text-3xl md:text-[48px] font-bold text-[#3C3C3C]">
        Why Choose Us
      </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mg:gap-4 lg:gap-6">
        <div
          v-for="(item, index) in features"
          :key="index"
          class="flex gap-3 bg-white max-w-[464px] h-auto rounded-xl shadow-sm p-6 hover:shadow-md transition"
        >
          <img
            :src="item.icon"
            class="w-[50px] h-[50px] 
            xl:w-[80px] xl:h-[80px] 
            rounded-md flex items-center justify-center mb-4"
          />
          <div class="flex flex-col items-start gap-1 lg:gap-2 xl:gap-3">
            <h1 class="font-bold text-lg lg-text-xl xl:text-2xl text-[#1A2E46]">{{ item.title }}</h1>
            <p class="text-[#5B5B5B] text-lg xl:text-xl font-medium text-left">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  booking,
  flight,
  globe,
  guide,
  money,
  team,
} from "~/assests/WhyChoseUs";

const features = [
  {
    icon: globe,
    title: "Diverse Destinations",
    desc: "This revision improves clarity and flow while maintaining your original message.",
  },
  {
    title: "Best Travel Guide",
    icon: guide,
    desc: "This revision improves clarity and flow while maintaining your original message.",
  },
  {
    title: "Easy Booking",
    icon: booking,
    desc: "This revision improves clarity and flow while maintaining your original message.",
  },
  {
    title: "Best Flight",
    icon: flight,
    desc: "This revision improves clarity and flow while maintaining your original message.",
  },
  {
    title: "Value for Money",
    icon: money,
    desc: "This revision improves clarity and flow while maintaining your original message.",
  },
  {
    title: "Support Team",
    icon: team,
    desc: "This revision improves clarity and flow while maintaining your original message.",
  },
];
</script>
