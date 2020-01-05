/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  const l = arr.length;
  let zeroCount = 0;
  for (let i = 0; i < l; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    }
  }

  let last = l - 1;
  let i = 0;
  while (i < zeroCount) {
    if (arr[last] === 0) {
      i++;
    }
    i++;
    last--;
  }
  const delta = i - zeroCount;

  i = l - 1;
  for (; i > l - 1 - delta; i--) {
    arr[i] = 0;
  }


  while (last >= 0) {
    const n = arr[last];
    arr[i] = n;
    i--
    if (n === 0) {
      arr[i] = 0;
      i--;
    }
    last--;
  }

  return null;
};

module.exports = duplicateZeros;
