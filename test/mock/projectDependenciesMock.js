'use strict';

angular.module('mohiApp')
  .value('validProjectDependenciesCollectionResponse', {
    dependencies: [
      {
        "group": "com.googlecode.flyway",
        "version": "2.3.1",
        "name": "flyway-core"
      },
      {
        "group": "com.jayway.jsonpath",
        "version": "0.9.1",
        "name": "json-path"
      }
    ],
    count: 2,
    project: {
      id: "3345df-343rfsv-322fdd",
      name: "oauth-uaa",
      description: "description",
      owner: {
        id: "12345kd-3232",
        name: "zenedith",
        resource: "users"
      },
      version: "1.8.1",
      updatedAt: "1997-07-16T19:20:30+01:00",
      createdAt: "1997-07-16T19:20:30+01:00"
    },
    branch: "master"
  });