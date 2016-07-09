const angular = require('angular')
const AppComponent = require('./app.component')
const PostComponent = require('./post.component')
const PostListComponent = require('./post-list.component')

module.exports = angular
  .module('app.components', [
    AppComponent,
    PostComponent,
    PostListComponent
  ])
  .name
