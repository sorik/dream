angular.module('myNews')
  .controller('newsListCtrl', function($scope, NewsService){
    'use strict';

    $scope.errorMessage = '';
    NewsService.query(
      function(news) {
        $scope.newsList = news;
      },
      function(error) {
        $scope.errorMessage = 'Failed to retrieve news articles. Try again. ' + '(' + error.data.message + ')';
      });

    $scope.startTrain = function() {
      // do something
    };
  });