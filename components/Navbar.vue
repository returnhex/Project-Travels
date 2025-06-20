<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const scrolled = ref(false);
const showTop = ref(true);
let lastScrollY = 0;

function handleScroll() {
  const currentScrollY = window.scrollY;

  showTop.value = currentScrollY <= 200;
  if (currentScrollY > lastScrollY && currentScrollY > 200) {
    scrolled.value = true;
  } else {
    scrolled.value = false;
  }

  lastScrollY = currentScrollY;
}

onMounted(() => {
  lastScrollY = window.scrollY;
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
          'fixed z-50 w-full  duration-500',
          showTop ? 'visible' : 'hidden',
        ]"
      />
      <NavDown
        :class="[
          'fixed z-40 w-full transition-all duration-500',
          scrolled ? '-top-20' : 'top-0',
          showTop ? 'top-8 xl:top-10' : '-top-20',
        ]"
      />
    </nav>
  </section>
</template>
