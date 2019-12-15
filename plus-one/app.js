/**
 * @param {number[]} nums
 * @return {number}
 */
var plusOne = function (digits) {
  const nums = digits.reverse();
  let carry = 1;
  let i = 0;
  for (i = 0; i < nums.length; i++) {
    if (carry === 0) {
      break;
    }
    const sum = nums[i] + carry;
    nums[i] = sum % 10;
    carry = sum > 9 ? 1 : 0;
  }
  if (carry === 1) {
    nums[i] = 1;
  }
  return nums.reverse();
};

module.exports = plusOne;