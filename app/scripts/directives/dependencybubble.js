'use strict';

/**
 * http://bl.ocks.org/mbostock/raw/4063269/
 * @ngdoc directive
 * @name mohiApp.directive:dependencybubble
 * @description
 * # dependencybubble
 */
angular.module('mohiApp')
  .directive('dependencybubble', ['d3', function (d3) {
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

        var classes = function classes(root) {
          var classes = [];

          function recurse(name, node) {
            if (node.children) {
              node.children.forEach(function (child) {
                recurse(node.name, child);
              });
            }
            else {
              classes.push({packageName: name, className: node.name, value: node.size});
            }
          }

          recurse(null, root);
          return {children: classes};
        };

        var sizeFont = d3.scale.linear()
          .domain([0, 10, 20, 50, 100, 200, 500, 1000, 5000, 10000, 20000])
          .range([2, 3, 8, 10, 12, 15, 16, 17, 18, 19, 20, 22]);

        var bubbleFactory = function (dependencies) {

          var diameter = width,
            format = d3.format(",d"),
            color = d3.scale.category20c();

          var bubble = d3.layout.pack()
            .sort(null)
            .size([diameter, diameter])
            .padding(1.5);

          var rootElement = element[0];

          var svg = d3.
            select(rootElement)
            .append("svg")
            .attr("width", diameter)
            .attr("height", diameter)
            .attr("class", "bubble");

          var node = svg
            .selectAll(".node")
            .data(bubble.nodes(dependencies).filter(function (d) {
              return !d.children;
            }))
            .enter()
            .append("g")
            .attr("class", "node")
            .attr("transform", function (d) {
              console.log('transform', d.x, d.y);
              return "translate(" + d.x + "," + d.y + ")";
            });

          node.append("title")
            .text(function (d) {
//              console.log('title', d.className + ": " + format(d.value));
              return d.className + ": " + format(d.value);
            });

          node.append("circle")
            .attr("r", function (d) {
//              console.log('circle', d.r);
              return d.r;
            })
            .style("fill", function (d) {
              return color(d.packageName);
            });

          node.append("text")
            .attr("dy", ".3em")
            .style("text-anchor", "middle")
            .text(function (d) {
//              console.log('text-anchor', d.className.substring(0, d.r / 3));
              return d.className.substring(0, d.r / 3);
            })
            .style('font-size', function (d, i) {
//              console.log('font size: ' + Math.ceil(sizeFont(d.size)) + ' px');
              return Math.ceil(sizeFont(d.size)) + 'px';
            })
            .style('font-family', fontFamily)
            .on('click', function (d) {
              scope.onClick({ element: d });
            });

          d3.select(self.frameElement).style("height", diameter + "px");
        };

        var width = 400;
        var height = 400;
        var fontFamily = 'Helvetica Neue';
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

              dependencies = {
                "children": []
              };

              for (var i in response.dependencies) {
                var dep = response.dependencies[i];
                var word = {
                  text: dep.name,
                  size: dep.count,
                  name: dep.name,
                  group: dep.group,
                  packageName: dep.group,
                  className: dep.name,
                  value: dep.count
                };
                dependencies.children.push(word);
              }

              bubbleFactory(dependencies);
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

        bubbleFactory(dependencies);
      }
    };
  }]);
