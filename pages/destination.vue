<script setup lang="ts">
useHead({
  title: "Destination",
  meta: [
    {
      name: "description",
      content:
        "Discover the most popular travel destinations with BdiGo. From breathtaking local escapes to unforgettable international tours — plan your next adventure today.",
    },
  ],
});

</script>

<template>
  <div>
    <ContactUsBanner title="Destination Bangladesh" sub-title="Domestic" more-title="Destination Details"/>

    <DestinationDetails />
  </div>
</template>
