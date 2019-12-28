/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const sorted = heights.slice(0).sort((a, b) => a - b);
  return heights.reduce((count, curr, index) => curr === sorted[index] ? count : count + 1, 0);
};
module.exports = heightChecker;