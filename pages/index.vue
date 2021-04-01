<template>
  <main>
    <TheIntroduction class="pt-6" />
    <HorizontalRule />
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      <section v-if="projects.length" id="projects" class="col-span-1">
        <NuxtLink :to="{ name: 'projects' }">
          <h2 class="mb-6 text-2xl hover:underline">
            Current Projects
          </h2>
        </NuxtLink>
        <div v-for="project of projects" :key="project.slug" class="pb-6">
          <NuxtLink :to="{ name: 'projects-slug', params: { slug: project.slug } }">
            <Card
              :title="project.title"
              :content="project.description"
              :tags="project.tags"
              :featured="true"
            />
          </NuxtLink>
        </div>
      </section>
      <section v-if="posts.length" id="posts" class="col-span-1 md:col-span-2">
        <NuxtLink :to="{ name: 'blog' }">
          <h2 class="mb-6 text-2xl hover:underline">
            Latest Posts
          </h2>
        </NuxtLink>
        <div v-for="post of posts" :key="post.slug" class="pb-6">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: post.slug } }">
            <Card
              :title="post.title"
              :content="post.description"
              :image="post.image"
              :date="post.date"
              :tags="post.tags"
              :featured="true"
            />
          </NuxtLink>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const posts = await $content('blog', params.slug)
      .only(['title', 'description', 'image', 'date', 'tags', 'slug'])
      .sortBy('date', 'desc')
      .limit(3)
      .fetch()

    const projects = await $content('projects', params.slug).fetch()

    return { posts, projects }
  },
  head: {
    title: null
  }
}
</script>
