/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const n = Math.abs(nums[i]);
    if (nums[n - 1] > 0) {
      nums[n - 1] *= -1;
    }
  }
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
};

module.exports = findDisappearedNumbers;