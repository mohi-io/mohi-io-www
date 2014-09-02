'use strict';

angular.module('mockedProject', [])
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
      type: "unknown",
      badges: {
        svg: "http://img.shields.io/gemnasium/mathiasbynens/he.svg",
        png: "http://img.shields.io/gemnasium/mathiasbynens/he.png",
        png2x: "http://img.shields.io/gemnasium/mathiasbynens/he.png"
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
          type: "unknown",
          badges: {
            svg: "http://img.shields.io/gemnasium/mathiasbynens/he.svg",
            png: "http://img.shields.io/gemnasium/mathiasbynens/he.png",
            png2x: "http://img.shields.io/gemnasium/mathiasbynens/he.png"
          }
        },
        version: "1.8.1",
        updatedAt: "1997-07-16T19:20:30+01:00",
        createdAt: "1997-07-16T19:20:30+01:00"
      }
    ],
    count: 1
  }
);