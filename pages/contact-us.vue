<script setup lang="ts">

import { useHead } from '#app';

definePageMeta({

  key: route => route.fullPath,
});

useHead({
  title: 'Contact Us',
})
</script>
<template>
    <ContactUsBanner title="Contact Us" sub-title="Contact Us"/>
    <ContactUs/>
    <YourDetails/>
</template>
