/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var reverse = (nums, start, end) => {
  var temp;
  while (start < end) {
    temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};

var rotate = function (nums, k) {
  const l = nums.length;
  const offset = k % l;
  reverse(nums, 0, l - offset - 1);
  reverse(nums, l - offset, l - 1);
  reverse(nums, 0, l - 1);
};

module.exports = rotate;