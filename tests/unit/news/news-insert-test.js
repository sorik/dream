describe('newsInsertCtrl', function() {

  beforeEach(module('myNews'));

  var scope;
  var mockNewsService;
  beforeEach(inject(function($rootScope, $controller, $interval) {
    scope = $rootScope.$new();
    mockNewsService = {
      save: function() {
        return 'saved';
      }
    };

    $controller('newsInsertCtrl', {
      $scope: scope,
      $interval: $interval,
      NewsService: mockNewsService
    });

    spyOn(mockNewsService, 'save');
  }));

  describe('addNews', function(){
    it('should call NewsService save with the correct data', function() {
      scope.title = 'test title';
      scope.content = 'test content';
      var mockNow = new Date();
      jasmine.clock().mockDate(mockNow);

      scope.addNews();

      expect(mockNewsService.save).toHaveBeenCalledWith({title: 'test title',
                                                         content: 'test content',
                                                         timestamp: mockNow},
                                                         jasmine.any(Function),
                                                         jasmine.any(Function));
    });

  });
});