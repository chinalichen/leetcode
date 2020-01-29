const lengthOfLongestSubstring = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 3, input: "dvdf" },
  { expect: 3, input: "abcabcbb" },
  { expect: 1, input: "bbbbb" },
  { expect: 3, input: "pwwkew" },
  { expect: 2, input: "pw" },
  { expect: 1, input: "p" },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, lengthOfLongestSubstring(input), `lengthOfLongestSubstring ${i}:`);
});
