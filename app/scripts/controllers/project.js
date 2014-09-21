'use strict';

/**
 * @ngdoc function
 * @name mohiApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the mohiApp
 */
angular.module('mohiApp')
  .controller('ProjectCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
