/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((xor, n) => n ^ xor);
};

module.exports = singleNumber;