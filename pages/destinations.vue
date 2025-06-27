<script setup lang="ts">
useHead({
  title: "Destinations",
  meta: [
    {
      name: "description",
      content:
        "Discover the best travel destinations with [Your Agency Name]. Explore stunning cities, exotic beaches, and cultural landmarks in Bangladesh and around the world.",
    },
  ],
});

const selectPlaceCategory = useState("place-category", () => "domestic");
const Destination = defineAsyncComponent(
  () => import("~/components/Destination.vue")
);
</script>

<template>
  <section>
    <ContactUsBanner
      title="Destination Bangladesh"
      necessary-title="From Hills to Heritage"
      :sub-title="
        selectPlaceCategory[0].toUpperCase() + selectPlaceCategory.slice(1)
      "
      more-title="Destination Details"
    />
    <delay-hydration>
      <Destination />
    </delay-hydration>
  </section>
</template>
