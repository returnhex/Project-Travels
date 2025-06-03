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

<script setup lang="ts">
import aimBanner from "../assests/OutGoal/aim-banner.png";
import aimArrow from "../assests/OutGoal/aim-arrow.svg";

import visionBanner from "../assests/OurVission/vision-banner.png";
import visionIcon from "../assests/OurVission/vison-icon.svg";

import missionBanner from "../assests/OurMission/mission-banner.png";
import missionIcon from "../assests/OurMission/mission-icon.png";

const VGM = {
  vision: {
    topImg: visionBanner,
    cardIcon: visionIcon,
    carditle: "Our Vision",
    cardDesc: ` The statement implies a willingness to help someone escape their daily routine by taking care of their travel plans. It suggests a travel agency or similar service. The statement implies a willingness to help someone escape their daily routine by taking care of their travel plans. It suggests a travel agency or similar service. The statement implies a willingness to help someone escape their daily routine by taking care of their travel plans. It suggests a travel agency or similar service. The statement implies a willingness to help someone escape their daily routine by taking care of their travel plans. It suggests a travel agency or similar service`,
  },
  mission: {
    topImg: missionBanner,
    cardIcon: missionIcon,
    carditle: "Our Mission",
    cardDesc: ` The statement implies a willingness to help someone escape their daily routine by taking care of their travel plans. It suggests a travel agency or similar service. The statement implies a willingness to help someone escape their daily routine by taking care of their travel plans. It suggests a travel agency or similar service. The statement implies a willingness to help someone escape their daily routine by taking care of their travel plans. It suggests a travel agency or similar service. The statement implies a willingness to help someone escape their daily routine by taking care of their travel plans. It suggests a travel agency or similar service`,
  },
  goal: {
    topImg: aimBanner,
    cardIcon: aimArrow,
    carditle: "Our Goal",
    cardDesc: ` The statement implies a willingness to help someone escape their daily routine by taking care of
                        their travel plans. It suggests a travel agency or similar service. The statement implies a
                        willingness to help someone escape their daily routine by taking care of their travel plans. It
                        suggests a travel agency or similar service. The statement implies a willingness to help someone
                        escape their daily routine by taking care of their travel plans. It suggests a travel agency or
                        similar service. The statement implies a willingness to help someone escape their daily routine
                        by taking care of their travel plans. It suggests a travel agency or similar service`,
  },
};
</script>
