const findMedianSortedArrays = require('./app');
const assert = require('../utils/assert');

assert.equal(2, findMedianSortedArrays([-1, 0, 1], [3, 4, 5]), 'median 1');
assert.equal(2, findMedianSortedArrays([3, 4, 5], [-1, 0, 1]), 'median 2');
assert.equal(2.5, findMedianSortedArrays([1, 2], [3, 4]), 'median 3');
assert.equal(2, findMedianSortedArrays([1, 3], [2]), 'median 4');
assert.equal(2, findMedianSortedArrays([2], [1, 3]), 'median 5');
assert.equal(2, findMedianSortedArrays([], [1, 3]), 'median 6');
assert.equal(2, findMedianSortedArrays([1, 3], []), 'median 7');
assert.equal(3, findMedianSortedArrays([], [1, 3, 5]), 'median 8');
assert.equal(3, findMedianSortedArrays([1, 3, 5], []), 'median 9');
assert.equal(1, findMedianSortedArrays([1, 1, 1], [1, 1, 1, 1]), 'median 10');
assert.equal(1, findMedianSortedArrays([1, 1, 1, 1], [1, 1, 1,]), 'median 11');
assert.equal(2.5, findMedianSortedArrays([1], [2, 3, 4]), 'median 12');
assert.equal(2.5, findMedianSortedArrays([2, 3, 4], [1]), 'median 13');
assert.equal(3, findMedianSortedArrays([1], [2, 3, 4, 5]), 'median 14');
assert.equal(3, findMedianSortedArrays([2, 3, 4, 5], [1]), 'median 15');