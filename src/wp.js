const endpoint = 'https://public-api.wordpress.com/rest/v1.1/sites/ylikr.wordpress.com'

export const getPost = (postId) => {
  return window.fetch(`${endpoint}/posts/${postId}`)
    .then((response) => response.json())
}

export const getPosts = () => {
  return window.fetch(`${endpoint}/posts/`)
    .then((response) => response.json())
}
