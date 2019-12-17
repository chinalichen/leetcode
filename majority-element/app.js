/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = {};
  const half = Math.floor(nums.length / 2);
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    map[n] = (map[n] || 0) + 1;
    if (map[n] > half) {
      return n;
    }
  }
};

module.exports = majorityElement;