/**
 * @param {number[]} nums
 * @return {number}
 */
var findSpecialInteger = function (digits) {
  const interval = Math.floor(digits.length / 4);
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === digits[i + interval]) {
      return digits[i];
    }
  }
};

module.exports = findSpecialInteger;