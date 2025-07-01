<script setup lang="ts">
import { useHead } from "#app";

definePageMeta({
  key: (route) => route.fullPath,
});

useHead({
  title: "Contact Us",
  meta: [
    {
      name: "description",
      content:
        "Have questions or need help planning your trip? Contact BdiGo for expert travel assistance, custom tour packages, and support.",
    },
  ],
});
const ContactUs = defineAsyncComponent(
  () => import("~/components/ContactUs.vue")
);
const YourDetails = defineAsyncComponent(
  () => import("~/components/YourDetails.vue")
);
</script>
<template>
  <ContactUsBanner title="Contact Us" sub-title="Contact Us" />
  <ContactUs />
  <YourDetails />
</template>
