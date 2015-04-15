angular.module('myExpense')
  .factory('ExpenseService', ['$resource', function($resource) {
    return $resource('data/expense');
  }]);