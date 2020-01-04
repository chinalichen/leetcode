/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  const temp = [];
  let fast = 0;
  for (let i = 0; i < arr.length; i++) {
    temp[fast] = arr[i];
    if (arr[i] === 0) {
      fast++;
      temp[fast] = 0;
    }
    fast++;
  }
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    arr[i] = temp[i];
  }
  return null;
};

module.exports = duplicateZeros;
