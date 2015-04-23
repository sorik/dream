angular.module('myNews')
    .controller('newsListCtrl', function($scope, NewsService) {
        'use strict';

        $scope.errorMessage = '';
        NewsService.get().then(function(news) {
            $scope.newsList = news;
        }, function(error) {
            $scope.errorMessage = 'Failed to retrieve news articles. Try again. ' + '(' + error + ')';
        });

        $scope.startTrain = function(news) {
            $scope.activeMenu = 'Train';
        };
    });