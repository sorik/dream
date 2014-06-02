'use strict';

var news = angular.module('myNews', []);

news.controller('newsCtrl', function($scope, $http, $compile, $element){

  $scope.todayNews = '';

  $http.get('/data/news').success(function(data) {
    if (data.length > 0)
      $scope.todayNews = data[0].content;   
    else
      $scope.todayNews = "no news"
         
    $scope.todayWords = $scope.todayNews.split(" ");
    $scope.todayTraining = $scope.todayWords.slice(0);

    $scope.hideTrain = true;
  });

  $scope.activeMenu = 'insert';  

  $scope.IsActive = function(query) {
    if ($scope.activeMenu == query) 
      return true;
    return false;
  };

  $scope.showTrain = function() {
    $scope.hideTrain = false;
  };

  $scope.hideTrainWord = function(index) {
    $scope.todayTraining[index] = '____';
  };

  $scope.showTrainWord = function(index) {
    $scope.todayTraining[index] = $scope.todayWords[index];
  };

  $scope.addNews = function() {
    $http.post('/data/news/add', 
              {"title": $scope.title, 
               "content": $scope.content, 
               "timestamp": new Date()})
    .success(function(data) {
      $scope.todayNews = $scope.content;
      $scope.activeMenu = 'train';
    });
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

