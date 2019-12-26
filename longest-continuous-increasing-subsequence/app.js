/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let max = 1;
  let start = 0;
  let i;
  for (i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      continue;
    }
    const l = i - start;
    if (max < l) {
      max = l;
    }
    start = i;
  }
  const l = i - start;
  if (max < l) {
    max = l;
  }
  return max;
};

module.exports = findLengthOfLCIS;