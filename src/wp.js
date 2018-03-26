/* global fetch */

const endpoint = '/.netlify/functions/hello'

exports.getPost = (postId) => {
  return fetch(`${endpoint}?action=getPost&postId=${postId}`)
    .then((response) => response.json())
}

exports.getPosts = () => {
  return fetch(`${endpoint}?action=getPosts`)
    .then((response) => response.json())
}
