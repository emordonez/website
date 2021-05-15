<template>
  <div
    class="flex flex-col h-full border shadow hover:shadow-xl"
    :class="{ 'md:flex-row-reverse md:h-auto': !featured }"
  >
    <div
      v-if="image"
      class="relative aspect-w-16 aspect-h-9 bg-center bg-cover"
      :class="{ 'md:w-1/3 md:aspect-none': !featured }"
      :style="{ backgroundImage: `url(${imgUrl(image, dir)}` }"
    >
      &nbsp;
    </div>
    <div
      class="relative flex flex-col h-full p-6 bg-gray-50"
      :class="{ 'md:w-2/3': !featured && image, 'w-full': !image }"
    >
      <h5 class="max-w-max mb-4 border-b-2 border-blue-400 text-lg">
        {{ title }}
      </h5>
      <p class="flex-grow mb-4 text-sm sm:text-base">
        {{ content }}
      </p>
      <div class="meta-info text-xs sm:text-sm">
        <span v-if="date">
          {{ formatDate(date) }}
        </span>
        <span v-if="date && tags.length">
          &ndash;
        </span>
        <span v-if="tags.length">
          {{ tags.join(', ') }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import formatDate from '~/utils/formatDate.js'
import imgUrl from '~/utils/imgUrl.js'

export default {
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      required: false,
      default: ''
    },
    date: {
      type: String,
      required: false,
      default: ''
    },
    tags: {
      type: Array,
      required: false,
      default: () => []
    },
    dir: {
      type: String,
      required: false,
      default: 'blog'
    },
    featured: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  // computed: {
  //   backgroundImageUrl () {
  //     return require(`${this.imgUrl(this.image, this.dir)}`)
  //   }
  // },
  methods: {
    formatDate,
    imgUrl
  }
}
</script>
