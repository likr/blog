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
      .when('/', {
        template: '<wc-posts></wc-posts>'
      })
      .otherwise('/')
  }])
