/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    const temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }

  const m1 = {};
  for (let i = 0; i < nums1.length; i++) {
    const v = nums1[i];
    m1[v] = m1[v] ? m1[v] + 1 : 1;
  }

  const result = [];
  for (let i = 0; i < nums2.length; i++) {
    const v = nums2[i];
    if (m1[v] == null) {
      continue;
    }
    m1[v] = null;
    result.push(v);
  }
  return result;
};

module.exports = intersection;