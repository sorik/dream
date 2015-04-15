angular.module('myNews').controller('newsListCtrl', function($scope, $http){
  'use strict';

  $http.get('/data/news').success(function(data) {
    $scope.newsList = data;
  });

  $scope.startTrain = function() {
    // do something
  };
});