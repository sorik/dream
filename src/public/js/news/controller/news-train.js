angular.module('myNews')
  .controller('newsTrainCtrl', ['$scope', '$stateParams', 'NewsService', function($scope, $stateParams, NewsService) {
    'use strict';

    $scope.startTraining = function () {
      $scope.userAction = "training";
    };

    NewsService.getById($stateParams.id)
    .then(function(data) {
        $scope.news = data;
        $scope.todayWords = $scope.news.content.split(/\s+/);
        $scope.todayTraining = $scope.news.content.split(/\s+/);
    });

    $scope.selectWord = function(index) {
      $scope.todayTraining[index] = '____';
      $scope.selected = true;
    };

    $scope.showTrainWord = function(index) {
      $scope.todayTraining[index] = $scope.todayWords[index];
      $scope.answered = true;
    };
  }])
  .directive('newsWord', function(){
    'use strict';
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        word: '=',
        clicked: '&selectWord'

      },
      template: '<a ng-click="clicked()" ng-class="{selected: selected}"">{{word}} </a>'
    };
  })
  .directive('newsOriginal', function() {
    'use strict';
    return {
      restrict: 'E',
      template: '<news-word select-word="selectWord($index)" ng-repeat="word in todayWords track by $index" word="word"></news-word>'
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
      template: '<a ng-click="clicked()" ng-class="{answered: answered}">{{word}} </a>'
    };
  })
  .directive('newsTraining', function(){
    'use strict';
    return {
      restrict: 'E',
      template: '<news-training-word show-word="showTrainWord($index)" ng-hide="hideTrain" ng-repeat="word in todayTraining track by $index" word="word"></news-training-word>'
    };
  });

