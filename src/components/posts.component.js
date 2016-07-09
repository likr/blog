const angular = require('angular')
const template = require('./posts.component.html')
const style = require('./posts.component.css')

class PostsController {
  constructor ($routeParams, WpService) {
    this.style = style
    this.posts = []
    WpService
      .getPosts({
        context: 'view',
        page: $routeParams.page || 1,
        per_page: 10,
        // search: '',
        // author: '',
        // exclude: '',
        // include: '',
        order: 'desc',
        orderBy: 'date',
        status: 'publish',
        filter: '',
        includeAuthors: true,
        includeCategories: true,
        includeTags: true
      })
      .then((posts) => {
        console.log(posts)
        this.page = posts.page
        this.totalPages = posts.totalPages
        this.posts = posts.data
      })
  }
}

PostsController.$inject = ['$routeParams', 'WpService']

const PostsComponent = {
  controller: PostsController,
  template
}

module.exports = angular
  .module('app.components.posts', [])
  .component('wcPosts', PostsComponent)
  .name
