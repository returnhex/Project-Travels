<script setup lang="ts">
import { onMounted, ref } from "vue";
const currentYear = ref<number>(new Date().getFullYear());
onMounted(() => {
  currentYear.value = new Date().getFullYear();
});
</script>

<template>
  <section class="max-w-4xl mx-auto py-10 px-4 pt-24 lg:pt-40">
    <h1 class="text-3xl font-bold mb-6 text-center">Tour & Guide</h1>

    <h2 class="text-xl font-semibold mt-6 mb-2">1. Our Tour Packages</h2>
    <p class="mb-4 text-[#3C3C3C]">
      Explore a wide range of curated tour packages across Bangladesh, from the
      lush tea gardens of Sylhet to the vibrant streets of Dhaka and the scenic
      beaches of Cox's Bazar. Each package is designed to give you an authentic
      and memorable experience.
    </p>

    <h2 class="text-xl font-semibold mt-6 mb-2">2. Expert Local Guides</h2>
    <p class="mb-4 text-[#3C3C3C]">
      Our experienced local guides know the ins and outs of every destination.
      They will lead you through hidden gems, share fascinating stories, and
      ensure your journey is both informative and engaging.
    </p>

    <h2 class="text-xl font-semibold mt-6 mb-2">3. Safety & Comfort</h2>
    <p class="mb-4 text-[#3C3C3C]">
      Your safety is our top priority. All our tours follow strict safety
      protocols, and we partner with trusted transportation and accommodation
      providers to guarantee comfort throughout your trip.
    </p>

    <h2 class="text-xl font-semibold mt-6 mb-2">4. Customized Itineraries</h2>
    <p class="mb-4 text-[#3C3C3C]">
      Whether you prefer cultural exploration, adventure sports, or a relaxed
      beach holiday, we can tailor an itinerary to suit your interests and
      schedule. Just let us know your preferences!
    </p>

    <h2 class="text-xl font-semibold mt-6 mb-2">5. Booking & Support</h2>
    <p class="mb-4 text-[#3C3C3C]">
      Booking is quick and secure through our platform. For any questions or
      special requests, our 24/7 customer support team is always ready to assist
      you.
    </p>

    <p class="mt-8 text-gray-600 text-sm text-center">
      © {{ currentYear }} BdiGo Travels. All rights reserved.
    </p>
  </section>
</template>
