const canPermutePalindrome = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: true, input: "Tact Coa" },
];

dataTable.forEach((cases, i) => {
  const { expect, input } = cases;
  assert.deepEqual(expect, canPermutePalindrome(input), `canPermutePalindrome ${i}:1`);
});
