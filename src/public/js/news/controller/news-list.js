angular.module('myNews')
  .controller('newsListCtrl', function($scope, NewsService){
    'use strict';

    $scope.newsList = NewsService.get();

    $scope.startTrain = function() {
      // do something
    };
  });