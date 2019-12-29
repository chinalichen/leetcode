const findShortestSubArray = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 2, input: [1, 2, 2, 3, 1] },
  { expect: 6, input: [1, 2, 2, 3, 1, 4, 2] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, findShortestSubArray(input), `findShortestSubArray ${i}:`);
});
