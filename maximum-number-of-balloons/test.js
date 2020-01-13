const maxNumberOfBalloons = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 1, input: "nlaebolko" },
  { expect: 2, input: "loonbalxballpoon" },
  { expect: 0, input: "leetcode" },
  { expect: 0, input: "lloo" },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, maxNumberOfBalloons(input), `maxNumberOfBalloons ${i}:`);
});
