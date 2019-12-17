/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let head = 0;
  let tail = numbers.length - 1;
  while (true) {
    const sum = numbers[head] + numbers[tail];
    if (sum > target) {
      tail--;
    } else if (sum < target) {
      head++;
    } else {
      return [head + 1, tail + 1];
    }
  }
};

module.exports = twoSum;