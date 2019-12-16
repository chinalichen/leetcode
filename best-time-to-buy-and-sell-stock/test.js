const maxProfit = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 5, input: [7, 1, 5, 3, 6, 4] },
  { expect: 0, input: [7, 6, 4, 3, 1] },
];

dataTable.forEach((cases, i) => {
  assert.deepEqual(cases.expect, maxProfit(cases.input), `maxProfit ${i}:`);
});
