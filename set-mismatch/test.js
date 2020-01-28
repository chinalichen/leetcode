const findErrorNums = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [2, 3], input: [1, 2, 2, 4] },
  { expect: [3, 4], input: [1, 2, 3, 3, 5] },
  { expect: [1, 2], input: [1, 1] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, findErrorNums(input), `findErrorNums ${i}:1`);
});
