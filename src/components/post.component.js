const angular = require('angular')
const template = require('./post.component.html')
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
  template
}

module.exports = angular
  .module('app.components.post', [])
  .component('wcPost', PostComponent)
  .name
