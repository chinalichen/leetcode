const firstUniqChar = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 0, input: "leetcode" },
  { expect: 2, input: "loveleetcode" },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, firstUniqChar(input), `firstUniqChar ${i}:`);
});
