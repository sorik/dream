angular.module('myNews')
  .controller('newsListCtrl', function($scope, NewsService){
    'use strict';

    $scope.newsList = NewsService.query();

    $scope.startTrain = function() {
      // do something
    };
  });