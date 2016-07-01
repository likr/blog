var angular = require('angular')

var AppComponent = {
  bindings: {
    posts: '<'
  },
  templateUrl: 'assets/html/app.component.html'
}

module.exports = angular
  .module('app.components.app', [])
  .component('wcApp', AppComponent)
  .name
