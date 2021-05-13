<template>
  <footer class="relative py-3 w-full bg-gray-100">
    <div class="responsive-width">
      <div
        class="items-center space-y-2
          text-gray-800 text-sm text-center
          sm:flex sm:justify-between sm:space-y-0 sm:text-base sm:text-left"
      >
        <a :href="repo" class="overflow-ellipsis hover:underline">
          &copy; EMO {{ new Date().getFullYear() }} &middot; Built with Vue/Nuxt/Tailwind.
        </a>
        <Socials class="justify-center sm:justify-end" />
      </div>
    </div>
  </footer>
</template>

<script>
import global from '~/utils/global.js'

export default {
  data () {
    return {
      repo: global.repository
    }
  }
}
</script>
