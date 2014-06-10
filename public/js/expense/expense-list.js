'use strict';

var getStartAndEndDayOfWeek = function(date) {
  date.setHours(0,0,0,0);

  var monday = new Date(date);
  monday.setDate(monday.getDate() - monday.getDay() + 1);
  var sunday = new Date(date);
  sunday.setDate(sunday.getDate() - sunday.getDay() + 7);

  return [monday, sunday];
};

var formatDate = function(date) {
  var datenum = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  return datenum + "/" + month + "/" + year;
};


myApp.controller('expenseListCtrl', function($scope, $http){
  $http.get('/data/expense').
  success(function(data){
    $scope.expenseList = data;
  });

  $scope.selectedWeek = getStartAndEndDayOfWeek(new Date());
  $scope.displayWeekStart = formatDate($scope.selectedWeek[0]);
  $scope.displayWeekEnd = formatDate($scope.selectedWeek[1]);

});