<script setup lang="ts">
import { useHead } from '#app';

definePageMeta({
  key: route => route.fullPath,
});

useHead({
  title: 'Blogs',
})
</script>

<template>
  <our-blog/>
</template>
