const angular = require('angular')

class PostsController {
  constructor (PostService) {
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
  templateUrl: 'assets/html/posts.component.html'
}

module.exports = angular
  .module('app.components.posts', [])
  .component('wcPosts', PostsComponent)
  .name
