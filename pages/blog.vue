<script setup lang="ts">
import { useHead } from '#app';

definePageMeta({
  key: route => route.fullPath,
});

useHead({
  title: 'Blog',
})
</script>

<template>
  <blog-details/>
</template>
