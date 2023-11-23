// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
})
