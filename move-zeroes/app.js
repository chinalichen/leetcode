/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let lastNoneZero = 0;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n !== 0) {
      const temp = nums[i];
      nums[i] = nums[lastNoneZero];
      nums[lastNoneZero] = temp;
      lastNoneZero++;
    }
  }
};

module.exports = moveZeroes;