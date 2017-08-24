const twoSum = require('./app.js');
const assert = require('../assert');

assert.deepEqual([1, 2], twoSum([3, 2, 4], 6), 'twoSum 1');
assert.deepEqual([0, 1], twoSum([3, 3, 4], 6), 'twoSum 2');
assert.deepEqual([0, 1], twoSum([3, 3, 3], 6), 'twoSum 3');