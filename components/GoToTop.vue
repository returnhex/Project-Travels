<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value =
    document.documentElement.scrollTop > 100 || document.body.scrollTop > 100
}

const topFunction = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <button
    @click="topFunction"
    :class="[
      'fixed bottom-10 right-25 cursor-pointer z-50 h-12 w-12 rounded-full grid place-items-center transition-opacity duration-500',
      isScrolled ? 'bg-red-500 opacity-100' : 'opacity-0 pointer-events-none'
    ]"
  >
    <Icon
      name="material-symbols:vertical-align-top-rounded"
      size="24"
      class="text-white"
    />
  </button>
</template>
