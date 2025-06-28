<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
const isClicked = ref<boolean>(false);

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value =
    document.documentElement.scrollTop > 100 || document.body.scrollTop > 100;
};

// const topFunction = () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// };

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <!-- chat area -->
  <div
    :class="`fixed z-50  right-10 w-72  transition-all duration-700 ${
      isScrolled ? 'bottom-33' : 'bottom-22'
    } ${isClicked ? 'flex' : 'hidden'} flex-col gap-3 h-auto p-4 bg-gray-200 
    shadow-lg rounded-xl`"
  >
    <div class="flex gap-2">
      <div class="p-4 bg-green-500 rounded-full grid place-items-center">
        <Icon
          name="material-symbols:account-circle"
          size="20"
          style="color: white"
        />
      </div>
      <div class="p-2 bg-white rounded-xl w-full" />
    </div>
    <div class="flex gap-2">
      <div class="p-2 bg-white rounded-xl w-full" />
      <div class="p-4 bg-red-400 rounded-full grid place-items-center">
        <Icon
          name="material-symbols:account-circle"
          size="20"
          style="color: white"
        />
      </div>
    </div>
    <div class="flex gap-2">
      <div class="p-4 bg-green-500 rounded-full grid place-items-center">
        <Icon
          name="material-symbols:account-circle"
          size="20"
          style="color: white"
        />
      </div>
      <div class="p-2 bg-white rounded-xl w-full" />
    </div>
    <textarea
      class="bg-white text-left text-black w-full outline-none p-2 border border-slate-200 rounded"
      placeholder="Write your text here..."
    />
    <a
      href="https://wa.me/8801402914939"
      target="_blank"
      rel="noopener noreferrer"
      class="p-3 bg-green-500 rounded-full grid place-items-center shadow"
    >
      <Icon name="mdi:send" size="20" style="color: white" />
    </a>
  </div>

  <!-- chat button -->
  <button
    :class="`fixed grid place-items-center  right-10 rounded-full p-4 bg-green-500 shadow-lg cursor-pointer z-50 transition-all duration-700 ${
      isScrolled ? 'bottom-18' : 'bottom-8'
    }`"
    @click="isClicked = !isClicked"
  >
    <Icon
      :name="`${
        !isClicked ? 'material-symbols:chat' : 'bitcoin-icons:cross-filled'
      }`"
      size="20"
      style="color: white"
    />
  </button>
</template>
