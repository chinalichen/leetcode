const sortArrayByParityII = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  // { expect: [4], input: [4] },
  { expect: [4, 5, 2, 7], input: [4, 2, 5, 7] },
  { expect: [4, 5, 2, 7, 2], input: [4, 2, 5, 7, 2] },
  { expect: [2, 1, 4, 3], input: [3, 1, 4, 2] },
  { expect: [2, 1, 4, 3], input: [2, 1, 3, 4] },
  { expect: [2,3,0,1,4,3], input: [2,0,3,4,1,3] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, sortArrayByParityII(input), `sortArrayByParityII ${i}:1`);
});
