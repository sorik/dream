angular.module('myNews')
    .controller('newsListCtrl', function($scope, NewsService, filterFilter, orderByFilter, PageService) {
        'use strict';

        var PAGE_SIZE = 10;
        var INITIAL_PAGE = 0;

        $scope.maxPageNumber = 0;
        $scope.originalNewsList = [];
        $scope.filteredNewsList = [];
        $scope.errorMessage = '';
        $scope.currentPage = {};

        $scope.prevPage = function() {
            $scope.currentPage = PageService.prevPage($scope.filteredNewsList, $scope.currentPage.pageNum, PAGE_SIZE);
        };

        $scope.nextPage = function() {
            $scope.currentPage = PageService.nextPage($scope.filteredNewsList, $scope.currentPage.pageNum, PAGE_SIZE);
        };


        NewsService.query().then(function(news) {
            $scope.originalNewsList = orderByFilter(news, 'timestamp', true);
            $scope.filteredNewsList = $scope.originalNewsList;
            $scope.currentPage = PageService.currentPage($scope.originalNewsList, INITIAL_PAGE, PAGE_SIZE);
        }, function(error) {
            $scope.errorMessage = 'Failed to retrieve news articles. Try again. ' + '(' + error + ')';
        });

        $scope.$watch('criteria', function(criteria) {
            if ($scope.originalNewsList.length > 0) {
                $scope.filteredNewsList = filterFilter($scope.originalNewsList, criteria);
                $scope.currentPage = PageService.currentPage($scope.filteredNewsList, INITIAL_PAGE, PAGE_SIZE);
            }
         });
    });