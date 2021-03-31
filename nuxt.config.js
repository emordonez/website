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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.css' }
    ]
  },
  css: [],
  purgeCSS: {
    whitelistPatternsChildren: [/token$/],
    mode: 'postcss',
    enabled: (process.env.NODE_ENV === 'production')
  },
  plugins: ['~/plugins/prism'],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    'nuxt-purgecss'
  ],
  modules: ['@nuxt/content'],
  content: {
    markdown: {
      remarkPlugins: ['remark-math'],
      rehypePlugins: ['rehype-katex'],
      prism: { theme: false }
    }
  },
  build: {},
  tailwindcss: {
    jit: true
  }
}
