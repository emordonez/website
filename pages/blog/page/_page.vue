<template>
  <main>
    <h1 class="py-4 mb-4 text-3xl sm:text-4xl">
      Blog
    </h1>
    <!-- <BlogSearch class="py-6" /> -->
    <BlogPostList :posts="paginatedPosts" :total="allPosts.length" />
  </main>
</template>

<script>
import getContent from '~/utils/getContent.js'

export default {
  async asyncData ({ $content, params, error }) {
    const content = await getContent($content, params, error)

    return {
      allPosts: content.allPosts,
      paginatedPosts: content.paginatedPosts
    }
  },
  head () {
    return {
      title: 'Blog'
    }
  }
}
</script>
