const removeDuplicates = require('./app.js');
const assert = require('../utils/assert');

const dataTable = [
  { expect: { l: 1, v: [1] }, data: [1, 1, 1, 1, 1] },
  { expect: { l: 2, v: [1, 2] }, data: [1, 1, 1, 1, 2] },
  { expect: { l: 3, v: [1, 2, 3] }, data: [1, 1, 1, 2, 2, 2, 3] },
];

dataTable.forEach((cases, i) => {
  assert.equal(cases.expect.l, removeDuplicates(cases.data), `removeDuplicates ${i}:1`);
  assert.deepEqual(cases.expect.v, cases.data.slice(0,cases.expect.l), `removeDuplicates ${i}:1`);
});
