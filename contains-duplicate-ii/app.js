/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = {};
  const dup = nums.some((n, i) => {
    if (!map[n]) {
      map[n] = [i];
      return;
    }
    if (map[n].some(n => Math.abs(n - i) <= k)) {
      return true;
    }
    map[n].push(i);
  });
  return dup;
};

module.exports = containsNearbyDuplicate;