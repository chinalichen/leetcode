const arrayPairSum = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 4, input: [1,4,3,2] },
];

dataTable.forEach(({ expect, input }, i) => {
  
  assert.deepEqual(expect, arrayPairSum(input), `arrayPairSum ${i}:1`);
});
