<script setup lang="ts">
import { useHead } from "#app";

definePageMeta({
  key: (route) => route.fullPath,
});

useHead({
  title: "About Us",
  meta: [
    {
      name: 'about us',
      content: 'Know more about us'
    }
  ]
});
</script>

<template>
  <ContactUsBanner title="About Us" sub-title="About Us"/>
  <AboutBgGio title="Get to Know Us" />
  <HowItWork />
  <VMG />
  <counter />
  <Testimonial/>
  <Blog />
</template>
