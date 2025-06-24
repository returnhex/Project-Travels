<script setup>
import icon1 from "@/assets/image/icon/SafetyIcon1.png";
import icon2 from "@/assets/image/icon/SafetyIcon2.png";
import icon3 from "@/assets/image/icon/SafetyIcon3.png";
import icon4 from "@/assets/image/icon/SafetyIcon4.png";

import { ref, onMounted, onBeforeUnmount } from 'vue'
import { animate } from 'motion-v'

const stats = [
  { icon: icon1, value: 76, label: "Satisfied Customer", bg: "bg-[#FBFBFB]" },
  { icon: icon2, value: 14, label: "Active Members", bg: "bg-[#EDEDED]" },
  { icon: icon3, value: 1, label: "Travels Destination", bg: "bg-[#FBFBFB]" },
  { icon: icon4, value: 35, label: "Travel Guides", bg: "bg-[#EDEDED]" },
]

const animatedValues = ref(stats.map(() => 0))
const sectionRef = ref(null)
let observer = null

const startCountAnimation = () => {
  stats.forEach((stat, i) => {
    animatedValues.value[i] = 0
    animate(0, stat.value, {
      duration: 2,
      onUpdate: latest => {
        animatedValues.value[i] = Math.floor(latest)
      }
    })
  })
}

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        startCountAnimation()
      }
    },
    { threshold: 0.4 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onBeforeUnmount(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value)
  }
})
</script>

<template>
  <section
    ref="sectionRef"
    class="bg-[url('/assets/image/counterbg.png')] py-16 px-4 md:px-12 bg-cover bg-no-repeat w-full overflow-hidden"
  >
    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="rounded-lg p-6 text-center shadow-md"
        :class="stat.bg"
      >
        <div class="flex justify-center items-center mb-2">
          <img :src="stat.icon" alt="icon" class="h-[64px] w-[64px]" />
        </div>
        <h3 class="text-3xl font-bold text-black leading-[64px]">
          {{ animatedValues[index] }} K+
        </h3>
        <p class="text-[20px] font-medium text-[#383838] leading-[30px] mt-1">
          {{ stat.label }}
        </p>
      </div>
    </div>
  </section>
</template>

