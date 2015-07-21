'use strict';

/**
 * @ngdoc function
 * @name vidbeadApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vidbeadApp
 */
angular.module('vidbeadApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.urls = [
      "https://www.youtube.com/embed/ClAQEARNUoQ",
      "https://www.youtube.com/embed/ClAQEARNUoQ",
      "https://www.youtube.com/embed/ClAQEARNUoQ",
      "https://www.youtube.com/embed/ClAQEARNUoQ",
      "https://www.youtube.com/embed/ClAQEARNUoQ",
      "https://www.youtube.com/embed/ClAQEARNUoQ",
    ];

  });
