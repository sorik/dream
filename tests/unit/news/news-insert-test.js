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
	}));

	describe('addNews', function() {
		it('should call NewsService save with the correct data', function() {
			scope.title = 'test title';
			scope.content = 'test content';
			var mockNow = new Date();
			jasmine.clock().mockDate(mockNow);
			spyOn(mockNewsService, 'save');

			scope.addNews();

			expect(mockNewsService.save).toHaveBeenCalledWith({
					title: 'test title',
					content: 'test content',
					timestamp: mockNow
				},
				jasmine.any(Function),
				jasmine.any(Function));
		});

		describe('result message', function() {
			describe('when successfully saved', function() {
				it('should display success message', function() {
					spyOn(mockNewsService, 'save').and.callFake(function(params, success) {
						success.call(mockNewsService, {
							status: 200
						});
					});

					scope.addNews();

					expect(scope.savingResult).toContain('Successfully saved.');
				});

				it('should remove the success message after 3 seconds', inject(function($timeout) {
					spyOn(mockNewsService, 'save').and.callFake(function(params, success) {
						success.call(mockNewsService, {
							status: 200
						});
					});

					scope.addNews();
					$timeout.flush();

					expect(scope.savingResult).toEqual('');
				}));
			});

			describe('when failed to saved', function() {
				it('should display failed message', function() {
					spyOn(mockNewsService, 'save').and.callFake(function(params, success, failure) {
						failure.call(mockNewsService, {
							status: 500
						});
					});

					scope.addNews();

					expect(scope.savingResult).toContain('Failed to save. Try again.');
				});

				it('should remove the success message after 3 seconds', inject(function($timeout) {
					spyOn(mockNewsService, 'save').and.callFake(function(params, success, failure) {
						failure.call(mockNewsService, {
							status: 500
						});
					});

					scope.addNews();
					$timeout.flush();

					expect(scope.savingResult).toEqual('');
				}));
			});
		});
	});
});