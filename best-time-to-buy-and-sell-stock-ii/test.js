const maxProfit = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 7, input: [7, 1, 5, 3, 6, 4] },
  { expect: 4, input: [1, 2, 3, 4, 5] },
  { expect: 0, input: [7, 6, 4, 3, 1] },
];

dataTable.forEach((cases, i) => {
  assert.deepEqual(cases.expect, maxProfit(cases.input), `maxProfit ${i}:`);
});
