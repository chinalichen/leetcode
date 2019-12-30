/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let maxPos = -1;
  let max = -100000;
  let secondMax = -100000;
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];
    if (v > max) {
      secondMax = max;
      max = v;
      maxPos = i;
      continue;
    }
    if (v > secondMax) {
      secondMax = v;
    }
  }
  if (max >= secondMax * 2) {
    return maxPos;
  }
  return -1;
};

module.exports = dominantIndex;