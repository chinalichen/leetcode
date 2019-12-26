const findLengthOfLCIS = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 3, input: [1, 3, 5, 4, 7] },
  { expect: 1, input: [2, 2, 2, 2, 2] },
  { expect: 5, input: [1, 2, 3, 4, 5] },
  { expect: 1, input: [51, 42, 33, 24, 5] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, findLengthOfLCIS(input), `findLengthOfLCIS ${i}:`);
});
