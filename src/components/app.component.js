const angular = require('angular')
const template = require('./app.component.html')
const style = require('./app.component.css')

class AppController {
  constructor () {
    this.style = style
  }
}

const AppComponent = {
  controller: AppController,
  template
}

module.exports = angular
  .module('app.components.app', [])
  .component('wpApp', AppComponent)
  .name
