const searchInsert = require('./app.js');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 2, input: { n: 5, v: [1, 3, 5, 6] } },
  { expect: 1, input: { n: 2, v: [1, 3, 5, 6] } },
  { expect: 4, input: { n: 7, v: [1, 3, 5, 6] } },
  { expect: 0, input: { n: 0, v: [1, 3, 5, 6] } },
];

dataTable.forEach((cases, i) => {
  assert.equal(cases.expect, searchInsert(cases.input.v, cases.input.n), `searchInsert ${i}:1`);
});
