/**
 * @param {string[]} A
 * @return {string[]}
 */
const intersect = (arr, str) => {
  const m = {};
  for (let i = 0; i < arr.length; i++) {
    const c = arr[i];
    m[c] = m[c] == null ? 1 : m[c] + 1;
  }

  const n = {};
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    n[c] = n[c] == null ? 1 : n[c] + 1;
  }

  const res = [];
  for (let k in m) {
    if (m[k] != null && n[k] != null) {
      let count = Math.min(m[k], n[k]);
      while (count--) res.push(k);
    }
  }

  return res;
};

var commonChars = function (A) {
  let intersection = A[0].split('');
  for (let i = 1; i < A.length; i++) {
    intersection = intersect(intersection, A[i]);
  }
  return intersection;
};

module.exports = commonChars;
