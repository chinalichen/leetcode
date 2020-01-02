const addToArrayForm = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [2, 3], input: { a: [0], k: 23 } },
  { expect: [1, 2, 3, 4], input: { a: [1, 2, 0, 0], k: 34 } },
  { expect: [4, 5, 5], input: { a: [2, 7, 4], k: 181 } },
  { expect: [1, 0, 2, 1], input: { a: [2, 1, 5], k: 806 } },
  { expect: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], input: { a: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9], k: 1 } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, addToArrayForm(input.a, input.k), `addToArrayForm ${i}:`);
});
