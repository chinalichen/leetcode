/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = nums.reduce((s, n) => s + n, 0);
  let sumLeft = 0;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (sumLeft === sum - sumLeft - n) {
      return i;
    }
    sumLeft += n;
  }
  return -1;
};

module.exports = pivotIndex;