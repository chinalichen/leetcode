/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (Math.floor(Math.log10(n)) % 2 === 1) {
      count++;
    }
  }
  return count;
};

module.exports = findNumbers;