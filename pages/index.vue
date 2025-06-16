<script setup>
import { useHead } from "#app";

definePageMeta({
  layout: "default",
  key: (route) => route.fullPath,
});

useHead({
  title: "BdiGo",
  meta: "Your Best Travelling service is here",
});
</script>
<template>
  <main>
    <HeroSection />
    <AboutBgGio title="About BdiGo Agency" button-text="More About Us" />
    <ChooseUs />
    <DestinationList />
    <package />
    <counter />
    <Testimonial />
    <Blog />
  </main>
</template>
