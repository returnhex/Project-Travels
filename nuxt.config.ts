// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    },
  },
  vite: {
    build: {
      sourcemap: true,
    },
    plugins: [tailwindcss()],
  },
  css: ["@/assets/css/main.css", "/assets/css/package-swiper.css"],

  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    // "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "motion-v/nuxt",
    "nuxt-delay-hydration",
  ],
  delayHydration: {
    debug: process.env.NODE_ENV === "development",
    mode: "init",
  },
  components: true,
  ssr: true,

  image: {
    provider: "ipx",
    dir: "public",
    quality: 100,
    format: ["webp"],
  },
});
