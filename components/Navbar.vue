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
  // lastScrollY = window.scrollY;
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
          'fixed z-50 w-full transition-all duration-500',
          scrolled ? 'hidden' : 'visible',
        ]"
      />
      <NavDown
        :class="[
          'fixed z-40 w-full transition-all duration-300',
          scrolled ? 'top-0' : 'top-8',
        ]"
      />
    </nav>
  </section>
</template>
