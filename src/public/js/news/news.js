angular.module('myNews', ['ngResource', 'ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        'use strict';

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('news', {
                url: '/',
                views: {
                    'list': {
                        templateUrl: 'partials/news/news-list.html',
                        controller: 'newsListCtrl'
                    }
                }
            })
            .state('news.show', {
                url: ':id',
                views: {
                    'content@': {
                        templateUrl: 'partials/news/news-show.html',
                        controller: 'newsShowCtrl'
                    }
                }
            })
            .state('news.insert', {
                url: 'insert',
                views: {
                    'content@': {
                        templateUrl: 'partials/news/news-insert.html',
                        controller: 'newsInsertCtrl'
                    }
                }
            })
            .state('news.train', {
                url: ':id/train',
                views: {
                    'content@': {
                        templateUrl: 'partials/news/news-train.html',
                        controller: 'newsTrainCtrl'
                    }
                }
            });
    }]);
