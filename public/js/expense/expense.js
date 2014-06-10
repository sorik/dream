'use strict';

var myApp = angular.module('myExpense', []);

var menu = ['Insert', 'Week', 'Month']

myApp.controller('expenseMenuCtrl', function($scope){
  $scope.menu = menu;
  $scope.currentActiveMenuItem = menu[0];

  $scope.setActiveMenuItem = function(item) {
    $scope.currentActiveMenuItem = item;
  };

  $scope.isActive = function(item) {
    return $scope.currentActiveMenuItem == item;
  }
});
