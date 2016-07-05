const angular = require('angular')
const template = require('./posts.component.html')
const style = require('./posts.component.css')

class PostsController {
  constructor (PostService) {
    this.style = style
    this.posts = []
    PostService.getPosts()
      .then((posts) => {
        this.posts = posts
      })
  }
}

PostsController.$inject = ['PostService']

const PostsComponent = {
  controller: PostsController,
  template
}

module.exports = angular
  .module('app.components.posts', [])
  .component('wcPosts', PostsComponent)
  .name
