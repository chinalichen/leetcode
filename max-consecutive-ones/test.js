const findMaxConsecutiveOnes = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 3, input: [1,1,0,1,1,1] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, findMaxConsecutiveOnes(input), `findMaxConsecutiveOnes ${i}:1`);
});
