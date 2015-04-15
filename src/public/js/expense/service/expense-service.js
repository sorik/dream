angular.module('myExpense')
  .factory('ExpenseService', ['$resource', function($resource) {
    return $resource('data/expense',
                      {},
                      {
                        insert: {
                          method: 'POST'
                        },
                        get: {
                          method: 'GET',
                          isArray: true
                        }});
  }]);