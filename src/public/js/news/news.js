angular.module('myNews', ['ngResource', 'ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        'use strict';

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('news', {
                url: '/',
                templateUrl: 'partials/news/news-list.html',
                controller: 'newsListCtrl'
            })
            .state('news.show', {
                url: ':id',
                templateUrl: 'partials/news/news-show.html',
                controller: 'newsShowCtrl'
            });
    }]);
