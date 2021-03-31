<template>
  <div class="flex flex-wrap justify-center space-x-4">
    <span v-for="link in links" :key="link.id">
      <a
        v-if="link.title !== 'Email'"
        :href="link.url"
        :title="link.title"
        :alt="link.id"
        class="text-gray-800 hover:text-blue-400"
      >
        <Icon :name="link.icon" height="1.75em" width="1.75em" />
      </a>
      <NuxtLink
        v-else
        :to="link.url"
        :title="link.title"
        :alt="link.id"
        class="text-gray-800 hover:text-blue-400"
      >
        <Icon :name="link.icon" height="1.75em" width="1.75em" />
      </NuxtLink>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          id: 'GitHub',
          title: 'See some of my work on GitHub',
          url: 'https://github.com/emordonez',
          icon: 'github'
        },
        {
          id: 'LinkedIn',
          title: 'Connect with me on LinkedIn',
          url: 'https://linkedin.com/in/emordonez',
          icon: 'linkedin'
        },
        {
          id: 'Email',
          title: 'Want to get in touch?',
          url: '/contact',
          icon: 'email'
        }
      ]
    }
  }
}
</script>
