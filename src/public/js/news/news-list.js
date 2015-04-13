'use strict';

news.controller('newsListCtrl', function($scope, $http){

  $http.get('/data/news').success(function(data) {
    $scope.newsList = data;
  });

  $scope.startTrain = function(news) {
    // do something
  };
});