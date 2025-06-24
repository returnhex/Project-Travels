<script setup>
const currentYear = ref(0);
onMounted(() => {
  currentYear.value = new Date().getFullYear();
});
const about = [
  {
    title: "About Us",
    items: [
      "About Us",
      "Our Service",
      "Tour Guide",
      "Privacy Policy",
      "Terms & Conditions",
    ],
  },
];
const getInTouch = [
  {
    title: "Get In Touch",
    items: [
      {
        text: "+880 1855-255 342",
        icon: "/icon/location.png",
        href: "https://wa.me/+880 1855-255 342",
      },
      {
        text: "Contact@bdigo.com",
        icon: "/icon/message.png",
        href: "mailto:Contact@bdigo.com",
      },
      {
        text: "23, Tropical Akhand Tower (Level # 03-05),  Gareeb-e-Nawaz Ave, Sector # 11, Uttara,  Dhaka - 1230",
        icon: "/icon/phone.png",
        href: `https://www.google.com/maps/search/?api=1&query=${"23, Tropical Akhand Tower (Level # 03-05),  Gareeb-e-Nawaz Ave, Sector # 11, Uttara,  Dhaka - 1230"}`,
      },
    ],
  },
];
const instagramPost = [
  "/footer/footer1.png",
  "/footer/footer2.png",
  "/footer/footer3.png",
  "/footer/footer4.png",
  "/footer/footer5.png",
  "/footer/footer6.png",
];

const paymentMethodIcon = [
  "/icon/payment1.png",
  "/icon/payment2.png",
  "/icon/payment3.png",
  "/icon/payment4.png",
  "/icon/payment5.png",
  "/icon/payment6.png",
];
</script>
<template>
  <footer
    class="bg-[#F7FDFC] w-full h-[920px] sm:h-[980px] md:h-[750px] lg:h-[552px] items-center mt-48 justify-center flex flex-col mx-auto relative"
  >
    <NewsLetter class="absolute -top-44" />
    <div
      class="container mx-auto px-4 justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-20 md:mt-0"
    >
      <!-- logo -->
      <div class="flex flex-col gap-8">
        <div>
          <NuxtImg
            src="/logo.svg"
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
          <Icon
            name="mdi:facebook"
            size="24"
            class="text-gray-500 hover:text-[#1877F2] cursor-pointer"
          />
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
                  v-if="!idx"
                  to="/about-us"
                  class="cursor-pointer text-navy"
                >
                  {{ item }}
                </NuxtLink>
                <span v-else class="text-navy cursor-pointer">
                  {{ item }}
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
              <li v-for="(item, id) in getIn.items" :key="id" class="flex">
                <NuxtImg
                  :src="item.icon"
                  alt="icon"
                  class="w-4 h-4"
                  width="20"
                  height="20"
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

      <div class="sm:w-full px-14">
        <h2 class="font-bold text-navy text-xl leading-loose pb-4">
          Instagram Post
        </h2>
        <div
          class="grid grid-cols-3 gap-x-1 gap-y-2 md:gap-y-4 sm:px-12 place-items-center md:px-0"
        >
          <div
            v-for="(item, id) in instagramPost"
            :key="id"
            class="cursor-pointer w-full"
          >
            <NuxtImg :src="item" alt="" class="w-full" loading="lazy" />
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Line -->
    <div
      class="container mx-auto px-4 sm:px-6 lg:px-20 py-6 border-t-2 border-gray absolute bottom-0 md:bottom-2"
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
                class="h-6 w-auto object-contain cursor-pointer"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
