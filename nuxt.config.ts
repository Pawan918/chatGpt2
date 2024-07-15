// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/ui"],
  ui: {
    global: true,
    icons: ['mdi', 'simple-icons']
  },
    runtimeConfig: {
      public: {
        apiKey: process.env.API_KEY,
        baseUrl: process.env.BASE_URL,
      }
    },
    // plugins: [
    //   '~/plugins/copyPlugin.js'
    // ],
});