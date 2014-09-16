'use strict';

/**
 * @ngdoc function
 * @name mohiApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the mohiApp
 */
angular.module('mohiApp')
  .controller('HomeCtrl', function ($scope, api) {
    $scope.recentProjects = [];//api.getRecentProjects();
    $scope.dependenciesCloud = api.getDependenciesCloud();

    console.log($scope.recentProjects);
    console.log($scope.dependenciesCloud);

    $scope.onDependencyCloudClick = function(element){
      console.log("click", element);
    }

  });
