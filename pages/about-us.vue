<script setup lang="ts">
import { useHead } from "#app";

definePageMeta({
  key: (route) => route.fullPath,
});

useHead({
  title: "About Us",
  meta: [
    {
      name: "about us",
      content: "Know more about us",
    },
  ],
});
const VMG = defineAsyncComponent(() => import("~/components/VMG.vue"));
const Counter = defineAsyncComponent(() => import("~/components/counter.vue"));
const Testimonial = defineAsyncComponent(
  () => import("~/components/Testimonial.vue")
);
const Blog = defineAsyncComponent(() => import("~/components/Blog.vue"));
</script>

<template>
  <ContactUsBanner title="About Us" sub-title="About Us" />
  <AboutBgGio title="Get to Know Us" />
  <HowItWork />
  <VMG />
  <counter />
  <Testimonial />
  <Blog />
</template>
