/**
 * @param {number[][]} moves
 * @return {string}
 */
const sameValue = (a, b, c) => (a === b) && (b === c) && (a != null);

var tictactoe = function (moves) {
  let a = 0;
  let b = 0;
  for (let i = 0; i < moves.length; i++) {
    const [r, c] = moves[i];
    if (i % 2 === 0) {
      a |= 1 << (r * 3 + c);
    } else {
      b |= 1 << (r * 3 + c);
    }
  }

  const wins = [7, 56, 448, 73, 146, 292, 273, 84];
  for (let i = 0; i < wins.length; i++) {
    const v = wins[i];
    if ((v & a) === v) {
      return 'A';
    }
    if ((v & b) === v) {
      return 'B';
    }
  }

  return moves.length >= 9 ? "Draw" : "Pending";
};
module.exports = tictactoe;
