<script setup lang="ts">
import { useHead } from "#app";

definePageMeta({
  key: (route) => route.fullPath,
});

useHead({
  title: "Blog",
  meta: [
    {
      name: "description",
      content:
        "Read the latest travel stories, destination guides, and helpful tips from the experts at BdiGo. Stay inspired for your next adventure!",
    },
  ]
});
</script>

<template>
  <section>
    <ContactUsBanner title="Blog Details" sub-title="Our Blog " />
    <BlogDetails />
  </section>
</template>
