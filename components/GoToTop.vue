<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value =
    document.documentElement.scrollTop > 100 || document.body.scrollTop > 100;
};

const topFunction = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <button
    :class="[
      'fixed  right-10 cursor-pointer z-50 h-12 w-12 rounded-full grid place-items-center transition-all duration-700',
      isScrolled
        ? 'bg-red-500 opacity-100 bottom-5'
        : 'opacity-0 pointer-events-none -bottom-8',
    ]"
    @click="topFunction"
  >
    <Icon
      name="material-symbols:vertical-align-top-rounded"
      size="24"
      class="text-white"
    />
  </button>
</template>
