<template>
  <main>
    <h1 class="py-4 mb-4 text-3xl sm:text-4xl">
      Projects
    </h1>
    <div v-for="project in projects" :key="project.slug" class="pb-6">
      <NuxtLink :to="{ name: 'projects-slug', params: { slug: project.slug } }">
        <Card
          :title="project.title"
          :content="project.description"
          :tags="project.tags"
        />
      </NuxtLink>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const projects = await $content('projects', params.slug)
      .only(['title', 'description', 'tags', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return { projects }
  },
  head () {
    return {
      title: 'Projects'
    }
  }
}
</script>
