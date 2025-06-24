<script setup>
import { blogPosts } from '~/constant';
const { query } = useRoute();
const getInfo = blogPosts[query?.id - 1]
</script>

<template>
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
    <!-- Header Image -->
    <NuxtImg
      :src="getInfo.img"
      alt="Main Blog"
      class="w-full h-auto rounded-xl object-cover"
      loading="lazy"
    />

    <!-- Meta Info -->
    <div class="flex flex-wrap items-center text-gray-500 text-sm gap-4">
      <div class="flex items-center gap-2">
        <NuxtImg
          src="image/icon/calendericon.png"
          loading="lazy"
          class=""
          alt="calender-icon"
        />
        <span class="font-medium text-base leading-relaxed text-gray"
          >{{ getInfo.date }}</span
        >
      </div>
      <div class="flex items-center gap-2">
        <NuxtImg src="image/icon/admin.png" loading="lazy" class="" alt="" />
        <span class="font-medium text-base leading-relaxed text-gray"
          >By Admin</span
        >
      </div>
      <div class="flex items-center gap-2">
        <NuxtImg src="image/icon/view.png" loading="lazy" class="" alt="" />
        <span class="font-medium text-base leading-relaxed text-gray"
          >{{getInfo.views}} Views</span
        >
      </div>
      <span
        class="ml-auto text-xs leading-relaxed bg-gray-100 text-gray px-3 py-1 rounded-full"
        >{{getInfo.category}}</span
      >
    </div>

    <!-- Title -->
    <h1
      class="text-lg md:text-xl font-semibold text-dark md:leading-loose text-black"
    >
      {{getInfo.title}}
    </h1>

    <!-- Blog Content -->
    <div class="space-y-6 font-medium text-gray text-base leading-relaxed">
      <p>
        {{ getInfo.content }}
      </p>

      <!-- Quote -->
      <blockquote
        class="bg-gray-100 text-gray text-base font-medium px-6 py-4 rounded-lg border-l-4 border-green"
      >
       {{ getInfo.quote }}
      </blockquote>

      <!-- Secondary Image -->
      <NuxtImg
        :src="getInfo?.img2"
        alt="Blog Content"
        class="w-full h-auto rounded-lg object-cover"
        loading="lazy"
      />

      <p class="space-y-6 font-medium text-gray text-base leading-relaxed">
        {{ getInfo.moreContent }}
      </p>
    </div>

    <!-- Share -->
    <div
      class="flex items-center gap-4 py-3 px-4 justify-end border border-gray-200 bg-gray-100"
    >
      <span class="text-gray-600 font-medium">Share:</span>
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
  </section>
</template>
