'use strict';

/**
 * @ngdoc function
 * @name mohiApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the mohiApp
 */
angular.module('mohiApp')
  .controller('HomeCtrl', function ($scope, rest) {
    $scope.data = rest.projectDependencies('github', 'Zenedith', 'swagger-jersey2-gradle-demo-app');
    $scope.stats = rest.stats();
  });
