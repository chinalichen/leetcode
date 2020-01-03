const numPairsDivisibleBy60 = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 3, input: [60, 60, 60] },
  { expect: 3, input: [30, 20, 150, 100, 40] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, numPairsDivisibleBy60(input), `numPairsDivisibleBy60 ${i}:`);
});
