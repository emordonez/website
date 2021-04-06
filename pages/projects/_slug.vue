<template>
  <div class="grid grid-cols-1 gap-16 lg:grid-cols-3">
    <ProjectTitle
      :title="project.title"
      :description="project.description"
      :tags="project.tags"
      class="block col-span-1 max-w-prose lg:col-span-2 lg:col-start-2"
    />
    <aside v-if="project.toc.length" class="hidden lg:col-span-1 lg:flex lg:flex-col">
      <TableOfContents :toc="project.toc" class="md:sticky md:top-20" />
    </aside>
    <article class="block col-span-1 lg:col-span-2">
      <NuxtContent :document="project" class="prose prose-lg" />
    </article>
  </div>
</template>

<script>
import Prism from '~/plugins/prism.js'

export default {
  async asyncData ({ $content, params }) {
    try {
      const project = await $content('projects', params.slug).fetch()

      return { project }
    } catch (error) {
      error({
        statusCode: 404,
        message: 'Page not found'
      })
    }
  },
  head () {
    return {
      title: this.project.title,
      meta: [
        { hid: 'description', name: 'description', content: this.project.description },
        { hid: 'og:title', property: 'og:title', content: this.project.title },
        { hid: 'og:description', property: 'og:description', content: this.project.description },
        { hid: 'twitter:title', name: 'twitter:title', content: this.project.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.project.description }
      ],
      link: [
        { rel: 'stylesheet', href: this.project.katex ? 'https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.css' : '' }
      ]
    }
  },
  mounted () {
    Prism.highlightAll()
  }
}
</script>
