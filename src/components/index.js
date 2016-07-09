const angular = require('angular')
const AppComponent = require('./app.component')
const PostDetailComponent = require('./post-detail.component')
const PostListComponent = require('./post-list.component')

module.exports = angular
  .module('app.components', [
    AppComponent,
    PostDetailComponent,
    PostListComponent
  ])
  .name
