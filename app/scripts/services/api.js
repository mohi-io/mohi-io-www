'use strict';

/**
 * @ngdoc service
 * @name mohiApp.api
 * @description
 * # api
 * Service in the mohiApp.
 */
angular.module('mohiApp')
  .service('api', function (dependenciesModel, projectModel) {

    // Public API here
    return {
      getProjectDependencies: function (id) {
        return dependenciesModel.get({id: id});
      },
      getRecentProjects: function () {
        return projectModel.get();
      },
      getProjects: function () {
        return projectModel.get();
      },
      getProject: function (id) {
        return projectModel.get({id: id});
      }
    };

  });
