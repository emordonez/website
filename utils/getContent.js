import global from '~/utils/global.js'

export default async ($content, params, error) => {
  const allPosts = await $content('blog').fetch()
  const currentPage = parseInt(params.page)
  const perPage = global.pagination

  const skipNumber = () => {
    if (currentPage === 1) {
      return 0
    }
    return (currentPage - 1) * perPage
  }

  const paginatedPosts = await $content('blog')
    .only(['title', 'description', 'image', 'date', 'tags', 'slug'])
    .sortBy('createdAt', 'desc')
    .limit(perPage)
    .skip(skipNumber())
    .fetch()

  if (currentPage === 0 || !paginatedPosts.length) {
    return error({ statusCode: 404, message: 'No posts found!' })
  }

  return { allPosts, paginatedPosts }
}
