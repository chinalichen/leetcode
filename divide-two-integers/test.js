const divide = require('./app.js');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 3, input: { v1: 10, v2: 3 } },
  { expect: -2, input: { v1: 7, v2: -3 } },
  { expect: 2147483647, input: { v1: -2147483648, v2: -1 } },
];

dataTable.forEach((cases, i) => {
  assert.deepEqual(cases.expect, divide(cases.input.v1, cases.input.v2), `divide ${i}:`);
});
