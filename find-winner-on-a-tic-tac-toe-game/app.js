/**
 * @param {number[][]} moves
 * @return {string}
 */
const sameValue = (a, b, c) => (a === b) && (b === c) && (a != null);

var tictactoe = function (moves) {
  const map = [[], [], []];
  moves.forEach(([r, c], i) => {
    const v = i % 2 === 0 ? 'A' : 'B';
    map[r][c] = v;
  });
  for (let i = 0; i < 3; i++) {
    const row = map[i];
    if (sameValue(row[0], row[1], row[2])) {
      return row[0];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (sameValue(map[0][i], map[1][i], map[2][i])) {
      return map[0][i];
    }
  }
  if (sameValue(map[0][0], map[1][1], map[2][2])) {
    return map[0][0];
  }
  if (sameValue(map[0][2], map[1][1], map[2][0])) {
    return map[0][2];
  }
  return moves.length >= 9 ? "Draw" : "Pending";
};
module.exports = tictactoe;
