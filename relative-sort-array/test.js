const relativeSortArray = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19], input: { a1: [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], a2: [2, 1, 4, 3, 9, 6] } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, relativeSortArray(input.a1, input.a2), `relativeSortArray ${i}:`);
});
