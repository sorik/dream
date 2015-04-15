angular.module('myNews')
  .controller('newsInsertCtrl', function($scope, NewsService){
    'use strict';

    $scope.addNews = function() {
      NewsService.save({
                          'title': $scope.title,
                          'content': $scope.content,
                          'timestamp': new Date()});
    };
  });
