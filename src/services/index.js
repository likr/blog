const angular = require('angular')
const WpService = require('./wp.service')

module.exports = angular
  .module('app.services', [
    WpService
  ])
  .name
