angular.module('myNews')
  .controller('newsCtrl', function($scope){
    'use strict';

    $scope.activeMenu = 'Insert';

    $scope.IsActive = function(query) {
      if ($scope.activeMenu === query) {
        return true;
      }
      return false;
    };

  });