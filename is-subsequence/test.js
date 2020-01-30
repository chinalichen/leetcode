const isSubsequence = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: true, input: { s: "abc", t: "ahbgdc" } },
  { expect: false, input: { s: "axc", t: "ahbgdc" } },
  { expect: true, input: { s: "abcd", t: "acbhbcgdc" } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, isSubsequence(input.s, input.t), `isSubsequence ${i}:`);
});
