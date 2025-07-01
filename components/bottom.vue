<script setup>
import {
  about,
  getInTouch,
  instagramPost,
  paymentMethodIcon,
} from "../constant/index";
const currentYear = ref(0);
onMounted(() => {
  currentYear.value = new Date().getFullYear();
});
</script>
<template>
  <footer
    class="bg-[#F7FDFC] w-full h-[920px] sm:h-[980px] md:h-[750px] lg:h-[552px] items-center mt-48 justify-center flex flex-col mx-auto relative"
  >
    <NewsLetter class="absolute -top-44" />
    <div
      class="container mx-auto px-4 justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-10 sm:-mt-20 md:mt-32"
    >
      <!-- logo -->
      <div class="flex flex-col gap-8">
        <div>
          <NuxtImg
            src="image/logo.svg"
            alt="WINGS GLOBAL FREIGHT"
            class="w-[70px] h-[40px] 2xl:w-[90px] 2xl:h-[60px] cursor-pointer py-2 2xl:-ml-1 -ml-2"
            loading="lazy"
          />
          <p class="text-lg text-navy font-medium leading-[28px]">
            Thinking of taking a break from every day’s life? Don't worry, we
            take care of your trip.
          </p>
        </div>

        <div class="flex gap-2">
          <NuxtLink
            to="https://www.facebook.com/share/1BYb3RaBaz/"
            target="_blank"
          >
            <Icon
              name="mdi:facebook"
              size="24"
              class="text-gray-500 hover:text-[#1877F2] cursor-pointer"
            />
          </NuxtLink>
          <Icon
            name="mdi:instagram"
            size="24"
            class="text-gray-500 hover:text-[#E4405F] cursor-pointer"
          />
          <Icon
            name="mdi:linkedin"
            size="24"
            class="text-gray-500 hover:text-[#0077B5] cursor-pointer"
          />
          <Icon
            name="mdi:twitter"
            size="24"
            class="text-gray-500 hover:text-[#1DA1F2] cursor-pointer"
          />
          <Icon
            name="mdi:youtube"
            size="24"
            class="text-gray-500 hover:text-[#FF0000] cursor-pointer"
          />
        </div>
      </div>

      <div class="flex">
        <!-- about -->

        <div class="w-1/2">
          <div v-for="(items, index) in about" :key="index" class="w-full">
            <h2 class="text-xl text-navy font-semibold pb-4">
              {{ items.title }}
            </h2>
            <ul class="space-y-2 text-sm">
              <li v-for="(item, idx) in items.items" :key="idx">
                <NuxtLink
                  v-if="item?.href"
                  :to="item.href"
                  class="cursor-pointer text-navy"
                >
                  {{ item.text }}
                </NuxtLink>
                <span v-else class="text-navy cursor-pointer">
                  {{ item.text }}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <!-- get in touch -->
        <div class="w-1/2">
          <div v-for="(getIn, index) in getInTouch" :key="index" class="w-full">
            <h2 class="text-xl text-navy font-semibold pb-4">
              {{ getIn.title }}
            </h2>
            <ul class="space-y-2 text-sm">
              <li
                v-for="(item, id) in getIn.items"
                :key="id"
                class="flex items-center"
              >
                <NuxtImg
                  :src="item.icon"
                  alt="icon"
                  class="w-6 h-6 md:w-7 md:h-7"
                />
                <a v-if="item?.href" :href="item.href" target="_blank"
                  ><span class="text-navy cursor-pointer">
                    {{ item.text }}
                  </span></a
                >
                <span v-else class="text-navy cursor-pointer">
                  {{ item.text }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="w-1/2 md:w-full md:px-8 lg:px-2 xl:px-6">
        <h2 class="font-bold text-navy text-xl leading-loose pb-4">
          Recent Blog Post
        </h2>
        <div
          class="grid grid-cols-3 gap-x-1 gap-y-2 md:gap-y-4 sm:px-2 xl:px-10 place-items-center md:px-0"
        >
          <NuxtLink
            v-for="(item, id) in instagramPost"
            :key="id"
            to="/blogs"
            class="cursor-pointer w-full"
          >
            <NuxtImg :src="item" alt="" class="w-full" loading="lazy" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Bottom Line -->
    <div
      class="container mx-auto px-4 sm:px-6 lg:px-20 py-6 border-t-2 border-gray absolute bottom-6 md:-bottom-10 xl:-bottom-2"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-0 md:gap-4">
        <!-- Left: Copyright -->
        <p class="text-center md:text-left text-base leading-relaxed text-navy">
          &copy; {{ currentYear }} BdiGo. All Rights Reserved.
        </p>

        <!-- Right: Payment Methods -->
        <div
          class="flex flex-col md:flex-row items-center justify-center md:justify-end space-y-2 md:space-y-0 md:space-x-4"
        >
          <h3 class="text-navy font-medium text-base leading-relaxed">
            We Accept:
          </h3>
          <div class="flex space-x-3">
            <template v-for="(item, id) in paymentMethodIcon" :key="id">
              <NuxtImg
                :src="item"
                alt="Payment Method"
                class="h-6 w-10 object-contain cursor-pointer"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
