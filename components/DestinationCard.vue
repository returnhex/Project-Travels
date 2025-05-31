<script setup lang="ts">
interface Destination {
  title: string;
  location: string;
  duration: string;
  image: string;
  country: string;
}

const props = defineProps<{
  datas: Destination;
}>();
const truncate = (text: string, length = 35) => {
  return text.length > length ? text.slice(0, length) + "..." : text;
};
</script>

<template>
  <div
    class="bg-white w-full rounded-xl border border-light-gray shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col items-center mx-auto px-2 py-2"
  >
    <!-- Package Image -->
    <img
      :src="datas.image"
      alt="Package"
      class="w-full  h-[326px] object-cover rounded-lg"
    />
    <div class="p-4 w-full">
      <h3 class="text-xl font-semibold text-navy leading-loose py-2">
        {{ truncate(datas.title, 30) }}
      </h3>
      <div class="flex gap-2 pb-2 items-center">
        <img src="/assets/image/location.png" class="w-5 h-4" alt="" />
        <p class="text-sm text-gray-500 mt-1">{{ datas.location }}</p>
      </div>
      <div class="h-[1px] bg-[#D2D2D2]" />

      <div class="flex justify-between items-center mt-4 text-sm gap-0">
        <div class="flex gap-1">
          <img src="/assets/image/icon/clock.png" class="w-4 h-4" alt="" />
          <p class="text-dark-gray">{{ datas.duration }}</p>
        </div>
        <NuxtLink to="/destination">
          <Button6 title=" Explore Now" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
