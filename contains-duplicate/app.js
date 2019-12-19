/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = {};
  const dup = nums.some((n) => {
    if (map[n]) {
      return true;
    }
    map[n] = true;
  });
  return dup;
};

module.exports = containsDuplicate;