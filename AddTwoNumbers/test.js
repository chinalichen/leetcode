const addTwoNumbers = require('./app');
const assert = require('../utils/assert');

function listFromArray(array) {
  const parent = { next: null };
  array.reduce((p, v) => p.next = ({ val: v, next: null }), parent);
  return parent.next;
}

assert.equal(1, listFromArray([1, 2, 3, 4]).val, 'listFromArray 1');
assert.equal(2, listFromArray([1, 2, 3, 4]).next.val, 'listFromArray 1');
assert.equal(4, listFromArray([1, 2, 3, 4]).next.next.next.val, 'listFromArray 1');
assert.equal(null, listFromArray([1, 2, 3, 4]).next.next.next.next, 'listFromArray 1');

assert.deepEqual(listFromArray([1, 2]), listFromArray([1, 2]), 'deepEqual 1');
assert.deepEqual(listFromArray([1, 2, 3, 4, 5, 6]), listFromArray([1, 2, 3, 4, 5, 6]), 'deepEqual 2');
assert.notDeepEqual(listFromArray([1, 2, 3, 4, 5, 6]), listFromArray([1, 2, 3, 4, 5, 7]), 'deepEqual 3');

assert.deepEqual(listFromArray([7, 0, 8]), addTwoNumbers(listFromArray([2, 4, 3]), listFromArray([5, 6, 4])), 'addTwoNumber 1');
assert.deepEqual(listFromArray([7, 0, 8]), addTwoNumbers(listFromArray([5, 6, 4]), listFromArray([2, 4, 3])), 'addTwoNumber 2');
assert.deepEqual(listFromArray([6, 4]), addTwoNumbers(listFromArray([3]), listFromArray([3, 4])), 'addTwoNumber 3');
assert.deepEqual(listFromArray([0, 1]), addTwoNumbers(listFromArray([3]), listFromArray([7])), 'addTwoNumber 4');
assert.deepEqual(listFromArray([0, 1]), addTwoNumbers(listFromArray([5]), listFromArray([5])), 'addTwoNumber 5');
assert.deepEqual(listFromArray([0, 1]), addTwoNumbers(listFromArray([0]), listFromArray([0, 1])), 'addTwoNumber 6');
assert.deepEqual(listFromArray([0, 1]), addTwoNumbers(listFromArray([0, 1]), listFromArray([0])), 'addTwoNumber 7');
assert.deepEqual(listFromArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), addTwoNumbers(listFromArray([3, 9, 9, 9, 9, 9, 9, 9, 9]), listFromArray([7])), 'addTwoNumber 8');