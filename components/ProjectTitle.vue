<template>
  <header>
    <div class="py-4">
      <h1 class="mb-4 text-3xl sm:text-4xl">
        {{ title }}
      </h1>
      <p class="italic">
        {{ description }}
      </p>
      <div class="pt-4 meta-info">
        <span>{{ tags.join(', ') }}</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      required: false,
      default: ''
    },
    tags: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>
