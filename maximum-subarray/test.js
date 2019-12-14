const maxSubArray = require('./app.js');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 6, input: [-2, 1, -3, 4, -1, 2, 1, -5, 4] },
];

dataTable.forEach((cases, i) => {
  assert.equal(cases.expect, maxSubArray(cases.input), `maxSubArray ${i}:1`);
});
