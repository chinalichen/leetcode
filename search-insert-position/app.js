/**
 * @param {number[]} nums
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let pos = nums.length / 2;
  while(nums[pos])
  let slow = -1;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }
  return slow + 1;
};

module.exports = searchInsert;