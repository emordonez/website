<template>
  <div class="grid grid-cols-1 gap-16 lg:grid-cols-3">
    <BlogTitle
      :title="post.title"
      :description="post.description"
      :date="formatDate(post.date)"
      :image="post.image"
      :tags="post.tags"
      class="block col-span-1"
      :class="{
        'lg:col-span-3': post.image && post.toc.length,
        'max-w-prose lg:col-span-2': (post.image && !post.toc.length) || (!post.image && !post.toc.length),
        'max-w-prose lg:col-span-2 lg:col-start-2': !post.image && post.toc.length
      }"
    />
    <aside v-if="post.toc.length" class="hidden lg:col-span-1 lg:flex lg:flex-col">
      <TableOfContents :toc="post.toc" class="md:sticky md:top-20" />
    </aside>
    <article class="block col-span-1 lg:col-span-2">
      <NuxtContent :document="post" class="prose" />
      <HorizontalRule />
      <BlogPrevNextPosts :prev="prev" :next="next" />
    </article>
  </div>
</template>

<script>
import formatDate from '~/utils/formatDate.js'
import Prism from '~/plugins/prism.js'

export default {
  // Pass { deep: true } to search subdirectories
  async asyncData ({ $content, params }) {
    try {
      const post = await $content('blog', params.slug).fetch()
      const [prev, next] = await $content('blog')
        .only(['title', 'slug'])
        .sortBy('date', 'desc')
        .surround(params.slug)
        .fetch()

      return { post, prev, next }
    } catch (error) {
      error({
        statusCode: 404,
        message: 'Page not found'
      })
    }
  },
  head () {
    return {
      title: this.post.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.description },
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        { hid: 'og:description', property: 'og:description', content: this.post.description },
        { hid: 'twitter:title', name: 'twitter:title', content: this.post.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.post.description }
      ]
    }
  },
  mounted () {
    Prism.highlightAll()
  },
  methods: { formatDate }
}
</script>
