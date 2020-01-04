/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  const l = 8;
  let rr = 0;
  let rc = 0;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
      if (board[i][j] === 'R') {
        rr = i;
        rc = j;
      }
    }
  }
  // down
  let count = 0;
  for (let i = rr + 1; i < l; i++) {
    const e = board[i][rc];
    if (e === 'B') {
      break;
    }
    if (e === 'p') {
      count++;
      break;
    }
  }
  // up
  for (let i = rr - 1; i >= 0; i--) {
    const e = board[i][rc];
    if (e === 'B') {
      break;
    }
    if (e === 'p') {
      count++;
      break;
    }
  }
  // left
  for (let i = rc - 1; i >= 0; i--) {
    const e = board[rr][i];
    if (e === 'B') {
      break;
    }
    if (e === 'p') {
      count++;
      break;
    }
  }
  // right
  for (let i = rr + 1; i < l; i++) {
    const e = board[rr][i];
    if (e === 'B') {
      break;
    }
    if (e === 'p') {
      count++;
      break;
    }
  }
  return count;
};

module.exports = numRookCaptures;