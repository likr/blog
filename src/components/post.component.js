const angular = require('angular')

const PostComponent = {
  bindings: {
    post: '<'
  },
  templateUrl: './assets/html/post.component.html'
}

module.exports = angular
  .module('app.components.post', [])
  .component('wcPost', PostComponent)
  .name
