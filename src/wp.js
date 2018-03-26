/* global fetch */

const endpoint = 'https://us-central1-master-ember-197106.cloudfunctions.net/requestGraphCMS'

exports.getPost = (postId) => {
  return fetch(`${endpoint}?action=getPost&postId=${postId}`)
    .then((response) => response.json())
}

exports.getPosts = () => {
  return fetch(`${endpoint}?action=getPosts`)
    .then((response) => response.json())
}
