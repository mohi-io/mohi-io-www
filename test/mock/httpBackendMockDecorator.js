'use strict';

/**
 * @ngdoc function
 * @name mohiApp.decorator:httpBackendMock
 * @description
 * # httpBackendMock
 * Decorator of the mohiApp
 */
angular.module('mohiApp')
  .config(function ($provide) {
    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
  })
  .run(function ($httpBackend, validProjectResponse, validProjectCollectionResponse) {
    $httpBackend.whenGET(/views\/.*/).passThrough();
    $httpBackend.whenGET(/.*\/projects/).respond(validProjectCollectionResponse);
//
    // do real request
//    $httpBackend.whenJSONP().passThrough();
//    $httpBackend.whenGET(/.*/).passThrough();
//    $httpBackend.whenPOST(/.*/).passThrough();
//    $httpBackend.whenDELETE(/.*/).passThrough();
//    $httpBackend.whenPUT(/.*/).passThrough();
  });
