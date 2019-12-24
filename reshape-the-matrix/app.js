/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  const nr = nums.length;
  const nc = nums[0].length;
  if (nc * nr !== r * c) {
    return nums;
  }
  const res = [];
  for (let i = 0; i < r; i++) {
    res.push([]);
  }
  nums.forEach((row, i) => {
    row.forEach((cell, j) => {
      const index = i * nc + j;
      res[Math.floor(index / c)][index % c] = cell;
    });
  });
  return res;
};

module.exports = matrixReshape;