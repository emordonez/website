<template>
  <div class="flex justify-between">
    <NuxtLink v-if="prev" :to="{ name: 'blog-slug', params: { slug: prev.slug } }">
      <h5 class="text-sm uppercase hover:underline">
        &larr; {{ prev.title }}
      </h5>
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink v-if="next" :to="{ name: 'blog-slug', params: { slug: next.slug } }">
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
