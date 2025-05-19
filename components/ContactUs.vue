<template>
  <section class="bg-white py-12 lg:py-0 px-6">
    <div
      class="max-w-[1440px] min-h-[820px] mx-auto flex flex-col gap-10 justify-center items-center"
    >
      <!-- Header -->
      <div class="flex flex-col gap-10 justify-center items-center">
        <p
          class="text-[#2E8942] font-semibold text-xl md:text-2xl flex items-center gap-2"
        >
          <img src="/double-arrow.svg" height="32" width="32" />
          Contact Us
        </p>
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-[#3C3C3C]">
          Contact Our Friendly Experts Team
        </h2>
        <p class="font-medium text-[1rem] text-[#3C3C3C]">
          The statement implies a willingness to help someone escape their daily
          routine by taking care of their travel plans. It suggests a travel
          agency or similar service
        </p>
      </div>

      <!-- Cards with Arrow Behind -->
      <div class="relative w-full flex justify-center">
        <!-- Step Cards -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 place-items-center lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 w-full"
        >
          <div
            v-for="(item, index) in features"
            :key="index"
            class="flex flex-col items-center gap-3 bg-[#F2F2F2] w-full h-full rounded-xl shadow-sm p-8 md:p-12 hover:shadow-md transition mx-auto"
          >
            <!-- Icon -->
            <img
              :src="item.icon"
              class="w-[50px] h-[50px] xl:w-[80px] xl:h-[80px] rounded-md mb-4 relative z-50"
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
import mailIcon from "~/assests/ContactUs/mail.svg";
import mapsIcon from "~/assests/ContactUs/maps.svg";
import contactIcon from "~/assests/ContactUs/phone.svg";

const features = [
  {
    icon: mapsIcon,
    title: "Our Address",
    desc: "23, Tropical Akhand Tower (Level # 03-05),  Gareeb-e-Nawaz Ave, Sector # 11, Uttara,  Dhaka - 1230",
  },
  {
    icon: mailIcon,
    title: "Contact@bdigo.com",
    desc: "Email Us any time any kind of quety.",
  },
  {
    icon: contactIcon,
    title: "+880 1855-255 342",
    desc: "Call Us any kind support. We will wait for it.",
  },
];
</script>
