/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var even = function (nums1, nums2) {
  var l1 = nums1.length, l2 = nums2.length;
  var length = l1 + l2;
  var mid2 = (length / 2);
  var mid1 = mid2 - 1;
  var v1, v2;
  var t1, t2;

  if (l1 === 0) {
    return (nums2[mid1] + nums2[mid2]) / 2;
  } else if (l2 === 0) {
    return (nums1[mid1] + nums1[mid2]) / 2;
  }

  var p1 = p2 = 0;
  while (1) {
    if (p1 + p2 === mid1) {
      t1 = p1 < l1 ? nums1[p1] : Infinity;
      t2 = p2 < l2 ? nums2[p2] : Infinity;
      v1 = Math.min(t1, t2);
    }
    if (p1 + p2 === mid2) {
      t1 = p1 < l1 ? nums1[p1] : Infinity;
      t2 = p2 < l2 ? nums2[p2] : Infinity;
      v2 = Math.min(t1, t2);
      return (v1 + v2) / 2;
    }
    if (nums1[p1] > nums2[p2]) {
      if (p2 < l2) {
        p2++;
      } else {
        p1++;
      }
    } else if (p1 < l1) {
      p1++;
    } else {
      p2++;
    }
  }
};

var odd = function (nums1, nums2) {
  var l1 = nums1.length, l2 = nums2.length;
  var length = l1 + l2;
  var mid = Math.floor(length / 2);
  var length = l1 + l2;

  if (l1 === 0) {
    return nums2[mid];
  } else if (l2 === 0) {
    return nums1[mid];
  }

  var p1 = p2 = 0;
  while (1) {
    if (p1 + p2 === mid) {
      var t1 = p1 < l1 ? nums1[p1] : Infinity;
      var t2 = p2 < l2 ? nums2[p2] : Infinity;
      return Math.min(t1, t2);
    }
    if (nums1[p1] > nums2[p2]) {
      if (p2 < l2) {
        p2++;
      } else {
        p1++;
      }
    } else if (p1 < l1) {
      p1++;
    } else {
      p2++;
    }
  }

};

var findMedianSortedArrays = function (nums1, nums2) {
  var length = nums1.length + nums2.length;
  return (length % 2 === 0) ? even(nums1, nums2) : odd(nums1, nums2);
};

module.exports = findMedianSortedArrays;