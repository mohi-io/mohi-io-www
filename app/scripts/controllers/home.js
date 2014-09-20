'use strict';

/**
 * @ngdoc function
 * @name mohiApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the mohiApp
 */
angular.module('mohiApp')
  .controller('HomeCtrl', function ($scope, api, CONFIGURATION, utils) {
    $scope.recentProjects = api.getRecentProjects();
    $scope.dependenciesCloud = api.getDependenciesCloud();

    $scope.onDependencyCloudClick = function (element) {
//      console.log("click", element);
//      console.log(getDependencyUrl(element));
      window.open(getDependencyUrl(element), '_blank');
    };

    var getDependencyUrl = function (element) {
      return CONFIGURATION.mavenCentralUrl + encodeURIComponent(
        utils.sprintf(CONFIGURATION.mavenCentralSearchQuery, element.name, element.group)
      );
    };

  });
