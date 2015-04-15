angular.module('myNews')
  .controller('newsInsertCtrl', function($scope, $interval, NewsService){
    'use strict';

    $scope.savingResult = '';
    var stopDisplaying;
    var stopDisplayResultMessage = function(timeout) {
      if ( angular.isDefined(stopDisplaying) ) return;

      stopDisplaying = $interval(function(){
        $scope.savingResult = '';
        $interval.cancel(stopDisplaying);
        stopDisplaying = undefined;
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
                          console.log(error);
                          $scope.savingResult = 'Failed to save. Try again.' + '(' + error.data.message + ')';
                          stopDisplayResultMessage(3000);
                        });
    };
  });
