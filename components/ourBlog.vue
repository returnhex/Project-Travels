<script setup lang="ts">
import { motion } from "motion-v";
import { ref, computed } from "vue";
import { blogPosts } from "../constant/index";

const categories = ref([
  { name: "Travel", count: 21, checked: false },
  { name: "Great Places", count: 21, checked: false },
  { name: "Tourists", count: 21, checked: false },
  { name: "Sea", count: 21, checked: false },
  { name: "Destinations", count: 21, checked: false },
  { name: "Holidays", count: 21, checked: false },
  { name: "Adventures", count: 21, checked: false },
]);

const searchQuery = ref("");

const filteredBlogPosts = computed(() => {
  const selectedCategories = categories.value
    .filter((cat) => cat.checked)
    .map((cat) => cat.name);

  return blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(post.category);
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());

    return matchesCategory && matchesSearch;
  });
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col-reverse lg:flex-row gap-8">
      <!-- Blog Content Area -->
      <div class="w-full lg:w-8/12 px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 px-8 lg:gap-10">
          <h1
            v-if="!filteredBlogPosts.length"
            class="font-semibold text-lg md:text-xl py-2 leading-snug text-center text-gray-700"
          >
            No Blogs found!
          </h1>
          <motion.div
            v-for="(blogPost, index) in filteredBlogPosts"
            v-else
            :key="index"
            :while-hover="{ scale: 1.02 }"
            class="relative flex flex-col items-center w-full max-w-sm mx-auto cursor-pointer"
          >
            <!-- Main Image -->
            <NuxtImg
              :src="blogPost.img"
              alt="Blog Image"
              class="w-full h-auto rounded-lg object-cover"
            />

            <!-- Blog Card -->
            <div
              class="bg-[#F8F8F8] w-11/12 mt-[-60px] rounded-lg p-6 shadow-lg z-10 relative"
            >
              <!-- Date + Tag -->
              <div class="flex justify-between items-center mb-4">
                <div class="flex items-center space-x-2 text-sm text-gray-600">
                  <NuxtImg
                    src="image/icon/calendericon.png"
                    alt="calendar"
                    class="h-4 w-4"
                  />
                  <p class="font-medium text-base text-dark-gray">
                    {{ blogPost.date }}
                  </p>
                </div>
                <NuxtImg
                  src="image/travelbtn.png"
                  alt="travel tag"
                  class="h-5 w-auto"
                />
              </div>

              <!-- Title -->
              <h2 class="font-semibold text-lg md:text-xl py-2 leading-snug">
                {{ blogPost.title }}
              </h2>

              <!-- Description -->
              <p
                class="text-sm md:text-base text-dark-gray leading-relaxed mb-4"
              >
                {{ blogPost.subtitle }}
              </p>

              <!-- Footer -->
              <div
                class="flex flex-col sm:flex-row justify-between items-center gap-6"
              >
                <div class="flex items-center space-x-2 text-sm text-gray-600">
                  <NuxtImg
                    src="image/icon/admin.png"
                    alt=""
                    class="h-4 w-4"
                    loading="lazy"
                  />
                  <p
                    class="font-medium text-base leading-relaxed text-dark-gray"
                  >
                    Admin
                  </p>
                </div>
                <NuxtLink to="/blog">
                  <Button7 title="More Details" />
                </NuxtLink>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <!-- Sidebar -->
      <aside class="w-full lg:w-4/12 space-y-6">
        <!-- Search -->
        <div class="mb-3 bg-white p-6 shadow-sm rounded-lg">
          <h3
            class="text-xl font-bold leading-loose text-green mb-2 border-gray border-b-1 pb-3"
          >
            Search
          </h3>
          <div class="relative flex pt-3">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search Blog"
              class="w-full pl-4 pr-10 py-4 rounded-lg bg-gray-100 focus:outline-none relative"
            />
            <button
              class="absolute pt-3 inset-y-0 right-0 flex items-center cursor-pointer"
            >
              <NuxtImg
                src="image/icon/searchIcon.png"
                class="border-black border-[1px] rounded-r-xl"
                alt="icon-search"
              />
            </button>
          </div>
        </div>

        <!-- Categories -->
        <div class="bg-white p-6 shadow-sm rounded-lg">
          <h3 class="text-xl font-bold text-green border-b pb-3">Categories</h3>
          <ul class="space-y-3 mt-4">
            <li
              v-for="(cat, i) in categories"
              :key="cat.name"
              class="flex items-center gap-2"
            >
              <input
                :id="`cat-${i}`"
                v-model="cat.checked"
                type="checkbox"
                class="h-4 w-4 accent-red-500 focus:ring-red-400 border-gray-300 rounded cursor-pointer"
              />
              <label :for="`cat-${i}`" class="text-base text-gray-700">
                {{ cat.name }}
                <span class="text-gray-400">({{ cat.count }})</span>
              </label>
            </li>
          </ul>
          <div class="mt-4">
            <a href="#" class="text-red font-medium text-base">See More</a>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
