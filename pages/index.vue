<template>
  <main>
    <TheIntroduction class="pt-6" />
    <HorizontalRule />

    <!-- Latest blog posts -->
    <section v-if="posts.length" id="posts" class="pb-8">
      <h2 class="mb-6 text-2xl hover:underline">
        <NuxtLink :to="{ name: 'blog' }">
          Latest Posts
        </NuxtLink>
      </h2>
      <div class="grid grid-cols-1 gap-4 md:grid-rows-2 md:grid-cols-2">
        <NuxtLink
          v-for="post of posts"
          :key="post.slug"
          :to="{ name: 'blog-slug', params: { slug: post.slug } }"
          :class="post.image ? 'md:row-span-2' : 'md:row-span-1'"
        >
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

    <!-- Works in progress -->
    <section v-if="works.length" id="works-in-progress" class="pb-8">
      <h2 class="mb-6 text-2xl">
        Works in Progress
      </h2>
      <p class="mb-6">
        Repositories for some things I'm currently working on:
      </p>
      <div class="grid grid-cols-1 gap-4">
        <a v-for="(item, index) in works" :key="index" :href="item.link">
          <Card
            :title="item.title"
            :content="item.description"
            :image="item.image"
            :dir="'projects'"
          />
        </a>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const posts = await $content('blog', params.slug)
      .only(['title', 'description', 'image', 'date', 'tags', 'slug'])
      .sortBy('date', 'desc')
      .limit(4)
      .fetch()

    return { posts }
  },
  data () {
    return {
      works: [
        {
          title: 'European soccer league transfers data set',
          description: 'A web-scraped collection of over 134,000 player transfer records as found on Transfermarkt, spanning 28 seasons across 10 leagues.',
          image: 'transfermarkt-logo.png',
          link: 'https://github.com/emordonez/transfermarkt-transfers'
        },
        {
          title: 'The Connecting Wall from "Only Connect"',
          description: 'A web implementation of the Connecting Wall from the BBC quiz show "Only Connect," built with Vue.',
          image: 'only-connect-connecting-wall.png',
          link: 'https://github.com/emordonez/connecting-wall'
        },
        {
          title: 'This blog and website',
          description: 'My blog and website utilizing the Nuxt.js framework for Vue, in particular the content module with TailwindCSS.',
          image: 'nuxtjs-logo.png',
          link: 'https://github.com/emordonez/website'
        },
        {
          title: 'Markdown-generated resumes and cover letters',
          description: 'How I write resumes and cover letters by generating CSS-styled PDFs from Markdown.',
          image: 'markdown-resume.png',
          link: 'https://github.com/emordonez/markdown-resume'
        }
      ]
    }
  },
  head: {
    title: null
  }
}
</script>
