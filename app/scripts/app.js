'use strict';

/**
 * @ngdoc overview
 * @name mohiApp
 * @description
 * # mohiApp
 *
 * Main module of the application.
 */
angular
  .module('mohiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restmod'
  ])
  .config(function (restmodProvider, CONFIGURATION) {
    restmodProvider.rebase({
      URL_PREFIX: CONFIGURATION.serverUrl
    });
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/project', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'SigninCtrl'
      })
      .otherwise({
        templateUrl: '/404.html'
      });
  });
