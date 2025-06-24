<template>
  <section class="bg-[#F2F2F2] py-12 lg:py-16 px-6">
    <div
      class="max-w-[1440px] min-h-[830px] mx-auto flex flex-col gap-10 justify-center items-center"
    >
      <!-- Header -->
      <div class="flex flex-col gap-10 justify-center items-center">
        <p
          class="text-[#2E8942] font-semibold text-xl md:text-2xl flex items-center gap-2"
        >
          <img src="/double-arrow.svg" height="32" width="32" />
          How It Work
        </p>
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-[#3C3C3C]">
          How it Works Step by Step
        </h2>
      </div>

      <!-- Cards with Arrow Behind -->
      <div class="relative w-full flex justify-center">
        <!-- Background Arrow Positioned Behind Cards -->
        <img
          src="/dotter-curve-arrow.svg"
          alt="dotted arrow"
          class="absolute hidden xl:block z-10 top-0 pointer-events-none"
        />

        <!-- Step Cards -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 w-full"
        >
          <div
            v-for="(item, index) in features"
            :key="index"
            class="flex flex-col items-center gap-3 bg-white max-w-[464px] h-auto rounded-xl shadow-sm p-12 hover:shadow-md transition mx-auto"
          >
            <!-- Icon -->
            <img
              :src="item.icon"
              class="w-[50px] h-[50px] xl:w-[80px] xl:h-[80px] rounded-md mb-4 relative z-50"
            />
            <img
              src="/dotter-curve-arrow.svg"
              alt="dotted arrow"
              class="block xl:hidden"
            />
            <!-- Text Content -->
            <div
              class="flex flex-col items-center gap-1 lg:gap-2 xl:gap-3 text-center"
            >
              <h1
                class="font-bold text-lg lg:text-xl xl:text-2xl text-[#1A2E46]"
              >
                {{ item.title }}
              </h1>
              <p class="text-[#5B5B5B] text-lg xl:text-xl font-medium">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import icon from "~/assests/HowItWork/destination.svg";

const features = [
  {
    icon,
    title: "Select Destination",
    desc: "This revision improves clarity and flow while maintaining your original message. This revision improves clarity .",
  },
  {
    title: "Make An Appointments",
    icon,
    desc: "This revision improves clarity and flow while maintaining your original message. This revision improves clarity .",
  },
  {
    title: "Enjoy Our Tour",
    icon,
    desc: "This revision improves clarity and flow while maintaining your original message. This revision improves clarity .",
  },
];
</script>
