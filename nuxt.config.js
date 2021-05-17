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
  css: [],
  purgeCSS: {
    whitelistPatternsChildren: [/token$/, /prose$/],
    whitelist: [
      'pre', 'code', 'prism', 'line-numbers', 'tag', 'toolbar-item', 'toolbar',
      'code-toolbar', 'span', 'button', 'line-numbers-rows', 'url-link', 'attr-name', 'attr-value', 'punctuation',
      'keyword', 'keyword-let', 'operator', 'string',
      'table-wrapper'
    ],
    mode: 'postcss',
    enabled: (process.env.NODE_ENV === 'production')
  },
  plugins: [
    '~/plugins/prism'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    'nuxt-purgecss'
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
  },
  tailwindcss: {
    jit: true
  }
}
