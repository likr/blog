var angular = require('angular')
var ngRoute = require('angular-route')
var Components = require('./components')
var Services = require('./services')

angular
  .module('app', [
    Components,
    Services,
    ngRoute
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<wc-app posts="$resolve.posts"></wc-app>',
        resolve: {
          posts: ['PostService', function (PostService) {
            return PostService.getPosts()
          }]
        }
      })
      .otherwise('/')
  }])
