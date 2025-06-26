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

const selectPlaceCategory = useState('place-category', () => 'domestic');

</script>

<template>
  <div>
    <ContactUsBanner 
    title="Destination Bangladesh" 
    :sub-title="selectPlaceCategory[0].toUpperCase() + selectPlaceCategory.slice(1)" 
    more-title="Destination Details"/>

    <DestinationDetails />
  </div>
</template>
