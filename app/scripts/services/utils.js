'use strict';

/**
 * @ngdoc service
 * @name mohiApp.utils
 * @description
 * # utils
 * Factory in the mohiApp.
 */
angular.module('mohiApp')
  .factory('utils', function () {

    return {
      sprintf: function parse(str) {
        var args = [].slice.call(arguments, 1),
          i = 0;

        return str.replace(/%s/g, function () {
          return args[i++];
        });
      }
    };
  });
