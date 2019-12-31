/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const map = {};
  for (let i = 0; i < arr2.length; i++) {
    const n = arr2[i];
    map[n] = i;
  }

  arr1.sort((a, b) => {
    const va = map[a];
    const vb = map[b];
    if (va != null && vb != null) {
      return va - vb;
    }
    if (va == null && vb == null) {
      return a - b;
    }
    if (va == null) {
      return 1;
    }
    return -1;
  });
  return arr1;
};

module.exports = relativeSortArray;