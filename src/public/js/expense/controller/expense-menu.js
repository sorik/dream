angular.module('myExpense')
  .controller('expenseMenuCtrl', function($scope){
    'use strict';

    var menu = ['Insert', 'Week', 'Month'];

    $scope.menu = menu;
    $scope.currentActiveMenuItem = menu[0];

    $scope.setActiveMenuItem = function(item) {
      $scope.currentActiveMenuItem = item;
    };

    $scope.isActive = function(item) {
      return $scope.currentActiveMenuItem === item;
    };
  });