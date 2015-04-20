angular.module('myNews')
    .controller('newsInsertCtrl', function($scope, $timeout, NewsService) {
        'use strict';

        $scope.savingResult = '';
        var stopDisplayResultMessage = function(timeout) {
            $timeout(function() {
                $scope.savingResult = '';
            }, timeout);
        };

        $scope.addNews = function() {
            NewsService.insert({
                    'title': $scope.title,
                    'content': $scope.content,
                    'timestamp': new Date()
                }).then(function(){
                    $scope.title = '';
                    $scope.content = '';
                    $scope.savingResult = 'Successfully saved.';
                    stopDisplayResultMessage(3000);
                }, function(error) {
                    $scope.savingResult = 'Failed to save. Try again.' + '(' + error + ')';
                    stopDisplayResultMessage(3000);
                });
        };
    });