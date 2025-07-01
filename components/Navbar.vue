<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const scrolled = ref(false);

function handleScroll() {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 500) {
    scrolled.value = true;
  } else {
    scrolled.value = false;
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <section>
    <nav>
      <NavTop
        :class="[
          'fixed z-50 w-full transition-all duration-400',
          scrolled ? '-top-12' : 'top-0',
        ]"
      />
      <NavDown
        :class="[
          'fixed z-40 w-full transition-all duration-400',
          scrolled ? 'top-0' : 'top-8 xl:top-10',
        ]"
      />
    </nav>
  </section>
</template>
