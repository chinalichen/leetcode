/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let majority = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    if (count === 0) {
      majority = n;
    }
    if (n === majority) {
      count++;
    } else {
      count--;
    }
  }
  return majority;
};

module.exports = majorityElement;