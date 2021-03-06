const { checkEqualTree, sumTree } = require('./app');
const buildTreeFromArray = require('./tree.js');
const assert = require('../utils/assert');

assert.equal(0, sumTree(buildTreeFromArray([-1, 0, 1])), 'sumTree 1');
assert.equal(30, sumTree(buildTreeFromArray([5, 10, 10, null, null, 2, 3])), 'sumTree 2');
assert.equal(10, sumTree(buildTreeFromArray([5, 10, 10, null, null, 2, 3]).left), 'sumTree 3');
assert.equal(15, sumTree(buildTreeFromArray([5, 10, 10, null, null, 2, 3]).right), 'sumTree 4');
assert.equal(2, sumTree(buildTreeFromArray([5, 10, 10, null, null, 2, 3]).right.left), 'sumTree 5');
assert.equal(3, sumTree(buildTreeFromArray([5, 10, 10, null, null, 2, 3]).right.right), 'sumTree 6');
assert.equal(35, sumTree(buildTreeFromArray([1, 2, 10, 2, 20])), 'sumTree 7');
assert.equal(0, sumTree(buildTreeFromArray([0, -1, 1])), 'sumTree 8');
assert.equal(12, sumTree(buildTreeFromArray([2, 1, 3, 0, 2, null, null, null, null, 2, null, 1, null, null, 1])), 'sumTree 9');
assert.equal(7, sumTree(buildTreeFromArray([2, 1, 3, 0, 2, null, null, null, null, 2, null, 1, null, null, 1]).left), 'sumTree 10');
assert.equal(6, sumTree(buildTreeFromArray([2, 1, 3, 0, 2, null, null, null, null, 2, null, 1, null, null, 1]).left.right), 'sumTree 11');


assert.equal(true, checkEqualTree(buildTreeFromArray([-1, 0, 1])), 'test 1 ');
assert.equal(true, checkEqualTree(buildTreeFromArray([5, 10, 10, null, null, 2, 3])), 'test 2 ');
assert.equal(false, checkEqualTree(buildTreeFromArray([0, -1, 1])), 'test 3 ');
assert.equal(false, checkEqualTree(buildTreeFromArray([1, 2, 10, 2, 20])), 'test 4 ');
assert.equal(true, checkEqualTree(buildTreeFromArray([2, 1, 3, 0, 2, null, null, null, null, 2, null, 1, null, null, 1])), 'test 5 ');
assert.equal(false, checkEqualTree(buildTreeFromArray([2, 1, 3, 0, 2, null, null, null, null, 2, null, 1, null, null, 2])), 'test 6 ');
