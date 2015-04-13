'use strict';

news.controller('newsInsertCtrl', function($scope, $http, $compile, $element){

  $scope.addNews = function() {
    $http.post('/data/news/add', 
              {"title": $scope.title, 
               "content": $scope.content, 
               "timestamp": new Date()})
    .success(function(data) {
      console.log("saved");
    });
  };  

});
