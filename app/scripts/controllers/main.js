'use strict';

/**
 * @ngdoc function
 * @name mohiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mohiApp
 */
angular.module('mohiApp')
  .controller('MainCtrl', function ($scope, rest) {

    $scope.data = rest.projectDependencies('github', 'Zenedith', 'swagger-jersey2-gradle-demo-app');
    $scope.stats = rest.stats();
//    console.log($scope.data);

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
