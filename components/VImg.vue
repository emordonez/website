<template>
  <div class="flex flex-col items-center justify-center">
    <NuxtImg v-if="!src.endsWith('.gif')" :src="imgSrc" fit="contain" />
    <img v-else :src="require('~/static/' + imgSrc)">
    <div v-if="caption">
      <p class="text-gray-600 text-sm">
        {{ caption }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    dir: {
      type: String,
      required: false,
      default: 'blog'
    },
    caption: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    imgSrc () {
      return `${this.dir}/images/${this.src}`
    }
  }
}
</script>
