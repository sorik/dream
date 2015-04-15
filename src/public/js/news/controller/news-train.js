angular.module('myNews')
  .controller('newsTrainCtrl', function($scope){
    'use strict';

    $scope.showTrain = function() {
      $scope.hideTrain = false;
    };

    $scope.hideTrainWord = function(index) {
      $scope.todayTraining[index] = '____';
    };

    $scope.showTrainWord = function(index) {
      $scope.todayTraining[index] = $scope.todayWords[index];
    };
  })
  .directive('newsWord', function(){
    'use strict';
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        word: '=',
        clicked: '&hideWord'

      },
      template: '<a ng-click="clicked()">{{word}} </a>'
    };
  })
  .directive('newsOriginal', function() {
    'use strict';
    return {
      restrict: 'E',
      template: '<news-word hide-word="hideTrainWord($index)" ng-repeat="word in todayWords track by $index" word="word"></news-word>'
    };
  })
  .directive('newsTrainingWord', function(){
    'use strict';
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        word: '=',
        clicked: '&showWord'
      },
      template: '<a ng-click="clicked()">{{word}} </a>'
    };
  })
  .directive('newsTrainingStart', function(){
    'use strict';
    return {
      restrict: 'E',
      template: '<a href ng-click="showTrain()">Start Train</a>'
    };
  })
  .directive('newsTraining', function(){
    'use strict';
    return {
      restrict: 'E',
      template: '<news-training-word show-word="showTrainWord($index)"ng-hide="hideTrain" ng-repeat="word in todayTraining  track by $index" word="word"></news-training-word>'
    };
  });

