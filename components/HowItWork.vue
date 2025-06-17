<template>
  <section class="bg-[#F2F2F2] py-12 lg:py-16 px-4">
    <div
      class="container
      min-h-[430px] md:min-h-[530px] lg:min-h-[630px] xl:min-h-[730px] 2xl:min-h-[830px]
      mx-auto flex flex-col gap-10 justify-center items-center"
    >
      <!-- Header -->
      <div class="flex flex-col 
      gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-10 
      justify-center items-center">
        <p
          class="text-[#2E8942] font-semibold text-lg md:text-xl flex items-center gap-2"
        >
          <img 
            src="/double-arrow.svg" 
            loading="lazy" 
            height="32" 
            width="32"
            alt="icon-double-arrow"
          />
          How It Work
        </p>
        <h2 class="text-xl md:text-2xl xl:text-2xl 2xl:text-5xl font-bold text-[#3C3C3C]">
          How it Works Step by Step
        </h2>
      </div>

      <!-- Cards with Arrow Behind -->
      <div class="relative w-full flex justify-center">
        <!-- Background Arrow Positioned Behind Cards -->
        <img
          src="/dotter-curve-arrow.svg"
          alt="dotted-curve-arrow"
          class="absolute hidden xl:block z-10 top-0 pointer-events-none w-full h-auto"
          loading="lazy"
        />

        <!-- Step Cards -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 w-full"
        >
          <div
            
            v-for="(item, index) in features"
            :key="index"
            class="flex flex-col cursor-pointer items-center gap-3
             bg-white max-w-[464px] h-auto 
             rounded-xl shadow-sm 
             p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12 
             hover:shadow-xl transition mx-auto"
          >
            <!-- Icon -->
            <img
              :src="item.icon"
              class="w-[50px] h-[50px] xl:w-[80px] xl:h-[80px] rounded-md mb-4 relative z-30"
              loading="lazy"
              alt="icon-how-it-work"

            />
            <img
              src="/dotter-curve-arrow.svg"
              alt="dotted-curve-arrow"
              class="block xl:hidden h-auto w-auto"
              loading="lazy"
              
            />
            <!-- Text Content -->
            <div
              class="flex flex-col items-center gap-1 lg:gap-2 xl:gap-3 text-center"
            >
              <h1
                class="font-bold text-lg xl:text-xl 2xl:text-2xl text-[#1A2E46]"
              >
                {{ item.title }}
              </h1>
              <p class="text-[#5B5B5B] text-sm xl:text-lg 2xl:text-xl font-medium">
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
