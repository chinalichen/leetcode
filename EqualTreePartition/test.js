const checkEqualTree = require('./app.js');
const buildTreeFromArray = require('./tree.js');
const assert = require('../assert');

assert(true, checkEqualTree(buildTreeFromArray([-1, 0, 1])), 'test 1 ');
assert(true, checkEqualTree(buildTreeFromArray([5, 10, 10, null, null, 2, 3])), 'test 2 ');
assert(false, checkEqualTree(buildTreeFromArray([-1, 0, 2])), 'test 3 ');
assert(true, checkEqualTree(buildTreeFromArray([1, 0, 1])), 'test 4 ');
assert(true, checkEqualTree(buildTreeFromArray([-1, 0, 1])), 'test 5 ');
assert(true, checkEqualTree(buildTreeFromArray([-1, 0, 1])), 'test 6 ');
assert(true, checkEqualTree(buildTreeFromArray([-1, 0, 1])), 'test 7 ');
assert(true, checkEqualTree(buildTreeFromArray([-1, 0, 1])), 'test 8 ');
