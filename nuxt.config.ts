// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/ui"],
  ui: {
    global: true,
    icons: ['mdi', 'simple-icons']
  }
});