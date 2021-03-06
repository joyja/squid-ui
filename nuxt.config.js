import colors from 'vuetify/es5/util/colors'

export default {
  env: {
    factotumServerSecure: process.env.FACTOTUM_SERVER_SECURE || false,
    factotumServerHost: process.env.FACTOTUM_SERVER_HOST,
    factotumServerPort: process.env.FACTOTUM_SERVER_PORT || 4000,
    factotumServerUrl: process.env.FACTOTUM_SERVER_URL,
    factotumClientSecure: process.env.FACTOTUM_CLIENT_SECURE || false,
    factotumClientHost: process.env.FACTOTUM_CLIENT_HOST,
    factotumClientPort: process.env.FACTOTUM_CLIENT_PORT,
    factotumClientUrl: process.env.FACTOTUM_CLIENT_URL,
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    // titleTemplate: '%s - squid',
    title: 'squid',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/apollo', '@nuxt/content'],

  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-dark.css',
      },
    },
  },

  /*
   ** apollo module configuration
   ** https://github.com/nuxt-community/apollo-module
   */
  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo-config.js',
    },
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: colors.blueGrey,
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
