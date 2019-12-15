/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let max1 = m - 1;
  let max2 = n - 1;
  let i = m + n - 1;
  do {
    if (max1 < 0) {
      while (max2 >= 0) {
        nums1[i] = nums2[max2];
        i--;
        max2--;
      }
      return;
    }
    if (max2 < 0) {
      return;
    }
    if (nums1[max1] > nums2[max2]) {
      nums1[i] = nums1[max1];
      max1--;
    } else {
      nums1[i] = nums2[max2];
      max2--;
    }
    i--;
  } while (i >= 0)
};

module.exports = merge;