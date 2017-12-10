/* global fetch, URLSearchParams */

const endpoint = 'https://public-api.wordpress.com/wp/v2/sites/ylikr.wordpress.com'

export const getPost = (postId) => {
  return fetch(`${endpoint}/posts/${postId}`)
    .then((response) => response.json())
    .then((post) => resolveCategories([post]))
    .then((posts) => posts[0])
}

export const getPosts = () => {
  return fetch(`${endpoint}/posts/`)
    .then((response) => response.json())
    .then((posts) => {
      return resolveCategories(posts)
        .then(() => posts)
    })
}

const getCategoriesByIds = (...ids) => {
  const params = new URLSearchParams()
  params.set('per_page', ids.length)
  params.set('include', ids.join(','))
  const query = params.toString()
  return fetch(`${endpoint}/categories/?${query}`)
    .then((response) => response.json())
}

const resolveCategories = (posts) => {
  const categoryIds = new Set()
  for (const post of posts) {
    for (const id of post.categories) {
      categoryIds.add(id)
    }
  }
  return getCategoriesByIds(...categoryIds)
    .then((categories) => {
      const categoryMap = new Map(categories.map((category) => [category.id, category]))
      for (const post of posts) {
        post.categories = post.categories.map((id) => categoryMap.get(id))
      }
      return posts
    })
}
