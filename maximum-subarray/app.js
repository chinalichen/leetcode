/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -100000;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = 0;
      for (let n = i; n < j; n++) {
        sum += nums[n];
      }
      if (max < sum) {
        max = sum;
      }
    }
  }
  return max;
};
module.exports = maxSubArray;