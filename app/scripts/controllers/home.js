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
    $scope.dependenciesCloud = api.getDependenciesCloud();

//    api.getDependenciesCloud().$promise.then(function(response) {
////      console.log(response.dependencies);
//      $scope.dependenciesCloud = response.dependencies;
//    });

//    console.log($scope.recentProjects);
//    console.log($scope.dependenciesCloud);

    $scope.onDependencyCloudClick = function(element){
      console.log("click", element);
//      window.location = getDependencyUrl(element);
    };

    var getDependencyUrl = function(element) {
      return 'http://search.maven.org'+ '/#search%7Cga%7C1%7Ca%3Aspring';
    };

  });
