const angular = require('angular')
const AppComponent = require('./app.component')
const PostComponent = require('./post.component')
const PostsComponent = require('./posts.component')

module.exports = angular
  .module('app.components', [
    AppComponent,
    PostComponent,
    PostsComponent
  ])
  .name
