const largeGroupPositions = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [[3, 6], [9, 13]], input: "abbxxxxzzyyyyy" },
  { expect: [[3, 6]], input: "abbxxxxzzy" },
  { expect: [], input: "abc" },
  { expect: [[3, 5], [6, 9], [12, 14]], input: "abcdddeeeeaabbbcd" },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, largeGroupPositions(input), `largeGroupPositions ${i}:`);
});
