<script setup lang="ts">
import { useHead } from "#app";

definePageMeta({
  layout: "default",
  key: (route) => route.fullPath,
});

useHead({
  title: "BdiGo",
  meta: "Traveling Service",
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
