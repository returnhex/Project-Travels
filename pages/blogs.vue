<script setup lang="ts">
import { useHead } from "#app";

definePageMeta({
  key: (route) => route.fullPath,
});

useHead({
  title: "Blogs",
  meta: [
    {
      name: "description",
      content:
        "Explore engaging travel blogs from BdiGo. Discover destination guides, expert travel tips, and inspiring stories to plan your next adventure.",
    },
  ]
});
</script>

<template>
  <section>
    <ContactUsBanner title="Our Blog" sub-title="Our Blog" />
    <delay-hydration>
      <OurBlog />
    </delay-hydration>
  </section>
</template>
