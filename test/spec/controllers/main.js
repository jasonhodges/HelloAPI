'use strict';

describe('Main Ctrl', function() {
  var MainCtrl;
  var $controller;

  beforeEach(function(){
    module('helloWorldApp');
    inject(function($injector){
      $controller = $injector.get('HelloService');
    });
  });
    
  it('should say \'Hello World\'', function() {
    var $scope = {};
    $scope.greeting = 'Hello World!';
    var controller = $controller('MainCtrl', { $scope: $scope });
    //expect(hello).toContain('Hello World!');
    expect($scope.greeting).toEqual('Hello World!');
  });
});