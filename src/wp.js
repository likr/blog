import querystring from 'querystring'

const endpoint = 'https://blog.likr-lab.com/api/wp/v2/sites/ylikr.wordpress.com'

export const getPost = (postId) => {
  return window.fetch(`${endpoint}/posts/${postId}`)
    .then((response) => response.json())
    .then((post) => resolveCategories([post]))
    .then((posts) => posts[0])
}

export const getPosts = () => {
  return window.fetch(`${endpoint}/posts/`)
    .then((response) => response.json())
    .then((posts) => {
      return resolveCategories(posts)
        .then(() => posts)
    })
}

const getCategoriesByIds = (...ids) => {
  const query = querystring.stringify({
    per_page: ids.length,
    include: ids.join(',')
  })
  return window.fetch(`${endpoint}/categories/?${query}`)
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
