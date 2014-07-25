'use strict';

/**
 * @ngdoc service
 * @name mohiApp.rest
 * @description
 * # rest
 * Service in the mohiApp.
 */
angular.module('mohiApp')
  .service('rest', ['$resource', function ($resource) {

    // Public API here
    return {
      projectDependencies: function (provider, user, repo) {
//        console.log(provider, user, repo);
        return $resource('http://localhost:1337/:provider/:user/:repo.json', {}, {
          query: {method:'GET', params:{provider: provider, user: user, repo: repo}, isArray:false}
        }).query();
      }
    };
  }]);
