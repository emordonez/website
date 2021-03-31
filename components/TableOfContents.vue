<template>
  <nav id="table-of-contents" class="grid grid-cols-1 gap-0 w-full">
    <div v-for="link of toc" :key="link.id">
      <NuxtLink :to="`#${link.id}`" @click="setActiveTocOnClick(link)">
        <div
          class="text-gray-800 text-sm"
          :class="{
            'py-1 pl-2 border-l-4 border-transparent border-l-transparent': link.depth === 2,
            'py-1 pl-6 border-l-4 border-transparent border-l-transparent': link.depth === 3,
            'border-gray-400 bg-gray-100 font-semibold' : link.id === currentlyActiveToc,
            'hover:border-blue-400 hover:bg-blue-100' : link.id !== currentlyActiveToc
          }"
        >
          {{ link.text }}
        </div>
      </NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    toc: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      currentlyActiveToc: '',
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        threshold: 0.35
      }
    }
  },
  mounted () {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        if (entry.isIntersecting) {
          this.currentlyActiveToc = id
        }
      })
    }, this.observerOptions)

    document
      .querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]')
      .forEach((section) => {
        this.observer.observe(section)
      })
  },
  beforeDestroy () {
    this.observer.disconnect()
  },
  methods: {
    setActiveTocOnClick (link) {
      this.currentlyActiveToc = link.id
    }
  }
}
</script>
