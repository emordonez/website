<template>
  <div class="flex flex-row justify-between max-w-max space-x-4">
    <!-- First -->
    <NuxtLink :to="{ name: 'blog-page-page', params: { page: 1 } }">
      <button class="button-label" :disabled="currentPage === 1">
        &laquo;
      </button>
    </NuxtLink>
    <!-- Prev -->
    <NuxtLink :to="{ name: 'blog-page-page', params: { page: prevPage } }">
      <button class="button-label" :disabled="currentPage === 1">
        &lsaquo;
      </button>
    </NuxtLink>
    <!-- Next -->
    <NuxtLink :to="{ name: 'blog-page-page', params: { page: nextPage } }">
      <button class="button-label" :disabled="currentPage === totalPages">
        &rsaquo;
      </button>
    </NuxtLink>
    <!-- Last -->
    <NuxtLink :to="{ name: 'blog-page-page', params: { page: totalPages } }">
      <button class="button-label" :disabled="currentPage === totalPages">
        &raquo;
      </button>
    </NuxtLink>
  </div>
</template>

<script>
import global from '~/utils/global.js'

export default {
  props: {
    total: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: global.pagination
    }
  },
  computed: {
    totalPages () {
      return Math.ceil(this.total / this.perPage)
    },
    currentPage () {
      return parseInt(this.$route.params.page) || 1
    },
    prevPage () {
      return this.currentPage > 1 ? this.currentPage - 1 : 1
    },
    nextPage () {
      return this.currentPage < this.totalPages ? this.currentPage + 1 : this.totalPages
    }
  }
}
</script>
