const sumZero = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [-2, 2, -1, 1, 0], input: 5 },
  { expect: [-1, 1, 0], input: 3 },
  { expect: [0], input: 1 },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, sumZero(input), `sumZero ${i}:`);
});
