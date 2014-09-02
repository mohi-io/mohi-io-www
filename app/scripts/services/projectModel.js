'use strict';

/**
 * @ngdoc service
 * @name mohiApp.projectModel
 * @description
 * # projectModel
 * Factory in the mohiApp.
 */
angular.module('mohiApp')
  .factory('projectModel', ['$resource', 'CONFIGURATION', function ($resource, CONFIGURATION) {

    var getServerUrl = function () {
      return CONFIGURATION.serverUrl;
    };

    return $resource(getServerUrl() + '/projects/:id', {}, {
      query: {method: 'GET', params: {}, isArray: false}
    });
  }]);
