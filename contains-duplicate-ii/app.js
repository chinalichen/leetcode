/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasDup = function (nums, first, k) {
  const l = nums.length - 1;
  const start = first + 1;
  const end = Math.min(first + k, l);
  const val = nums[first];
  if (start > l) {
    return false;
  }
  for (let i = Math.min(first + 1, l); i <= end; i++) {
    if (nums[i] !== val) {
      continue;
    }
    if (Math.abs(i - first) <= k) {
      return true;
    }
  }
  return false;
}
var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    if (hasDup(nums, i, k)) {
      return true;
    }
  }
  return false;
};

module.exports = containsNearbyDuplicate;