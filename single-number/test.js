const singleNumber = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 1, input: [2, 2, 1] },
  { expect: 4, input: [4, 1, 2, 1, 2] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, singleNumber(input), `singleNumber ${i}:`);
});
