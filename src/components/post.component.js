const angular = require('angular')
const style = require('./post.component.css')

class PostController {
  constructor () {
    this.style = style
  }
}

const PostComponent = {
  bindings: {
    post: '<'
  },
  controller: PostController,
  templateUrl: './assets/html/post.component.html'
}

module.exports = angular
  .module('app.components.post', [])
  .component('wcPost', PostComponent)
  .name
