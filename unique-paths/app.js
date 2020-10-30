/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const res = [[1]];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j && j === 0) {
        continue;
      }
      if (!res[i]) res[i] = [];
      const left = j - 1 < 0 ? 0 : res[i][j - 1];
      const top = i - 1 < 0 ? 0 : res[i - 1][j];
      res[i][j] = left + top;
    }
  }

  return res[m - 1][n - 1];
};

module.exports = uniquePaths;