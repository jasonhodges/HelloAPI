'use strict';
angular.module('helloService', ['ngResource'])
  .factory('HelloService', function($resource) {
    return $resource('http://jlh-service.herokuapp.com/api');
  });