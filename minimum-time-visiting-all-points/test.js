const minTimeToVisitAllPoints = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: 7, input: [[1, 1], [3, 4], [-1, 0]] },
  { expect: 5, input: [[3, 2], [-2, 2]] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, minTimeToVisitAllPoints(input), `minTimeToVisitAllPoints ${i}:`);
});
