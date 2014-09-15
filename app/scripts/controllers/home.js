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
    $scope.recentProjects = api.getRecentProjects();
    $scope.dependencies = [ {text:'one',size: 1}, {text:'two',size:10}, {text:'three',size:100} ];

    console.log($scope.recentProjects);
//    console.log($scope.dependencies);

    $scope.onDependencyCloudClick = function(element){
      console.log("click", element);
    }

  });
