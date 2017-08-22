const { checkEqualTree, sumTree } = require('./app.js');
const buildTreeFromArray = require('./tree.js');
const assert = require('../assert');

assert(0, sumTree(buildTreeFromArray([-1, 0, 1])), 'sumTree 1');
assert(30, sumTree(buildTreeFromArray([5, 10, 10, null, null, 2, 3])), 'sumTree 2');
assert(10, sumTree(buildTreeFromArray([5, 10, 10, null, null, 2, 3]).left), 'sumTree 3');
assert(15, sumTree(buildTreeFromArray([5, 10, 10, null, null, 2, 3]).right), 'sumTree 4');
assert(2, sumTree(buildTreeFromArray([5, 10, 10, null, null, 2, 3]).right.left), 'sumTree 5');
assert(3, sumTree(buildTreeFromArray([5, 10, 10, null, null, 2, 3]).right.right), 'sumTree 6');
assert(35, sumTree(buildTreeFromArray([1, 2, 10, 2, 20])), 'sumTree 7');
assert(0, sumTree(buildTreeFromArray([0, -1, 1])), 'sumTree 8');


assert(true, checkEqualTree(buildTreeFromArray([-1, 0, 1])), 'test 1 ');
assert(true, checkEqualTree(buildTreeFromArray([5, 10, 10, null, null, 2, 3])), 'test 2 ');
assert(false, checkEqualTree(buildTreeFromArray([0, -1, 1])), 'test 3 ');
assert(false, checkEqualTree(buildTreeFromArray([1, 2, 10, 2, 20])), 'test 4 ');
// assert(true, checkEqualTree(buildTreeFromArray([-1, 0, 1])), 'test 5 ');
// assert(true, checkEqualTree(buildTreeFromArray([-1, 0, 1])), 'test 6 ');
// assert(true, checkEqualTree(buildTreeFromArray([-1, 0, 1])), 'test 7 ');
// assert(true, checkEqualTree(buildTreeFromArray([-1, 0, 1])), 'test 8 ');
