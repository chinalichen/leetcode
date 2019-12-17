/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const map = numbers.reduce((m, n, i) => ({ ...m, [n]: i }), {});
  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];
    const sub = map[target - n];
    if (sub == null) {
      continue;
    }
    if (sub === i) {
      continue;
    }
    return [Math.min(i + 1, sub + 1), Math.max(i + 1, sub + 1)];
  }
};

module.exports = twoSum;