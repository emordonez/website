<template>
  <header>
    <!-- Title with banner image -->
    <div
      v-if="image"
      class="relative flex flex-col justify-between w-full sm:justify-end sm:py-6"
    >
      <div class="w-full py-4 sm:absolute sm:p-4 sm:bg-black sm:bg-opacity-70">
        <h1 class="mb-4 text-3xl sm:text-white sm:text-4xl">
          {{ title }}
        </h1>
        <p class="italic sm:text-white ">
          {{ description }}
        </p>
        <div class="pt-4 meta-info sm:text-white">
          <span>
            {{ date }}
          </span>
          <span v-if="date && tags.length">
            &ndash;
          </span>
          <span>
            {{ tags.join(', ') }}
          </span>
        </div>
      </div>
      <NuxtImg :src="imgUrl(image)" />
    </div>

    <!-- Title without a banner image -->
    <div v-else class="w-11/12 py-4 lg:w-full">
      <h1 class="mb-4 text-3xl sm:text-4xl">
        {{ title }}
      </h1>
      <p class="italic">
        {{ description }}
      </p>
      <div class="pt-4 meta-info">
        <span>
          {{ date }}
        </span>
        <span v-if="tags.length">
          &ndash;
        </span>
        <span>
          {{ tags.join(', ') }}
        </span>
      </div>
    </div>
  </header>
</template>

<script>
import imgUrl from '~/utils/imgUrl.js'

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
    date: {
      type: String,
      required: false,
      default: ''
    },
    image: {
      type: String,
      required: false,
      default: ''
    },
    tags: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  methods: { imgUrl }
}
</script>
