const sortArrayByParityII = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [4,5,2,7], input: [4,2,5,7] },
  { expect: [4,5,2,7,2], input: [4,2,5,7,2] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, sortArrayByParityII(input), `sortArrayByParityII ${i}:1`);
});
