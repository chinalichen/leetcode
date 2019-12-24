/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
          start++;
      } else {
          if (start > max) {
              max = start;
          }
          start = 0;
      }
  }
  if (start > max) {
      max = start;
  }
  return max;
};

module.exports = findMaxConsecutiveOnes;