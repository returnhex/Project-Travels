// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg'}
      ]
    }
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["@/assets/css/main.css"],

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    // "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
  ],
});
