const minimumAbsDifference = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [[1, 2], [2, 3], [3, 4]], input: [4, 2, 1, 3] },
  { expect: [[1, 3]], input: [1, 3, 6, 10, 15] },
  { expect: [[-14, -10], [19, 23], [23, 27]], input: [3, 8, -10, 23, 19, -4, -14, 27] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, minimumAbsDifference(input), `minimumAbsDifference ${i}:`);
});
