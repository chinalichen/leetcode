const isHappy = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: true, input: 19 },
  { expect: false, input: 18 },
  { expect: false, input: 17 },
  { expect: false, input: 16 },
  { expect: false, input: 15 },
  { expect: false, input: 14 },
  { expect: true, input: 13 },
  { expect: false, input: 12 },
  { expect: false, input: 11 },
  { expect: true, input: 10 },
  { expect: false, input: 209 },
  { expect: false, input: 403 },
  { expect: false, input: 602 },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, isHappy(input), `isHappy ${i}:`);
});
