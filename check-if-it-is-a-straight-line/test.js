const checkStraightLine = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: true, input: [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]] },
  { expect: false, input: [[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]] },
  { expect: true, input: [[1, 1], [1, 2], [1, 4], [1, 5], [1, 6], [1, 7]] },
  { expect: true, input: [[1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [7, 7]] },
];

dataTable.forEach((cases, i) => {
  assert.deepEqual(cases.expect, checkStraightLine(cases.input), `checkStraightLine ${i}:1`);
});
