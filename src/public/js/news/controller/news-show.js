angular.module('myNews')
    .controller('newsShowCtrl', ['$scope', '$stateParams',function($scope, $stateParams) {
        'use strict';
        $scope.newsId = $stateParams.id;
        console.log($scope.newsId);
    }]);