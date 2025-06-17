<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { animate } from "motion-v";

const stats = [
  {
    icon: "/icon/SafetyIcon1.png",
    value: 76,
    label: "Satisfied Customer",
    bg: "bg-[#FBFBFB]",
  },
  {
    icon: "/icon/SafetyIcon2.png",
    value: 14,
    label: "Active Members",
    bg: "bg-[#EDEDED]",
  },
  {
    icon: "/icon/SafetyIcon3.png",
    value: 1,
    label: "Travels Destination",
    bg: "bg-[#FBFBFB]",
  },
  {
    icon: "/icon/SafetyIcon4.png",
    value: 35,
    label: "Travel Guides",
    bg: "bg-[#EDEDED]",
  },
];

const animatedValues = ref(stats.map(() => 0));
const sectionRef = ref(null);
let observer = null;

const startCountAnimation = () => {
  stats.forEach((stat, i) => {
    animatedValues.value[i] = 0;
    animate(0, stat.value, {
      duration: 2,
      onUpdate: (latest) => {
        animatedValues.value[i] = Math.floor(latest);
      },
    });
  });
};

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        startCountAnimation();
      }
    },
    { threshold: 0.4 }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onBeforeUnmount(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value);
  }
});
</script>

<template>
  <section
    ref="sectionRef"
    class="bg-[url('/assets/image/counterbg.png')] py-16 px-4 md:px-12 bg-cover bg-no-repeat w-full overflow-hidden"
  >
    <div
      class="container mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
    >
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="rounded-lg p-6 text-center shadow-md"
        :class="stat.bg"
      >
        <div class="flex justify-center items-center mb-2">
          <NuxtImg
            :src="stat.icon"
            loading="lazy"
            alt="icon"
            class="h-[64px] w-[64px]"
          />
        </div>
        <h3 class="text-2xl xl:text-3xl font-bold text-black leading-[64px]">
          {{ animatedValues[index] }} K+
        </h3>
        <p class="text-[20px] font-medium text-[#383838] leading-[30px] mt-1">
          {{ stat.label }}
        </p>
      </div>
    </div>
  </section>
</template>
