<script setup lang="ts">
definePageMeta({
  key: route => route.fullPath,
})

import { useHead } from '#app';

useHead({
  title: 'About Us',
})
</script>

<template>
    <ContactUsBanner title="About Us"/>
    <AboutBgGio title="Get to Know Us"/>
    <HowItWork/>
    <VMG/>
    <counter/>
</template>