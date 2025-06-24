<script setup lang="ts">
useHead({
  title: "Destinations",
  meta: [
    {
      name: "description",
      content:
      "Discover the best travel destinations with [Your Agency Name]. Explore stunning cities, exotic beaches, and cultural landmarks in Bangladesh and around the world.",
    }
  ]
});
</script>

<template>
  <section>
    <ContactUsBanner
      title="Destination Bangladesh"
      necessaryTitle="From Hills to Heritage"
      subTitle="Domestic"
      moreTitle="Destination Details"
    />
    <delay-hydration>
      <Destination />
    </delay-hydration>
  </section>
</template>
