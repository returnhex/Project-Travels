<script setup lang="ts">
import { useHead } from "#app";

definePageMeta({
  key: (route) => route.fullPath,
});

useHead({
  title: "About Us",
});
</script>

<template>
  <ContactUsBanner title="About Us" />
  <AboutBgGio title="Get to Know Us" />
  <HowItWork />
  <VMG />
  <counter />
  <test-monial />
  <Blog />
</template>
