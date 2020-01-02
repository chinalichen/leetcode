/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  let nums1 = A.reverse();
  let nums2 = [];
  while (K > 0) {
    nums2.push(K % 10);
    K = Math.floor(K / 10);
  }
  if (nums1.length < nums2.length) {
    const temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }
  let carry = 0;
  for (let i = 0; i < nums1.length; i++) {
    const added = nums2[i] || 0;
    const sum = nums1[i] + added + carry;
    carry = Math.floor(sum / 10);
    nums1[i] = sum % 10;
  }
  if (carry > 0) {
    nums1.push(carry);
  }
  return nums1.reverse();
};

module.exports = addToArrayForm;
