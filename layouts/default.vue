<template>
  <div class="flex flex-col justify-between min-h-screen min-w-full">
    <div class="absolute z-50 left-0 right-0 pb-4 bg-primary" />
    <TheHeader class="sticky -top-4" />
    <Nuxt class="pt-6 pb-8 mb-auto responsive-width" />
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
      class: 'bg-white'
    }
  }
}
</script>
