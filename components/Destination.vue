<script setup>
import cardImg1 from "@/assets/image/destination/card1.png";
import cardImg2 from "@/assets/image/destination/card2.png";
import cardImg3 from "@/assets/image/destination/card3.png";
import cardImg4 from "@/assets/image/destination/card4.png";
import cardImg5 from "@/assets/image/destination/card5.png";
import cardImg6 from "@/assets/image/destination/card6.png";
import cardImg7 from "@/assets/image/destination/card7.png";
import cardImg8 from "@/assets/image/destination/card8.png";
import cardImg9 from "@/assets/image/destination/card9.png";
import viewIcon1 from "@/assets/image/icon/viewIcon1.png";
import viewIcon2 from "@/assets/image/icon/viewIcon2.png";

const images = [
  cardImg1,
  cardImg9,
  cardImg2,
  cardImg3,
  cardImg4,
  cardImg5,
  cardImg6,
  cardImg7,
  // cardImg8,
  cardImg1,
  cardImg9,
  cardImg2,
  cardImg3,
  cardImg4,
  cardImg5,
  cardImg6,
  cardImg7,
  cardImg8,
  // cardImg1,
  cardImg9,
  cardImg2,
  cardImg3,
  cardImg4,
  cardImg5,
  cardImg6,
  cardImg7,
  cardImg8,
  cardImg1,
  cardImg9,
  cardImg2,
  cardImg3,
  cardImg4,
  // cardImg5,
  cardImg6,
  cardImg7,
  cardImg8,
  cardImg1,
  cardImg9,
  cardImg2,
  cardImg3,
  cardImg4,
  // cardImg5,
  cardImg6,
  cardImg7,
  cardImg8,
];

const categories = ref([
  {
    name: "Bangladesh",
    count: 21,
    checked: true,
    children: [
      { name: "Cox's Bazar", count: 21 },
      { name: "Chittagong", count: 21 },
      { name: "Sylhet", count: 21 },
      { name: "Saidpur", count: 21 },
      { name: "Rajshahi", count: 21 },
      { name: "Barisal", count: 21 },
    ],
  },
  { name: "Japan", count: 21, checked: false },
  { name: "Thailand", count: 21, checked: false },
  { name: "Spain", count: 21, checked: false },
  { name: "India", count: 21, checked: false },
  { name: "China", count: 21, checked: false },
]);

const currentPage = ref(1);
const itemsPerPage = 9; // Matches your 3x3 grid
const totalItems = ref(100); // Fake total items count

// Generate fake data for pagination demo
const generateFakeData = () => {
  const fakeImages = [];
  for (let i = 1; i <= 100; i++) {
    fakeImages.push(images[i % images.length]);
  }
  return fakeImages;
};

const allImages = generateFakeData();

// Computed property for paginated images
const paginatedImages = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return allImages.slice(start, end);
});

// Handle page change
const handlePageChange = (page) => {
  currentPage.value = page;
};
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col lg:flex-row gap-4">
      <!-- Sidebar -->
      <aside class="w-full lg:w-[342px] space-y-6">
        <!-- Categories -->
        <div class="bg-white p-6 shadow-sm rounded-lg">
          <div
            class="mb-3 flex justify-between items-center border-b border-gray-300 pb-3"
          >
            <h3 class="text-xl leading-loose text-gray font-600">Criteria</h3>

            <button
              class="flex items-center bg-[#F4A004] text-white text-base leading-[20px] font-600 px-4 py-1 rounded-lg cursor-pointer"
            >
              Clear All
            </button>
          </div>

          <h3
            class="text-xl font-bold text-green border-b border-gray-300 pb-3"
          >
            Destination
          </h3>
          <ul class="space-y-3 mt-4">
            <li
              v-for="(cat, i) in categories"
              :key="cat.name"
              class="flex flex-col items-start gap-2"
            >
              <div class="flex gap-2">
                <input
                  :id="`${i}`"
                  v-model="cat.checked"
                  type="checkbox"
                  class="h-4 w-4 accent-red-500 focus:ring-red-400 border-gray-300 rounded"
                />
                <label :for="`${i}`" class="text-base text-gray-700">
                  {{ cat.name }}
                  <span class="text-gray-400">({{ cat.count }})</span>
                </label>
              </div>
              <ul
                v-if="cat.checked && cat?.children.length > 0"
                class="space-y-3"
              >
                <li v-for="(child, i) in cat.children" :key="i" class="ml-4">
                  <div class="flex gap-2">
                    <input
                      :id="`cat-${i}`"
                      v-model="child.checked"
                      type="checkbox"
                      class="h-4 w-4 accent-red-500 focus:ring-red-400 border-gray-300 rounded"
                    />
                    <label :for="`cat-${i}`" class="text-base text-gray-700">
                      {{ child.name }}
                      <span class="text-gray-400">({{ child.count }})</span>
                    </label>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
     

     

    

      <!-- Blog Content Area -->
      <div class="w-full px-4">
        <div class="flex justify-between pb-6">
          <div class="flex justify-start items-center gap-2 py-2">
            <h1 class="text-gray text-base">View as :</h1>
            <img :src="viewIcon1" class="cursor-pointer" alt="" />
            <img :src="viewIcon2" class="cursor-pointer" alt="" />
          </div>
          <div class="flex">
            <h1
              class="px-4 py-2 text-gray border border-gray-300 cursor-pointer"
            >
              Sort By
            </h1>
            <h1
              class="text-green flex border border-gray-300 px-4 py-2 gap-2 cursor-pointer"
            >
              Latest <img src="/assets/image/icon/downarrow.png" alt="" />
            </h1>
          </div>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 px-8 lg:gap-2"
        >
          <DestinationCard
            v-for="(img, index) in paginatedImages"
            :key="index"
            :image="img"
            class=""
          />
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-8 overflow-hidden">
      <div class="flex items-center gap-2">
        <!-- Previous Button -->
        <button
          :disabled="currentPage === 1"
          class="px-3 py-1 rounded-md disabled:opacity-50"
          @click="handlePageChange(currentPage - 1)"
        >
          <img src="/assets/image/leftarrowred.png" class="" alt="" />
        </button>

        <!-- Page Numbers -->
        <template v-for="page in 10" :key="page">
          <button
            :class="{
              'bg-red text-white': currentPage === page,
              'hover:bg-gray-100': currentPage !== page,
            }"
            class="w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center"
            @click="handlePageChange(page)"
          >
            {{ page }}
          </button>
        </template>

        <!-- Next Button -->
        <button
          :disabled="currentPage === 10"
          class="px-3 py-1 rounded-md disabled:opacity-50"
          @click="handlePageChange(currentPage + 1)"
        >
          <img src="/assets/image/rightarrow.png" class="" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>
