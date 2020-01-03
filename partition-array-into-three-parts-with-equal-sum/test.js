const canThreePartsEqualSum = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: true, input: [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1] },
  { expect: false, input: [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1] },
  { expect: true, input: [3, 3, 6, 5, -2, 2, 5, 1, -9, 4] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, canThreePartsEqualSum(input), `canThreePartsEqualSum ${i}:`);
});
