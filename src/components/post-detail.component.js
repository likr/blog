const angular = require('angular')
const template = require('./post-detail.component.html')
const style = require('./post-detail.component.css')

class PostDetailController {
  constructor ($routeParams, WpService) {
    this.style = style
    this.post = {}
    WpService
      .getPost($routeParams.id, {
        context: 'view',
        includeAuthors: true,
        includeCategories: true,
        includeTags: true
      })
      .then((post) => {
        this.post = post
      })
  }
}

PostDetailController.$inject = ['$routeParams', 'WpService']

const PostDetailComponent = {
  controller: PostDetailController,
  template
}

module.exports = angular
  .module('app.components.post-detail', [])
  .component('wpPostDetail', PostDetailComponent)
  .name
