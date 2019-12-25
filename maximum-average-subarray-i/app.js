/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = nums.slice(0, k).reduce((s, n) => s + n);
  let max = sum;
  for (let i = k; i < nums.length; i++) {
    sum -= nums[i - k]
    sum += nums[i];
    if (sum > max) {
      max = sum;
    }
  }
  return max / k;
};

module.exports = findMaxAverage;