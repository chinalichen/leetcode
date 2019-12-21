const findSpecialInteger = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 6, input: [1, 2, 2, 6, 6, 6, 6, 7, 10] },
  { expect: 6, input: [1, 2, 2, 6, 6, 6, 7, 10] },
];

dataTable.forEach((cases, i) => {
  assert.deepEqual(cases.expect, findSpecialInteger(cases.input), `findSpecialInteger ${i}:1`);
});
