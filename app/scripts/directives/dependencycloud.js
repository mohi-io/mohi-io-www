'use strict';

/**
 * @ngdoc directive
 * @name mohiApp.directive:dependencycloud
 * @description
 * # dependencycloud
 */
angular.module('mohiApp')
  .directive('dependencycloud', ['d3', function (d3) {
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

        var cloudFactory = function (dependencies) {
//          var fill = d3.scale.category20();

          var color = d3.scale.linear()
            .domain([0, 10, 20, 50, 100, 200, 500, 1000, 5000, 10000, 20000])
            .range(["#ddd", "#ccc", "#bbb", "#aaa", "#999", "#888", "#777", "#666", "#555", "#444", "#333", "#222"]);

          var sizeFont = d3.scale.linear()
            .domain([0, 10, 20, 50, 100, 200, 500, 1000, 5000, 10000, 20000])
            .range([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22]);

          d3.layout.cloud().size([
            width,
            height
          ])
            .words(dependencies)
            .rotate(0)
            .font(fontFamily)
            .fontSize(function (d) {
//              console.log('d: '+ d.size);
              return Math.ceil(sizeFont(d.size));
            })
            .on('end', draw)
            .start();
          function draw(dependencies) {
            var height_translate = height / 2;
            var width_translate = width / 2;
            var rootElement = element[0];
            d3.select(rootElement)
              .append('svg')
              .attr('width', width)
              .attr('height', height)
              .append('g')
              .attr('transform', 'translate(' + width_translate + ',' + height_translate + ')')
              .selectAll('text')
              .data(dependencies)
              .enter()
              .append('text')
              .style('font-size', function (d, i) {
//                console.log('font size: ' + d.size);
                return d.size + 'px';
              })
              .style('font-family', fontFamily).style('fill', function (d, i) {
//                console.log('color: ' + d.size + ': ' + color(d.size));
                return color(d.size);
              })
              .attr('text-anchor', 'middle').attr('transform', function (d) {
                return 'translate(' + [
                  d.x,
                  d.y
                ] + ')rotate(' + d.rotate + ')';
              })
              .text(function (d) {
                return d.text;
              })
              .on('click', function (d) {
                scope.onClick({ element: d });
              });
          }
        };

        var width = 800;
        var height = 300;
        var fontFamily = 'Impact';
        var fontSize = 100;
        var isAsync = false;
        var dependencies;

        if (angular.isDefined(attrs.width))
          width = attrs.width;
        if (angular.isDefined(attrs.height))
          height = attrs.height;
        if (angular.isDefined(attrs.fontFamily))
          fontFamily = attrs.fontFamily;
        if (angular.isDefined(attrs.fontSize))
          fontSize = attrs.fontSize * 1 || 0;
        if (angular.isDefined(scope.dependencies)) {

          if (angular.isDefined(scope.dependencies.$promise)) {
            isAsync = true;
            scope.dependencies.$promise.then(function (response) {
              dependencies = [];

              for (var i in response.dependencies) {
                var dep = response.dependencies[i];
                var word = {text: dep.name, size: dep.count, name: dep.name, group: dep.group};
                dependencies.push(word);
              }

              cloudFactory(dependencies);
            });
          } else {
            dependencies = scope.dependencies;
          }
        }
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

          if (!isAsync) {
            element.text('dependencycloud: Please define some dependencies');
          }

          return;
        }

        if (!angular.isNumber(fontSize) || fontSize <= 0) {
          element.text('dependencycloud: font-size attribute not valid. font-size ' + attrs.fontSize + ' -> ' + fontSize);
          return;
        }


        cloudFactory(dependencies);
      }
    };

  }]
);