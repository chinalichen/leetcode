/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
  const sum = A.reduce((s, n) => s + n);
  if (sum % 3 !== 0) {
    return false;
  }
  const ps = sum / 3;
  let i;
  let partitionCount = 0;

  let partitionSum = 0;
  for (i = 0; i < A.length; i++) {
    partitionSum += A[i];
    if (partitionSum === ps) {
      partitionCount++;
      i++;
      break;
    }
  }

  partitionSum = 0;
  for (; i < A.length; i++) {
    partitionSum += A[i];
    if (partitionSum === ps) {
      partitionCount++;
      i++;
      break;
    }
  }

  partitionSum = 0;
  for (; i < A.length; i++) {
    partitionSum += A[i];
    if (partitionSum === ps) {
      partitionCount++;
      i++;
      break;
    }
  }
  return partitionCount === 3;
};

module.exports = canThreePartsEqualSum;