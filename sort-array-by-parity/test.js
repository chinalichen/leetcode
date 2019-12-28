const sortArrayByParity = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [2,4,3,1], input: [3,1,2,4] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, sortArrayByParity(input), `sortArrayByParity ${i}:1`);
});
