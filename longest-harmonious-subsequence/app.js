/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  const cm = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    cm[n] = cm[n] ? cm[n] + 1 : 1;
  }

  let longest = 0;
  for (let k in cm) {
    const n = parseInt(k, 10);
    const min = n - 1;
    if (cm[min] != null) {
      if (longest < cm[k] + cm[min]) {
        longest = cm[k] + cm[min];
      }
    }
    const max = n + 1;
    if (cm[max] != null) {
      if (longest < cm[k] + cm[max]) {
        longest = cm[k] + cm[max];
      }
    }
  }
  return longest;
};

module.exports = findLHS;
