const angular = require('angular')

class PostService {
  constructor ($http, $sce) {
    this.$http = $http
    this.$sce = $sce
  }

  getPosts () {
    return this.$http.get('http://api.wp-app.org/wp-json/wp/v2/posts')
      .then((response) => {
        const posts = response.data
        for (const post of posts) {
          post.content.rendered = this.$sce.trustAsHtml(post.content.rendered)
        }
        return posts
      })
  }
}

PostService.$inject = ['$http', '$sce']

module.exports = angular
  .module('app.services.post', [])
  .service('PostService', PostService)
  .name
