<template>
  <div class="flex flex-row items-start sm:pb-8 lg:flex-col">
    <div class="min-w-max pr-6 sm:pb-6">
      <img
        src="~/assets/images/avatar.jpg"
        alt="avatar"
        class="rounded-full h-16 w-16 shadow-md"
      >
    </div>
    <div class="sm:max-w-full">
      <p class="mb-4 font-semibold">
        {{ name }}
      </p>
      <p class="mb-4 text-sm">
        Programmer and developer based in Chicago.
        Interested in econ, math, languages, and design.
      </p>
      <!-- <Socials class="justify-start" /> -->
    </div>
  </div>
</template>

<script>
import global from '~/utils/global.js'

export default {
  data () {
    return {
      name: global.name
    }
  }
}
</script>
