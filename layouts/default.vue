<template>
  <div class="flex flex-col justify-between min-h-screen min-w-full bg-hero-topography bg-gray-200">
    <div class="absolute z-50 left-0 right-0 pb-4 bg-primary" />
    <TheHeader class="sticky -top-4" />
    <Nuxt class="flex-grow responsive-width pt-6 pb-8 border-l border-r mb-auto bg-white" />
    <TheFooter />
  </div>
</template>

<script>
export default {
  head: {
    titleTemplate (pageTitle) {
      return pageTitle ? `${pageTitle} - Eric M. Ordoñez` : 'Eric M. Ordoñez'
    },
    bodyAttrs: {
      class: process.env.NODE_ENV !== 'production' ? 'bg-gray-200 debug-screens' : 'bg-gray-200'
    }
  }
}
</script>
