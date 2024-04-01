// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  // baseURL: '/personal-trainer/',
  devServer: {
    port: 3000, // 3000 by default, change to 80 to dev container
  },
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
  devtools: { enabled: false },
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
