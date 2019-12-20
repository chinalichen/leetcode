/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sumExpect = nums.length * (nums.length + 1) / 2;
  let sumActual = nums.reduce((sum, curr) => sum + curr, 0);
  return sumExpect - sumActual;
};

module.exports = missingNumber;