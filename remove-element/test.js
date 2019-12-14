const removeElement = require('./app.js');
const assert = require('../utils/assert');

const dataTable = [
  { expect: { l: 0, v: [] }, input: { n: 1, v: [1, 1, 1, 1, 1] } },
  { expect: { l: 4, v: [1, 1, 1, 1] }, input: { n: 2, v: [1, 1, 1, 1, 2, 2, 2, 2] } },
  { expect: { l: 4, v: [2, 2, 2, 3] }, input: { n: 1, v: [1, 1, 1, 2, 2, 2, 3] } },
];

dataTable.forEach((cases, i) => {
  assert.equal(cases.expect.l, removeElement(cases.input.v, cases.input.n), `removeElement ${i}:1`);
  assert.deepEqual(cases.expect.v, cases.input.v.slice(0, cases.expect.l), `removeElement ${i}:1`);
});
