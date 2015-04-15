describe('newsCtrl', function() {
  'use strict';

  var scope;

  beforeEach(module('myNews'));
  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    $controller('newsCtrl', {
      $scope: scope
    });
  }));

  describe('should Insert be the default menu', function() {
    it('should be true', function() {
      expect(scope.IsActive('Insert')).toBe(true);
    });
  });

  describe('should return correct active status', function() {
    it('should be true', function() {
      scope.activeMenu = 'this menu';
      expect(scope.IsActive('this menu')).toBe(true);
    });

    it('should be false', function() {
      scope.activeMenu = 'this menu';
      expect(scope.IsActive('not this menu')).toBe(false);
    });
  });
});