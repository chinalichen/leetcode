/**
 * @param {number[]} nums
 * @return {number}
 */
var findSpecialInteger = function (digits) {
  const map = {};
  for (let i = 0; i < digits.length; i++) {
    const num = digits[i];
    map[num] = map[num] ? map[num] + 1 : 1;
    if (map[num] / digits.length > 0.25) {
      return num;
    }
  }
};

module.exports = findSpecialInteger;