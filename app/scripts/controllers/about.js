'use strict';

/**
 * @ngdoc function
 * @name mohiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mohiApp
 */
angular.module('mohiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
