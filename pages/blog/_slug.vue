<template>
  <div class="grid grid-cols-1 gap-16 lg:grid-cols-4">
    <!-- Blog title and banner image -->
    <BlogTitle
      :title="post.title"
      :description="post.description"
      :date="formatDate(post.date)"
      :image="post.image"
      :tags="post.tags"
      class="block col-span-1 lg:col-span-4"
    />

    <!-- Author bio and table of contents -->
    <aside class="flex flex-col col-span-1 order-last lg:order-none">
      <BlogAuthorBio />
      <TableOfContents
        v-if="post.toc.length"
        :toc="post.toc"
        class="hidden lg:sticky lg:top-20 lg:block"
      />
    </aside>

    <!-- Post content -->
    <article class="block col-span-1 lg:col-span-3">
      <NuxtContent :document="post" class="prose prose-lg" />
      <HorizontalRule />
      <BlogPrevNextPosts :prev="prev" :next="next" />
    </article>
  </div>
</template>

<script>
import formatDate from '~/utils/formatDate.js'
import Prism from '~/plugins/prism.js'

export default {
  async asyncData ({ $content, params }) {
    try {
      // Deep fetch returns an array
      const posts = await $content('blog', { deep: true })
        .where({ slug: params.slug })
        .fetch()
      const post = posts[0]

      const [prev, next] = await $content('blog', { deep: true })
        .only(['title', 'slug'])
        .sortBy('date', 'desc')
        .surround(params.slug)
        .fetch()

      return { post, prev, next }
    } catch (error) {
      error({ statusCode: 404, message: 'Post not found!' })
    }
  },
  head () {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.description
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: this.post.katex ? 'https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.css' : ''
        }
      ]
    }
  },
  mounted () {
    Prism.highlightAll()
  },
  methods: { formatDate }
}
</script>
