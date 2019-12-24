/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums.sort((a, b) => a - b);
  const max1 = nums.slice(nums.length - 3).reduce((m, n) => m * n);
  const max2 = nums[0] * nums[1] * nums.pop();
  return Math.max(max1, max2);
};

module.exports = maximumProduct;