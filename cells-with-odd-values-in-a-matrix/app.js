/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (n, m, indices) {
  const row = [];
  const col = [];
  indices.forEach(([r, c]) => {
    row[r] = row[r] ? row[r] + 1 : 1;
    col[c] = col[c] ? col[c] + 1 : 1;
  });
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const rv = row[i] || 0;
      const rc = col[j] || 0;
      if ((rv + rc) % 2 === 1) {
        count++;
      }
    }
  }
  return count;
};

module.exports = oddCells;