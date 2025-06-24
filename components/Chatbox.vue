<script setup lang="ts">
const isClicked = ref<boolean>(false);
</script>

<template>

    <!-- chat area -->
  <div
    :class="`fixed z-50 bottom-25 right-10 w-72 ${isClicked ? 'flex' : 'hidden'} flex-col gap-3 h-auto p-4 bg-gray-200 
    shadow-lg rounded-xl`"
  >
    <div class="flex gap-2">
      <div class="p-4 bg-green-500 rounded-full grid place-items-center">
        <Icon name="material-symbols:account-circle" size="20" style="color: white;"/>
      </div>
      <div class="p-2 bg-white rounded-xl w-full" />
    </div>
    <div class="flex gap-2">
        <div class="p-2 bg-white rounded-xl w-full" />
      <div class="p-4 bg-red-400 rounded-full grid place-items-center">
        <Icon name="material-symbols:account-circle" size="20" style="color: white;"/>
      </div>
    </div>
    <div class="flex gap-2">
      <div class="p-4 bg-green-500 rounded-full grid place-items-center">
        <Icon name="material-symbols:account-circle" size="20" style="color: white;"/>
      </div>
      <div class="p-2 bg-white rounded-xl w-full" />
    </div>
    <textarea 
  class="bg-white text-left text-black w-full outline-none p-2 border border-slate-200 rounded"
  placeholder="Write your text here..."
></textarea>

  </div>

  <!-- chat button -->
  <button
    @click="isClicked = !isClicked"
    class="fixed grid place-items-center bottom-10 right-10 rounded-full p-4 bg-green-500
    shadow-lg cursor-pointer z-50"
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
