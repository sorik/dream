angular.module('myNews')
  .controller('newsInsertCtrl', function($scope, $timeout, NewsService){
    'use strict';

    $scope.savingResult = '';
    var stopDisplayResultMessage = function(timeout) {
      $timeout(function() {
        $scope.savingResult = '';
      }, timeout);
    };

    $scope.addNews = function() {
      NewsService.save({
                          'title': $scope.title,
                          'content': $scope.content,
                          'timestamp': new Date()
                        },
                        function() {
                          $scope.title = '';
                          $scope.content = '';
                          $scope.savingResult = 'Successfully saved.';
                          stopDisplayResultMessage(3000);
                        },
                        function(error) {
                          var errorMessage = error.data ? error.data.message : '';
                          $scope.savingResult = 'Failed to save. Try again.' + '(' + errorMessage + ')';
                          stopDisplayResultMessage(3000);
                        });
    };
  });
