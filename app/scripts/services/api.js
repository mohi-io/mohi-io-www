'use strict';

/**
 * @ngdoc service
 * @name mohiApp.api
 * @description
 * # api
 * Service in the mohiApp.
 */
angular.module('mohiApp')
  .service('api', function (projectDependenciesModel, projectModel) {

    // Public API here
    return {
      getProjectDependencies: function (id) {
        return projectDependenciesModel.get({id: id});
      },
      getRecentProjects: function () {
        return projectModel.get();
      },
      getProjects: function () {
        return projectModel.get();
      },
      getProject: function (id) {
        return projectModel.get({id: id});
      },
      getDependenciesCloud: function () {
        return [ {text:'one',size: 1}, {text:'two',size:10}, {text:'three',size:100} ];
//        return projectDependenciesModel.get();
      }
    };

  });
