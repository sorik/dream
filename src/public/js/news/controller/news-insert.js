angular.module('myNews')
  .controller('newsInsertCtrl', function($scope, NewsService){
    'use strict';

    $scope.addNews = function() {
      NewsService.insert({
                          'title': $scope.title,
                          'content': $scope.content,
                          'timestamp': new Date()});
    };
  });
