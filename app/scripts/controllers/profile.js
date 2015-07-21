'use strict';

/**
 * @ngdoc function
 * @name vidbeadApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vidbeadApp
 */
angular.module('vidbeadApp')
  .controller('ProfileCtrl', function ($rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.home = ['','color-no-active'];
    $rootScope.profile = ['active-custom',''];
  });
