<script setup lang="ts">
import { reactive } from "vue";
import { motion } from "motion-v";
const form = reactive<{
  name: string;
  email: string;
  contact: string;
  message: string;
}>({
  name: "",
  email: "",
  contact: "",
  message: "",
});

const handleSubmit = () => {
  console.log("Form Data:", form);
};
</script>

<template>
  <motion.div
    :initial="{ x: 100 }"
    :while-in-view="{ x: 0 }"
    :transition="{ duration: 2 }"
    class="bg-white p-2 sm:p-8 lg:p-12 w-full lg:w-[50%] h-[600px] grid grid-cols-1 place-items-center rounded-3xl overflow-hidden"
  >
    <form
      class="flex flex-col gap-4 justify-evenly lg:gap-6 w-full"
      @submit.prevent="handleSubmit"
    >
      <h1 class="text-[#545454] font-semibold text-lg lg:text-xl">
        Your details
      </h1>

      <div class="flex gap-6 w-full">
        <div class="w-full flex flex-col gap-1">
          <p class="text-[#545454] font-medium text-[1rem] lg:text-[20px]">
            Name*
          </p>
          <input
            v-model="form.name"
            class="text-sm lg:text-lg w-full text-[#6E6E73] px-3 py-[8px] lg:px-4 lg:py-[10px] rounded-lg border drop-shadow-[#101828] outline-none border-[#CECECE]"
            type="text"
            placeholder="Name"
          />
        </div>
        <div
          class="text-[#545454] font-medium text-[1rem] lg:text-[20px] w-full flex flex-col gap-1"
        >
          <p>Email*</p>
          <input
            v-model="form.email"
            class="text-sm lg:text-lg w-full text-[#6E6E73] px-3 py-[8px] lg:px-4 lg:py-[10px] rounded-lg border drop-shadow-[#101828] outline-none border-[#CECECE]"
            type="text"
            placeholder="yourmail@company.com"
          />
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <p class="text-[1rem] lg:text-[20px] font-medium text-[#545454]">
          Contact Number*
        </p>
        <div
          class="flex text-[#6E6E73] px-4 py-[10px] rounded-lg border drop-shadow-[#101828] outline-none border-[#CECECE]"
        >
          <div class="flex gap-3 items-center">
            <p class="font-[400] text-sm lg:text-lg">US</p>
            <NuxtImg
              src="image/down-arrow-gray.svg"
              loading="lazy"
              class="w-4 h-4 lg:w-5 lg:h-5"
            />
          </div>
          <input
            v-model="form.contact"
            class="ml-3 text-sm lg:text-lg w-full outline-none"
            type="text"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <p class="text-[1rem] lg:text-[20px] font-medium text-[#545454]">
          Your Message (Optional)
        </p>
        <textarea
          class="h-[126px] text-[#6E6E73] text-sm lg:text-lg w-full px-4 py-[10px] rounded-lg border drop-shadow-[#101828] outline-none border-[#CECECE]"
          type="text"
          placeholder="Writing the Message"
        />
      </div>
      <button
        class="flex self-start justify-between text-white gap-[10px] items-center px-3 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-xl bg-red hover:bg-red-600 cursor-pointer"
      >
        <p class="text-sm md:text-[1rem] font-semibold">Submit Now</p>
        <NuxtImg
          src="image/arrowRight.svg"
          loading="lazy"
          class="h-3 w-3 md:h-6 md:w-6"
        />
      </button>
    </form>
  </motion.div>
</template>
