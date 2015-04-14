angular.module('myNews').controller('newsInsertCtrl', function($scope, $http){
  'use strict';

  $scope.addNews = function() {
    $http.post('/data/news/add',
              {
                'title': $scope.title,
                'content': $scope.content,
                'timestamp': new Date()
              });
  };
});
