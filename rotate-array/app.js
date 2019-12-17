/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const l = nums.length;
  let count = k;
  while (count !== 0) {
    count--;
    let temp = nums[l - 1];
    for (let i = l - 1; i > 0; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = temp;
  }
};

module.exports = rotate;