'use strict';

angular.module('mohiApp')
  .value('validProjectResponse',
  {
    id: "3345df-343rfsv-322fdd",
    name: "oauth-uaa",
    description: "description",
    owner: {
      id: "12345kd-3232",
      name: "zenedith",
      resource: "users"
    },
    repository: {
      type: "git",
      provider: "github",
      branches: ["master", "develop"],
      defaultBranch: "master"
    },
    build: {
      type: "maven",
      language: "java1.7",
      version: "3"
    },
    status: {
      type: "uptodate",
      badge: {
        svg: "http://img.shields.io/david/webcomponents/generator-element.svg",
        png: "http://img.shields.io/david/webcomponents/generator-element.png",
        png2x: "http://img.shields.io/david/webcomponents/generator-element.png"
      }
    },
    version: "1.8.1",
    updatedAt: "1997-07-16T19:20:30+01:00",
    createdAt: "1997-07-16T19:20:30+01:00"
  })
  .value('validProjectCollectionResponse',
  {
    projects: [
      {
        id: "3345df-343rfsv-322fdd",
        name: "oauth-uaa",
        description: "description",
        owner: {
          id: "12345kd-3232",
          name: "zenedith",
          resource: "users"
        },
        repository: {
          type: "git",
          provider: "github",
          branches: ["master", "develop"],
          defaultBranch: "master"
        },
        build: {
          type: "maven",
          language: "java1.7",
          version: "3"
        },
        status: {
          type: "uptodate",
          badge: {
            svg: "http://img.shields.io/david/webcomponents/generator-element.svg",
            png: "http://img.shields.io/david/webcomponents/generator-element.png",
            png2x: "http://img.shields.io/david/webcomponents/generator-element.png"
          }
        },
        version: "1.8.1",
        updatedAt: "1997-07-16T19:20:30+01:00",
        createdAt: "1997-07-16T19:20:30+01:00"
      },
      {
        id: "1111-343rfsv-322fdd",
        name: "swagger-jersey2-gradle-demo-app",
        description: "description",
        owner: {
          id: "12345kd-3232",
          name: "zenedith",
          resource: "users"
        },
        repository: {
          type: "git",
          provider: "github",
          branches: ["master", "develop"],
          defaultBranch: "master"
        },
        build: {
          type: "maven",
          language: "java1.7",
          version: "3"
        },
        status: {
          type: "notsoupdate",
          badge: {
            svg: "http://img.shields.io/david/strongloop/express.svg",
            png: "http://img.shields.io/david/strongloop/express.png",
            png2x: "http://img.shields.io/david/strongloop/express.png"
          }
        },
        version: "1.8.1",
        updatedAt: "1997-07-16T19:20:30+01:00",
        createdAt: "1997-07-16T19:20:30+01:00"
      },
      {
        id: "2222-343rfsv-322fdd",
        name: "repo-name",
        description: "description",
        owner: {
          id: "12345kd-3232",
          name: "zenedith",
          resource: "users"
        },
        repository: {
          type: "git",
          provider: "github",
          branches: ["master", "develop"],
          defaultBranch: "master"
        },
        build: {
          type: "maven",
          language: "java1.7",
          version: "3"
        },
        status: {
          type: "outdate",
          badge: {
            svg: "https://david-dm.org/bower/bower.svg",
            png: "https://david-dm.org/bower/bower.png",
            png2x: "https://david-dm.org/bower/bower.png"
          }
        },
        version: "1.8.1",
        updatedAt: "1997-07-16T19:20:30+01:00",
        createdAt: "1997-07-16T19:20:30+01:00"
      }
    ],
    count: 3
  }
);