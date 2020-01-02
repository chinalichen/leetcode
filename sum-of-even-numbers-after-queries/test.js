const sumEvenAfterQueries = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  // { expect: [8, 6, 2, 4], input: { a: [1, 2, 3, 4], q: [[1, 0], [-3, 1], [-4, 0], [2, 3]] } },
  { expect: [4, 10, 10], input: { a: [5, 5, 4], q: [[0, 1], [1, 0], [4, 1]] } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, sumEvenAfterQueries(input.a, input.q), `sumEvenAfterQueries ${i}:`);
});
