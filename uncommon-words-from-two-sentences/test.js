const uncommonFromSentences = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: ["sweet", "sour"], input: { x: "this apple is sweet", y: "this apple is sour" } },
  { expect: ["banana"], input: { x: "apple apple", y: "banana" } },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, uncommonFromSentences(input.x, input.y), `uncommonFromSentences ${i}:`);
});
