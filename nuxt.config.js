export default {
  mode: 'universal',
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
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@bazzite/nuxt-optimized-images',
    'nuxt-compress',
  ],
  plugins: ['~plugins/vue.js'],
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
}
