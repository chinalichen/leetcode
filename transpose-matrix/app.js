/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
  const R = A.length;
  const C = A[0].length;
  const res = [];
  for (let i = 0; i < C; i++) {
    res.push([]);
  }
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      const v = A[i][j];
      res[j][i] = v;
    }
  }
  return res;
};

module.exports = transpose;
