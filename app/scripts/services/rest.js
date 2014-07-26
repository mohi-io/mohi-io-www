'use strict';

/**
 * @ngdoc service
 * @name mohiApp.rest
 * @description
 * # rest
 * Service in the mohiApp.
 */
angular.module('mohiApp')
  .service('rest', ['$resource', 'CONFIGURATION', function ($resource, CONFIGURATION) {

//    console.log(CONFIGURATION);

    var getServerUrl = function () {
      return CONFIGURATION.serverUrl;
    };

    // Public API here
    return {
      projectDependencies: function (provider, user, repo) {
//        console.log(provider, user, repo);
        return $resource(getServerUrl() + '/:provider/:user/:repo.json', {}, {
          query: {method: 'GET', params: {provider: provider, user: user, repo: repo}, isArray: false}
        }).query();
      },
      stats: function () {
        return $resource(getServerUrl() + '/stats.json', {}, {
          query: {method: 'GET', params: {}, isArray: false}
        }).get();
      }
    };
  }]);
