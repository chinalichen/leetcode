/**
 * @param {number[][]} grid
 * @return {number}
 */
const is3_3MagicSquare = (grid, top, left) => {
  const nums = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const v = grid[top + i][left + j] - 1;
      nums[v] = v;
    }
  }
  if (nums.length !== 9) {
    return false;
  }
  for (let i = 0; i < 9; i++) {
    if (nums[i] !== i) {
      return false;
    }
  }
  const sampleValue = grid[top + 0][left + 0] + grid[top + 1][left + 1] + grid[top + 2][left + 2];
  if (sampleValue !== grid[top + 0][left + 2] + grid[top + 1][left + 1] + grid[top + 2][left + 0]) {
    return false;
  }
  for (let i = 0; i < 3; i++) {
    const row = grid[top + i];
    if (sampleValue !== (row[left + 0] + row[left + 1] + row[left + 2])) {
      return false;
    }
  }
  for (let i = 0; i < 3; i++) {
    if (sampleValue !== (grid[top + 0][left + i] + grid[top + 1][left + i] + grid[top + 2][left + i])) {
      return false;
    }
  }
  return true;
};

var numMagicSquaresInside = function (grid) {
  let count = 0;
  for (let r = 0; r <= grid.length - 3; r++) {
    for (let c = 0; c <= grid[0].length - 3; c++) {
      if (is3_3MagicSquare(grid, r, c)) {
        count++;
      }
    }
  }
  return count;
};

module.exports = numMagicSquaresInside;