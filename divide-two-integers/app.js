/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

var half = function (dividend, divisor) {
  if (dividend < divisor) {
    return { div: 0, dividend };
  }
  let i = 1;
  while (divisor + divisor <= dividend) {
    divisor += divisor;
    i += i;
  }
  return { div: i, mod: dividend - divisor };
}

var divide = function (dividend, divisor) {
  if (dividend == -2147483648 && divisor == -1) {
    return 2147483647;
  }
  let result = 0;
  const neg = (dividend < 0) ^ (divisor < 0);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  const { div, mod } = half(dividend, divisor);
  if (div !== 0) {
    result += div + divide(mod, divisor);
  }
  return neg ? -result : result;
};

module.exports = divide;