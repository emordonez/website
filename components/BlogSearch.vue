<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search posts"
    >
    <div v-if="posts.length">
      <ul>
        <li v-for="post of posts" :key="post.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: post.slug } }">
            {{ post.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchQuery: '',
      posts: []
    }
  },
  watch: {
    async searchQuery (searchQuery) {
      if (!searchQuery) {
        this.posts = []
        return
      }
      this.posts = await this.$content('blog')
        .limit(5)
        .search(searchQuery)
        .fetch()
    }
  }
}
</script>
