'use strict';

var getSaturdayOfWeek = function(date) {
  date.setHours(0,0,0,0);

  var saturday = new Date(date);
  saturday.setDate(saturday.getDate() - saturday.getDay() + 6);

  return saturday;  
};

var getSundayOfWeek = function(date) {
  date.setHours(0,0,0,0);

  var sunday = new Date(date);
  sunday.setDate(sunday.getDate() - sunday.getDay()); 

  return sunday; 
};

var formatDate = function(date) {
  var datenum = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  return datenum + "/" + month + "/" + year;
};


myApp.controller('expenseListCtrl', function($scope, $http){

  var sunday = getSundayOfWeek(new Date());
  var saturday = getSaturdayOfWeek(new Date());

  $http.get('/data/expense').
  success(function(data){
    $scope.expenseList = data;
  });

  $scope.displayWeekStart = formatDate(sunday);
  $scope.displayWeekEnd = formatDate(saturday);

});