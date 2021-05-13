<template>
  <div>
    <div v-if="error.statusCode === 404" class="text-center">
      <h1 class="mb-4 text-3xl">
        404: Page not found
      </h1>
      <p>
        The link you clicked on may be broken or no longer exist.
      </p>
      <img src="~/assets/images/error-404.png" alt="error" class="block p-6 mx-auto">
    </div>
    <div v-else>
      <h1 class="mb-4 text-3xl text-center">
        An error occurred...
      </h1>
      <img src="~/assets/images/error.png" alt="error" class="block p-6 mx-auto">
    </div>
    <NuxtLink to="/" class="text-gray-800 font-semibold text-center">
      &larr; Go back
    </NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
