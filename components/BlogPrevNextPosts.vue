<template>
  <div class="flex flex-col justify-between sm:flex-row">
    <!-- Previous post -->
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="w-full max-w-full sm:w-2/5"
    >
      <h5 class="text-sm uppercase hover:underline">
        &larr; {{ prev.title }}
      </h5>
    </NuxtLink>
    <span v-else>&nbsp;</span>

    <!-- Spacer to separate links in mobile view -->
    <span class="py-1">&nbsp;</span>

    <!-- Next post -->
    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="w-full max-w-full sm:w-2/5"
    >
      <h5 class="text-sm uppercase text-right hover:underline">
        {{ next.title }} &rarr;
      </h5>
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => {}
    },
    next: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
