/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const maxLR = [];
  let max = -1000000;
  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i];
      maxLR[i] = max;
    } else {
      maxLR[i] = max;
    }
  }

  const minRL = [];
  let min = 1000000;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (min > nums[i]) {
      min = nums[i];
      minRL[i] = min;
    } else {
      minRL[i] = min;
    }
  }

  let head = -1;
  for (let i = 0; i < nums.length; i++) {
    if (minRL[i] !== nums[i]) {
      head = i;
      break;
    }
  }
  if (head === -1) {
    return 0;
  }

  let tail = nums.length;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (maxLR[i] !== nums[i]) {
      tail = i;
      break;
    }
  }
  if (tail === nums.length) {
    return 0;
  }

  return tail - head + 1;
};

module.exports = findUnsortedSubarray;