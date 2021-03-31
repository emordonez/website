<template>
  <section>
    <div v-for="post in posts" :key="post.slug" class="pb-6">
      <NuxtLink :to="{ name: 'blog-slug', params: { slug: post.slug } }">
        <Card
          :title="post.title"
          :content="post.description"
          :image="post.image"
          :date="post.date"
          :tags="post.tags"
        />
      </NuxtLink>
    </div>
    <div v-if="total" class="flex flex-col justify-center items-center">
      <HorizontalRule class="w-full" />
      <Pagination v-if="total > perPage" :total="total" />
    </div>
  </section>
</template>

<script>
import global from '~/utils/global.js'

export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      perPage: global.pagination
    }
  }
}
</script>
