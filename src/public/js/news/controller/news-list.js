angular.module('myNews')
    .controller('newsListCtrl', function($scope, NewsService) {
        'use strict';

        $scope.pageSize = 10;
        $scope.currentPage = 0;
        $scope.maxPageNumber = 0;

        $scope.newsList = [];
        $scope.errorMessage = '';
        NewsService.query().then(function(news) {
            $scope.newsList = news;
            $scope.maxPageNumber = Math.ceil($scope.newsList.length / $scope.pageSize);
        }, function(error) {
            $scope.errorMessage = 'Failed to retrieve news articles. Try again. ' + '(' + error + ')';
        });

        $scope.prevPage = function() {
            $scope.currentPage = $scope.currentPage > 0 ? $scope.currentPage - 1 : 0;
        };

        $scope.nextPage = function() {
            $scope.currentPage = $scope.currentPage < $scope.maxPageNumber ? $scope.currentPage + 1 : $scope.maxPageNumber;
        };
    });