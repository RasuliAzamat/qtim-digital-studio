export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // target: 'static',
  // router: {
  //   base: '/spa-nuxt/'
  // },
  head: {
    title: 'qtim',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  router: {
    prefetchLinks: false,
    // base: '/wedstory-app-vue/'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/node_modules/bootstrap/scss/bootstrap-reboot.scss',
    '~/assets/scss/main.scss'
  ],
  env: {
    baseUrl: process.env.API_URL || 'http://localhost:8000'
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-slider.js', ssr: false },
    { src: '~/plugins/cool-lightbox.js', ssr: false },
    { src: '~/plugins/odametr.js', ssr: false },
    "@/plugins/services.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // '@nuxtjs/proxy'
  ],
  axios: {
    // WARNING: proxy doesn't work with nuxt generate,
    // have to use a prefix and set an API_URL
    proxy: true,
  },
  proxy:{
    '/api/v1': { target: `${process.env.API_URL}/api/v1/`, pathRewrite: {'^/api/v1': ''} }
  },
  server: {
    host: '0.0.0.0',
    port: 8000
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  }
}
