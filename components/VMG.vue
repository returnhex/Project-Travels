<script setup lang="ts">
import { VGM } from "../constant/index";
</script>

<template>
  <section
    class="flex flex-col gap-6 py-12 md:py-24 container mx-auto overflow-hidden"
  >
    <OurGoal
      :top-img="VGM.vision.topImg"
      :card-icon="VGM.vision.cardIcon"
      :card-title="VGM.vision.carditle"
      :card-desc="VGM.vision.cardDesc"
      loading="lazy"
    />

    <OurMIssion
      :top-img="VGM.mission.topImg"
      :card-icon="VGM.mission.cardIcon"
      :card-title="VGM.mission.carditle"
      :card-desc="VGM.mission.cardDesc"
      loading="lazy"
    />
    <OurGoal
      :top-img="VGM.goal.topImg"
      :card-icon="VGM.goal.cardIcon"
      :card-title="VGM.goal.carditle"
      :card-desc="VGM.goal.cardDesc"
      loading="lazy"
    />
  </section>
</template>
