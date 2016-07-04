var angular = require('angular')

module.exports = angular
  .module('app.services.post', [])
  .factory('PostService', ['$http', '$sce', function ($http, $sce) {
    return {
      getPosts: function () {
        return $http.get('http://api.wp-app.org/wp-json/wp/v2/posts')
          .then(function (response) {
            response.data.forEach(function (post) {
              post.content.rendered = $sce.trustAsHtml(post.content.rendered)
            })
            return response.data
          })
      }
    }
  }])
  .name
