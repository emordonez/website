<template>
  <nav id="table-of-contents" class="grid grid-cols-1 gap-0 w-full">
    <div v-for="link of toc" :key="link.id">
      <NuxtLink :to="`#${link.id}`" @click.native="setActiveTocOnClick(link)">
        <div
          class="py-1 border-l-4 border-l-transparent text-gray-800 text-sm"
          :class="[
            { 'pl-2': link.depth === 2 },
            { 'pl-6': link.depth === 3 },
            link.id === activeToc ? 'active-toc' : 'inactive-toc'
          ]"
        >
          <p
            class="text-gray-800 text-sm"
            :class="{ 'font-semibold' : link.id === activeToc}"
          >
            {{ link.text }}
          </p>
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
      activeToc: '',
      headers: [],
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        threshold: [0.9, 1.0]
      }
    }
  },
  mounted () {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Hack to force select the first entry upon load
        if (window.scrollY === 0) {
          this.activeToc = this.headers[0].getAttribute('id')
        } else if (!this.intersectedAtTop(entry) && !entry.isIntersecting) {
          const index = this.getPrevHeading(entry)
          if (index === 0) {
            this.activeToc = this.headers[index].getAttribute('id')
          } else {
            this.activeToc = this.headers[index - 1].getAttribute('id')
          }
        } else if (entry.isIntersecting) {
          this.activeToc = entry.target.getAttribute('id')
        }
      })
    }, this.observerOptions)

    document
      .querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]')
      .forEach((section) => {
        this.headers.push(section)
        this.observer.observe(section)
      })
  },
  beforeDestroy () {
    this.observer.disconnect()
  },
  methods: {
    getPrevHeading (entry) {
      const prevEl = el => el === entry.target
      return this.headers.findIndex(prevEl)
    },
    intersectedAtTop (entry) {
      return entry.rootBounds.bottom - entry.boundingClientRect.bottom > entry.rootBounds.bottom / 2
    },
    setActiveTocOnClick (link) {
      // Hack with @click.native to scroll to the currently active hash
      // Copied from ~/app/router.scrollBehavior.js
      if (this.$route.hash) {
        const anchor = document.querySelector(`#${link.id}`)
        if (anchor) {
          window.scrollTo(
            { top: anchor.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }
          )
        }
      }
      this.activeToc = link.id
    }
  }
}
</script>

<style lang="postcss" scoped>
/*! purgecss start ignore */
.active-toc {
  @apply border-gray-400 bg-gray-100;
}
.inactive-toc {
  @apply hover:border-blue-400 hover:bg-blue-100;
}
/*! purgecss end ignore */
</style>
