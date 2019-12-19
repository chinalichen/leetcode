/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var hasDup = function (nums, first, k, t) {
  const l = nums.length - 1;
  const start = first + 1;
  const end = Math.min(first + k, l);
  const val = nums[first];
  if (start > l) {
    return false;
  }
  for (let i = Math.min(first + 1, l); i <= end; i++) {
    if (Math.abs(nums[i] - val) <= t) {
      return true;
    }
    // if (Math.abs(i - first) <= k) {
    //   return true;
    // }
  }
  return false;
}
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  for (let i = 0; i < nums.length; i++) {
    if (hasDup(nums, i, k, t)) {
      return true;
    }
  }
  return false;
};

module.exports = containsNearbyAlmostDuplicate;