<script setup lang="ts">
import { useHead } from "#app";

definePageMeta({
  key: (route) => route.fullPath,
});

useHead({
  title: "Blogs",
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
