/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const neg = (dividend < 0) ^ (divisor < 0);
  let result = 0;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  while (dividend >= divisor) {
    dividend -= divisor;
    result++;
  }
  if (result === 2147483648) {
    return 2147483647;
  }
  return neg ? -result : result;
};

module.exports = divide;