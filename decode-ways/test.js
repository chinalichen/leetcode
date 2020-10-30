const numDecodings = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 2, input: '12' },
  { expect: 3, input: '226' },
  { expect: 0, input: '0' },
  { expect: 1, input: '1' },
  { expect: 1, input: '2' },
  { expect: 1, input: '2101' },
  { expect: 0, input: '00' },
  { expect: 0, input: '01' },
  { expect: 0, input: '000' },
  { expect: 0, input: '001' },
];

dataTable.forEach((cases, i) => {
  assert.deepEqual(cases.expect, numDecodings(cases.input), `numDecodings ${i}`);
});
