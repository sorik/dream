angular.module('myNews')
    .factory('NewsResource', ['$resource', function($resource) {
        'use strict';
        return $resource('data/news');
    }])
    .factory('NewsService', ['$q', 'NewsResource', function($q, NewsResource) {
        'use strict';
        return {
            insert: function(data) {
                var deferred = $q.defer();
                NewsResource.save(data, function() {
                    deferred.resolve('');
                }, function(error) {
                    deferred.reject(error.data.message);
                });
                return deferred.promise;
            },
            get: function() {
                var deferred = $q.defer();
                NewsResource.query(function(data) {
                    deferred.resolve(data);
                }, function(error) {
                    deferred.reject(error.data.message);
                });
                return deferred.promise;
            }
        };
    }]);