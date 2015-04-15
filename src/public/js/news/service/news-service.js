angular.module('myNews')
  .factory('NewsService', ['$resource', function($resource) {
    return $resource('data/news');
  }]);