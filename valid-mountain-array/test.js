const validMountainArray = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: false, input: [2, 1] },
  { expect: false, input: [3, 5, 5] },
  { expect: true, input: [0, 3, 2, 1] },
  { expect: false, input: [1, 2, 3, 2, 3, 2, 1] },
  { expect: false, input: [1, 1, 1] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, validMountainArray(input), `validMountainArray ${i}:`);
});
