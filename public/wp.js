/* global fetch, URLSearchParams */

const endpoint = '/rest/v1.1/sites/ylikr.wordpress.com'

export const getPost = (postId) => {
  const params = new URLSearchParams()
  params.set('fields', 'ID,content,categories,title')
  return fetch(`${endpoint}/posts/${postId}?${params.toString()}`)
    .then((response) => response.json())
}

export const getPosts = () => {
  const query = {
    query: `query {
      allPosts {
        id,
        title,
        content,
        categories {
          id,
          name
        }
      }
    }`
  }
  const options = {
    method: 'POST',
    body: JSON.stringify(query),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  // return fetch('https://api.graphcms.com/simple/v1/cjef06x4m1wwt0193pf1iknmx', options)
  return fetch('/simple/v1/cjef06x4m1wwt0193pf1iknmx', options)
    .then((response) => response.json())
    .then(({data}) => data.allPosts)
}
