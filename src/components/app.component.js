const angular = require('angular')
const style = require('./app.component.css')

class AppController {
  constructor () {
    this.style = style
  }
}

const AppComponent = {
  controller: AppController,
  templateUrl: 'assets/html/app.component.html'
}

module.exports = angular
  .module('app.components.app', [])
  .component('wcApp', AppComponent)
  .name
