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
    '@nuxt/ui',
    '@vite-pwa/nuxt',
    "nuxt-lodash",
    '~/modules/User/module'
  ],
  ui: {
    global: true,
  },
  pwa: {
    /* PWA options */
    
    
    

      injectRegister: 'auto',
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],     
      manifest: { 
        name: 'My Awesome PWA',
        short_name: 'MyPWA',
        description: 'My Awesome Progressive Web Apps',
        theme_color: '#ffffff',
        icons: [{
          src: 'pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png'
        }, {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        }, {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'  
        }, {
          src: 'maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [       
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst' as const,
            options: {
              cacheName: 'google-fonts-cache',
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },        
          {
            urlPattern: ({ url }) => {
              return url.pathname.startsWith("/ecanquiz/vue-todo-pwa");
            },
            //urlPattern: /^https:\/.my-json-server\.typicode\.com/,
            handler: "NetworkFirst" as const,
            method: 'GET',
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: true
      } 

    
    
    
  }
})
