
angular.module('myExpense')
  .controller('expenseInsertCtrl', function($scope, $interval, ExpenseService){
    'use strict';

    var popularItems = ['Lunch', 'Coffee'];
    var categories = [ {'category': 'Meal',
                        'items': ['Breakfast', 'Lunch', 'Dinner']},
                        {'category': 'Food',
                         'items': ['Meat', 'Veg', 'Food etc']},
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

    var formatDisplayDate = function(date) {
      var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      var day = days[date.getDay()];
      var datenum = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      return datenum + '-' + month + '-' + year + ' '  + day;
    };

    var convertToJSONDate = function(displayDate) {
      var regexp = /\d{1,4}/g;
      var numbers = displayDate.match(regexp);
      var date = new Date(numbers[2], numbers[1]-1, numbers[0]);
      return date.toJSON();
    };

    $scope.popularItems = popularItems;
    $scope.categories = categories;

    $scope.expenseDate = formatDisplayDate(new Date());

    $scope.setItem = function(item) {
      $scope.currentItem = item;
    };

    $scope.setItemAndClose = function(id, item) {
      $scope.setItem(item);
      var ul = document.querySelector('ul#'+id);
      angular.element(ul).removeClass('open');
      angular.element(ul).attr('style', '');
    };

    $scope.savingResult = '';
    var stopDisplaying;
    var stopDisplayResultMessage = function(timeout) {
      if ( angular.isDefined(stopDisplaying) ) return;

      stopDisplaying = $interval(function(){
        $scope.savingResult = '';
        $interval.cancel(stopDisplaying);
        stopDisplaying = undefined;
      }, timeout);
    };

    $scope.saveExpense = function() {
      ExpenseService.save(
        {
          date: convertToJSONDate($scope.expenseDate),
          item: $scope.currentItem,
          amount: $scope.currentAmount
        },
        function() {
          $scope.savingResult = 'Successfully saved.'
          $scope.currentItem = '';
          $scope.currentAmount = '';
          stopDisplayResultMessage(3000);
        },
        function(error) {
          $scope.savingResult = 'Failed to save the expense. Try again. ' + '(' + error.data.message + ')';
          stopDisplayResultMessage(3000);
        });

    };
  });
