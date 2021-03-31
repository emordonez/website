<template>
  <img :src="imgUrl(src)" :alt="alt">
</template>

<script>
import imgUrl from '~/utils/imgUrl.js'

export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  methods: { imgUrl }
}
</script>
