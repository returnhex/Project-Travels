<script setup>
import viewIcon1 from "@/assets/image/icon/viewIcon1.png";
import viewIcon2 from "@/assets/image/icon/viewIcon2.png";
import { ref, computed, watch } from "vue";
import destinations from "../constant/index.ts"; // Your destination JSON

// Pagination
const currentPage = ref(1);
const itemsPerPage = 9;

// Flatten all packages
const flattenPackages = (destinations) => {
  const result = [];

  destinations.forEach((country) => {
    if (country.divisions) {
      country.divisions.forEach((division) => {
        division.packages.forEach((pkg) => {
          result.push({
            ...pkg,
            country: country.country,
            city: division.city,
          });
        });
      });
    } else if (country.packages) {
      country.packages.forEach((pkg) => {
        result.push({ ...pkg, country: country.country });
      });
    }
  });

  return result;
};

const allPackages = flattenPackages(destinations);

// Sorted and reactive category structure with checkboxes
const sortedCategories = ref(
  destinations.map((country) => {
    const children = (country.divisions || []).map((division) => ({
      name: division.city,
      count: division.packages.length,
      checked: false,
    }));

    return {
      country: country.country,
      checked: false,
      count: children.length,
      children: children.sort((a, b) => a.name.localeCompare(b.name)),
    };
  })
);

// Computed → Filter based on checked values
const filteredPackages = computed(() => {
  const selectedCities = [];

  sortedCategories.value.forEach((cat) => {
    const checkedChildren = cat.children?.filter((child) => child.checked);

    if (cat.checked || checkedChildren?.length) {
      if (checkedChildren.length) {
        checkedChildren.forEach((child) =>
          selectedCities.push({ country: cat.country, city: child.name })
        );
      } else {
        selectedCities.push({ country: cat.country, city: null });
      }
    }
  });

  // If nothing is selected, return all
  if (selectedCities.length === 0) return allPackages;

  return allPackages.filter((pkg) => {
    return selectedCities.some((selected) => {
      if (selected.city) {
        return pkg.country === selected.country && pkg.city === selected.city;
      } else {
        return pkg.country === selected.country;
      }
    });
  });
});

// Paginate filtered results
const paginatedPackages = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredPackages.value.slice(start, end);
});

// Watch for filter change to reset page
watch(filteredPackages, () => {
  currentPage.value = 1;
});

// Handle pagination
const handlePageChange = (page) => {
  currentPage.value = page;
};

const clearAllFilters = () => {
  sortedCategories.value.forEach((cat) => {
    cat.checked = false;
    cat.children?.forEach((child) => {
      child.checked = false;
    });
  });
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
              @click="clearAllFilters"
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
              v-for="(cat, i) in sortedCategories"
              :key="`cat-${i}`"
              class="flex flex-col items-start gap-2"
            >
              <div class="flex gap-2">
                <input
                  :id="`country-${i}`"
                  v-model="cat.checked"
                  type="checkbox"
                  class="h-4 w-4 accent-red-500 border-gray-300 rounded"
                />
                <label :for="`country-${i}`" class="text-base text-gray-700">
                  {{ cat.country }}
                  <span v-if="cat.count > 0" class="text-gray-400"
                    >({{ cat.count }})</span
                  >
                  <span v-else class="text-gray-400">(1)</span>
                </label>
              </div>

              <ul
                v-if="cat.checked || cat.children.some((c) => c.checked)"
                class="ml-4 space-y-2"
              >
                <li
                  v-for="(child, j) in cat.children"
                  :key="`child-${i}-${j}`"
                  class="flex gap-2"
                >
                  <input
                    :id="`division-${i}-${j}`"
                    v-model="child.checked"
                    type="checkbox"
                    class="h-4 w-4 accent-red-500 border-gray-300 rounded"
                  />
                  <label
                    :for="`division-${i}-${j}`"
                    class="text-base text-gray-700"
                  >
                    {{ child.name }}
                    <span class="text-gray-400">({{ child.count }})</span>
                  </label>
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
            v-for="(data, index) in paginatedPackages"
            :key="index"
            :datas="data"
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
        <template v-for="page in 5" :key="page">
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
