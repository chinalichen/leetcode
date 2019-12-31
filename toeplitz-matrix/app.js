/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  for (let i = 1; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const col = row[j];
      const top = i - 1;
      const left = j - 1;
      if (top >= 0 && top < matrix.length) {
        if (left >= 0 && left < row.length) {
          if (col !== matrix[top][left]) {
            return false;
          }
        }
      }
    }
  }
  return true;
};

module.exports = isToeplitzMatrix;
