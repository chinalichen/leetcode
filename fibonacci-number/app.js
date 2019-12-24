/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  if (N === 0) {
    return 0;
  }
  if (N === 1) {
    return 1;
  }
  let first = 0;
  let second = 1;
  let index = Math.floor(N / 2);
  while (index > 0) {
    first = first + second;
    second = first + second;
    index--;
  }
  if (N % 2 === 0) {
    return first;
  }
  return second;
};

module.exports = fib;