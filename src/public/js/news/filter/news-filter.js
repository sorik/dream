angular.module('myNews')
    .filter('pagination', function() {
        return function(inputArray, page, pageSize) {
            var start = page * pageSize;
            return inputArray.slice(start, start + pageSize);
        };
    });