'use strict';

/**
 * @ngdoc overview
 * @name helloWorldApp
 * @description
 * # helloWorldApp
 *
 * Main module of the application.
 */

angular.module('helloWorldApp', ['helloService', 'ngResource'])

.controller('MainCtrl', function($scope, HelloService) {
  HelloService.get(function(data){
    $scope.greeting = data.greeting;
  });
});