/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const n = grid.length;
  const m = grid[0].length;
  const result = [];
  for (let i = 0; i < n; i++) result.push([]);
  grid.forEach((row, i) => {
    row.forEach((cell, j) => {
      const v = (i * m + j + k) % (n * m);
      const r = Math.floor(v / m);
      const c = v % m;
      result[r][c] = cell;
    });
  });
  return result;
};

module.exports = shiftGrid;