<script setup lang="ts">
import { useHead } from "#app";

definePageMeta({
  layout: "default",
  key: (route) => route.fullPath,
});

useHead({
  title: "BdiGo",
  meta: [
    {
      name: "description",
      content:
        "Discover BdiGo – your premier travel service offering curated trips, unbeatable deals, and seamless bookings. Explore now and start your adventure!",
    },
  ],
});
</script>
<template>
  <main>
    <HeroSection />
    <AboutBgGio title="About BdiGo Agency" button-text="More About Us" />
    <ChooseUs />
    <DestinationList />
    <Package />
    <counter />
    <Testimonial />
    <Blog />
  </main>
</template>
