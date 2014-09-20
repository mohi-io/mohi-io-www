'use strict';

angular.module('mohiApp')
  .value('validDependenciesCollectionResponse', {
    count: 3,
    dependencies: [
      {
        "group": "com.googlecode.flyway",
        "name": "flyway-core",
        "count": 100
      },
      {
        "group": "com.jayway.jsonpath",
        "name": "json-path",
        "count": 5000
      },
      {
        "group": "org.echocat.jomon",
        "name": "demo",
        "count": 20000
      }
    ]
  });