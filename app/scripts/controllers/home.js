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

    $scope.onDependencyCloudClick = function (element) {
//      console.log("click", element);
//      console.log(getDependencyUrl(element));
      window.open(getDependencyUrl(element), '_blank');
    };

    var getDependencyUrl = function (element) {
      return 'http://search.maven.org/#search' + encodeURIComponent('|ga|1|a:' + element.name + ' g:' + element.group);
    };

  });
