/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const transform = str => {
  const m = {};
  let index = 0;
  const chars = str.split("");
  const arr = [];
  chars.forEach((c, i) => {
    if (m[c] == null) {
      m[c] = index;
      index++;
    }
    arr[i] = m[c];
  });
  return arr;
};
var isIsomorphic = function (s, t) {
  const a1 = transform(s);
  const a2 = transform(t);

  for (let i = 0; i < t.length; i++) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }

  return true;
};

module.exports = isIsomorphic;