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
        "Discover BdiGo - your premier travel service offering curated trips, unbeatable deals, and seamless bookings. Explore now and start your adventure!",
    },
  ],
});

const DestinationList = defineAsyncComponent(
  () => import("~/components/DestinationList.vue")
);
const Package = defineAsyncComponent(() => import("~/components/Package.vue"));
const Counter = defineAsyncComponent(() => import("~/components/Counter.vue"));
const Testimonial = defineAsyncComponent(
  () => import("~/components/Testimonial.vue")
);
const Blog = defineAsyncComponent(() => import("~/components/Blog.vue"));
</script>
<template>
  <main>
    <HeroSection />
    <AboutBgGio title="About BdiGo Agency" button-text="More About Us" />
    <ChooseUs />
    <DestinationList />
    <Package />
    <Counter />
    <Testimonial />
    <Blog />
  </main>
</template>
