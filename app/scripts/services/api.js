'use strict';

/**
 * @ngdoc service
 * @name mohiApp.api
 * @description
 * # api
 * Service in the mohiApp.
 */
angular.module('mohiApp')
  .service('api', function (Project) {
//    console.log(CONFIGURATION);
//    console.log('service');
//    console.log(Project);

//    var getServerUrl = function () {
//      return CONFIGURATION.serverUrl;
//    };

     // Public API here
    return {
      projectDependencies: function (id) {
        console.log(id);
        return Project.$search({ sort: 'updatedAt:desc' });
      },
      stats: function () {
        return Project.$search({ sort: 'updatedAt:desc' });
      }
    };

  });
