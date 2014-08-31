'use strict';

/**
 * @ngdoc service
 * @name mohiApp.Project
 * @description
 * # Project
 * Factory in the mohiApp.
 */
angular.module('mohiApp')
  .factory('Project', function (restmod) {
    return restmod.model('/projects');
  });
