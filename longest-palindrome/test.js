const longestPalindrome = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 7, input: 'abccccdd' },
  { expect: 1, input: 'a' },
  { expect: 3, input: 'abbb' },
  { expect: 2, input: 'bb' },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, longestPalindrome(input), `longestPalindrome ${i}:`);
});
