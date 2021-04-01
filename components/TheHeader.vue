<template>
  <header class="z-10 pt-6 pb-2 shadow-lg bg-gray-100">
    <nav class="flex justify-between items-center responsive-width">
      <!-- Home -->
      <NuxtLink
        :to="{ name: 'index' }"
        class="py-1 border-b-2 border-transparent border-b-transparent transition-all duration-200 ease-in-out hover:border-blue-400"
        @click.native="showMobileMenu = false"
      >
        <h4 class="uppercase tracking-wider">
          emordonez
        </h4>
      </NuxtLink>

      <!-- Desktop nav -->
      <div class="hidden space-x-4 sm:flex">
        <NuxtLink
          v-for="(link, index) in links"
          :key="`link-${index}`"
          :to="link.to"
          class="py-1 px-2 border-b-2 border-transparent border-b-transparent text-gray-800 transition-all duration-200 ease-in-out hover:border-blue-400"
        >
          {{ link.title }}
        </NuxtLink>
      </div>

      <!-- Mobile nav -->
      <div class="block sm:hidden">
        <span @click="toggleMenu">
          <Icon v-if="!showMobileMenu" name="menu" height="1.6em" width="1.6em" />
          <Icon v-else name="close" height="1.6em" width="1.6em" />
        </span>
      </div>
    </nav>

    <!-- Expand hamburger menu below the navbar -->
    <transition
      enter-active-class="transition-all transition-faster ease-out-quad"
      leave-active-class="transition-all transition-fastest ease-in-quad"
      enter-class="opacity-0 scale-75"
      enter-to-class="opacity-100 scale-100"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-75"
    >
      <div v-if="showMobileMenu" class="absolute z-20 grid grid-cols-1 gap-0 w-full p-4 mt-2 shadow bg-gray-50">
        <NuxtLink
          v-for="(link, index) in links"
          :key="`link-${index}`"
          :to="link.to"
          class="text-gray-800"
          @click.native="showMobileMenu = false"
        >
          <div class="py-2">
            <Icon :name="link.icon" height="1.25em" width="1.25em" />&nbsp;&nbsp;{{ link.title }}
          </div>
        </NuxtLink>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data () {
    return {
      showMobileMenu: false,
      links: [
        {
          title: 'Blog',
          to: '/blog/',
          icon: 'post'
        },
        {
          title: 'Projects',
          to: '/projects/',
          icon: 'laptop'
        },
        {
          title: 'About',
          to: '/about',
          icon: 'information'
        },
        {
          title: 'Contact',
          to: '/contact',
          icon: 'email'
        }
      ]
    }
  },
  mounted () {
    document.addEventListener('click', this.closeMenu)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.closeMenu)
  },
  methods: {
    toggleMenu () {
      this.showMobileMenu = !this.showMobileMenu
    },
    closeMenu (e) {
      if (!this.$el.contains(e.target)) {
        this.showMobileMenu = false
      }
    }
  }
}
</script>
