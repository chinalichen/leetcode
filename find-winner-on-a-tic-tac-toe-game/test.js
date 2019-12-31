const tictactoe = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: "A", input: [[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]] },
  { expect: "B", input: [[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]] },
  { expect: "Draw", input: [[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]] },
  { expect: "Pending", input: [[0, 0], [1, 1]] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, tictactoe(input), `tictactoe ${i}:`);
});
