const missingNumber = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 2, input: [3, 0, 1] },
  { expect: 8, input: [9, 6, 4, 2, 3, 5, 7, 0, 1] },
  { expect: 2, input: [0, 1] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, missingNumber(input), `missingNumber ${i}:`);
});
