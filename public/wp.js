/* global fetch, URLSearchParams */

const endpoint = '/rest/v1.1/sites/ylikr.wordpress.com'

export const getPost = (postId) => {
  const params = new URLSearchParams()
  params.set('fields', 'ID,content,categories,title')
  return fetch(`${endpoint}/posts/${postId}?${params.toString()}`)
    .then((response) => response.json())
}

export const getPosts = () => {
  const params = new URLSearchParams()
  params.set('fields', 'ID,categories,excerpt,title')
  return fetch(`${endpoint}/posts/?${params.toString()}`)
    .then((response) => response.json())
}
