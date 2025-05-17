<script setup>
import instagramPostImg1 from "@/assets/image/footer/footer1.png";
import instagramPostImg2 from "@/assets/image/footer/footer2.png";
import instagramPostImg3 from "@/assets/image/footer/footer3.png";
import instagramPostImg4 from "@/assets/image/footer/footer4.png";
import instagramPostImg5 from "@/assets/image/footer/footer5.png";
import instagramPostImg6 from "@/assets/image/footer/footer6.png";
// social icon
import iconFacebook from "/assets/image/icon/facebook.png";
import iconInstagram from "/assets/image/icon/instagram.png";
import iconLinkedin from "/assets/image/icon/linkedin.png";
import iconTwitter from "/assets/image/icon/twitter.png";
import iconYoutube from "/assets/image/icon/youtube.png";

// payment method icon
import paymentMethodIcon1 from "/assets/image/icon/payment1.png";
import paymentMethodIcon2 from "/assets/image/icon/payment2.png";
import paymentMethodIcon3 from "/assets/image/icon/payment3.png";
import paymentMethodIcon4 from "/assets/image/icon/payment4.png";
import paymentMethodIcon5 from "/assets/image/icon/payment5.png";
import paymentMethodIcon6 from "/assets/image/icon/payment6.png";
// grt in touch
import phone from "/assets/image/icon/phone.png";
import message from "/assets/image/icon/message.png";
import location from "/assets/image/icon/location.png";

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
      { text: "+880 1855-255 342 ", icon: phone },
      { text: "Contact@bdigo.com", icon: message },
      {
        text: "23, Tropical Akhand Tower (Level # 03-05),  Gareeb-e-Nawaz Ave, Sector # 11, Uttara,  Dhaka - 1230",
        icon: location,
      },
    ],
  },
];
const instagramPost = [
  instagramPostImg1,
  instagramPostImg2,
  instagramPostImg3,
  instagramPostImg4,
  instagramPostImg5,
  instagramPostImg6,
];
const icon = [
  iconFacebook,
  iconInstagram,
  iconLinkedin,
  iconTwitter,
  iconYoutube,
];
const paymentMethodIcon = [
  paymentMethodIcon1,
  paymentMethodIcon2,
  paymentMethodIcon3,
  paymentMethodIcon4,
  paymentMethodIcon5,
  paymentMethodIcon6,
];
</script>
<template>
  <footer
    class="bg-[#F7FDFC] w-full h-[1080px] sm:h-[900px] lg:h-[752px] items-center mt-48 justify-center flex flex-col mx-auto relative"
  >
    <news-letter class="absolute -top-44" />
    <div
      class="container mx-auto px-6 mt-20 justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <!-- logo -->
      <div class="col-span-1">
        <img
          src="/assets/image/logo.png"
          alt="WINGS GLOBAL FREIGHT"
          class="w-[102px] h-[48px] py-2"
        />

        <p class="text-lg text-navy font-medium leading-[28px]">
          Thinking of taking a break from every day’s life? Don't worry, we take
          care of your trip.
        </p>
        <div class="flex gap-2">
          <div v-for="(item, id) in icon" :key="id">
            <img :src="item" alt="" />
          </div>
        </div>
      </div>

      <div class="col-span-1 flex">
        <!-- about -->

        <div class="w-1/2">
          <div v-for="(items, index) in about" :key="index" class="w-full">
            <h2 class="text-xl text-navy font-semibold pb-4">
              {{ items.title }}
            </h2>
            <ul class="space-y-2 text-sm">
              <li v-for="(item, idx) in items.items" :key="idx">
                <span class="text-navy cursor-pointer">
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
                <img :src="item.icon" alt="icon" class="w-4 h-4" />
                <span class="text-navy cursor-pointer">
                  {{ item.text }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-span-1">
        <h2 class="font-bold text-navy text-xl leading-[32px] pb-4">
          Instagram Post
        </h2>
        <div class="grid grid-cols-6 gap-1">
          <div v-for="(item, id) in instagramPost" :key="id" class="col-span-2">
            <img :src="item" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Line -->
    <div
      class="container mx-auto px-4 sm:px-6 lg:px-20 py-6 border-t-2 border-gray absolute bottom-2"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-0 md:gap-4">
        <!-- Left: Copyright -->
        <p class="text-center md:text-left text-base leading-relaxed text-navy">
          &copy; 2025 BdiGo. All Rights Reserved.
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
              <img
                :src="item"
                alt="Payment Method"
                class="h-6 w-auto object-contain"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
