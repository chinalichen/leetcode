/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  if (grid.length === 0) {
    return 0;
  }
  let count = 0;
  let edges = 0;
  const M = grid.length;
  const N = grid[0].length;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === 0) {
        continue;
      }
      count++;
      if (i - 1 >= 0 && grid[i - 1][j] === 1) {
        edges++;
      }
      if (i + 1 < M && grid[i + 1][j] === 1) {
        edges++;
      }
      if (j - 1 >= 0 && grid[i][j - 1] === 1) {
        edges++;
      }
      if (j + 1 < N && grid[i][j + 1] === 1) {
        edges++;
      }
    }
  }
  return count * 4 - edges;
};

module.exports = islandPerimeter;