var angular = require('angular')

var PostComponent = {
  bindings: {
    post: '<'
  },
  templateUrl: './assets/html/post.component.html'
}

module.exports = angular
  .module('app.components.post', [])
  .component('post', PostComponent)
  .name