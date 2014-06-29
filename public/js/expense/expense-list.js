'use strict';

var getSaturdayOfWeek = function(date) { 
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 6); 
};

var getSundayOfWeek = function(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay());
};

var getFirstDayOfMonth = function(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

var getLastDayOfMonth = function(date) {
  return new Date(date.getFullYear(), date.getMonth()+1, 0);
};

var formatDate = function(date) {
  var datenum = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  return datenum + "/" + month + "/" + year;
};


myApp.controller('expenseListCtrl', function($scope, $http){

  if ($scope.currentActiveMenuItem == 'Week') {
    var startDate = getSundayOfWeek(new Date());
    var endDate = getSaturdayOfWeek(new Date());
  } else {
    var startDate = getFirstDayOfMonth(new Date());
    var endDate = getLastDayOfMonth(new Date());
  }

  var queryParams = {start: startDate, end: endDate};
  var encodedQueryParams = $.param(queryParams, true);
  var queryUri = '/data/expense' + '?' + encodedQueryParams;

  $http.get(queryUri).
  success(function(data){
    $scope.expenseList = data;
  });

  $scope.displayWeekStart = formatDate(startDate);
  $scope.displayWeekEnd = formatDate(endDate);

});