/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const triangle = [[1], [1, 1]];
  if (numRows < 3) {
    return triangle.slice(0, numRows);
  }
  for (let i = 2; i < numRows; i++) {
    const upper = triangle[i - 1];
    const lengthThisLevel = i + 1;
    const nums = [];
    for (let j = 0; j < lengthThisLevel; j++) {
      nums[j] = (upper[j - 1] || 0) + (upper[j] || 0);
    }
    triangle[i] = nums;
  }
  return triangle;
};

module.exports = generate;