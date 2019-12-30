/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  const result = [];
  for (let i = 0; i < A.length; i++) {
    result.push([]);
  }
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      const rj = A.length - 1 - j;
      result[i][j] = 1 ^ A[i][rj];
    }
  }
  return result;
};

module.exports = flipAndInvertImage;