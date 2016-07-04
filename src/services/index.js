var angular = require('angular')
var PostService = require('./post.service')

module.exports = angular
  .module('app.services', [
    PostService
  ])
  .name
