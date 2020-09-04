export default {
  mode: 'universal',
  target: 'static',
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/scss/main.scss'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/eslint-module', 'nuxt-compress'],
  buildModules: ['@aceforth/nuxt-optimized-images'],
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
  },
  /*
   ** PWA configuration
   */
  meta: {
    name: 'jonathanjameswatson',
    ogHost: 'https://jonathanjameswatson.com',
    ogImage: '/preview.png',
    twitterCard: 'summary_large_image',
  },
  manifest: {
    name: 'jonathanjameswatson',
    short_name: 'jonathanjameswatson',
    theme_color: '#fff',
    display: 'fullscreen',
  },
  /*
   ** Optimized images configuration
   */
  optimizedImages: {
    optimizeImages: true,
  },
};
