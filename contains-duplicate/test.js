const containsDuplicate = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: true, input: [1, 2, 3, 1] },
  { expect: false, input: [1, 2, 3, 4] },
  { expect: true, input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, containsDuplicate(input), `containsDuplicate ${i}:`);
});
