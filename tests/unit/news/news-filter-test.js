describe('newsFilter', function() {

    beforeEach(module('myNews'));

    describe('pagination', function() {

        var paginationFilter;
        beforeEach(inject(function(_paginationFilter_) {
            paginationFilter = _paginationFilter_;
        }));

        it('should return a slice of the input array', function() {
            var input = [1, 2, 3 ,4 ,5 ,6, 7, 8, 9, 10];

            expect(paginationFilter(input, 0, 3)).toEqual([1, 2, 3]);
        });

        it('should return all the items in the last page', function() {
            var input = [1, 2, 3 ,4 ,5 ,6, 7, 8, 9, 10];
            expect(paginationFilter(input, 3, 3)).toEqual([10]);
        });

        it('should return empty array for out-of bounds', function() {
            var input = [1, 2, 3 ,4 ,5 ,6, 7, 8, 9, 10];
            expect(paginationFilter(input, 3, 5)).toEqual([]);
        });
    });
});