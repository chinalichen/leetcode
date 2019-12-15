const merge = require('./app.js');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [1], input: { n1: 0, v1: [0], v2: [1], n2: 1 } },
  { expect: [1], input: { n1: 1, v1: [1], v2: [], n2: 0 } },
  { expect: [0, 0, 0, 1, 1, 1, 1, 1], input: { n1: 5, v1: [1, 1, 1, 1, 1, 0, 0, 0], v2: [0, 0, 0], n2: 3 } },
  { expect: [1, 2, 2, 3, 5, 6], input: { n1: 3, v1: [1, 2, 3, 0, 0, 0], v2: [2, 5, 6], n2: 3 } },
  { expect: [1, 1, 1, 1, 1, 1], input: { n1: 3, v1: [1, 1, 1, 0, 0, 0], v2: [1, 1, 1], n2: 3 } },
];

dataTable.forEach((cases, i) => {
  merge(cases.input.v1, cases.input.n1, cases.input.v2, cases.input.n2);
  assert.deepEqual(cases.expect, cases.input.v1, `merge ${i}:`);
});
