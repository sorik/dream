'use strict';

var myApp = angular.module('myExpense', []);

var popularItems = ['Lunch', 'Coffee'];
var categories = [ {'category': 'Meal',
                    'items': ['Breakfast', 'Lunch', 'Dinner']},
                    {'category': 'Coffee',
                     'items': []},
                    {'category': 'Beer',
                     'items': []},
                    {'category': 'Daily necessity',
                     'items': []},
                    {'category': 'Telephone',
                     'items': []},
                    {'category': 'Traffic',
                     'items': ['Tram', 'Car oil']},
                    {'category': 'Etc',
                     'items': ['Leisure', 'Clothes', 'Etc']},
                  ];

var formatDate = function(date) {
  var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
  var day = days[date.getDay()];
  var datenum = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  return datenum + "-" + month + "-" + year + " " + day;
};

myApp.controller('expenseCtrl', function($scope, $http){
  $scope.popularItems = popularItems;
  $scope.categories = categories;

  $scope.expenseDate = formatDate(new Date());

  $scope.setItem = function(item) {
    $scope.currentItem = item;
  };

  $scope.setItemAndClose = function(id, item) {
    $scope.setItem(item);
    var ul = document.querySelector('ul#'+id);
    angular.element(ul).removeClass('open');
    angular.element(ul).attr('style', '');
  };

  $scope.saveExpense = function() {
    $http.post('/data/expense/add',
      {'date': $scope.expenseDate,
       'item': $scope.currentItem,
       'amount': $scope.currentAmount}).
      success(function(data){
        $scope.currentItem = '';
        $scope.currentAmount = '';      
      }).
      error(function(error){
        alert("try again");
      });
  };

  $('#datepicker').fdatepicker({
    format: 'dd-mm-yyyy D'
  }).on('changeDate', function(ev){
      $scope.expenseDate = formatDate(ev.date);
  });
});

myApp.controller('expenseListCtrl', function($scope, $http){
  $scope.showExpenses = function(){
    $http.get('/data/expense').
      success(function(data){
        $scope.expenseList = data;
      });
  }
})
