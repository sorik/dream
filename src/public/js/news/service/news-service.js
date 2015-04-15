angular.module('myNews')
  .factory('NewsService', ['$resource', function($resource) {
    return $resource('data/news',
                {},
                {
                  insert: {
                    method: 'POST'
                  },
                  get: {
                    method: 'GET',
                    isArray: true
                  }
                });
  }]);