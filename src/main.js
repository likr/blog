require('./service-worker-registration')

const angular = require('angular')
const ngRoute = require('angular-route')
const Components = require('./components')
const Services = require('./services')

angular
  .module('app', [
    Components,
    Services,
    ngRoute
  ])
  .config(['$routeProvider', ($routeProvider) => {
    $routeProvider
      .when('/posts', {
        template: '<wp-post-list></wp-post-list>'
      })
      .when('/posts/:id', {
        template: '<wp-post-detail></wp-post-detail>'
      })
      .otherwise('/posts')
  }])
