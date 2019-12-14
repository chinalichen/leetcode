/**
 * @param {number[]} nums
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let pos = -1;
  if (nums[nums.length - 1] < target) {
    return nums.length;
  }
  while (left < right) {
    pos = Math.floor((left + right) / 2);
    if (nums[pos] > target && right !== pos) {
      right = pos;
      continue;
    }
    if (nums[pos] < target && left !== pos) {
      left = pos;
      continue;
    }
    if (nums[pos] == target) {
      return pos;
    }
    return nums[pos] > target ? pos - 1 : pos + 1;
  }
  return right;
};

module.exports = searchInsert;