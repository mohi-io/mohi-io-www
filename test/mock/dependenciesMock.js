'use strict';

angular.module('mohiApp')
  .value('validDependenciesCollectionResponse', {
    count: 3,
    "dependencies": [
      {
        "group": "com.googlecode.flyway",
        "count": 10,
        "name": "flyway-core"
      },
      {
        "group": "com.jayway.jsonpath",
        "count": 1400,
        "name": "json-path"
      },
      {
        "group": "com.jayway.jsonpath",
        "count": 2000,
        "name": "json-path-assert"
      },
      {
        "group": "eu.tekul",
        "count": 300,
        "name": "szxcvbn_2.8.2"
      },
      {
        "group": "javax.servlet",
        "count": 30,
        "name": "jstl"
      },
      {
        "group": "net.sourceforge.cobertura",
        "count": 40,
        "name": "cobertura"
      },
      {
        "group": "org.flywaydb",
        "count": 50,
        "name": "flyway-gradle-plugin"
      },
      {
        "group": "org.gradle.api.plugins",
        "count": 100,
        "name": "gradle-cargo-plugin"
      },
      {
        "group": "org.hamcrest",
        "count": 20,
        "name": "hamcrest-all"
      },
      {
        "group": "org.mariadb.jdbc",
        "count": 20,
        "name": "mariadb-java-client"
      },
      {
        "group": "org.slf4j",
        "count": 1000,
        "name": "slf4j-api"
      },
      {
        "group": "org.slf4j",
        "count": 1100,
        "name": "slf4j-log4j12"
      },
      {
        "group": "com.googlecode.flyway",
        "name": "flyway-core",
        "count": 1200
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