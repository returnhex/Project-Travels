<script setup lang="ts">
import { ref } from "vue";
import type { RouteRecordNameGeneric } from "vue-router";
import { navItems } from "~/constant";
const route = useRoute();

const isMenuOpen = ref<boolean>(false);

const mapRouteName = (name: string | null): string => {
  if (!name) return '';
  switch (name) {
    case 'index':
      return 'home';
    case 'destination':
    case 'package':
    case 'packages':
      return 'destinations';
    case 'blog':
      return 'blogs';
    default:
      return name;
  }
};

const isActive = ref<RouteRecordNameGeneric>(mapRouteName(route.name as string));

watch(() => route.name, (newName) => {
  isActive.value = mapRouteName(newName as string);
}, { immediate: true });


const getLinkClass = (name: string) => {
  return `${isActive.value === name ? "bn5" : ""}`;
};
</script>
<template>
  <div class="container mx-auto py-1 lg:py-2 xl:py-3 2xl:py-5">
    <div
      class="flex justify-between items-center px-4 md:px-3 xl:px-2 2xl:px-3"
    >
      <NuxtLink to="/" aria-label="go to home route or page">
        <NuxtImg
          src="/logo.svg"
          alt="logo"
          class="w-[70px] h-[40px] 2xl:w-[80px] 2xl:h-[50px] cursor-pointer"
        />
      </NuxtLink>
      <ul
        :initial="{ scale: 0 }"
        :while-in-view="{ scale: 1 }"
        :transition="{ duration: 0.3 }"
        :class="[
          'absolute right-0 top-8 md:top-9 z-50 md:static',
          'bg-[#2E8942] md:bg-white',
          'flex flex-col md:flex-row',
          'gap-6 md:gap-8 lg:gap-12',
          'p-10 md:p-0 rounded-bl-xl md:rounded-[0]',
          'text-white md:text-[#1A2E46] font-medium text-[14px] xl:text-[16px] 2xl:text-[18px]',
          isMenuOpen ? 'block' : 'hidden',
          'md:flex items-center',
        ]"
      >
        <div
          class="md:hidden absolute right-2 top-2 font-bold cursor-pointer"
          @click="isMenuOpen = !isMenuOpen"
        >
          X
        </div>

        <!-- nav-items -->
        <li v-for="navItem in navItems">
          <NuxtLink
            :to="navItem.navigate"
            :class="
              getLinkClass(
                navItem.activeClassName === 'home'
                  ? navItem.activeClassName
                  : navItem.navigate.slice(1)
              )
            "
            @click="
              {
                isMenuOpen = !isMenuOpen;
                isActive =
                  navItem.activeClassName === 'home'
                    ? navItem.activeClassName
                    : navItem.navigate.slice(1);
              }
            "
          >
            {{ navItem.title }}
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink to="/contact-us" class="hidden md:block">
        <Button3 title="Contact Us" />
      </NuxtLink>

      <!-- ham-menu -->
      <div
        class="h-5 w-5 ms:h-6 sm:w-6 md:hidden cursor-pointer"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
          License - https://fontawesome.com/license/free Copyright 2025
          Fonticons, Inc.
          <path
            d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style>
.bn5 {
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #2e8942;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}

.bn5:before {
  content: "";
  background: linear-gradient(45deg, #ff0000, #48ff00, #ff0000);
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowingbn5 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowingbn5 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.bn5:active {
  color: white;
}

.bn5:active:after {
  background: transparent;
}

.bn5:hover:before {
  opacity: 1;
}

.bn5:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2e8942;
  left: 0;
  top: 0;
  border-radius: 10px;
}
</style>
