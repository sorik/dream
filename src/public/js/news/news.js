'use strict';

var news = angular.module('myNews', []);

news.controller('newsCtrl', function($scope){

  $scope.activeMenu = 'Insert';  

  $scope.IsActive = function(query) {
    if ($scope.activeMenu == query) 
      return true;
    return false;
  };

});
