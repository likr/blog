const angular = require('angular')
const template = require('./post-list.component.html')
const style = require('./post-list.component.css')

class PostListController {
  constructor ($routeParams, WpService) {
    this.style = style
    this.posts = []
    this.page = +$routeParams.page || 1
    WpService
      .getPosts({
        context: 'view',
        page: this.page,
        per_page: 10,
        // search: '',
        // author: '',
        // exclude: '',
        // include: '',
        order: 'desc',
        orderby: 'date',
        status: 'publish',
        filter: '',
        includeAuthors: true,
        includeCategories: true,
        includeTags: true
      })
      .then((posts) => {
        this.page = posts.page
        this.totalPages = posts.totalPages
        this.posts = posts.data
      })
  }
}

PostListController.$inject = ['$routeParams', 'WpService']

const PostListComponent = {
  controller: PostListController,
  template
}

module.exports = angular
  .module('app.components.post-list', [])
  .component('wpPostList', PostListComponent)
  .name
