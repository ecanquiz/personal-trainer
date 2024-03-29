// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //ssr: true,
  runtimeConfig: {
    //secret: process.env.SECRET,
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
 
    },
  },
  app: {
    baseURL: '/',
    //head: {
    //  link: [
    //    { rel: 'stylesheet', type:"text/css", href: 'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' },
    //  ]
    //}
  },
  css: [`assets/styles/main.css`],
  devtools: { enabled: true },
  modules: [
    //'@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    "nuxt-lodash",
    '@nuxt/ui',
    '~/modules/User/module'
  ],
  ui: {
    global: true,
  }
})
