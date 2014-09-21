'use strict';

news.controller('newsTrainCtrl', function($scope, $http){

  $scope.showTrain = function() {
    $scope.hideTrain = false;
  };

  $scope.hideTrainWord = function(index) {
    $scope.todayTraining[index] = '____';
  };

  $scope.showTrainWord = function(index) {
    $scope.todayTraining[index] = $scope.todayWords[index];
  };
});

news.directive('newsWord', function(){
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      word: '=',
      clicked: '&hideWord'

    },
    template: '<a ng-click="clicked()">{{word}} </a>'
  }
});

news.directive('newsOriginal', function() {
  return {
    restrict: 'E',
    template: '<news-word hide-word="hideTrainWord($index)" ng-repeat="word in todayWords track by $index" word="word"></news-word>'
  }
})

news.directive('newsTrainingWord', function(){
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      word: '=',
      clicked: '&showWord'
    },
    template: '<a ng-click="clicked()">{{word}} </a>' 
  }
});

news.directive('newsTrainingStart', function(){
  return {
    restrict: 'E',
    template: '<a href ng-click="showTrain()">Start Train</a>'
  }
});

news.directive('newsTraining', function(){
  return {
    restrict: 'E',
    template: '<news-training-word show-word="showTrainWord($index)"ng-hide="hideTrain" ng-repeat="word in todayTraining  track by $index" word="word"></news-training-word>'
  }
});

