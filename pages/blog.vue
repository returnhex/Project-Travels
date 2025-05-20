<script setup lang="ts">
import { useHead } from "#app";

definePageMeta({
  key: (route) => route.fullPath,
});

useHead({
  title: "Blog",
});
</script>

<template>
  <section>
    <ContactUsBanner title="Blog Details" sub-title="Our Blog " />
    <BlogDetails />
  </section>
</template>
