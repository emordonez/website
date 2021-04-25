<template>
  <div class="flex flex-col items-center justify-center">
    <NuxtImg v-if="!src.endsWith('.gif')" :src="imgUrl(src, dir)" fit="contain" />
    <img v-else :src="require('~/static/' + imgUrl(src, dir))">
    <div v-if="caption">
      <p class="text-gray-600 text-sm">
        {{ caption }}
      </p>
    </div>
  </div>
</template>

<script>
import imgUrl from '~/utils/imgUrl.js'

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
  methods: { imgUrl }
}
</script>
