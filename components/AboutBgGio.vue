<script setup lang="ts">
defineProps({
  title: String,
  buttonText: String,
});
</script>
<template>
  <div class="max-w-[1440px] mx-auto">
    <section
      class="flex flex-col md:flex-row items-center justify-center gap-4 px-4 lg:gap-10 py-16 lg:py-20"
    >
      <!-- Left Image Section -->
      <div class="relative w-full md:w-1/2 flex justify-center">
        <div class="relative">
          <img
            src="/Case.png"
            alt="Travel Illustration"
            class="rounded-[40px] object-cover w-[300px] h-[400px] md:h-full md:w-[90%]"
          />
          <img
            class="absolute bottom-12 -left-10 -z-10 h-[100px] w-[144px]"
            src="/dot-dot.svg"
          />
        </div>
      </div>

      <!-- Right Text Section -->
      <div class="w-full md:w-1/2 
      space-y-2 
      md:space-y-3 lg:space-y-4 
      xl:space-y-5">
        <div class="flex items-center justify-center sm:justify-start gap-3">
          <img src="/double-arrow.svg" class="h-5 w-5 md:h-8 md:w-8" />
          <p
            class="text-[#2E8942] text-lg md:text-xl xl:text-2xl font-semibold"
          >
            {{ title }}
          </p>
        </div>
        <h2
          class="text-xl md:text-2xl lg:text-3xl xl:text-5xl text-[#3C3C3C] font-bold leading-6 md:leading-10 lg:leading-16 flex items-center justify-center sm:justify-start"
        >
          Don't just imagine it, make it happen. Travel
        </h2>
        <p class="text-[#3C3C3C] text-lg lg:text-[1rem] font-medium">
          The statement implies a willingness to help someone escape their daily
          routine by taking care of their travel plans. It suggests a travel
          agency or similar service.
        </p>

        <div
          class="bg-gray-100 p-3 md:p-4 lg:p-6 rounded-[18px] border border-l-4 border-l-[#2E8942]"
        >
          <p class="text-sm md:text-lg xl:text-2xl font-medium">
            The statement implies a willingness to help someone escape their
            daily routine by taking care of their travel plans.
          </p>
        </div>

        <ul class="flex flex-col gap-1 md:gap-3 lg:gap-4">
          <li class="flex items-center gap-1 md:gap-2 lg:gap-3">
            <img
              src="/approved.svg"
              class="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
            />
            <span
              class="text-[#383838] text-lg lg:text-xl xl:text-2xl font-semibold"
            >
              Trusted, Local Travel Experts
            </span>
          </li>
          <li class="flex items-center gap-3">
            <img
              src="/approved.svg"
              class="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
            />
            <span
              class="text-[#383838] text-lg lg:text-xl xl:text-2xl font-semibold"
            >
              Flexible, Hassle-Free Bookings
            </span>
          </li>
          <li class="flex items-center gap-3">
            <img
              src="/approved.svg"
              class="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
            />
            <span
              class="text-[#383838] text-lg lg:text-xl xl:text-2xl font-semibold"
            >
              Real-Timing Itinerary Updates
            </span>
          </li>
        </ul>

        <div v-if="buttonText" class="flex items-center gap-4">
          <button
            class="flex gap-2 bg-red text-white px-4 py-2 lg:px-6 lg:py-3 rounded-xl text-[0.8rem] lg:text-[1rem] font-semibold hover:bg-red-600 transition cursor-pointer"
          >
            <span>{{ buttonText }}</span>
            <img src="/arrowRight.svg" class="h-4 w-4 lg:h-6 lg:w-6" />
          </button>
          <!-- Avatars -->
          <div class="">
            <img
              src="/avatars.png"
              class="w-[140px] h-[40px] lg:w-[180px] lg:h-[48px] rounded-full border-2 border-white"
            />
            <!-- <img
              src="/avatars/user2.jpg"
              class="w-8 h-8 rounded-full border-2 border-white"
            />
            <img
              src="/avatars/user3.jpg"
              class="w-8 h-8 rounded-full border-2 border-white"
            /> -->
            <!-- <span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
              >8k+</span
            > -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
