/**
 * @param {number} N
 * @return {number}
 */
var result = [0, 1, 1];
var fib = function (N) {
  if (result[N] != null) {
    return result[N];
  }
  const r = fib(N - 1) + fib(N - 2);
  result[N] = r;
  return r;
};

module.exports = fib;