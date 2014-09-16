'use strict';

/**
 * @ngdoc service
 * @name mohiApp.dependenciesModel
 * @description
 * # dependenciesModel
 * Factory in the mohiApp.
 */
angular.module('mohiApp')
  .factory('projectDependenciesModel', ['$resource', 'CONFIGURATION', function ($resource, CONFIGURATION) {

    var getServerUrl = function () {
      return CONFIGURATION.serverUrl;
    };

    return $resource(getServerUrl() + '/projects/:id/dependencies', {}, {
      query: {method: 'GET', params: {}, isArray: false}
    });
  }]);
