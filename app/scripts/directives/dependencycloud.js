'use strict';

/**
 * @ngdoc directive
 * @name mohiApp.directive:dependencycloud
 * @description
 * # dependencycloud
 */
angular.module('mohiApp')
  .directive('dependencycloud', function (d3) {
    return {
      restrict: 'E',
      scope: {
        width: '@',
        height: '@',
        fontFamily: '@',
        fontSize: '@',
        dependencies: '=',
        onClick: '&',
        onHover: '&'
      },
      link: function postLink(scope, element, attrs) {
        var width = 800;
        var height = 600;
        var fontFamily = 'Impact';
        var fontSize = 100;
        var dependencies;
        if (angular.isDefined(attrs.width))
          width = attrs.width;
        if (angular.isDefined(attrs.height))
          height = attrs.height;
        if (angular.isDefined(attrs.fontFamily))
          fontFamily = attrs.fontFamily;
        if (angular.isDefined(attrs.fontSize))
          fontSize = attrs.fontSize * 1 || 0;
        if (angular.isDefined(scope.dependencies))
          dependencies = scope.dependencies;
        if (angular.isDefined(scope.dependencies) && angular.isArray(dependencies)) {
          dependencies = scope.dependencies;
        } else if (angular.element(element).find('word').length > 0) {
          var subelements = angular.element(element).find('word');
          dependencies = [];
          angular.forEach(subelements, function (word) {
            dependencies.push(angular.element(word).text());
            angular.element(word).remove();
          });
        } else if (element.text().length > 0) {
          dependencies = element.text().split(',');
          element.text('');
        } else {
          element.text('dependencycloud: Please define some dependencies');
          return;
        }
        if (!angular.isNumber(fontSize) || fontSize <= 0) {
          element.text('dependencycloud: font-size attribute not valid. font-size ' + attrs.fontSize + ' -> ' + fontSize);
          return;
        }
        var cloudFactory = function (dependencies) {
//          var fill = d3.scale.category20();

          var color = d3.scale.linear()
            .domain([0,1,2,3,4,5,6,10,15,20,100])
            .range(["#ddd", "#ccc", "#bbb", "#aaa", "#999", "#888", "#777", "#666", "#555", "#444", "#333", "#222"]);

          d3.layout.cloud().size([
            width,
            height
          ]).words(dependencies).rotate(0).font(fontFamily).fontSize(function (d) {
            return d.size;
          }).on('end', draw).start();
          function draw(dependencies) {
            var height_translate = height / 2;
            var width_translate = width / 2;
            var rootElement = element[0];
            d3.select(rootElement).append('svg').attr('width', width).attr('height', height).append('g').attr('transform', 'translate(' + width_translate + ',' + height_translate + ')').selectAll('text').data(dependencies).enter().append('text').style('font-size', function (d) {
              return d.size + 'px';
            }).style('font-family', fontFamily).style('fill', function (d, i) {
              return color(i);
            }).attr('text-anchor', 'middle').attr('transform', function (d) {
              return 'translate(' + [
                d.x,
                d.y
              ] + ')rotate(' + d.rotate + ')';
            }).text(function (d) {
              return d.text;
            }).on('click', function (d) {
              scope.onClick({ element: d });
            }).on('mouseover', function (d) {
              scope.onHover({ element: d });
            });
          }
        };
        cloudFactory(dependencies);
      }
    };
  }
);