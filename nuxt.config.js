export default {
  target: 'static',
  head: {
    title: 'ericmordonez',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The personal site of Eric M. Ordoñez' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['~/assets/css/main.css'],
  plugins: ['~/plugins/prism'],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
    'nuxt-windicss'
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/cloudinary'
  ],
  content: {
    markdown: {
      remarkPlugins: ['remark-math'],
      rehypePlugins: ['rehype-katex'],
      prism: { theme: false }
    }
  },
  cloudinary: {
    cloudName: 'emtordo',
    useComponent: true
  },
  build: {},
  generate: {
    fallback: true
  }
}
