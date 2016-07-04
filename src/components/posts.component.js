var angular = require('angular')

var PostsComponent = {
  controller: ['PostService', function (PostService) {
    this.posts = []
    var that = this
    PostService.getPosts()
      .then(function (posts) {
        that.posts = posts
      })
  }],
  templateUrl: 'assets/html/posts.component.html'
}

module.exports = angular
  .module('app.components.posts', [])
  .component('wcPosts', PostsComponent)
  .name
