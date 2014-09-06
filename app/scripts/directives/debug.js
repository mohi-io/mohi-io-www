'use strict';

/**
 * @ngdoc directive
 * @name mohiApp.directive:debug
 * @description
 * # debug
 */
angular.module('mohiApp')
  .directive('debug', function ($compile) {
    return {
      terminal: true,
      priority: 1000000,
      link: function (scope, element) {
        var clone = element.clone();
        element.attr('style', 'color:red');
        clone.removeAttr('debug');
        var clonedElement = $compile(clone)(scope);
        element.after(clonedElement);
      }
    };
  });
