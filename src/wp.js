/* global fetch */

const endpoint = '/.netlify/functions/hello'

export const getPost = (postId) => {
  return fetch(`${endpoint}?action=getPost&postId=${postId}`)
    .then((response) => response.json())
}

export const getPosts = () => {
  return fetch(`${endpoint}?action=getPosts`)
    .then((response) => response.json())
}
