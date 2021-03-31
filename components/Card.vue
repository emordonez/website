<template>
  <div
    class="flex flex-col border shadow-md bg-gray-50 transition-all duration-100 hover:shadow-2xl"
    :class="{ 'md:flex-row md:h-auto': !featured }"
  >
    <div
      v-if="image"
      class="relative bg-center bg-cover aspect-h-2 aspect-w-3"
      :class="{ 'md:w-1/3 md:aspect-none': !featured }"
      :style="{ backgroundImage: `url(${imgUrl(image)})` }"
    >
      &nbsp;
    </div>
    <div class="relative p-6" :class="{ 'md:w-2/3': !featured && image, 'w-full': !image }">
      <h5 class="max-w-max mb-4 border-b-2 border-blue-400 text-lg">
        {{ title }}
      </h5>
      <p class="mb-4 text-sm">
        {{ content }}
      </p>
      <div class="meta-info text-xs">
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
    featured: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    formatDate,
    imgUrl
  }
}
</script>
